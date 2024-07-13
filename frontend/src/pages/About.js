import React from "react";

export default function About() {
  return (
    <>
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <h1 class="mb-4 mt-20 text-center text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">About Us</h1>
            </header>
            <p class="lead">
              Grahaksathi is a tech-enabled platform where customers are guided to the right financial product from the right bank or NBFC. It is also a thoughtfully accented concept where individuals (from all the profiles) are offered career
              options as a financial advisor and make income flexibly.
            </p>

            {/* dropdown */}

            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex items-center  justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>What is Flowbite?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                      get started
                    </a>{" "}
                    and start developing websites even faster with components on top of Tailwind CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Is there a Figma file available?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out the{" "}
                    <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">
                      Figma design system
                    </a>{" "}
                    based on the utility classes from Tailwind CSS and components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>What are the differences between Flowbite and Tailwind UI?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">xxx</p>
                  <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* dropdown */}

            <header class="mb-4 lg:mb-6 not-format">
              <h1 class="mb-4 mt-10 text-center text-2xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Why Choose Us</h1>
            </header>
            <p class="lead">Start Your Business with Zero Investment and Earn over ₹25000/- Every Month. Provide financial advice and products to the customers and get a fast payout every month.</p>
          </article>
        </div>
      </main>

      <aside aria-label="Related articles" class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div class="px-4 mx-auto max-w-screen-xl">
          {/* <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2> */}
          <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article class="max-w-xs">
              <a href="/refer-upi">
                <img src={require("../asset/img/refer-about.jpg")} class="mb-5 rounded-lg" alt="Image 2" />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/refer-upi">UPI Referral Program</a>
              </h2>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
                Provide UPI to your customers and help them Instant transactions. You can start making payments instantly after a quick registration process.promotes a cashless economy. Rewards and cashback. Privacy protection. Transactions through
                multiple accounts.
              </p>
              <a href="/refer-upi" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Read more
              </a>
            </article>
            <article class="max-w-xs">
              <a href="/bank_account_opening">
                <img src={require("../asset/img/saving-about.jpg")} />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/bank_account_opening">Saving Account</a>
              </h2>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Provide Zero Balance saving accounts to your customers and help them earn more on their savings.</p>
              <a href="bank_account_opening" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Read more
              </a>
            </article>
            <article class="max-w-xs">
              <a href="/credit_card">
                <img src={require("../asset/img/credit-card-about.jpg")} class="mb-5 rounded-lg" alt="Image 3" />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/credit_card">Credit Card</a>
              </h2>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Make your customers pamper their lifestyle choices with the suitable credit cards. Offer a variety of credit cards from the top banks.</p>
              <a href="/credit_card" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Read more
              </a>
            </article>
            <article class="max-w-xs">
              <a href="/personal_loan">
                <img src={require("../asset/img/loan-about.jpg")} class="mb-5 rounded-lg" alt="Image 4" />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/personal_loan">Loans</a>
              </h2>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Provide personal loans, home loans and more to your customers at interesting deals from the best lenders.</p>
              <a href="/personal_loan" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Read more
              </a>
            </article>
          </div>
        </div>
      </aside>

      {/* *********** */}

      {/* ********* */}
    </>
  );
}
