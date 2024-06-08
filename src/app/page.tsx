import Navbar from "@/components/header/Navbar";
import Banner from "@/components/home/Banner";
import Path from "@/components/path/Path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Bus Ticketng | Book Online Now",
  description: "Book Your VIP Ticket Online",
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="h-[500px] max-w-7xl  my-10 mx-auto overflow-auto">
        <Path />
      </div>
    </div>
  );
}
