import React, { useState } from "react";

// Sample data model
const dematAccountsData = [
  {
    id: 1,
    logoSrc: require("../../asset/img/hdfc-demat.png"),
    name: "HDFC Securities",
    description: "ALL-IN_1 Invesment Account",
    btnName: "Btn-1",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Create a trading account for free",
      "Invest in 49+ products from single platform",
      "Stock recommendation with 75% strike rate since inception",
      "Get funds credited in your bank account within 5 minutes using e-ATM",
      "One-Click Portfolio: Theme based opportunity to invest in small basket of stocks",
      "Flash Trade: Buy call or put options with UP and DOWN button at ultra-fast",
      "Speed!",
    ],
  },
  {
    id: 2,
    logoSrc: require("../../asset/img/kotak_demat.png"),
    name: "Kotak Securities",
    description: "Open a free trading account & pay Rs 0 on intraday trades",
    btnName: "Btn-2",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Open 3 in 1 Demat Account",
      " Free Trading Calls",
      "Make international investments",
      "Various brokerage plans to suit your needs",
      "Zero brokerage plan for investors up to the age of 30 years",
      "Zero intraday brokerage",
      "New generation trading and analytical tools",
    ],
  },

  {
    id: 3,
    logoSrc: require("../../asset/img/icici-direct-demat.jpg"),
    name: "ICICI Direct",
    description: "ICICI direct is the one stop solution for all your financial needs",
    btnName: "Btn-3",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Create a trading account for free",
      "Invest in 49+ products from single platform",
      "Stock recommendation with 75% strike rate since inception",
      "Get funds credited in your bank account within 5 minutes using e-ATM",
      "One-Click Portfolio: Theme based opportunity to invest in small basket of stocks",
      "Flash Trade: Buy call or put options with UP and DOWN button at ultra-fast",
      "Speed!",
    ],
  },
  {
    id: 4,
    logoSrc: require("../../asset/img/sbi-demat.png"),
    name: "SBI Securities",
    description: "Transform your Trading and Invesment Game!",
    btnName: "Btn-4",
    modalHeading: "Benefits & Features",
    modalContent: ["Place buy/sell orders across BSE and NSE exchanges", "Invest in Mutual Funds", "Access to research reports", "Multiple watchlists", "Advanced charting tools on the desktop and web", "Live quotes and market news"],
  },
  {
    id: 5,
    logoSrc: require("../../asset/img/samco-demat.png"),
    name: "SAMCO",
    description: "Frustrated with your broker's trading process? SWITCH TO SAMCO",
    btnName: "Btn-5",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Free account opening",
      "Zero AMC charges for 1st year",
      "Free brokerage trading for 1st month",
      " Advanced Option Trading",
      "Lowest margin for Future Trading",
      "Get up to 4X delivery funding",
      "Get access superior mutual fund recommendations",
      "Responsible research & recommendations",
      "Superfast & reliable mobile trading app",
      " Powerful, relevant news and insights inbuild in Samco trading app",
    ],
  },
  {
    id: 6,
    logoSrc: require("../../asset/img/bajaj-demat.jpg"),
    name: "Bajaj Finserv",
    description: "Enjoy Trading at one of the lOWEST BROKERAGE RATES",
    btnName: "Btn-6",
    modalHeading: "Benefits & Features",
    modalContent: ["FREE* Demat A/c", "Lowest MTF (Margin Trade Financing)", "Flat ₹20/-per order Delivery, Intraday & F&O,", "Wide product portfolio", "Seamless trading on web and app", "Affordable packs with value for money"],
  },
  {
    id: 7,
    logoSrc: require("../../asset/img/angel-one-demat.png"),
    name: "Angel One",
    description: "All-in-One Demat, Multiple Benefits Smart choice for smart people",
    btnName: "Btn-7",
    modalHeading: "Benefits & Features",
    modalContent: ["Free Trading Account opening*", "100% digital & paperless process", "Rs.0 Brokerage*", "Automatic updates", "Add funds easily with net banking, Gpay, UPI"],
  },
  {
    id: 8,
    logoSrc: require("../../asset/img/mstock-demat.png"),
    name: "m,Stock",
    description: "Zero Brokerage For Lifetime. No Subscription | No Expiry | No Limits",
    btnName: "Btn-8",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Stable, superfast trading App and web platform",
      "Benefit of 25+ year of global expertise with assets under management of US$ 600+Billion",
      "Margin Trade Facility at industry lowest interest rate of 7.99%",
      "Zero Brokerage across all products For Life (applicable only for ₹999 plan)",
      " 5-minute, fully automated (paperless) account opening process",
    ],
  },

  {
    id: 9,
    logoSrc: require("../../asset/img/nuvama-demat.jpg"),
    name: "nuvama",
    description: "Open Free Demat account and start trading in 15 minutes",
    btnName: "Btn-9",
    modalHeading: "Benefits & Features",
    modalContent: ["Zero account opening charges", "No AMC charges for the first year", "Trade at Rs.10/order", "Strong research recommendation", "100% digital & paperless process"],
  },
  {
    id: 10,
    logoSrc: require("../../asset/img/paytm-demat.png"),
    name: "Paytm Money",
    description: "Start your Investment Journey today",
    btnName: "Btn-10",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Lowest brokerage of ₹15/trade on stock delivery, intraday, futures and Options",
      "Single platform for investing in Stocks, Mutual funds, NPS etc",
      "No Account Opening Fee",
      "Zero Platform charges for first month (after that Rs.30 per month + GST)",
      "Detailed information and tracking of investment",
      "Paperless account opening & a fully digital KYC process",
    ],
  },
  {
    id: 11,
    logoSrc: require("../../asset/img/groww-demat.png"),
    name: "Groww",
    description: "First-time investors or experts, an app that's made for everyone",
    btnName: "Btn-11",
    modalHeading: "Benefits & Features",
    modalContent: ["Zero account opening fee", "Zero maintenance charges", "Low brokerage charges", "Invest in multiple products"],
  },
  {
    id: 12,
    logoSrc: require("../../asset/img/yes-demat.jpg"),
    name: "Yes Securities",
    description: "One Platform | Multiple Investment Opportunities",
    btnName: "Btn-12",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Zero a/c opening fee",
      "Offers 3-in-1 account services",
      "Higher leverage up to 40x on equity intraday",
      "Wide range of trading platforms and online tools",
      "Educational tools for first-time investors",
      "In-depth Advise & Research recommendations",
    ],
  },
  {
    id: 13,
    logoSrc: require("../../asset/img/lxme-demat.jpg"),
    name: "Lxme",
    description: "Ask, learn & share about Money Management",
    btnName: "Btn-13",
    modalHeading: "Benefits & Features",
    modalContent: ["Investments starting from as low as ₹100", "Investment learning with regular expert-led sessions and modules", "Insurance plans", "Easy-to-use calculators for financial planning", "Passive income"],
  },

  // Add more demat account objects as needed
];

