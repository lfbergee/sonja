import { serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
  if (req.url.endsWith("/sonja.jpeg")) {
    return serveFile(req, "./static/sonja.jpeg");
  }
  return serveFile(req, "./index.html");
});
