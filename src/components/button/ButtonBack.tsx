"use client"
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <button className="btn" onClick={() => router.back()}>
      <ChevronLeft />
      Back
    </button>
  );
};

export default ButtonBack;
