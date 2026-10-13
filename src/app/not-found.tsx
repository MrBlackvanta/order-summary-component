import { MusicIcon } from "@/components/icons";
import { openGraphBase, SITE_NAME } from "@/data";
import type { Metadata } from "next";
import Link from "next/link";

const title = `${SITE_NAME} | Page not found`;

const description =
  "That link does not lead anywhere. Nothing has been charged, and the order summary is still waiting.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false },
  alternates: { canonical: null },
  openGraph: { ...openGraphBase, title, description },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: openGraphBase.images,
  },
};

export default function NotFound() {
  return (
    <main className="grid grow place-items-center px-6 py-6">
      <div className="rounded-card shadow-card bg-card w-full max-w-81.75 px-6 py-10 text-center md:max-w-112.5 md:px-12 md:py-14">
        <MusicIcon className="mx-auto" />

        <h1 className="text-title md:text-title-md mt-6">Page not found</h1>

        <p className="text-body md:text-body-md text-muted mx-auto mt-4 max-w-65.75 md:max-w-none">
          That link doesn&rsquo;t lead anywhere, and nothing has been charged.
          Your order summary is waiting where you left it.
        </p>

        <Link
          href="/"
          className="text-action shadow-cta rounded-control bg-accent hover:bg-accent-hover mt-6 flex h-12.5 w-full items-center justify-center text-white motion-safe:transition-[background-color] md:mt-8"
        >
          Back to the order summary
        </Link>
      </div>
    </main>
  );
}
