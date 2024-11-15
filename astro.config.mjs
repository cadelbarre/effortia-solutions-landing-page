import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",

  experimental: {
    env: {
      schema: {
        RESEND_API_KEY: envField.string({
          context: "server",
          access: "public",
        }),
      },
    },
  },

  integrations: [tailwind(), react()],
  adapter: vercel(),
});