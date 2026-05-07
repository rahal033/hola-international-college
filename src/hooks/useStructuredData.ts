import { useEffect } from "react";

/**
 * Inject JSON-LD structured data into the document head for the lifetime
 * of the calling component. Used for per-page schema.org markup
 * (Course, FAQPage, BreadcrumbList, etc.) that varies by route.
 *
 * Site-wide schemas (EducationalOrganization, LocalBusiness, WebSite) live
 * in index.html so they're available on initial crawl without JS execution.
 */
export function useStructuredData(data: Record<string, unknown> | Array<Record<string, unknown>>) {
  useEffect(() => {
    const items = Array.isArray(data) ? data : [data];
    const scripts: HTMLScriptElement[] = items.map((item) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.dynamic = "1";
      s.textContent = JSON.stringify(item);
      document.head.appendChild(s);
      return s;
    });
    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [JSON.stringify(data)]);
}

/**
 * Build a BreadcrumbList payload for a given trail.
 * Pass an array of [name, path] pairs, e.g.
 *   buildBreadcrumb([["Home", "/"], ["Courses", "/courses"]])
 */
export function buildBreadcrumb(trail: Array<[string, string]>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `https://www.holainternationalcollege.com.au${path}`,
    })),
  };
}
