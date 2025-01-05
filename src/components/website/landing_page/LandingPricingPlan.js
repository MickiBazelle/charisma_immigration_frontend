import LandingTagBadge from "./LandingTagBadge";

// PricingPlan reusable component
const LandingPricingPlan = ({ planName, description, price, badgeText }) => {
  return (
    <section className="flex flex-col justify-center px-8 py-7 border-b border-solid border-gray-300 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between content-start max-md:max-w-full">
        <div className="flex flex-col flex-1 self-start">
          <header className="flex gap-2 justify-between">
            <h3 className="flex-auto text-xl font-semibold leading-8 text-gray-900">
              {planName}
            </h3>
            {badgeText && (
              <LandingTagBadge
                text={badgeText}
                textColor="text-violet-700"
                bgColor="bg-purple-50"
                borderColor="border-[color:var(--Component-colors-Utility-Brand-utility-brand-200,#E9D7FE)]"
              />
            )}
          </header>
          <p className="mt-1 text-base leading-6 whitespace-nowrap text-slate-600">
            {description}
          </p>
        </div>
        <div className="flex gap-0.5 font-semibold text-gray-900 whitespace-nowrap">
          <span className="self-start text-4xl tracking-tighter leading-10">
            $
          </span>
          <span className="text-5xl tracking-tighter leading-[72px] max-md:text-4xl">
            {price}
          </span>
          <span className="grow self-end mt-10 text-base font-medium leading-6 text-slate-600">
            per month
          </span>
        </div>
      </div>
    </section>
  );
};

export default LandingPricingPlan;
