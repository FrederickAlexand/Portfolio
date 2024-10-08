import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 via-purple-600 to-transparent rounded-full h-96 w-96 z-0 blur-2xl absolute top-1/2 left-0 transform -translate-x-1/2"></div>
      <div className="z-10 space-y-6">
        <h5 className="text-2xl font-bold text-white">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m looking for new opportunities. Please contact me through my inbox. Feel free to say Hi, and I&apos;ll try to reach back out! Have a nice day!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com" aria-label="GitHub">
            <FaGithub className="text-white hover:text-gray-400 text-3xl transition-transform transform hover:scale-110" />
          </Link>
          <Link href="https://www.linkedin.com/in/frederick-alexander-badaruddin-7227052b0/" aria-label="LinkedIn">
            <FaLinkedin className="text-white hover:text-blue-500 text-3xl transition-transform transform hover:scale-110" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col space-y-6">
          <div>
            <label htmlFor="email" className="text-white block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-purple-500"
              placeholder="jacob@google.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-white block text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-purple-500"
              placeholder="Say Hi!"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-white block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-purple-500"
              placeholder="Let&apos;s talk about...."
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-300 text-white font-medium py-3 px-5 rounded-lg w-full transition-all hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
