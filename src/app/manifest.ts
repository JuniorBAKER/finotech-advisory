import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.legalName,
    short_name: COMPANY.shortName,
    description: COMPANY.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a1626",
    theme_color: "#0a1626",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
