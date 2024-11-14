import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        PUBLIC_SERVICES_EMAIL: envField.string({
          context: "client",
          access: "public",
        }),
        PUBLIC_TEMPLATE_EMAIL: envField.string({
          context: "client",
          access: "public",
        }),
        PUBLIC_USERKEY_EMAIL: envField.string({
          context: "client",
          access: "public",
        }),
      },
    },
  },
  integrations: [tailwind(), react()],
});
