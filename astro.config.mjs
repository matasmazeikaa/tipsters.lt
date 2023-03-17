import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import { astroImageTools } from "astro-imagetools";

import compress from "astro-compress";

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
                name: "plans",
                widget: "list",
                label: "Narystes",
                media_folder: "public/assets/media",
                fields: [
                  {
                    name: "planTitle",
                    widget: "string",
                    label: "Narystes laikotarpis",
                    required: true,
                  },
                  {
                    name: "isMostPopular",
                    widget: "boolean",
                    label: "Ar yra populiariausia?",
                    required: false,
                  },
                  {
                    name: "planPrice",
                    widget: "string",
                    label: "Narystes kaina",
                    required: true,
                  },
                  {
                    name: "planDescriptions",
                    widget: "list",
                    label: "Narystes aprasymas",
                    required: true,
                    fields: [
                      { name: "planDescription", widget: "string", required: true },
                    ]
                  }
                ],
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
