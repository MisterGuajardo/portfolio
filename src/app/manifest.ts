import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.role}`,
    short_name: site.initials,
    description: site.description,
    start_url: `${site.basePath}/`,
    scope: `${site.basePath}/`,
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "es",
    icons: [
      {
        src: `${site.url}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
