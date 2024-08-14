import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import awsAmplify from 'astro-aws-amplify';
import vercel from '@astrojs/vercel/serverless';
import deno from '@astrojs/deno';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'server',
  adapter: deno(),
});
