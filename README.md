# Tiktoken example

This is a simple example of using the [Tiktoken](https://github.com/openai/tiktoken) library in a Next.js app.

## Resolving the error

There was an error due to `tiktoken` not being able to load the WebAssembly module.

This could fixed by adding the `asyncWebAssembly` and `layers` flags to the Webpack config and potentially using `copy-webpack-plugin` to copy the WebAssembly module to the build directory. [Further details available here](https://github.com/transitive-bullshit/agentic/issues/570#issuecomment-1700313359).

However a simpler option is to use `js-tiktoken` instead of `tiktoken`. [Here is the basic documentation](https://github.com/dqbd/tiktoken/blob/main/js/README.md). This allows us to use the `tiktoken` library without any additional configuration.

## How to test

This has been deployed to Vercel: [00249184-tiktoken-example.vercel.app](https://00249184-tiktoken-example.vercel.app)

The API endpoint is at `/api/tokenize` and can be queried with `curl` like this:

```bash
curl -X GET "https://00249184-tiktoken-example.vercel.app/api/tokenize?text=hello%20world"
```

## Running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
