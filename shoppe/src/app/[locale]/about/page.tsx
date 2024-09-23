import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About | Shoppe",
};
const AboutPage = () => {
  return (
    <div className="flex flex-col gap-10 w-[40%] mx-auto mt-18 mb-28">
      <h3 className="text-3xl text-center font-semibold">About</h3>
      <p className="text-center text-xl font-medium">
        Who we are and why we do what we do!
      </p>
      <p>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis.
      </p>
      <h4 className="text-xl font-medium">Top Trends</h4>
      <Image
        src="/about/aboutph1.jpg"
        alt="about image"
        width={1000}
        height={500}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </p>
      <ul className="list-disc list-inside">
        <li>consectetur adipiscing elit. Aliquam placerat</li>
        <li>Lorem ipsum dolor sit amet consectetur</li>
      </ul>
      <h4 className="text-xl font-medium">Produced with care</h4>
      <Image
        src="/about/aboutph2.jpg"
        alt="about image"
        width={1000}
        height={500}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendu.
      </p>
    </div>
  );
};

export default AboutPage;
