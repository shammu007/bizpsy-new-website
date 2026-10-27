import { MetadataRoute } from "next";
import { PAGE_LAST_MODIFIED, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: PAGE_LAST_MODIFIED.home,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: PAGE_LAST_MODIFIED.contact,
    },
  ];
}
