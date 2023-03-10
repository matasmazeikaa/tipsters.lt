import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import { astroImageTools } from "astro-imagetools";

import compress from "astro-compress";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: "git-gateway",
          branch: "latest",
          repo: "matasmazeikaa/Tisperis",
        },
        // Configure where our media assets are stored & served from
        media_folder: "public/assets/media",
        public_folder: "/assets/media",
        // Configure the content collections
        collections: [
          {
            name: "posts",
            label: "Pagrindinis puslapis",
            folder: "src/pages/posts",
            fields: [
              {
                name: "title",
                widget: "string",
                label: "Hero sekcijos titulas",
              },
              {
                name: "subtitle",
                widget: "string",
                label: "Hero sekcijos subtitulas",
              },
              {
                name: "paslauga1Title",
                widget: "string",
                label: "Paslauga 1 titulas",
              },
              {
                name: "paslauga2Title",
                widget: "string",
                label: "Paslauga 2 titulas",
              },
              {
                name: "paslauga3Title",
                widget: "string",
                label: "Paslauga 3 titulas",
              },
              {
                name: "paslauga1Info",
                widget: "string",
                label: "Paslauga 1 info",
              },
              {
                name: "paslauga2Info",
                widget: "string",
                label: "Paslauga 2 info",
              },
              {
                name: "paslauga3Info",
                widget: "string",
                label: "Paslauga 3 info",
              },
              {
                name: "price2Weeks",
                widget: "string",
                label: "Kaina 2 savaites",
              },
              {
                name: "price3Months",
                widget: "string",
                label: "Kaina 3 menesiai",
              },
              {
                name: "price1Month",
                widget: "string",
                label: "Kaina 1 menesis",
              },
              {
                name: "statistika",
                widget: "list",
                label: "Statistikos foto",
                media_folder: "public/assets/media",
                fields: [
                  {
                    name: "statistikosFoto",
                    widget: "image",
                    label: "Statistikos foto",
                    allow_multiple: true,
                    required: true,
                  },
                ],
              },
              {
                name: "atsiliepimai",
                widget: "list",
                label: "Atsiliepimu foto",
                media_folder: "public/assets/media",
                fields: [
                  {
                    name: "atsiliepimaiFoto",
                    widget: "image",
                    label: "Atsiliepimu foto",
                    allow_multiple: true,
                    required: true,
                  },
                ],
              },
              {
                name: "winnings",
                widget: "list",
                label: "Laimejimu foto",
                media_folder: "public/assets/media",
                fields: [
                  {
                    name: "winningFoto",
                    widget: "image",
                    label: "Laimejimo foto",
                    allow_multiple: true,
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      previewStyles: ["/src/styles/global.css"],
      disableIdentityWidgetInjection: true,
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    astroImageTools,
    compress({
      img: false,
      svg: false,
    }),
  ],
});
