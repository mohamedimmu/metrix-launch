"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const Content = () => {
  return (
    <div className="flex items-center justify-center flex-col text-white text-base px-4 md:px-8 ">
      <p className="mb-2">We are still</p>
      <h2 className="font-bold font-poppins text-center text-3xl md:text-4xl lg:text-7xl mb-8">
        Cooking our site
      </h2>
      <div className="text-center">
        <p className="mb-2">We are going launch the website very soon.</p>
        <p>Stay Tune</p>
        <Link
          href="https://wa.me/+919499098786" // Replace with the actual phone number
          target="_blank" // Optional: Open in a new tab
        >
          <Button
            className="bg-blue-800 mt-5 rounded-3xl"
            size="lg"
          >
            <PhoneCall className="mr-2 h-4 w-4" />
            Let&apos;s Talk
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Content;