export default function Demat_account() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    content: [],
  });

  const showModal = (e) => {
    console.log();
    const btnId = Number(e.target.value);
    const specificBtnData = dematAccountsData.find((modalData) => modalData.id === btnId);

    setModalData({
      title: specificBtnData.modalHeading,
      content: specificBtnData.modalContent,
    });

    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={` mt-16  mx-auto w-full md:max-w-screen-xl px-2`}>
      <div className="flex justify-end mt-16 p-1 lg:mx-40">
        <Breadcrumb />
      </div>
      <div className="my-1">
        {dematAccountsData.map((item) => (
          <div key={item.id}>
            <Card {...item} showModal={showModal} />
          </div>
        ))}
      </div>
      {/* modal */}
      <div tabindex="-1" aria-hidden="true" className={`fixed z-50 bottom-0 left-0 ${isModalVisible ? "backdrop-brightness-75" : "hidden"} w-full h-full mx-auto lg:w-2/10 p-4 `}>
        <div class="w-full max-w-2xl max-h-full align-middle m-auto">
          {/* <!-- Modal content --> */}
          <div class="bg-white rounded-lg shadow dark:bg-gray-700 border-2 border-green-500 mt-20">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{modalData.title}</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={hideModal}
              >
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="max-w-md space-y-1 text-black p-4 list-disc dark:text-gray-400">
              {modalData.content.map((el, index) => (
                <li key={index} className="whitespace-pre">
                  {el}
                </li>
              ))}
              {/* {dematAccountsData.modalContent.map((item)=><p className="text-base text-gray-500 dark:text-gray-400">{item}</p>)} */}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="text-right p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={hideModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Breadcrumb = () => {
  return (
    <section className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
              Demat Account
            </a>
          </div>
        </li>
      </ol>
    </section>
  );
};

const Card = ({ id, logoSrc, name, description, btnName, showModal }) => {
  return (
    <div className="flex flex-col items-end bg-[#c4a984] border border-[#c4a984]/90 rounded-md shadow md:flex-row md:max-w-8xl hover:bg-[#c4a984]/60 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3 lg:mb-6 px-4 py-2">
      <div className="flex lg:flex-wrap  w-full lg:w-1/3 lg:ml-5  ">
        <div className="w-24 lg:w-[15vh]">
          <img className="object-contain w-full rounded-md h-[10vh] lg:h-[15vh]  md:rounded-lg" src={logoSrc} alt="image" />
        </div>
        <div className="flex items-end mx-2 ">
          <button
            type="button"
            className=" text-white bg-[#6c757d] hover:bg-[#6c757d]/80 focus:ring-2 focus:outline-none focus:ring-[#6c757d]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
          >
            Earn Upto 250/-
          </button>
          <button
            onClick={showModal}
            className=" text-white bg-[#6c757d] hover:bg-[#6c757d]/80 focus:ring-2 focus:outline-none focus:ring-[#6c757d]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
            type="button"
            value={id}
          >
            Benifits
          </button>
        </div>
      </div>
      <div className="flex flex-col leading-normal w-full ">
        <div className=" flex flex-col lg:mr-5">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h2>
          <h6 className="font-normal text-gray-700 dark:text-gray-400">{description}</h6>
        </div>

        <div className=" flex justify-end lg:mr-5 lg:mt-5">
          <button
            type="button"
            className="text-white bg-[#6c757d] hover:bg-[#6c757d]/80 focus:ring-2 focus:outline-none focus:ring-[#6c757d]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
          >
            Share Now
          </button>
          <button
            // onClick={showModal}
            className="text-white bg-[#6c757d] hover:bg-[#6c757d]/80 focus:ring-2 focus:outline-none focus:ring-[#6c757d]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
            type="button"
            // value={item.btnName}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
