import React, { useState } from "react";

// Sample data model
const Personal_loanData = [
  {
    id: 1,
    logoSrc: require("../../asset/img/kreditbee-personal-loan.png"),
    name: "Kreditbee",
    description: "Instant Personal Loans! Trusted by Over 5 Crore Indians",
    btnName: "Btn-1",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Loan amount ranging from Rs. 1,000 to Rs. 3 lakhs",
      "The entire application process is online",
      "Interest rates ranging from from 15% to 29.95% per annum",
      "Processing fee - Rs. 85 to upto 6% of loan amount",
      "Collateral Free loan",
      "Disbursal as quick as 15 minutes",
    ],
  },
  {
    id: 2,
    logoSrc: require("../../asset/img/cash-he-personal-loan.png"),
    name: "Cash He Personal Loan",
    description: "Cash He Instant Personal Loans for Instant Gratificaion",
    btnName: "Btn-2",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Fast approval, instant disbursal",
      "Loyalty rewards",
      "Minimum documentation",
      "Flexible tenure",
      "Buddy transfer- Transfer money directly from the app to your friends",
      "100% digital & secure",
      "Loans- From Rs.1,000 to Rs.4,00,000",
    ],
  },
  {
    id: 3,
    logoSrc: require("../../asset/img/prefr-personal-loan.png"),
    name: "Prefr Personal Loan",
    description: "When Bank Says 'NO' We Say 'YES'",
    btnName: "Btn-3",
    modalHeading: "Benefits & Features",
    modalContent: ["100% digital & paperless process", "No Collaterals", "Tenure- 3 to 42 Months", "Borrow loans from Rs.25,000 to Rs. 3,00,000", "Fast flexible credits for your personal use", "Fast disbursal"],
  },
  {
    id: 4,
    logoSrc: require("../../asset/img/nira-personal-loan.jpg"),
    name: "NIRA Personal Loan",
    description: "Get Loans Up To Rs 1 Lakh In Just 3 Minutes",
    btnName: "Btn-4",
    modalHeading: "Benefits & Features",
    modalContent: ["100% digital & paperless process", "loan up to Rs.5000 to 100000", "Quick loan disbursal", "Low interest", "Flexible repayment tenure"],
  },
  {
    id: 5,
    logoSrc: require("../../asset/img/fibe-personal-loan.png"),
    name: "Fibe Personal Loan",
    description: "Instant Cash For Instant Life Upgrades",
    btnName: "Btn-5",
    modalHeading: "Benefits & Features",
    modalContent: ["Interest rate: starting from 15%", "Finance up to ₹5 lacs", "Flexible repayment tenures 3 to 24 months", "No physical documentation", "Repay anytime with no pre closure cost"],
  },
  {
    id: 6,
    logoSrc: require("../../asset/img/smartcoin-personal-loan.png"),
    name: "Smartcoin Personal Loan",
    description: "Hey There, Get Instant Personal loan on just one tap",
    btnName: "Btn-6",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Instant loan up to Rs 1 lakh can be availed",
      "App-first platform with a 100% of the application and processing done digitally",
      "Interest rates starting from 2% per month",
      "Minimal documentation required",
      "Convenient and instant with disbursals going through in minutes",
      "Partnered with RBI registered lenders for the safest experience for customers",
    ],
  },
  {
    id: 7,
    logoSrc: require("../../asset/img/money-view-personal-loan.png"),
    name: "Money View",
    description: "Making Personal Loan Better & Easy",
    btnName: "Btn-7",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Collateral-free loans",
      "100% Paperless application process",
      "Interest rates starting from 1.33% per month (16% annually)",
      "Processing fee - Starting from 2% of the approves loan amount",
      "Loans from Rs. 5000 to Rs. 5 Lakhs",
      "Long repayment tenure upto 60 months",
      "No hidden charges",
    ],
  },
  {
    id: 9,
    logoSrc: require("../../asset/img/indusInd-bank.png"),
    name: "IndusInd Bank Personal Loan",
    description: "Experience hassle - free process and quick approval personal loan up to 50 lakh",
    btnName: "Btn-9",
    modalHeading: "Benefits & Features",
    modalContent: ["Loan Amount will be in the range of 30,000 to 50 Lacs", "Fast Approval", "100% digital process", "Low interest rate"],
  },
  {
    id: 10,
    logoSrc: require("../../asset/img/upwards-personal-loan.png"),
    name: "Upwards Bank Personal Loan",
    description: "Instant Credit Lines Up to Rs 3 Lakh Low COst EMIs",
    btnName: "Btn-10",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Loan amount from Rs. 25000 to 5 lakh",
      "100% digital & paperless process",
      "Fast processing and quick disbursal",
      "Minimal documentation",
      "No requirement for collateral/security",
      "Avail the loan amount for a tenure of 12 months- 60 months",
    ],
  },
  {
    id: 11,
    logoSrc: require("../../asset/img/true-balance-personal-loan.png"),
    name: "True Balance Personal Loan",
    description: "One stop solution for all your financial needs",
    btnName: "Btn-11",
    modalHeading: "Benefits & Features",
    modalContent: ["100% digital & paperless process", "Personal loan ranging from ₹5,000 to ₹1,00,000", "Loan directly disbursed into a bank account", "Tenure: 1 to 3 months", "24x7 access to personal loan/money"],
  },
  {
    id: 12,
    logoSrc: require("../../asset/img/insta-money-personal-loan.png"),
    name: "InstaMoney Personal Loan",
    description: "Get InstaMoney Personal Loan! Loan Disbursal in 2 Hours",
    btnName: "Btn-12",
    modalHeading: "Benefits & Features",
    modalContent: ["Loan from Rs.5,000 to Rs.25,000", "Quick disbursals within 2 Hours", "Tenure: 3 months to 5 months", "100% digital & paperless process"],
  },
  {
    id: 13,
    logoSrc: require("../../asset/img/privo-personal-loan.jpg"),
    name: "PRIVO Personal Loan",
    description: "Got Aadhaar And Pan? Apply For Instant Loan",
    btnName: "Btn-13",
    modalHeading: "Benefits & Features",
    modalContent: [
      "Credit Line amounts ranging from ₹20,000 to ₹2,00,000",
      "Flexible repayment ranging from 3 months to 60 months",
      "Interest rate starting at 13.49% pa",
      "0% to 3% processing fees",
      "Instant approval and transfer of funds",
      "100% paperless",
      "No interest on the credit line",
      "Pay interest only for the amount that you borrow",
      "0% Foreclosure fees",
      "No hidden charges",
    ],
  },
];

export default function Personal_loan() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    content: [],
  });

  const showModal = (e) => {
    console.log();
    const btnId = Number(e.target.value);
    const specificBtnData = Personal_loanData.find((modalData) => modalData.id === btnId);

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
        {Personal_loanData.map((item) => (
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
              Personal Loan
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
            Earn Upto 3000/-
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
