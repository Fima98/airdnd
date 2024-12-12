"use client";

import Modal from "./Modal";
import { useState } from "react";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import SubmitButton from "../inbox/forms/SubmitButton";

const SignUpModal = () => {
  const signUpModal = useSignUpModal();

  const content = (
    <div className="">
      <h2 className="mb-6 text-2xl font-semibold">Welcome to Airdnd</h2>
      <form action="" className="space-y-4">
        <input
          type="email"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Password"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-60">
          Error
        </div>
        <SubmitButton
          label="Continue"
          onClick={() => {
            console.log("Login");
          }}
          className="w-full"
        />
      </form>
    </div>
  );
  return (
    <Modal
      isOpen={signUpModal.isOpen}
      label="Sign up"
      content={content}
      close={signUpModal.close}
    />
  );
};

export default SignUpModal;
