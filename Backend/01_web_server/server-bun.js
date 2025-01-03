import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("It's my index page", { status: 200 });
    } else if (url.pathname === "/about") {
      return new Response("It's my about page", { status: 200 });
    } else if (url.pathname === "/contact") {
      return new Response("It's my contact page", { status: 200 });
    } else {
      return new Response("Page not found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
