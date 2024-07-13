
import React, { useState, useEffect } from "react";
import Signup from "../../pages/Signup";

// Sample data model
// const CreditCardsData = [

//   {
//     id: 1,
//     logoSrc: require("../../asset/img/axis-bank.jpg"),
//     name: "Axis Bank Credit Card",
//     description: "Shop, Dine & Travel with Axis bank Credit Cards?",
//     btnName: "Btn-1",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Higher purchase limits",
//       "Enjoy exciting rewards and cashback benefits",
//       "Complementary flight tickets",
//       "Discounts on movie tickets",
//       "Waiver of fuel surcharges",
//       "Access to airport lounges",
//       "Discounted deals on hotel bookings and restaurant orders",
//       "All the above features and benefits vary from card to card and depend on card variant",
//     ],
//   },
//   {
//     id: 2,
//     logoSrc: require("../../asset/img/au-bank.jpg"),
//     name: "AU Bank Credit Card",
//     description: "Choose from a wide range of AU Bank Credit Cards?",
//     btnName: "Btn-2",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Earn 5X/10X Reward Points",
//       "Fuel Surcharge Waiver",
//       "Milestone Cashback",
//       "Earn cashback on groceries, dining, travel, electronics, and apparel",
//       "Airport Lounge Access",
//       "Fun & Fitness - Memberships",
//       "Card Liability Cover",
//       "100% digital & paperless process"
//     ],
//   },
//   {
//     id: 3,
//     logoSrc: require("../../asset/img/idfc-bank.png"),
//     name: "IDFC Bank Credit Card",
//     description: "Choose From A Wide Range Of IDFC FIRST Bank Credit Card & Get Unmatched Benefits",
//     btnName: "Btn-3",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Lifetime Free Credit Card",
//       "Reward Point",
//       "6X Rewards on Online spend",
//       "10X Rewards on monthly spends above Rs.20,000",
//       "10X Rewards on all birthday spends",
//       "No Expiry",
//       "Shop using reward points",
//       " 1% Fuel surcharge waiver at Rs200/ month",
//       "25% off at movie tickets once a month (via PayTm)",
//       "Super save interest rate from 0.75% - 3.5% per month",
//       " Up to 20% discount across 1500 restaurants",
//       "Insurance protection: Personal accident cover, Lost card liability cover"
//     ],
//   },
//   {
//     id: 4,
//     logoSrc: require("../../asset/img/hdfc-credit-card.jpg"),
//     name: "HDFC Bank Credit Card",
//     description: "The Most Rewarding Card For Everyday Spends",
//     btnName: "Btn-4",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Exclusive reward points on purchases",
//       "Cashback on spends made online across various merchants, including Amazon and Flipkart",
//       "Complimentary domestic and international airport lounge access",
//       "Welcome benefits",
//       "Vouchers on meeting minimum monthly spending criteria",
//       "EMIs for transactions",
//     ],
//   },
//   {
//     id: 5,
//     logoSrc: require("../../asset/img/indusind-credit-card.png"),
//     name: "IndusInd Bank Credit Card",
//     description: "Get an instant Credit Card with IndusInd Bank in 3 easy steps!",
//     btnName: "Btn-5",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       " Get instant reward points on expenditures",
//       "Get access to complimentary golf lessons",
//       "Enjoy fuel surcharge waiver at the petrol pump",
//       "Enjoy pre-trip assistance",
//       "Offers on movie tickets",
//       "Get access to VIP lounges in the world",
//       "100% digital & paperless process",
//       "Simple, Fast & Secure"
//     ],
//   },
//   {
//     id: 6,
//     logoSrc: require("../../asset/img/idfc-bank.png"),
//     name: "Kotak Bank Credit Card",
//     description: "Shop All You Want, Earn Rewards!",
//     btnName: "Btn-6",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "8 reward points on every Rs. 150 spent (excluding fuel and cash withdrawal)",
//       "Joining gift of movie voucher worth Rs. 500",
//       "10000 reward points or 4 PVR tickets on the spends of Rs.1,25,000 in every 6 months",
//       "Railway surcharge (maximum Rs.500) on IRTC"
//     ],
//   },
//   {
//     id: 7,
//     logoSrc: require("../../asset/img/indian-oil-credit.png"),
//     name: "Indian Oil Credit Card",
//     description: "Get 60* Litres Of Fuel Annually With Your Indian Oil Kotak Credit Card",
//     btnName: "Btn-7",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Get 1000 Reward points as welcome benefit",
//       "Save 4% as Reward Points on IndianOil Fuel Spends",
//       "Get a personal accident insurance cover of INR 2,00,000",
//       "Annual fee of INR 449 waived on spending INR 50,000",
//       "Get a free Add-on card"
//     ],
//   },
//   {
//     id: 8,
//     logoSrc: require("../../asset/img/bajaj-demat.jpg"),
//     name: "Bajaj Finserv Credit Card",
//     description: "Accelerated Rewards, Easy EMIs",
//     btnName: "Btn-8",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Zero joining fees",
//       "Up to 12x reward points on online spends",
//       "Attractive discounts on shopping, dining, travel, & other categories",
//       "Welcome benefits",
//       "Easy rewards redemption",
//       "Easy EMIs",

