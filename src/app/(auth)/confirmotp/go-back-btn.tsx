"use client";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GoBackBtn() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()}>
        <ChevronLeftIcon className="h-4 w-4 text-intellibin-primary" />
      </button>
    </>
  );
}
