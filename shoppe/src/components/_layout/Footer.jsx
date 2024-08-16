import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-slate-500 border-t-2">
      <div className="flex justify-between">
        <div className="flex justify-center gap-3">
          <div>
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
        </div>
        <div className="flex justify-center border-b-slate-700 border-b-2">
          <input
            type="email"
            placeholder="Give an email, get the newsletter."
          />
          <button type="submit">→</button>
        </div>
      </div>
      <p>© 2021 Shelly. Terms of use and privacy policy.</p>
    </footer>
  );
};

export default Footer;
