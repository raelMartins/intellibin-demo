"use client";

import { ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { confirmOtp, resendOtp } from "../actions";
import { useToast } from "~/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "~/lib/utils";

export default function OtpForm() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [otpStatus, setOtpStatus] = useState<"idle" | "error" | "confirming">(
    "idle",
  );
  const [otpStatusResend, setOtpStatusResend] = useState<
    "idle" | "error" | "resending"
  >("idle");

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsExpired(true);
    }
  }, [timeLeft]);

  const startTimer = () => {
    setTimeLeft(60);
    setIsExpired(false);
  };

  // Format the timeLeft to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const onSubmitConfirmOtp = async () => {
    if (otpStatus === "confirming") return;
    if (!otp) {
      toast({ description: "Please type in your OTP" });
      return;
    }

    setOtpStatus("confirming");
    const getUserEmailFromLocalStorage = localStorage.getItem(
      "intellibin_register",
    );
    const userInfo = getUserEmailFromLocalStorage
      ? (JSON.parse(getUserEmailFromLocalStorage) as {
          email: string;
          phone_number: string;
        })
      : null;

    if (!userInfo) {
      toast({ description: "Email has not been set, please resend OTP" });
      setOtpStatus("idle");
      return;
    }

    try {
      const { status, message } = await confirmOtp({
        email: userInfo.email,
        otp,
      });

      if (status === "error") {
        toast({
          description: message ?? "Could not confirm OTP",
          variant: "destructive",
        });
        setOtpStatus("idle");
        return;
      }

      toast({
        description: message ?? "OTP confirmed successfully",
        variant: "default",
      });
      setOtpStatus("idle");
      router.push("/login");
    } catch (error) {
      setOtpStatus("idle");
      toast({
        description: "Server Error, could not confirm OTP",
        variant: "destructive",
      });
    }
  };

  const onSubmitResendOtp = async () => {
    if (otpStatusResend === "resending") return;

    const getUserEmailFromLocalStorage = localStorage.getItem(
      "intellibin_register",
    );
    const userInfo = getUserEmailFromLocalStorage
      ? (JSON.parse(getUserEmailFromLocalStorage) as {
          email: string;
          phone_number: string;
        })
      : null;

    if (!userInfo) {
      toast({ description: "Email has not been set, please resend OTP" });
      setOtpStatusResend("idle");
      return;
    }

    try {
      setOtpStatusResend("resending");
      const { status, message } = await resendOtp(userInfo.email);
      if (status === "error") {
        toast({
          description: message ?? "Could not resend OTP",
          variant: "destructive",
        });
        setOtpStatusResend("idle");
        return;
      }

      toast({
        description: message ?? "OTP resent successfully",
        variant: "default",
      });
      setOtpStatusResend("idle");
      startTimer(); // Restart the timer on successful resend
    } catch (error) {
      setOtpStatusResend("idle");
      toast({
        description: "Server Error, could not resend OTP",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      className="flex w-full flex-col items-center gap-4 pt-8"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitConfirmOtp();
      }}
    >
      <InputOTP maxLength={6} value={otp} onChange={(e) => setOtp(e)}>
        <InputOTPGroup className="flex gap-2 rounded-xl first:rounded-xl first:rounded-l-xl last:rounded-r-xl">
          <InputOTPSlot
            index={0}
            className="rounded-xl border border-solid border-intellibingrey-400"
          />
          <InputOTPSlot
            index={1}
            className="rounded-xl border border-solid border-intellibingrey-400"
          />
          <InputOTPSlot
            index={2}
            className="rounded-xl border border-solid border-intellibingrey-400"
          />
          <InputOTPSlot
            index={3}
            className="rounded-xl border border-solid border-intellibingrey-400"
          />
          <InputOTPSlot
            index={4}
            className="rounded-xl border border-solid border-intellibingrey-400"
          />
          <InputOTPSlot
            index={5}
            className="rounded-xl border border-solid border-intellibingrey-400"
          />
        </InputOTPGroup>
      </InputOTP>
      <p className="max-w-[327px] text-center text-sm text-intellibingrey-200">
        Note: If the code is not in your inbox, please check your email&apos;s
        spam folder.
      </p>

      <p className="mt-4 text-xs">Didn&apos;t get a code?</p>
      <div className="flex w-full items-center justify-around">
        <div
          className={cn(
            "flex items-center gap-1 text-intellibingrey-300",
            isExpired ? "text-red-500" : "",
          )}
        >
          <span>
            <ClockIcon className="h-3 w-3" />
          </span>
          <span className="text-[0.625rem]">{formatTime(timeLeft)}</span>
        </div>

        <button
          className="font-bold text-intellibin-primary disabled:opacity-15"
          disabled={!isExpired}
          type="button"
          onClick={onSubmitResendOtp}
        >
          {otpStatusResend === "resending"
            ? "Resending Code..."
            : " Resend Code"}
        </button>
      </div>
      <Button
        className="w-full max-w-[342px] bg-intellibin-primary"
        disabled={isExpired}
      >
        Continue
      </Button>
    </form>
  );
}
