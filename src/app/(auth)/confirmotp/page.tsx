import { ChevronLeftIcon } from "lucide-react";
import OtpForm from "./otp-form";
import DisplayUserInfo from "./display-user-info";
import GoBackBtn from "./go-back-btn";

const ConfirmOtp = () => {
  
  return (
    <div className="flex h-[90dvh] flex-col items-center justify-center">
      <div className="flex w-[95%] max-w-xl flex-col gap-2">
        <GoBackBtn />
        <div>
          <h2 className="text-center font-bold text-intellibin-primary">
            Enter confirmation code
          </h2>
          <DisplayUserInfo />
        </div>
        <OtpForm />
      </div>
    </div>
  );
};

export default ConfirmOtp;
