import type { Metadata } from "next";

export const SITE_URL =
  "https://order-summary-component.abdelrhman-ahmed8881.workers.dev";

export const SITE_NAME = "Order Summary";

export const SITE_TITLE = `${SITE_NAME} | Confirm your annual plan`;

export const SITE_DESCRIPTION =
  "Review your annual music plan before you pay: what it unlocks, what it costs, and the option to change it or cancel.";

export const openGraphBase = {
  siteName: SITE_NAME,
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "The order summary card showing the annual plan, its price, and the payment button.",
    },
  ],
} satisfies Metadata["openGraph"];
