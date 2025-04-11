import "./globals.css";
import { Nunito } from "next/font/google";
import { Poppins } from "next/font/google";
import { Mukta_Vaani } from "next/font/google";
import Footer from "@/components/footer/Footer";
import SignUp from "@/components/modals/signup/Signup";
import Member from "@/components/modals/member/Member";
import EmailVerificationPrompt from "@/components/modals/emailVerification/EmailVerificationPrompt";
import SignIn from "@/components/modals/signin/Signin";
import VerificationSuccess from "@/components/modals/verificationSuccess/VerificationSuccess";
import OTPInputForm from "@/components/modals/otp/OTPInputForm";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "@/components/paystack/payment/Payment";
import MobileNavbar from "@/components/mobileNavMenu/MobileNavMenu";
import { GoalModal } from "@/components/modals/goal/GoalModal";
import GoalSuccess from "@/components/modals/goalSuccess/GoalSuccess";
import GoalProgress from "@/components/modals/goalProgress/GoalProgress";
import QueryProvider from "@/components/QueryProvider";
import ForgotPasswordForm from "@/components/modals/forgotPassword/Forgot-password-form";


const nunito = Nunito({
  // variable: "--font-nunito",
  subsets: ["latin"],
});
const poppins = Poppins({
  // variable: "--font-nunito",
  weight: "600",
  subsets: ["latin"],
});

const mukta_Vaani = Mukta_Vaani({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
})


export const metadata = {
  title: "Mendafrica",
  description: "Give to projects impacting Africa",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <QueryProvider>
          <body>
            <ToastContainer />
          <SignUp />
          <SignIn />
          <EmailVerificationPrompt />
          <OTPInputForm />
          <Member />
          <VerificationSuccess />
          <MobileNavbar />
          <Payment />
          <GoalModal />
          <GoalSuccess />
          <ForgotPasswordForm />
            {children}
            <Footer />
          </body>
        </QueryProvider>
      </html>
    </SessionProvider>
  );
}
