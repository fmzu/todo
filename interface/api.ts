import { Hono } from "hono"
import { authHandler, initAuthConfig } from "@hono/auth-js"
import { getAuthConfig } from "./auth-config"
import { postsRoute } from "./routes/posts"

export const api = new Hono<{ Bindings: { DB: D1Database } }>()
  .use("*", initAuthConfig(getAuthConfig))
  .use("/api/auth/*", authHandler())
  .route("/api/posts", postsRoute)
  .get("/api/hello", async (c) => {
    return c.json({ hello: "world" })
  })

export type Api = typeof api
