import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-6">
      <h1 className="mb-6 text-2xl font-semibold md:text-3xl">Profile</h1>

      <div className="flex w-full flex-row items-center gap-16 rounded-lg">
        <div className="relative mb-4 flex h-[196px] w-[240px] items-center justify-center rounded-[24px] bg-gray-200">
          <Image src="/images/user.svg" alt="" width={240} height={240} />
          <div className="absolute bottom-[16px] right-[16px] flex h-6 w-6 items-center justify-center rounded-[24px] bg-green-500">
            <Image src="/images/Edit.svg" alt="" width={240} height={240} />
          </div>
        </div>

        <div className="mr-20 flex flex-col items-start gap-4 text-left">
          <h2 className="text-lg font-bold md:text-xl">James Ben</h2>
          <p className="text-sm text-gray-500 md:text-base">ID A00112233</p>
          <p className="text-sm text-gray-500 md:text-base">
            jbennjoku@gmail.com
          </p>
          <p className="text-sm text-gray-500 md:text-base">
            +234 809 838 5425
          </p>
          <p className="flex items-center justify-center gap-2 text-sm text-gray-500 md:text-base">
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7v6a2 2 0 002 2h.002A2 2 0 0120 17v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1a2 2 0 01.001-2H4a2 2 0 002-2V7h13zM7 10h.01M7 12h.01M7 14h.01M12 10h.01M12 12h.01M12 14h.01M16 10h.01M16 12h.01M16 14h.01M12 18v.01"
              ></path>
            </svg>
            3
          </p>
        </div>
      </div>

      <div className="mt-8 w-full">
        {[
          "Edit Profile",
          "Subscriptions",
          "Help & Support",
          "About Intellibin",
          "Password Reset",
        ].map((item) => (
          <button
            key={item}
            className="color-[#1F2024] mb-2 flex w-full items-center justify-between rounded-md bg-[#ECFDF5] px-4 py-3 text-left text-sm md:text-base"
          >
            {item}
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        ))}
      </div>

      <button className="mt-4 text-sm text-red-500 hover:text-red-600 md:text-base">
        Log Out
      </button>
    </div>
  );
};

///

