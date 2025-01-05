import * as React from "react";

function Pricing(props) {
  return (
    <div className="flex flex-col pb-12 bg-white">
      <div className="flex flex-col items-center px-20 py-12 w-full font-semibold text-center bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-12 text-base leading-6 text-blue-500 max-md:mt-10 max-md:max-w-full">
          PRICING
        </div>
        <div className="mt-3 text-5xl tracking-tighter text-gray-900 max-md:max-w-full max-md:text-4xl">
          Plans that fit your scale
        </div>
        <div className="mt-6 mb-12 text-xl leading-8 text-slate-600 max-md:mb-10 max-md:max-w-full">
          Simple, transparent pricing that grows with you.{" "}
        </div>
      </div>
      <div className="justify-center self-center w-full max-w-[1216px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow w-full bg-white rounded-2xl border border-solid shadow-md border-[color:var(--Colors-Border-border-secondary,#EAECF0)] max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col justify-center px-8 py-7 border-b border-solid border-b-[color:var(--Colors-Border-border-secondary,#EAECF0)] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between content-start max-md:max-w-full">
                  <div className="flex flex-col flex-1 self-start">
                    <div className="text-2xl font-semibold leading-8 text-gray-900">
                      Basic plan
                    </div>
                    <div className="mt-1 text-base leading-6 whitespace-nowrap text-slate-600">
                      Our most popular plan for small teams.
                    </div>
                  </div>
                  <div className="flex gap-0.5 font-semibold text-gray-900 whitespace-nowrap">
                    <div className="self-start text-4xl tracking-tighter leading-10">
                      $
                    </div>
                    <div className="text-6xl tracking-tighter leading-[72px] max-md:text-4xl">
                      10
                    </div>
                    <div className="grow self-end mt-10 text-base font-medium leading-6 text-slate-600">
                      per month
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-8 py-9 text-base leading-6 border-b border-solid border-b-[color:var(--Colors-Border-border-secondary,#EAECF0)] text-slate-600 max-md:px-5 max-md:max-w-full">
                <div className="font-semibold text-gray-900 max-md:max-w-full">
                  FEATURES
                </div>
                <div className="mt-1 leading-6 max-md:max-w-full">
                  <span className="text-slate-600">Everything in our </span>
                  <span className="font-semibold text-slate-600">
                    free plan
                  </span>
                  <span className="text-slate-600"> plus....</span>
                </div>
                <div className="flex gap-5 justify-between mt-6 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                        className="w-6 aspect-square fill-green-100"
                      />
                      <div className="grow">Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="flex gap-3 justify-between mt-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                        className="w-6 aspect-square fill-green-100"
                      />
                      <div className="grow">Lorem ipsum dolor sit amet</div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                        className="w-6 aspect-square fill-green-100"
                      />
                      <div className="grow">Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="flex gap-3 justify-between mt-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                        className="w-6 aspect-square fill-green-100"
                      />
                      <div className="grow">Lorem ipsum dolor sit amet</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 text-base font-semibold leading-6 text-white whitespace-nowrap bg-white max-md:px-5 max-md:max-w-full">
                <div className="justify-center items-center px-16 py-3 rounded-lg border border-solid shadow-sm bg-[linear-gradient(45deg,#AD00FE_0%,#00E0EE_100%)] border-[color:var(--Component-colors-Components-Buttons-Primary-button-primary-border,#7F56D9)] max-md:px-5 max-md:max-w-full">
                  Get started
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow w-full bg-white rounded-2xl border border-solid shadow-md border-[color:var(--Colors-Border-border-secondary,#EAECF0)] max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col justify-center px-8 py-7 border-b border-solid border-b-[color:var(--Colors-Border-border-secondary,#EAECF0)] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between content-start max-md:max-w-full">
                  <div className="flex flex-col flex-1 self-start">
                    <div className="flex gap-2 justify-between">
                      <div className="flex-auto text-2xl font-semibold leading-8 text-gray-900">
                        Business plan
                      </div>
                      <div className="grow justify-center px-2.5 py-0.5 my-auto text-sm font-medium leading-5 text-center text-violet-700 whitespace-nowrap bg-purple-50 rounded-full border border-solid border-[color:var(--Component-colors-Utility-Brand-utility-brand-200,#E9D7FE)]">
                        Popular
                      </div>
                    </div>
                    <div className="mt-1 text-base leading-6 whitespace-nowrap text-slate-600">
                      Advanced features and reporting.
                    </div>
                  </div>
                  <div className="flex gap-0.5 font-semibold text-gray-900 whitespace-nowrap">
                    <div className="self-start text-4xl tracking-tighter leading-10">
                      $
                    </div>
                    <div className="text-6xl tracking-tighter leading-[72px] max-md:text-4xl">
                      20
                    </div>
                    <div className="grow self-end mt-10 text-base font-medium leading-6 text-slate-600">
                      per month
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-8 py-9 text-base leading-6 border-b border-solid border-b-[color:var(--Colors-Border-border-secondary,#EAECF0)] text-slate-600 max-md:px-5 max-md:max-w-full">
                <div className="font-semibold text-gray-900 max-md:max-w-full">
                  FEATURES
                </div>
                <div className="mt-1 leading-6 max-md:max-w-full">
                  Everything in our
                  <span className="font-semibold"> basic plan</span> plus....
                </div>
                <div className="flex gap-5 justify-between mt-6 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                        className="w-6 aspect-square fill-green-100"
                      />
                      <div className="grow">Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="flex gap-3 justify-between mt-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                        className="w-6 aspect-square fill-green-100"
                      />
                      <div className="grow">Lorem ipsum dolor sit amet</div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                        className="w-6 aspect-square fill-green-100"
                      />
                      <div className="grow">Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="flex gap-3 justify-between mt-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                        className="w-6 aspect-square fill-green-100"
                      />
                      <div className="grow">Lorem ipsum dolor sit amet</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                  <div className="flex gap-3 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd0dcaf1663501977bcdd2c852090118bd693636f069e0bb699699a6e04a39?"
                      className="w-6 aspect-square fill-green-100"
                    />
                    <div className="grow">Lorem ipsum dolor sit amet</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 text-base font-semibold leading-6 text-white whitespace-nowrap bg-white max-md:px-5 max-md:max-w-full">
                <div className="justify-center items-center px-16 py-3 rounded-lg border border-solid shadow-sm bg-[linear-gradient(45deg,#AD00FE_0%,#00E0EE_100%)] border-[color:var(--Component-colors-Components-Buttons-Primary-button-primary-border,#7F56D9)] max-md:px-5 max-md:max-w-full">
                  Get started
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
