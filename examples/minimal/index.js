export default {
  fetch: async (request) => {
    const url = new URL(request.url);

    return new Response(`Hello 3! ${url}`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
};
