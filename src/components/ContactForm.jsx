import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l5xdwa8",
        "template_uwna19b",
        form.current,
        "geKbC8hkSGAtCFzQ0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-orange-300" id="form-contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-medium text-center text-gray-900 sm:text-xl">
          Write in the form your issue, your ideas, your business strategy and
          let's see how we can work together.
        </p>
        <form className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-300"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Write your entire name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Write your email here"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-m text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write a message where you explain your project/idea/issue as specific as possible"
            ></textarea>
          </div>
          <input
            type="submit"
            className="py-3 px-5 text-m font-medium text-center text-white rounded-lg bg-zinc-800 sm:w-fit hover:bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600"
            value="Send"
          />
        </form>
        {isMessageSent && (
          <p className="text-green-600 text-center mt-4 rounded-lg bg-zinc-500">
            Good! The message was sent! Wait for the answer in your email account.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