//     ],
//   },
//   {
//     id: 9,
//     logoSrc: require("../../asset/img/sbi-credit-card.jpg"),
//     name: "SBI Bank Credit Card",
//     description: "Simplify Your Savings, Maximize Your Rewards!",
//     btnName: "Btn-9",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Welcome Benefits: Get 2000 bonus reward points worth ₹500 on spending ₹2000 in 60 days",
//       "10X Reward Points on grocery shopping, dining & movies (4 reward points = ₹1)",
//       "Fuel Surcharge Reversal up to ₹100 per month (on fuel bill between ₹500 to ₹3000)",
//       "Annual membership fee is reversed from next year if total spend is more than ₹lakh in the previous year",
//       "Free add on card for family members"
//     ],
//   },
//   {
//     id: 10,
//     logoSrc: require("../../asset/img/au-bank.jpg"),
//     name: "AU Bank Credit Card",
//     description: "Explore all the Credit Cards of the AU Small Finance Bank",
//     btnName: "Btn-10",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Get a Lifetime Free Credit Card",
//       "Upgrade from the feature of your existing credit card",
//       "Get higher reward points, higher credit limit from your existing credit card",
//       "Get exclusive cashbacks"
//     ],
//   },
//   {
//     id: 11,
//     logoSrc: require("../../asset/img/yes-bank-credit-card.jpg"),
//     name: "Yes Bank Credit Card",
//     description: "Explore A Wide Range Of Benefits And Privileges!",
//     btnName: "Btn-11",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "100% digital & paperless process",
//       "Rewards on bill payment",
//       "Fuel surcharge waiver",
//       "Access to Mastercard lounges",
//       "Special offers on movie tickets, bills, dining, shopping and travel"
//     ],
//   },

//   {
//     id: 12,
//     logoSrc: require("../../asset/img/bank-of-baroda-credit-card.jpg"),
//     name: "Bank Of Baroda Credit Card",
//     description: "No Joining Fees, No Annual Fees",
//     btnName: "Btn-12",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Lifetime free",
//       "Bonus reward points",
//       "Welcome gifts",
//       "Airport lounge access",
//       "Smart EMI options",
//       "Zero fuel surcharge waiver",
//     ],
//   },
//   {
//     id: 13,
//     logoSrc: require("../../asset/img/aspire-credit-card.jpg"),
//     name: "Aspire Credit Card",
//     description: "Get India's First Digital Credit Card",
//     btnName: "Btn-13",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "100% digital & paperless process",
//       "Get instant credit on PhonePe, GooglePay, Paytm, BharatPe, etc",
//       "Timely payments on Aspire helps improve credit score.",
//       "This will help when applying for bank loans. A good credit score helps to get bank loans at low-interest rates",
//       "No interest and no processing fees",
//       "No security deposit",

//     ],
//   },
//   {
//     id: 14,
//     logoSrc: require("../../asset/img/idfc-wow-credit-card.png"),
//     name: "IDFC First Bank WOW Credit Card",
//     description: "Introducing First WOW! Guaranteed Credit Card. Unlimited Excitement",
//     btnName: "Btn-14",
//     modalHeading: "Benefits & Features",
//     modalContent: [
//       "Helps to improve credit score",
//       "Zero joining fees",
//       "No renewal fees",
//       "4x reward points on every spend",
//       "6.75% interest p.a. on FD",
//       "20% discount on 1,500+ restaurants",
//       "Complimentary roadside assistance",
//       "Easy EMIs for transactions worth Rs. 2,500 and above",
//     ],
//   },
// ];

const baseUrl = process.env.REACT_APP_BASE_URL ;

export default function CreditCards() {
  const [creditCardsData, setCreditCardsData] = useState([])
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    content: [],
  });

  const showModal = (e) => {
    console.log();
    const btnId = Number(e.target.value);
    const specificBtnData = creditCardsData.find((modalData) => modalData.id === btnId);

    setModalData({
      title: specificBtnData.modalHeading,
      content: specificBtnData.modalContent,
    });

    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
       
        const response = await fetch(`${baseUrl}/api/v1/credit-card`, {
          method: 'GET',
          // headers: {
          //   'Authorization': `${session.token}`,
          // },
        });
        const data = await response.json();
        setCreditCardsData(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={` mt-16  mx-auto w-full md:max-w-screen-xl px-2`}>
      <div className="flex justify-end mt-16 p-1 lg:mx-40">
        <Breadcrumb />
      </div>
      <div className="my-1">
        {creditCardsData.map((item) => (
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
            <div className="max-w-md space-y-1 text-black p-4 list-disc dark:text-gray-400 ">
              {modalData.content.map((el, index) => (
                <li key={index} className="whitespace-pre ">
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
              Credit Card
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
            Earn Upto 1500/-
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