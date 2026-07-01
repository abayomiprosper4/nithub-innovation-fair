"use client";

import { useEffect, useRef } from "react";

const widgetUrl =
  "https://widget.tix.africa/nithubinnovationfair2026/VXNlci01MTNmMGE1Zi1lMTJmLTRlY2MtYTY3ZS04MDEwNGI5OGY4OWI=";
const widgetScriptSrc = "https://widget.tix.africa/widget.js";

export default function TixWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tt-widget h-full w-full";

    const fallback = document.createElement("div");
    fallback.className = "tt-widget-fallback h-full w-full";

    const iframe = document.createElement("iframe");
    iframe.src = widgetUrl;
    iframe.title = "Tix Africa Ticket Widget";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.minHeight = "420px";
    iframe.style.border = "none";
    iframe.style.display = "block";

    fallback.appendChild(iframe);
    widget.appendChild(fallback);
    container.appendChild(widget);

    const existingScript = document.querySelector(
      `script[src="${widgetScriptSrc}"]`,
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = widgetScriptSrc;
      script.setAttribute("data-url", widgetUrl);
      script.async = true;
      document.body.appendChild(script);

      return () => {
        script.remove();
      };
    }
  }, []);

  return (
    <section
      id="tickets"
      className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="rounded-[1.75rem] border border-gray-200 bg-white/90 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-4xl sm:p-5 md:p-8">
        <div className="mb-4 flex flex-col items-center gap-2 text-center sm:mb-6 sm:gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#62CF3A] sm:text-sm">
            Tickets
          </p>
          <h2 className="text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
            Reserve your place
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:text-base md:text-lg">
            Secure your pass for the anniversary showcase and innovation fair.
          </p>
        </div>

        <div
          ref={containerRef}
          className="min-h-105 h-[72vh] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 sm:min-h-130 sm:rounded-3xl md:min-h-175"
        />
      </div>
    </section>
  );
}
