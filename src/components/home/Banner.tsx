"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import SearchTrip from "./SearchTrip";

const Banner = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-72 md:h-96 relative">
        <Image
          src="/images/vipbus.jpg"
          alt="logo"
          fill
          objectFit="cover"
          loading="lazy"
        />
        <div className="w-full bg-gray-800 px-3  absolute left-0 right-0 bg-opacity-70 h-72  md:h-96 text-center">
          <div className="grid place-content-center text-white place-items-center w-full h-full">
            <h1 className="text-2xl sm:text-4xl font-mono lg:text-5xl sm:py-6 capitalize h-[12vh] sm:h-[11vh] font-semibold">
              <Typewriter
                words={[
                  "Plan Your Trip, Book Your Ticket",
                  "Don't miss out! Book your ticket today!",
                  "Explore new destinations, effortlessly",
                  "Travel made easy, one ticket at a time",
                  "book your tickets in minutes",
                  "Find your perfect bus journey with ease",
                  "Hit the road with us",
                  "Travel Anywhere, Anytime",
                  "Book Now, Travel soon",
                ]}
                loop={Infinity}
                cursor
                cursorStyle=""
                typeSpeed={80}
                deleteSpeed={50}
              />
            </h1>
            <p className="text-lg sm:text-xl font-medium capitalize">
              Book your ticket with V.I.P and enjoy the best trip
            </p>
          </div>
        </div>
      </div>
      <SearchTrip />
    </div>
  );
};

export default Banner;
