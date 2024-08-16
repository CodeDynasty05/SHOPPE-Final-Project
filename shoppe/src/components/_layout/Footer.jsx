import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-slate-300 border-t-2 py-10">
      <div className="flex justify-between">
        <div className="flex justify-center gap-8">
          <Link href={"/contact"}>
            <span className="text-slate-500">CONTACT</span>
          </Link>
          <Link href={"/contact"}>
            <span className="text-slate-500">TERMS OF SERVICE</span>
          </Link>
          <Link href={"/contact"}>
            <span className="text-slate-500">SHIPPING AND RETURNS</span>
          </Link>
        </div>
        <div className="flex justify-center border-b-slate-700 border-b-2">
          <input
            className="pr-16 py-2 outline-none"
            type="email"
            placeholder="Give an email, get the newsletter."
          />
          <button
            className="text-3xl w-10 active:bg-gray-400 hover:bg-gray-300 h-10"
            type="submit"
          >
            &#10137;
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <p>© 2021 Shelly. Terms of use and privacy policy.</p>
        <div className="flex gap-8">
          <button>
            <Image
              src={"/icons/linkedin.png"}
              width={20}
              height={20}
              alt="linkedin"
            />
          </button>
          <button>
            <Image
              src={"/icons/facebook.png"}
              width={10}
              height={10}
              alt="facebook"
            />
          </button>
          <button>
            <Image
              src={"/icons/instagram.png"}
              width={20}
              height={20}
              alt="instagram"
            />
          </button>
          <button>
            <Image
              src={"/icons/twitter.png"}
              width={20}
              height={20}
              alt="twitter"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
