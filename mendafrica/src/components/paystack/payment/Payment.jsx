"use client";

import { usePaystackPayment } from "react-paystack";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { currentClientUser } from "@/helpers/current-client-user";
import { useModalStore } from "@/store";
import ComponentLevelLoader from "@/components/Loader";
import { FcGoogle } from "react-icons/fc";
import "./styles.scss";
import { toast } from "react-toastify";
import { createDonation } from "@/actions/project";
import { FlutterWaveButton, closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { usePaymentStore } from "@/store";
import { useDonationStore } from "@/store";

export default function Payment() {
  const user = currentClientUser();
  const router = useRouter();
  const { ispaymentModalOpen, toggleIspaymentModalOpen } = useModalStore();
  const { projectName, projectId } = usePaymentStore();
  const { setDonation } = useDonationStore();
  // Initialize formData with empty values
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  // Helper function to get email
  const getEmail = () => {
    if (user) {
      return user.email;
    }
    return formData.email;
  };

  // Helper function to get name
  const getName = () => {
    if (user) {
      return user.firstName || user.name.split(' ')[0];
    }
    return formData.name;
  };

  // Config for USD, EUR, and GBP
  const internationalConfig = {
    public_key: "FLWPUBK-8a39a03b93aa0a28e7a0dcd710ce5df3-X",
    tx_ref: Date.now(),
    amount: formData?.amount,
    currency: selectedCurrency,
    payment_options: "card",
    customer: {
      email: getEmail(),
      phone_number: formData?.phone,
      name: getName()
    },
    customizations: {
      title: "Mendafrica",
      description: "Impacting lives, one outreach at a time",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  // Config for NGN
  const ngnConfig = {
    ...internationalConfig,
    currency: "NGN",
    payment_options: "card,banktransfer,opay,ussd,account",
  };

  // Get the appropriate config based on currency
  const getConfig = () => {
    return selectedCurrency === 'NGN' ? ngnConfig : internationalConfig;
  };

  const handleFlutterPayment = useFlutterwave(getConfig());

  const handleOverlayClick = () => {
    toggleIspaymentModalOpen();
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = getEmail();
    const name = getName();
    const { phone, amount } = formData;

    if (!email) {
      toast.error("Please enter email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
      return;
    }

    if (!name) {
      toast.error("Please enter name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
      return;
    }

    if (!amount) {
      toast.error("Please enter amount", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
      return;
    }

    if (!phone) {
      toast.error("Please enter phone number!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
      return;
    }

    if (user) {
      setDonation(user.id || null, projectId || null, formData.amount, selectedCurrency)
    }
    handleFlutterPayment({
      ...getConfig(),
      callback: (response) => {
        console.log(`response: ${JSON.stringify(response, null, 2)}`)
        if (response.status === "completed") {
          
          toggleIspaymentModalOpen()
          router.push('/thankyou')
        }
        closePaymentModal();
        setLoading(false);
      },
      onClose: () => {
        setLoading(false);
      },
    });
  };

  return (
    <div className={`payment-modal ${!ispaymentModalOpen && "hidden"}`}>
      <div className="payment-overlay" onClick={handleOverlayClick}></div>
      <div className="modal-content" onClick={handleModalContentClick}>
        <div className="top">
         {
          projectName ?  <h1>Project: {projectName}</h1> : <h1>Thanks for giving to MendAfrica</h1>
         }
          <p>Your giving spreads out kindness to Africa and globally</p>
        </div>
        <form className="form">
          <div className="others">
            <div className="formHolder">
              <h2>Name</h2>
              <div className="input">
                {user ? (
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    disabled={true}
                    value={user.firstName || user.name.split(' ')[0]}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Enter Your name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                )}
              </div>
            </div>
            <div className="formHolder">
              <h2>Email</h2>
              <div className="input">
                {user ? (
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    disabled={true}
                    value={user.email}
                  />
                ) : (
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                )}
              </div>
            </div>
            <div className="formHolder">
              <h2>Phone Number</h2>
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
            </div>
            <div className="formHolder">
              <h2>Currency</h2>
              <div className="input">
                <select
                  name="currency"
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="currency-select"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="NGN">NGN</option>
                </select>
              </div>
            </div>
            <div className="formHolder">
              <h2>Amount</h2>
              <div className="input">
                <input
                  type="number"
                  placeholder={`Enter Amount in ${selectedCurrency}`}
                  name="amount"
                  onChange={handleChange}
                  value={formData.amount}
                />
              </div>
            </div>
            <div className="bottom">
              <button onClick={handlePayment}>
                {loading ? <ComponentLevelLoader color={"#ffffff"} /> : "Pay"}
              </button>
              <p>
                <span>Sign in</span> to MendAfrica to track your givings
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
