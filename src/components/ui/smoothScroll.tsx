"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    const smoothScroll = (e: Event) => {
      e.preventDefault();

      const targetId = (e.currentTarget as HTMLElement).getAttribute("href");
      const targetElement = targetId ? document.querySelector(targetId) : null;

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });

        window.history.pushState(null, "", targetId);
      }
    };

    anchorLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return null;
}
