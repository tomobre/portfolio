import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({
  formMessageLabel,
  formEmailLabel,
  formBye,
  formBtn,
  formSuccess,
  formErr,
}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
    >
      <span>{formMessageLabel}</span>
      <textarea
        rows={6}
        className="bg-transparent border-b-2 border-b-black outline-none resize-none"
        name="user_message"
      />
      <span>{formEmailLabel}</span>
      <input
        name="user_email"
        type="text"
        className="bg-transparent border-b-2 border-b-black outline-none"
      />
      <span>{formBye}</span>
      <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
        {formBtn}
      </button>
      {success && (
        <span className="text-green-600 font-semibold">{formSuccess}</span>
      )}
      {error && <span className="text-red-600 font-semibold">{formErr}</span>}
    </form>
  );
}
