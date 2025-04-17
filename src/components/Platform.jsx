import { AdjustmentsHorizontalIcon, ChartPieIcon, ChatBubbleLeftRightIcon, CloudArrowUpIcon, CurrencyDollarIcon, DocumentCurrencyDollarIcon, InboxIcon, LockClosedIcon, ServerIcon, SparklesIcon, UserPlusIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const features = [
  {
    name: 'AI-powered search.',
    description:
      'No need for complex filters or booleans. Enter you ideal candidate profile in natural language and Ponto does the rest.',
    icon: SparklesIcon,
  },
  {
    name: 'Custom presets.',
    description: 'Build talent maps and speed up your search. No more manual company selecting.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Investor & funding data.',
    description: 'Accurately identify candidates who have worked at companies backed by a specific investor or are currently employed at companies in a particular funding stage.',
    icon: DocumentCurrencyDollarIcon,
  },
]

const features2 = [
  {
    name: 'Multi-channel sequencing.',
    description:
      'Automate outreach across every channel LinkedIn, InMail and Mail with smart sequencing.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'AI-personalised outreach.',
    description: 'Personalize messages at scale to increase response rates.',
    icon: UserPlusIcon,
  },
  {
    name: 'Advanced analytics.',
    description: 'Analyze your outreach performance with in-depth analytics to optimize your campaigns.',
    icon: ChartPieIcon,
  },
]

const features3 = [
  {
    name: 'Unified inbox.',
    description:
      'Create and manage outreach sequences across multiple channels—LinkedIn, email, WhatsApp—all from one place.',
    icon: InboxIcon,
  },
  {
    name: 'AI Chatbot.',
    description: 'Enhance productivity and provide your talent with first-class support, regardless of the time of day.',
    icon: SparklesIcon,
  },
]

const tabsContent = [
  {
    name: 'Find better talent',
    href: '#workflow',
    current: true,
    features: features,
    title: 'Search',
    heading: 'Increase top-funnel candidate quality',
    description: 'Ponto is a vector-based search engine that delivers more accurate matches by understanding the context of each profile.',
    image: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
    alt: 'Search product screenshot'
  },
  {
    name: 'Automate outreach',
    href: '#collaboration',
    current: false,
    features: features2,
    title: 'Contact',
    heading: 'Speed up outreach with automated sequencing',
    description: 'Add your favourite candidates to a list and reach out to all of them with just one click. Personalized and across every channel.',
    image: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
    alt: 'Outreach platform screenshot'
  },
  {
    name: 'Streamline conversations',
    href: '#analytics',
    current: false,
    features: features3,
    title: 'Engage',
    heading: 'All conversations in one place',
    description: 'Have all conversations across channels in one place and win talent by lowering response times.',
    image: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
    alt: 'Conversation dashboard'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Platform() {
  const [currentTab, setCurrentTab] = useState(0)
  
  // Update tabs based on selection
  const handleTabChange = (index) => {
    setCurrentTab(index)
  }

  return (
    <div id="platform" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600"> The Platform</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            One Platform. Multiple Solutions.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg/8 text-gray-600">
            Ponto combines everything you need to scale your hiring volume effortlessly. Spend more time attracting and less time sourcing talent.
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 sm:hidden">
            {/* Use an "onChange" listener to redirect the user to the selected tab */}
            <select
              defaultValue={tabsContent[currentTab].name}
              onChange={(e) => {
                const index = tabsContent.findIndex(tab => tab.name === e.target.value)
                handleTabChange(index)
              }}
              aria-label="Select a tab"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            >
              {tabsContent.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
            />
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav aria-label="Tabs" className="-mb-px flex">
                {tabsContent.map((tab, index) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleTabChange(index)
                    }}
                    aria-current={currentTab === index ? 'page' : undefined}
                    className={classNames(
                      currentTab === index
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'w-1/3 border-b-2 px-1 py-4 text-center text-sm font-medium',
                    )}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-stretch">
            <div className="lg:pt-4 lg:pr-4 min-h-[600px] flex flex-col">
              <div className="lg:max-w-lg flex-1">
                <h2 className="text-base/7 font-semibold text-indigo-600">{tabsContent[currentTab].title}</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  {tabsContent[currentTab].heading}
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  {tabsContent[currentTab].description}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {tabsContent[currentTab].features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="relative h-[600px] flex overflow-hidden rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 lg:rounded-2xl lg:p-4">
              <img
                alt={tabsContent[currentTab].alt}
                src={tabsContent[currentTab].image}
                width={2432}
                height={1442}
                className="h-full w-full object-cover object-left rounded-md shadow-xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
