import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Who can use Ponto?",
    answer:
      "Ponto is built for hiring managers and recruiters. It's designed to help you find, contact, and hire the best candidates quickly.",
  },
  {
    question: "How is Ponto different from LinkedIn, or other sourcing solutions?",
    answer:
      "Ponto is a platform that helps you find, contact, and hire the best candidates quickly. It's designed for hiring managers and recruiters.",
  },
  {
    question: "How much does Ponto cost?",
    answer:
      "Ponto is a platform that helps you find, contact, and hire the best candidates quickly. It's designed for hiring managers and recruiters.",
  },
  {
    question: "Can I use Ponto with my team?",
    answer:
      "Ponto is a platform that helps you find, contact, and hire the best candidates quickly. It's designed for hiring managers and recruiters.",
  },
  {
    question: "How does Ponto use AI?",
    answer:
      "Ponto is a platform that helps you find, contact, and hire the best candidates quickly. It's designed for hiring managers and recruiters.",
  },
  
  
  
  
  
  // More questions...
]

export default function Faq() {
  return (
    <div id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
