import { Hono } from "hono"
import { verifyAuth } from "@hono/auth-js"
import { zValidator } from "@hono/zod-validator"
import { object, z } from "zod"
import { postsTable, usersTable } from "~/app/schema"
import { drizzle } from "drizzle-orm/d1"
import { eq } from "drizzle-orm"

export const postsRoute = new Hono<{ Bindings: { DB: D1Database } }>()
  .post(
    "/",
    verifyAuth(),
    zValidator(
      "json",
      z.object({
        text: z.string(),
      }),
    ),
    async (c) => {
      const auth = c.get("authUser")
      if (typeof auth?.session.user?.email !== "string") {
        return c.json({ success: false }, { status: 401 })
      }

      const db = drizzle(c.env.DB)

      const body = c.req.valid("json")

      const user = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, auth.session.user.email))
        .get()

      if (user === undefined) {
        throw new Response("Not found", { status: 404 })
      }

      const postId = crypto.randomUUID()

      await db.insert(postsTable).values({
        uuid: postId,
        title: "",
        text: body.text,
        userId: user.id,
        isArchived: false,
        isDeleted: false,
      })

      const newPost = await db
        .select()
        .from(postsTable)
        .where(eq(postsTable.uuid, postId))
        .get()

      if (newPost === undefined) {
        throw new Response("Not found", { status: 404 })
      }

      return new Response(JSON.stringify(newPost))
    },
  )
  .get(
    "/",
    zValidator(
      "query",
      object({
        is_archived: z.string().optional(),
        is_deleted: z.string().optional(),
      }),
    ),
  )
  .delete("/:post_id", async (c) => {
    const database = drizzle(c.env.DB)

    const postId = c.req.param("post_id")

    await database
      .update(postsTable)
      .set({ isDeleted: true })
      .where(eq(postsTable.uuid, postId))

    return c.json({})
  })
