"use client";
import { useState, useEffect } from "react";

export default function DisplayUserInfo() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    phoneNumber: "",
  });
  useEffect(() => {
    const getUserInfo = localStorage.getItem("intellibin_register");
    const intellibinRegisterResponse = getUserInfo
      ? (JSON.parse(getUserInfo) as { email: string; phone_number: string })
      : "";
    if (intellibinRegisterResponse) {
      setUserInfo({
        email: intellibinRegisterResponse.email,
        phoneNumber: intellibinRegisterResponse.phone_number,
      });
    }
  }, []);
  return (
    <div>
      <p className="text-center text-sm text-intellibingrey-200">
        A 4-digit code was sent to{" "}
        {userInfo.phoneNumber ? userInfo.phoneNumber.substring(0, 4) : null}
        xxxxxx
        {userInfo.phoneNumber
          ? userInfo.phoneNumber.substring(9)
          : null} and{" "}
        {userInfo.email ? userInfo.email.split("@")[0].substring(0, 4) : null}
        xxxxxxx@{userInfo.email ? userInfo.email.split("@")[1] : null}
      </p>
    </div>
  );
}
