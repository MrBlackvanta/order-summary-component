import { MusicIcon } from "@/components/icons";

export default function PlanRow() {
  return (
    <div className="bg-panel rounded-control mt-6 flex h-20.25 items-center px-4 md:mt-5 md:h-24.5 md:px-6">
      <MusicIcon className="shrink-0" />
      <dl className="ml-5 text-left">
        <dt className="text-plan md:text-plan-md">Annual Plan</dt>
        <dd className="text-price md:text-price-md text-muted mt-0.75 md:mt-1.5">
          $59.99/year
        </dd>
      </dl>
      <button
        type="button"
        className="text-link md:text-link-md text-accent hover:text-accent-hover ml-auto underline underline-offset-2 motion-safe:transition-[color]"
      >
        Change<span className="sr-only"> plan</span>
      </button>
    </div>
  );
}
