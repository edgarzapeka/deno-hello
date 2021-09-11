addEventListener("fetch", (event) => {
  const response = new Response("Hello world!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
