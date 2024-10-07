"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Image from "next/image";

const header = () => {
  return (
    <>
      <section className="m-auto w-10/12 flex flex-col ">
      <div>
        <Image
          src="/logo/Hero.png"
          width={300}
          height={200}
          alt="hero"></Image>
      </div>
      <div className="m-auto w-10/12">
        <Navbar />
      </div>
      </section>
    </>
  );
};

export default header;
