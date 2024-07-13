import React from "react";

const cardata = [
  {
    title: "Refer UPI",
    link: "refer-upi",
    description: "Refer UPI Earn Upto 150/-",
  },
  {
    title: "Credit Card",
    link: "Credit_card",
    description: "Refer Credit Card Earn Upto 9600/-",
  },
  {
    title: "Bank Account Opening",
    link: "bank_account_opening",
    description: "Refer Zero Balance Bank Account Opening Earn upto 2000/-",
  },
  {
    title: "Small Loan",
    link: "Small_loan",
    description: "Refer Loan Earn Upto 1000/-",
  },
  {
    title: "Demat Account Opening",
    link: "Demat_account",
    description: "Refer Loan Earn Upto 1200/-",
  },
  {
    title: "Personal Loan",
    link: "Personal_loan",
    description: "Refer Personal Loan Earn Upto 24600/-",
  },
];

const Services = () => {
  return (
    <div className={`mt-16 px-4 mx-auto max-w-screen-xl lg:px-6`}>
      <div className="px-4 py-2 ">
        <div className="flex  bg-[rgb(237,194,143)] p-5 text-xl font-semibold lg:text-2xl rounded-md shadow-inner">
          <div className="">
            <h2>Refer & Earn Money</h2>
          </div>
          <div className="ml-24 lg:ml-[33%]">
            <a className="link-item text-dark" href="https://grahaksathi.in/admin/wallet">
              <h2>Wallet</h2>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-4 ">
          {cardata.map((card, index) => (
            <a className="bg-[#c4a984f1] hover:bg-[#c4a984]/60 rounded-md p-5" key={index} href={card.link}>
              <div className="">
                <h2 className="">
                  <p className="text-xl lg:text-2xl font-semibold ">{card.title}</p>
                </h2>
                <h6 className="">
                  <a href={card.link} className="text-lg lg:text-xl tracking-tight ">
                    {card.description}
                  </a>{" "}
                </h6>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
