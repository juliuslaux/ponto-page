export default function Features() {
    return (
      <div id="features" className="bg-white py-24 sm:py-32 relative overflow-hidden">
        {/* Top gradient blob */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#456afc] to-[#90c4fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Features</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
              The right features for your use case
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg/8 text-gray-600">
              Ponto: Find, Contact and Engage with top talent from one platform.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                <img
                  alt=""
                  src="/images/ponto-features-investor-data.png"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-indigo-600">Search</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Investor & Funding Data</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Identify talent by funding stage, investors, and revenue.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            </div>
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                <img
                  alt=""
                  src="/images/ponto-features-outreach-analytics.png"
                  className="h-80 object-cover object-left lg:object-right"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-indigo-600">Contact</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Outreach Analytics</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Analyze your outreach campaigns, iterate faster, win more talent.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                <img
                  alt=""
                  src="/images/ponto-features-custom-presets.png"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-indigo-600">Search</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Built your own custom list</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Build and save lists of companies or universities you want to hire from and speed up your search.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <img
                  alt=""
                  src="/images/ponto-features-data.png"
                  className="h-80 object-cover"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-indigo-600">Search</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">The best data combined in one platform</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                 Ponto combines the best data to make sourcing effortless.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <img
                  alt=""
                  src="/images/ponto-features-ai-personalization.png"
                  className="h-80 object-cover"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-indigo-600">Contact</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Personalize your messages with AI</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Build personalized outreach templates that convert messages to interviews.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            </div>
          </div>
        </div>

        {/* Bottom gradient blob */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#456afc] to-[#90c4fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    )
  }
  