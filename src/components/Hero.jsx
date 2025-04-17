import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlayCircleIcon } from '@heroicons/react/20/solid'
import { TypeAnimation } from 'react-type-animation'
import { Parallax } from 'react-scroll-parallax'

const navigation = [
  { name: 'Start', href: '#hero' },
  { name: 'Platform', href: '#platform' },
  { name: 'Features', href: '#features' },
  { name: 'FAQs', href: '#faq' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      setMobileMenuOpen(false)
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div id="hero" className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-16">
          <div className="flex lg:flex-1 lg:justify-start">
            <a href="#hero" className="-m-1.5 p-1.5" onClick={(e) => handleNavClick(e, '#hero')}>
              <span className="sr-only">Ponto</span>
              <img
                alt=""
                src="public/images/ponto-logo-new-black.svg"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-md/6 font-normal text-gray-600 hover:text-gray-800"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <a href="#" className="rounded-xl px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
              Log in
            </a>
            <a href="https://cal.com/ponto/ponto-demo" className="rounded-xl bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-500">
              Get early access
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#hero" className="-m-1.5 p-1.5" onClick={(e) => handleNavClick(e, '#hero')}>
                <span className="sr-only">Ponto</span>
                <img
                  alt=""
                  src="public/images/ponto-logo-new-black.svg"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-normal text-gray-600 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14">
        <Parallax
          translateY={['-50px', '50px']}
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </Parallax>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Parallax translateY={['-20px', '20px']} className="mb-4">
                <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl whitespace-nowrap">
                  The only tool you need
                </h1>
              </Parallax>
              <Parallax translateY={['20px', '-20px']} className="mb-8">
                <h2 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl whitespace-nowrap">
                  <span className="text-gray-900">to </span>
                  <TypeAnimation
                    sequence={[
                      'find better talent',
                      2000,
                      'automate outreach',
                      2000,
                      'streamline conversations',
                      2000,
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    cursor={false}
                    className="text-indigo-600"
                  />
                </h2>
              </Parallax>
              <Parallax translateY={['-10px', '10px']} opacity={[0.8, 1]} className="mb-10">
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Ponto is the AI Recruiting Platform with all the features you need to effortlessly scale your hiring volume.
                </p>
              </Parallax>
              <Parallax translateY={['10px', '-10px']} scale={[0.95, 1.05]}>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                  <a
                    href="https://cal.com/ponto/ponto-demo"
                    className="rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get early access
                  </a>
                  <a
                    href="https://cal.com/ponto/ponto-demo"
                    className="rounded-xl bg-gray-900 px-3.5 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 inline-flex items-center"
                  >
                    <PlayCircleIcon className="mr-2 -ml-0.5 h-5 w-5" aria-hidden="true" />
                    Watch demo
                  </a>
                </div>
              </Parallax>
            </div>
            <Parallax translateY={['50px', '-50px']} scale={[0.9, 1]} className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt="App screenshot"
                  src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </Parallax>
          </div>
        </div>
        <Parallax
          translateY={['-30px', '30px']}
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </Parallax>
      </div>
    </div>
  )
} 