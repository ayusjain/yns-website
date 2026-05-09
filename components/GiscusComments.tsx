"use client";

import { useEffect, useRef } from "react";

interface Props {
  slug: string;
}

export default function GiscusComments({ slug }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "YOUR_GITHUB_USERNAME/yns-website");
    script.setAttribute("data-repo-id", "YOUR_REPO_ID");
    script.setAttribute("data-category", "Episode Comments");
    script.setAttribute("data-category-id", "YOUR_CATEGORY_ID");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", slug);
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    ref.current.appendChild(script);
  }, [slug]);

  return (
    <div className="mt-12">
      <h3 className="font-heading font-black uppercase text-teal text-xl mb-6 tracking-wide">
        Comments
      </h3>
      {/* Replace YOUR_GITHUB_USERNAME, YOUR_REPO_ID, YOUR_CATEGORY_ID above
          after setting up Giscus at https://giscus.app */}
      <div ref={ref} />
    </div>
  );
}
