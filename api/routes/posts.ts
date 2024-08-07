import { Hono } from "hono"
import { verifyAuth } from "@hono/auth-js"
import { zValidator } from "@hono/zod-validator"
import { z } from "zod"

export const postsRoute = new Hono<{ Bindings: { DB: D1Database } }>().post(
  "/",
  verifyAuth(),
  zValidator(
    "json",
    z.object({
      text: z.string(),
    }),
  ),
  async (c) => {},
)
