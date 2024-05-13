import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/test/:id", (c) => {
    return c.json({ 
      id: c.req.param("id")
    });
  })

export const GET = handle(app);
export const POST = handle(app);