import Head from "next/head";
import styles from "./style.module.css";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
import { FaEdit, FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import {
  IoCallOutline,
  IoChevronForward,
  IoMailOutline,
} from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";

const IntellibinLogo = () => {
  return (
    <svg
      width="185"
      height="48"
      viewBox="0 0 185 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.717 26.6727C50.45 26.7945 48.0372 29.4415 47.3251 30.0506C47.222 30.1396 47.1799 30.1724 47.0768 30.2754C46.7254 30.6221 46.7114 30.8892 46.4865 31.4654C45.9712 32.796 45.3668 33.8735 44.6266 35.0448C44.3923 35.4149 43.2539 36.989 42.8978 37.3404C42.7666 37.4669 42.776 37.4435 42.6682 37.5793C42.5324 37.748 42.4106 37.9167 42.256 38.0572C42.0451 38.2446 41.9655 38.268 41.7968 38.4835C41.3846 38.9942 39.7964 40.231 39.3232 40.5637C38.8219 40.9197 35.9453 42.6907 35.2191 42.7937C34.9333 42.8359 34.7272 42.6672 34.6663 42.4424C34.6007 42.194 35.6173 33.3347 35.6923 32.6086C35.8001 31.531 35.9219 30.4394 36.039 29.3759C36.2217 27.7456 36.2639 27.9517 33.9963 27.9517C31.682 27.9517 31.8647 27.6565 31.771 29.3853C31.7101 30.5238 31.6304 31.6997 31.5929 32.8288C31.518 35.0963 31.34 37.4013 31.2322 39.6735C31.1244 41.9551 31.012 44.2648 30.8668 46.537C30.7731 48.0034 31.0448 47.8348 32.975 47.4037C36.7417 46.5558 40.0821 44.8551 42.9634 42.4845C43.0712 42.3955 43.0946 42.3487 43.2117 42.2596L43.6802 41.8427C44.3314 41.3367 44.5657 40.9057 45.067 40.5075C45.6713 40.0249 47.6296 37.3029 47.8686 36.9188C49.6395 34.1031 50.8201 31.1187 51.3495 27.7409C51.387 27.4879 51.4854 27.1599 51.387 26.9163C51.3074 26.7336 50.9981 26.5462 50.717 26.6727ZM24.9075 28.022C24.4624 28.2562 24.6264 28.5748 24.6639 29.3197C24.6873 29.7929 24.7013 30.2661 24.7294 30.7346C25.0246 35.6725 25.2214 40.6527 25.5259 45.586C25.5587 46.0826 25.5821 46.5745 25.6055 47.0711C25.6524 48.0924 25.9007 48.0034 27.7794 47.9941C28.4259 47.9941 28.5618 47.9004 28.5946 47.2491C28.7913 43.2997 29.0724 39.3268 29.2317 35.3727C29.3114 33.4191 29.4613 31.4467 29.5409 29.4931C29.6112 27.7221 29.7799 27.9423 27.9527 27.9423C27.3811 27.9423 25.2635 27.8393 24.9075 28.022ZM7.34347 24.1709L7.40437 22.5733C7.4278 22.2922 7.41374 22.3016 7.34347 22.1938L5.38983 24.2037C4.12488 25.5061 2.7147 26.8086 1.38417 28.125C0.747011 28.7575 -0.803719 29.9053 0.517447 30.252L4.38256 31.2968C4.70582 31.3905 4.80889 31.442 4.92133 31.7606C5.76931 34.2155 6.90776 36.3566 8.34606 38.2727C8.58967 38.596 9.82651 40.1701 10.1498 40.4372C10.3934 40.6433 10.9415 41.1821 11.1289 41.4117C11.41 41.7583 12.9654 42.9999 13.2747 43.2294C15.2096 44.6583 17.4443 45.8905 19.768 46.6776C23.7831 48.0362 23.3989 47.6286 23.338 46.0592C23.263 44.143 23.0991 42.2831 23.0335 40.3294C22.9492 37.837 22.7664 35.2837 22.6259 32.796C22.5556 31.5544 22.4994 30.3129 22.4338 29.0714C22.3916 28.2609 22.4807 27.9283 21.5671 27.933C20.8971 27.9376 20.2272 27.933 19.5525 27.933C17.7863 27.933 17.9971 27.8018 18.2689 30.2099L19.4448 41.0181C19.6041 42.5642 19.3417 42.6157 17.6785 41.6506C16.676 41.065 15.0362 39.9687 14.2351 39.1816C14.0664 39.0129 13.8743 38.8911 13.6869 38.7225C13.4995 38.5538 13.3777 38.3477 13.1997 38.2071C12.9701 38.0244 12.8952 37.9448 12.7218 37.7386L12.2486 37.2092C12.0987 37.0218 11.9582 36.8344 11.8083 36.6423C9.33927 33.5128 7.34347 29.2588 7.34347 24.1709Z"
        fill="#134E4A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.155 10.8469C12.5064 10.533 13.4481 9.42734 14.0384 8.94948C14.1977 8.82298 14.2867 8.70586 14.4413 8.58405C16.0764 7.28162 16.9993 6.59761 19.131 5.58097C22.045 4.19422 25.7462 3.45399 29.4098 3.78662C29.4098 4.66272 27.4421 8.20456 26.6457 9.24931C25.6946 10.4862 24.7202 11.6715 23.5208 12.6928C21.9841 14.0046 20.4615 14.9697 18.5032 15.8973C16.0576 17.0545 11.4944 18.0852 8.3883 17.5886C8.80058 15.9816 10.089 13.6673 11.0353 12.3367C11.2133 12.0837 11.4054 11.8448 11.5881 11.5871C11.7428 11.3716 12.066 11.0483 12.155 10.8469ZM43.1321 10.9312C43.9895 12.0181 44.5892 12.7724 45.3013 14.0421C45.9384 15.1852 46.4725 16.3611 46.9223 17.7432C47.9202 20.7837 48.131 23.7915 47.6672 27.1272C47.8827 27.0241 51.5557 23.234 52.385 22.386L53.9873 20.7931C54.5167 20.2497 55.2241 19.7671 54.8493 19.2846C54.6759 19.0597 51.3918 18.2164 50.9092 18.132C50.5906 16.8202 50.0893 15.3773 49.5553 14.2201C49.1851 13.4143 48.2013 11.4325 47.6766 10.8047C47.1987 9.99423 45.7885 8.2233 45.1467 7.55804C43.5491 5.90424 41.7782 4.46126 39.773 3.28533C31.4478 -1.58705 20.6911 -1.00611 13.2045 4.80327C12.736 5.16401 11.4476 6.19002 11.1196 6.56013C10.5528 7.20666 10.267 7.35658 9.72821 8.01248C9.06294 8.82767 8.15874 9.7834 7.59186 10.8C6.97812 11.4231 5.59137 14.4403 5.28216 15.2227C4.7059 16.6797 4.03595 18.8816 3.88135 20.5636C11.4944 22.4141 18.1237 21.1211 24.2142 16.8765C25.4744 16.0004 27.1985 14.4356 28.1917 13.2831C28.6555 12.7443 29.6488 11.5168 29.9767 10.9734C30.0048 10.9265 30.061 10.8891 30.0845 10.9546C30.6045 12.1774 31.9397 14.1123 32.7549 15.1102C32.9798 15.3866 33.1578 15.6209 33.3686 15.8598C33.8278 16.3752 34.2588 16.8156 34.7367 17.2747L37.735 19.7812C38.3441 20.2215 40.4664 21.5942 41.2675 21.8144C41.5346 19.8093 41.7032 18.1508 41.558 16.0753C41.4502 14.5293 41.1223 12.2149 40.6304 10.875C40.2275 9.35238 39.6184 8.33574 39.356 7.48776C40.2696 7.83914 42.2842 9.98486 43.1321 10.9312ZM37.6648 13.4002C37.9271 14.2997 38.1426 15.2836 38.2691 16.2534C37.8334 16.0472 36.3998 14.3091 35.9641 13.7375C34.6992 12.0884 33.453 9.75061 32.8158 7.77354C32.5488 6.9443 32.0053 5.08905 31.9959 4.18953L33.3827 5.60908C34.3946 6.93025 34.7132 7.08485 35.7767 8.95416C36.5357 10.4346 37.1916 11.7792 37.6648 13.4002Z"
        fill="#047857"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2289 23.0091C16.7229 23.1262 16.84 23.6228 16.84 24.1663C16.84 26.1059 16.6198 26.4713 17.599 26.4666C19.3465 26.4572 37.4071 26.5275 37.7538 26.4479C38.227 26.3401 38.1192 25.792 38.1192 25.2907C38.1192 22.639 38.48 22.995 35.8283 22.995C34.643 22.9997 17.524 22.9435 17.2289 23.0091Z"
        fill="#FB923C"
      />
      <path
        d="M73.9795 19.9023C73.9795 19.4596 73.8135 19.2383 73.4814 19.2383C73.1559 19.2383 72.749 19.2969 72.2607 19.4141C71.779 19.5312 71.2614 19.7135 70.708 19.9609C69.445 20.5273 68.3024 21.3086 67.2803 22.3047C67.1436 22.4219 66.958 22.4805 66.7236 22.4805C66.4958 22.4805 66.3037 22.4251 66.1475 22.3145C65.9912 22.1973 65.9131 22.0475 65.9131 21.8652C65.9131 21.6829 65.9521 21.4909 66.0303 21.2891C66.1084 21.0807 66.1898 20.8366 66.2744 20.5566C66.359 20.2702 66.4469 19.987 66.5381 19.707C66.7725 19.0365 66.9906 18.5938 67.1924 18.3789C67.5635 18.0729 68.5563 17.7344 70.1709 17.3633C71.9613 16.9531 73.7126 16.748 75.4248 16.748C76.141 16.748 76.7334 17.0117 77.2021 17.5391C77.6058 17.9948 77.8076 18.4733 77.8076 18.9746C77.8076 19.4043 77.4886 20.4232 76.8506 22.0312C75.8415 24.5964 74.8096 26.6016 73.7549 28.0469C73.4619 28.4505 73.1722 28.7793 72.8857 29.0332C72.4691 29.3587 71.9222 29.6322 71.2451 29.8535C70.0993 30.2376 69.3538 30.4297 69.0088 30.4297C68.6702 30.4297 68.335 30.3841 68.0029 30.293C67.6709 30.2083 67.3486 30.0977 67.0361 29.9609C66.7301 29.8177 66.4437 29.6582 66.1768 29.4824C65.9098 29.3001 65.6755 29.1211 65.4736 28.9453C65.0439 28.5612 64.8291 28.2487 64.8291 28.0078C64.8291 27.7799 65.1058 27.4121 65.6592 26.9043C66.2256 26.3835 66.6911 26.123 67.0557 26.123C67.3031 26.123 67.6025 26.2174 67.9541 26.4062L68.7061 26.8359C68.8688 26.9206 69.012 26.9629 69.1357 26.9629C69.266 26.9629 69.445 26.8717 69.6729 26.6895C69.9007 26.5007 70.1449 26.2533 70.4053 25.9473C70.6657 25.6413 70.9326 25.2897 71.2061 24.8926C71.486 24.4954 71.7562 24.0885 72.0166 23.6719C72.2835 23.2487 72.5342 22.8288 72.7686 22.4121C73.0094 21.9954 73.2178 21.6146 73.3936 21.2695C73.7842 20.5208 73.9795 20.0651 73.9795 19.9023ZM88.9502 24.7559C88.9502 25.3483 89.1227 25.6445 89.4678 25.6445C90.3141 25.6445 91.4144 25.0716 92.7686 23.9258L93.0322 23.7012C93.5596 23.3496 93.986 23.1738 94.3115 23.1738C94.6436 23.1738 94.8519 23.2227 94.9365 23.3203C95.0277 23.418 95.0732 23.5742 95.0732 23.7891C95.0732 24.2708 94.8291 24.7819 94.3408 25.3223C93.6117 26.2077 92.6123 27.0475 91.3428 27.8418C89.8714 28.7663 88.5531 29.2285 87.3877 29.2285C86.5739 29.2285 86.0628 28.776 85.8545 27.8711C85.7959 27.6367 85.7536 27.4121 85.7275 27.1973C85.6624 26.6764 85.5941 26.3867 85.5225 26.3281C85.4508 26.2695 85.3076 26.276 85.0928 26.3477C84.8844 26.4128 84.6338 26.5267 84.3408 26.6895C84.0544 26.8457 83.7354 27.0378 83.3838 27.2656C81.5218 28.5026 80.4508 29.209 80.1709 29.3848C79.5003 29.8014 79.0479 30.0098 78.8135 30.0098C78.5791 30.0098 78.348 29.9609 78.1201 29.8633C77.8988 29.7656 77.7035 29.6419 77.5342 29.4922C77.1826 29.1602 77.0068 28.8216 77.0068 28.4766C77.0068 26.5039 77.4365 24.7786 78.2959 23.3008C78.8688 22.3047 79.5719 21.6146 80.4053 21.2305C80.8285 21.0286 81.2842 20.9277 81.7725 20.9277C82.6644 20.9277 83.1104 21.2207 83.1104 21.8066C83.1104 22.1647 82.8988 22.7507 82.4756 23.5645L82.1826 24.1406C81.9743 24.5378 81.8734 24.7624 81.8799 24.8145C81.9189 25.0098 82.0068 25.1074 82.1436 25.1074C82.2933 25.1074 82.5146 24.9967 82.8076 24.7754L84.6045 23.4375L85.5029 22.8125C86.5381 22.1354 87.2998 21.7969 87.7881 21.7969C88.0485 21.7969 88.2861 21.901 88.501 22.1094C88.8981 22.487 89.0967 22.8158 89.0967 23.0957C89.0967 23.1868 89.0869 23.2975 89.0674 23.4277C89.0544 23.5579 89.0381 23.6979 89.0186 23.8477L88.9795 24.3066C88.96 24.4629 88.9502 24.6126 88.9502 24.7559ZM103.833 23.3105C104.471 23.3105 104.79 23.5319 104.79 23.9746C104.79 24.3978 104.491 24.9447 103.892 25.6152L103.413 26.1133C102.834 26.7057 102.157 27.2884 101.382 27.8613C100.614 28.4342 99.9365 28.8867 99.3506 29.2188C97.9899 29.974 96.7562 30.3516 95.6494 30.3516C94.6077 30.3516 93.7581 30.0391 93.1006 29.4141C92.5342 28.8737 92.251 28.304 92.251 27.7051C92.251 27.1061 92.3096 26.5104 92.4268 25.918C92.5439 25.3255 92.6969 24.7461 92.8857 24.1797C93.2633 23.0273 93.6768 22.0475 94.126 21.2402C94.2432 21.0189 94.3018 20.8757 94.3018 20.8105H93.042C92.5667 20.8105 92.1989 20.6999 91.9385 20.4785C91.6781 20.2572 91.5479 20.0065 91.5479 19.7266C91.5479 19.4466 91.5999 19.2415 91.7041 19.1113C91.8083 18.9811 91.9385 18.8867 92.0947 18.8281C92.3161 18.737 92.6416 18.6914 93.0713 18.6914L95.4639 18.7012C95.516 18.6816 95.6201 18.5417 95.7764 18.2812L96.3721 17.2559C96.626 16.8001 96.8799 16.4648 97.1338 16.25C97.3942 16.0352 97.6969 15.9277 98.042 15.9277C98.3936 15.9277 98.6865 15.9603 98.9209 16.0254C99.1618 16.0905 99.3636 16.1719 99.5264 16.2695C99.8454 16.4779 100.005 16.7057 100.005 16.9531C100.005 17.0573 99.9691 17.1973 99.8975 17.373L99.3506 18.7012L103.989 18.6914C104.393 18.6914 104.595 18.8997 104.595 19.3164C104.595 20.306 103.713 20.8008 101.948 20.8008L98.374 20.8105C98.2959 20.8496 98.1624 21.0384 97.9736 21.377L97.5342 22.1875C97.4235 22.3893 97.3454 22.5423 97.2998 22.6465L97.085 23.125C96.6488 24.1081 96.4307 24.8177 96.4307 25.2539C96.4307 25.6901 96.5446 26.0547 96.7725 26.3477C97.0068 26.6406 97.3161 26.7871 97.7002 26.7871C98.0843 26.7871 98.4587 26.7122 98.8232 26.5625C99.1943 26.4128 99.5557 26.2305 99.9072 26.0156C100.545 25.6185 101.047 25.2507 101.411 24.9121C101.776 24.5736 102.078 24.3164 102.319 24.1406C102.319 24.1406 102.547 23.9811 103.003 23.6621C103.354 23.4277 103.631 23.3105 103.833 23.3105ZM116.509 22.8223C116.821 22.8223 116.978 22.998 116.978 23.3496C116.978 23.584 116.896 23.8802 116.733 24.2383C116.577 24.5898 116.349 24.9219 116.05 25.2344C115.75 25.5404 115.405 25.8594 115.015 26.1914C114.631 26.5234 114.178 26.8717 113.657 27.2363C113.143 27.6009 112.573 27.9622 111.948 28.3203C111.323 28.6784 110.659 29.0007 109.956 29.2871C108.4 29.9251 106.893 30.2441 105.435 30.2441C104.321 30.2441 103.348 29.9544 102.515 29.375C101.642 28.7695 101.206 28.0339 101.206 27.168C101.206 25.8073 101.938 24.515 103.403 23.291C104.666 22.2363 106.154 21.4193 107.866 20.8398C108.908 20.4883 109.79 20.3125 110.513 20.3125C111.099 20.3125 111.593 20.4557 111.997 20.7422C112.427 21.0547 112.642 21.4746 112.642 22.002C112.642 22.8288 111.987 23.7435 110.679 24.7461C110.47 24.9089 110.282 25.0456 110.112 25.1562L109.761 25.3906C109.11 25.8464 108.12 26.3574 106.792 26.9238C107.202 27.1387 107.583 27.2461 107.935 27.2461C108.293 27.2461 108.612 27.2038 108.892 27.1191C109.178 27.0345 109.5 26.9141 109.858 26.7578C110.216 26.6016 110.597 26.416 111.001 26.2012C111.411 25.9798 111.825 25.7389 112.241 25.4785C113.172 24.8991 113.979 24.3066 114.663 23.7012C115.021 23.3691 115.477 23.1055 116.03 22.9102C116.213 22.8516 116.372 22.8223 116.509 22.8223ZM105.737 25.5664L106.274 25.293C106.45 25.2018 106.606 25.1172 106.743 25.0391C108.058 24.2839 108.807 23.8184 108.989 23.6426C109.172 23.4668 109.263 23.3464 109.263 23.2812C109.263 23.2096 109.243 23.1283 109.204 23.0371C109.165 22.946 109.113 22.8646 109.048 22.793C108.892 22.6107 108.726 22.5195 108.55 22.5195C108.374 22.5195 108.179 22.5521 107.964 22.6172C107.756 22.6823 107.544 22.7734 107.329 22.8906C107.114 23.0013 106.906 23.138 106.704 23.3008C106.509 23.457 106.336 23.6263 106.187 23.8086C105.841 24.2188 105.669 24.5736 105.669 24.873C105.669 25.1725 105.692 25.4036 105.737 25.5664ZM126.167 23.1055C126.584 23.1055 126.792 23.278 126.792 23.623C126.792 24.0462 126.538 24.5508 126.03 25.1367C125.19 26.1133 124.201 27.0638 123.062 27.9883C121.206 29.4727 119.549 30.2148 118.091 30.2148C117.043 30.2148 116.183 29.7591 115.513 28.8477C114.816 27.8971 114.468 26.6211 114.468 25.0195C114.468 22.9167 115.493 20.5924 117.544 18.0469C118.846 16.4258 120.073 15.3255 121.226 14.7461C121.584 14.5638 121.857 14.4727 122.046 14.4727C122.241 14.4727 122.417 14.5052 122.573 14.5703C122.736 14.6289 122.886 14.7135 123.022 14.8242C123.341 15.0911 123.501 15.4134 123.501 15.791C123.501 16.1686 123.397 16.6178 123.188 17.1387C122.98 17.653 122.677 18.2031 122.28 18.7891C121.44 20.0326 120.304 21.224 118.872 22.3633C118.501 23.0729 118.315 23.9258 118.315 24.9219C118.315 25.3711 118.459 25.7943 118.745 26.1914C119.038 26.5885 119.36 26.7871 119.712 26.7871C120.194 26.7871 121.115 26.2891 122.476 25.293L124.214 23.9551C124.924 23.3887 125.575 23.1055 126.167 23.1055ZM136.147 23.1055C136.564 23.1055 136.772 23.278 136.772 23.623C136.772 24.0462 136.519 24.5508 136.011 25.1367C135.171 26.1133 134.181 27.0638 133.042 27.9883C131.187 29.4727 129.53 30.2148 128.071 30.2148C127.023 30.2148 126.164 29.7591 125.493 28.8477C124.797 27.8971 124.448 26.6211 124.448 25.0195C124.448 22.9167 125.474 20.5924 127.524 18.0469C128.826 16.4258 130.054 15.3255 131.206 14.7461C131.564 14.5638 131.838 14.4727 132.026 14.4727C132.222 14.4727 132.397 14.5052 132.554 14.5703C132.716 14.6289 132.866 14.7135 133.003 14.8242C133.322 15.0911 133.481 15.4134 133.481 15.791C133.481 16.1686 133.377 16.6178 133.169 17.1387C132.961 17.653 132.658 18.2031 132.261 18.7891C131.421 20.0326 130.285 21.224 128.853 22.3633C128.481 23.0729 128.296 23.9258 128.296 24.9219C128.296 25.3711 128.439 25.7943 128.726 26.1914C129.019 26.5885 129.341 26.7871 129.692 26.7871C130.174 26.7871 131.095 26.2891 132.456 25.293L134.194 23.9551C134.904 23.3887 135.555 23.1055 136.147 23.1055ZM143.071 18.7109C142.882 18.8672 142.677 18.9974 142.456 19.1016C142.235 19.1992 141.987 19.248 141.714 19.248C141.44 19.248 141.177 19.2025 140.923 19.1113C140.669 19.0202 140.448 18.8932 140.259 18.7305C139.849 18.3789 139.644 17.9297 139.644 17.3828C139.644 16.543 140.347 15.918 141.753 15.5078C142.228 15.3646 142.619 15.293 142.925 15.293C143.231 15.293 143.459 15.3288 143.608 15.4004C143.765 15.4655 143.892 15.5534 143.989 15.6641C144.185 15.8854 144.282 16.1133 144.282 16.3477C144.282 16.5755 144.253 16.7839 144.194 16.9727C144.142 17.1615 144.064 17.3568 143.96 17.5586C143.856 17.7604 143.729 17.9622 143.579 18.1641C143.429 18.3659 143.26 18.5482 143.071 18.7109ZM140.61 29.4629C140.116 29.7168 139.634 29.9186 139.165 30.0684C138.696 30.2246 138.234 30.3027 137.778 30.3027C137.329 30.3027 136.86 30.1953 136.372 29.9805C135.89 29.7591 135.461 29.4661 135.083 29.1016C134.243 28.2878 133.823 27.3828 133.823 26.3867C133.823 25.4688 134.097 24.5378 134.644 23.5938C135.145 22.7409 135.783 22.0247 136.558 21.4453C137.332 20.8659 138.052 20.5762 138.716 20.5762C139.666 20.5762 140.174 20.8431 140.239 21.377C140.259 21.5397 140.269 21.7285 140.269 21.9434C140.269 22.1582 140.216 22.4056 140.112 22.6855C140.015 22.959 139.884 23.2357 139.722 23.5156C139.565 23.7891 139.39 24.0592 139.194 24.3262C139.006 24.5866 138.823 24.8242 138.647 25.0391C138.309 25.4492 138.039 25.7454 137.837 25.9277C137.837 26.1491 138.003 26.377 138.335 26.6113C138.647 26.8327 138.911 26.9434 139.126 26.9434C139.347 26.9434 139.604 26.8913 139.897 26.7871C140.197 26.6829 140.503 26.543 140.815 26.3672C141.134 26.1914 141.457 25.9896 141.782 25.7617C142.114 25.5339 142.44 25.2995 142.759 25.0586L144.546 23.6621C145.256 23.1478 145.832 22.8906 146.274 22.8906C146.45 22.8906 146.584 22.9557 146.675 23.0859C146.772 23.2096 146.821 23.3561 146.821 23.5254C146.821 23.6947 146.737 23.929 146.567 24.2285C146.398 24.5215 146.164 24.847 145.864 25.2051C145.571 25.5632 145.226 25.9375 144.829 26.3281C144.432 26.7188 144.002 27.1029 143.54 27.4805C143.078 27.8581 142.596 28.2194 142.095 28.5645C141.6 28.903 141.105 29.2025 140.61 29.4629ZM153.804 24.0625C153.804 23.8672 153.667 23.7695 153.394 23.7695C153.12 23.7695 152.821 23.8216 152.495 23.9258C152.17 24.0299 151.812 24.1667 151.421 24.3359C151.03 24.5052 150.623 24.6973 150.2 24.9121C149.777 25.127 149.37 25.3451 148.979 25.5664C148.14 26.0417 147.567 26.4062 147.261 26.6602C146.961 26.9076 146.714 27.1257 146.519 27.3145C146.33 27.5033 146.141 27.6758 145.952 27.832C145.509 28.1966 145.174 28.3789 144.946 28.3789C144.718 28.3789 144.513 28.3431 144.331 28.2715C144.149 28.1934 143.983 28.0859 143.833 27.9492C143.481 27.6172 143.306 27.2233 143.306 26.7676C143.306 25.9603 144.019 24.375 145.444 22.0117C146.056 20.9961 146.649 20.1042 147.222 19.3359C147.795 18.5612 148.345 17.9036 148.872 17.3633C149.399 16.8164 149.904 16.3542 150.386 15.9766C151.375 15.2018 152.163 14.8145 152.749 14.8145C152.918 14.8145 153.058 14.8763 153.169 15C153.28 15.1237 153.335 15.2572 153.335 15.4004C153.335 15.7259 153.231 16.0645 153.022 16.416C152.821 16.7611 152.55 17.1973 152.212 17.7246L150.132 20.8789C149.481 21.8815 149.139 22.4447 149.106 22.5684C149.08 22.6855 149.067 22.7702 149.067 22.8223C149.067 22.8743 149.103 22.9004 149.175 22.9004C149.246 22.9004 149.448 22.8255 149.78 22.6758C149.78 22.6758 150.197 22.487 151.03 22.1094C152.912 21.2891 154.432 20.8789 155.591 20.8789C156.248 20.8789 156.799 21.1816 157.241 21.7871C157.651 22.3535 157.856 22.9655 157.856 23.623C157.856 24.2806 157.756 24.847 157.554 25.3223C157.352 25.7975 157.052 26.1719 156.655 26.4453C156.265 26.7188 155.874 26.9727 155.483 27.207L154.233 27.9492C151.87 29.2708 150.155 29.9316 149.087 29.9316C147.609 29.9316 146.87 29.5475 146.87 28.7793C146.87 28.3626 147.072 28.0534 147.476 27.8516C151.193 25.8398 153.133 24.7819 153.296 24.6777C153.634 24.4629 153.804 24.2578 153.804 24.0625ZM166.333 18.7109C166.144 18.8672 165.939 18.9974 165.718 19.1016C165.496 19.1992 165.249 19.248 164.976 19.248C164.702 19.248 164.438 19.2025 164.185 19.1113C163.931 19.0202 163.709 18.8932 163.521 18.7305C163.11 18.3789 162.905 17.9297 162.905 17.3828C162.905 16.543 163.608 15.918 165.015 15.5078C165.49 15.3646 165.881 15.293 166.187 15.293C166.493 15.293 166.72 15.3288 166.87 15.4004C167.026 15.4655 167.153 15.5534 167.251 15.6641C167.446 15.8854 167.544 16.1133 167.544 16.3477C167.544 16.5755 167.515 16.7839 167.456 16.9727C167.404 17.1615 167.326 17.3568 167.222 17.5586C167.118 17.7604 166.991 17.9622 166.841 18.1641C166.691 18.3659 166.522 18.5482 166.333 18.7109ZM163.872 29.4629C163.377 29.7168 162.896 29.9186 162.427 30.0684C161.958 30.2246 161.496 30.3027 161.04 30.3027C160.591 30.3027 160.122 30.1953 159.634 29.9805C159.152 29.7591 158.722 29.4661 158.345 29.1016C157.505 28.2878 157.085 27.3828 157.085 26.3867C157.085 25.4688 157.358 24.5378 157.905 23.5938C158.407 22.7409 159.045 22.0247 159.819 21.4453C160.594 20.8659 161.313 20.5762 161.978 20.5762C162.928 20.5762 163.436 20.8431 163.501 21.377C163.521 21.5397 163.53 21.7285 163.53 21.9434C163.53 22.1582 163.478 22.4056 163.374 22.6855C163.276 22.959 163.146 23.2357 162.983 23.5156C162.827 23.7891 162.651 24.0592 162.456 24.3262C162.267 24.5866 162.085 24.8242 161.909 25.0391C161.571 25.4492 161.3 25.7454 161.099 25.9277C161.099 26.1491 161.265 26.377 161.597 26.6113C161.909 26.8327 162.173 26.9434 162.388 26.9434C162.609 26.9434 162.866 26.8913 163.159 26.7871C163.459 26.6829 163.765 26.543 164.077 26.3672C164.396 26.1914 164.718 25.9896 165.044 25.7617C165.376 25.5339 165.701 25.2995 166.021 25.0586L167.808 23.6621C168.517 23.1478 169.093 22.8906 169.536 22.8906C169.712 22.8906 169.845 22.9557 169.937 23.0859C170.034 23.2096 170.083 23.3561 170.083 23.5254C170.083 23.6947 169.998 23.929 169.829 24.2285C169.66 24.5215 169.425 24.847 169.126 25.2051C168.833 25.5632 168.488 25.9375 168.091 26.3281C167.694 26.7188 167.264 27.1029 166.802 27.4805C166.34 27.8581 165.858 28.2194 165.356 28.5645C164.862 28.903 164.367 29.2025 163.872 29.4629ZM178.696 24.7559C178.696 25.3483 178.869 25.6445 179.214 25.6445C180.06 25.6445 181.16 25.0716 182.515 23.9258L182.778 23.7012C183.306 23.3496 183.732 23.1738 184.058 23.1738C184.39 23.1738 184.598 23.2227 184.683 23.3203C184.774 23.418 184.819 23.5742 184.819 23.7891C184.819 24.2708 184.575 24.7819 184.087 25.3223C183.358 26.2077 182.358 27.0475 181.089 27.8418C179.618 28.7663 178.299 29.2285 177.134 29.2285C176.32 29.2285 175.809 28.776 175.601 27.8711C175.542 27.6367 175.5 27.4121 175.474 27.1973C175.409 26.6764 175.34 26.3867 175.269 26.3281C175.197 26.2695 175.054 26.276 174.839 26.3477C174.631 26.4128 174.38 26.5267 174.087 26.6895C173.8 26.8457 173.481 27.0378 173.13 27.2656C171.268 28.5026 170.197 29.209 169.917 29.3848C169.246 29.8014 168.794 30.0098 168.56 30.0098C168.325 30.0098 168.094 29.9609 167.866 29.8633C167.645 29.7656 167.45 29.6419 167.28 29.4922C166.929 29.1602 166.753 28.8216 166.753 28.4766C166.753 26.5039 167.183 24.7786 168.042 23.3008C168.615 22.3047 169.318 21.6146 170.151 21.2305C170.575 21.0286 171.03 20.9277 171.519 20.9277C172.41 20.9277 172.856 21.2207 172.856 21.8066C172.856 22.1647 172.645 22.7507 172.222 23.5645L171.929 24.1406C171.72 24.5378 171.619 24.7624 171.626 24.8145C171.665 25.0098 171.753 25.1074 171.89 25.1074C172.039 25.1074 172.261 24.9967 172.554 24.7754L174.351 23.4375L175.249 22.8125C176.284 22.1354 177.046 21.7969 177.534 21.7969C177.795 21.7969 178.032 21.901 178.247 22.1094C178.644 22.487 178.843 22.8158 178.843 23.0957C178.843 23.1868 178.833 23.2975 178.813 23.4277C178.8 23.5579 178.784 23.6979 178.765 23.8477L178.726 24.3066C178.706 24.4629 178.696 24.6126 178.696 24.7559Z"
        fill="#047857"
      />
    </svg>
  );
};

const HomeSVG = ({ light = false }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
        stroke={light ? "#ffffff" : "#374151"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.99V14.99"
        stroke={light ? "#ffffff" : "#374151"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const StatusSVG = ({ light = false }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.4502 14.97C3.5202 18.41 6.4002 21.06 9.9802 21.79"
        stroke={light ? "#ffffff" : "#374151"}
        strokeWidth="1.76"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.0498 10.98C2.5598 5.93 6.8198 2 11.9998 2C17.1798 2 21.4398 5.94 21.9498 10.98"
        stroke={light ? "#ffffff" : "#374151"}
        strokeWidth="1.76"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0098 21.8C17.5798 21.07 20.4498 18.45 21.5398 15.02"
        stroke={light ? "#ffffff" : "#374151"}
        strokeWidth="1.76"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const HistorySVG = ({ light = false }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
        stroke={light ? "#ffffff" : "#374151"}
        strokeWidth="1.76"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001"
        stroke={light ? "#ffffff" : "#374151"}
        strokeWidth="1.76"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LayoutSidebar = ({ current_page = "home" }) => {
  return (
    <div className={styles.sidebar}>
      <IntellibinLogo />
      <nav className={styles.navigation_links}>
        <div
          className={styles.link}
          style={{
            backgroundColor:
              current_page === "home" ? "#065F46" : "transparent",
          }}
        >
          {current_page === "home" && (
            <div className={styles.active_link_line}></div>
          )}
          <HomeSVG light={current_page === "home"} />
          <p style={{ color: current_page === "home" ? "#ffffff" : "#6B7280" }}>
            Home
          </p>
        </div>
        <div
          className={styles.link}
          style={{
            backgroundColor:
              current_page === "status" ? "#065F46" : "transparent",
          }}
        >
          {current_page === "status" && (
            <div className={styles.active_link_line}></div>
          )}
          <StatusSVG light={current_page === "status"} />
          <p
            style={{ color: current_page === "status" ? "#ffffff" : "#6B7280" }}
          >
            Status
          </p>
        </div>
        <div
          className={styles.link}
          style={{
            backgroundColor:
              current_page === "history" ? "#065F46" : "transparent",
          }}
        >
          {current_page === "history" && (
            <div className={styles.active_link_line}></div>
          )}
          <HistorySVG light={current_page === "history"} />
          <p
            style={{
              color: current_page === "history" ? "#ffffff" : "#6B7280",
            }}
          >
            History
          </p>
        </div>
      </nav>
      <div className={styles.profile_center}>
        <div className={styles.profile_image}></div>
        <div>
          <p>James Ben</p>
          <a>View Profile</a>
        </div>
      </div>
    </div>
  );
};

export const PageLayout = ({
  current_page = "home",
  page_title,
  children,
}: any) => {
  return (
    <div className={styles.page_layout}>
      <LayoutSidebar current_page={current_page} />
      <div className={styles.page_content}>
        {page_title && <h1 className={styles.page_title}>{page_title}</h1>}
        {children}
      </div>
    </div>
  );
};

function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile | Intellibin</title>
        <meta name="description" content={`Bosun's project`} />
        <link rel="icon" href="/logo/vd-testLogo.png" />
      </Head>
      <div className={styles.profile_page}>
        {/* <PageLayout page_title={"profile"} current_page="profile"> */}
        <div className={styles.profile_content}>
          <div className={styles.profile_summary}>
            <div className={styles.account_profile_image}>
              <span className={styles.edit}>
                <MdEdit fontSize={`16px`} />
              </span>
              <FaUser fontSize={`80px`} color="#A7F3D0" />
            </div>
            <div className={styles.account_profile_details}>
              <h3>James Ben</h3>
              <div className={styles.account_stat}>
                <span className={styles.stat_icon}>ID</span>
                <span className={styles.stat_value}>A00112233</span>
              </div>
              <div className={styles.account_stat}>
                <span className={styles.stat_icon}>
                  <IoMailOutline fontSize={`20px`} />{" "}
                </span>
                <span className={styles.stat_value}>jbennjoku@gmail.com</span>
              </div>
              <div className={styles.account_stat}>
                <span className={styles.stat_icon}>
                  <IoCallOutline fontSize={`20px`} />{" "}
                </span>
                <span className={styles.stat_value}>+234 809 838 5425</span>
              </div>
              <div className={styles.account_stat}>
                <span className={styles.stat_icon}>
                  <FiTrash2 fontSize={`20px`} />{" "}
                </span>
                <span className={styles.stat_value}>3</span>
              </div>
            </div>
          </div>
          <div className={styles.profile_options_list}>
            <ColouredLink text={"Edit Profile"} />
            <ColouredLink text={"Subscriptions"} />
            <ColouredLink text={"Help & Support"} />
            <ColouredLink text={"About Intellibin"} />
            <ColouredLink text={"Password Reset"} />
            <div className={styles.logout_link}>
              <span>Log Out</span>
              <a href={`#`}>
                <IoChevronForward fontSize={`24px`} />
              </a>
            </div>
          </div>
        </div>
        {/* </PageLayout> */}
      </div>
    </>
  );
}

const ColouredLink = ({ text = ``, url = `#` }) => {
  return (
    <div className={styles.coloured_link}>
      <span>{text}</span>
      <a href={url}>
        <IoChevronForward fontSize={`24px`} />
      </a>
    </div>
  );
};

export default ProfilePage;
// export default Page;
