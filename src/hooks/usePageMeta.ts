import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ORIGIN = "https://www.holainternationalcollege.com.au";

function setMeta(selector: string, attr: "content" | "href", value: string, create: () => HTMLElement) {
  let tag = document.querySelector<HTMLElement>(selector);
  if (!tag) {
    tag = create();
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, value);
}

/**
 * Per-route document metadata. Alongside title + description this keeps
 * canonical, og:url, og:title and og:description in sync with the current
 * route - otherwise the static index.html values (which point at the
 * homepage) are served for every route and search engines may fold all
 * routes into "/".
 */
export function usePageMeta(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    // Canonical URL for this route (no trailing slash except root)
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const url = `${ORIGIN}${path}`;

    setMeta('link[rel="canonical"]', "href", url, () => {
      const l = document.createElement("link");
      l.rel = "canonical";
      return l;
    });
    setMeta('meta[property="og:url"]', "content", url, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    });
    setMeta('meta[property="og:title"]', "content", title, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    });

    if (description) {
      setMeta('meta[name="description"]', "content", description, () => {
        const m = document.createElement("meta");
        m.name = "description";
        return m;
      });
      setMeta('meta[property="og:description"]', "content", description, () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:description");
        return m;
      });
    }
  }, [title, description, pathname]);
}
