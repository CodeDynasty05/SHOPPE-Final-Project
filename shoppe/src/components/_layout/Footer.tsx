import Image from "next/image";
import React from "react";
import Input from "@/components/_common/input";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");
  return (
    <footer className="border-t-slate-300 border-t-2 py-12">
      <div className="flex sm:flex-row flex-col justify-between gap-6">
        <div className="flex gap-8">
          <Link href={`/contact`}>
            <span className="text-slate-500">{t("contact")}</span>
          </Link>
          <Link href={"/contact"}>
            <span className="text-slate-500">{t("service")}</span>
          </Link>
          <Link href={"/contact"}>
            <span className="text-slate-500">{t("shipping")}</span>
          </Link>
        </div>
        <div className="flex justify-center border-b-slate-700 border-b-2 gap-8 w-full sm:w-auto pl-2 sm:pl-0">
          <Input
            type="email"
            placeholder={t("email")}
            w={locale === "en" ? 1 : 2}
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
        <p>
          © 2021 Shelly. {t("use")}
          <Link href={`/privacy`} className="text-slate-500">
            {" "}
            {t("policy")}.
          </Link>
        </p>
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
