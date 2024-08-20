import React from "react";

const PrivacyPage = () => {
  return (
    <div className="flex flex-col gap-10 w-[40%] mx-auto">
      <div className="flex gap-4 flex-col">
        <h3 className="text-3xl text-center font-semibold">Privacy Policy</h3>
        <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </p>
      </div>
      <div className="flex gap-4 flex-col">
        <h4 className="text-2xl font-medium">Security</h4>
        <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque.
        </p>
      </div>
      <div className="flex gap-4 flex-col">
        <h4 className="text-2xl font-medium">Cookies</h4>
        <ul className="list-disc list-inside">
          <li>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
            sollicitudin.
          </li>
          <li>
            Nam fringilla molestie velit, eget pellentesque risus scelerisque a
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPage;
