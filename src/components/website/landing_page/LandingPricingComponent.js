import LandingPricingPlan from "./LandingPricingPlan";

const LandingPricingComponent = () => {
  return (
    <main>
      <LandingPricingPlan
        planName="Basic plan"
        description="Lorem ipsum dolor sit amet consectetur."
        price="20"
        badgeText=""
      />
      <LandingPricingPlan
        planName="Business plan"
        description="Lorem ipsum dolor sit amet consectetur."
        price="20"
        badgeText="Popular"
      />
      {/* Repeat <PricingPlan /> as needed for other pricing options */}
    </main>
  );
};

export default LandingPricingComponent;
