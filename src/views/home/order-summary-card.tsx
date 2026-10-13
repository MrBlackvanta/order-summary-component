import heroIllustration from "@/assets/illustration-hero.svg";
import Image from "next/image";
import PlanRow from "./plan-row";

export default function OrderSummaryCard() {
  return (
    <div className="rounded-card shadow-card bg-card w-full max-w-81.75 overflow-hidden md:max-w-112.5">
      <Image
        src={heroIllustration}
        alt=""
        priority
        fetchPriority="high"
        className="h-auto w-full"
      />

      <div className="px-6 py-8 text-center md:px-12 md:pt-11.25 md:pb-12">
        <h1 className="text-title md:text-title-md">Order Summary</h1>

        <p className="text-body md:text-body-md text-muted mx-auto mt-4 max-w-65.75 md:mt-4.25 md:max-w-none">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <PlanRow />

        <button
          type="button"
          className="text-action shadow-cta rounded-control bg-accent hover:bg-accent-hover mt-6 flex h-12.5 w-full items-center justify-center text-white motion-safe:transition-[background-color] md:mt-8"
        >
          Proceed to Payment
        </button>

        <button
          type="button"
          className="text-action text-muted-strong hover:text-ink mx-auto mt-6 block motion-safe:transition-[color] md:mt-8"
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
}
