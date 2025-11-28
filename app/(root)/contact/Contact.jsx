"use client";

import StartedButton from "@/components/layout/startedButton/StartedButton";
import AnimatedInput from "@/components/ui/animated-input";
import { Book, Mail, MessageSquare, User } from "lucide-react";
import { useState } from "react";
import BookMarquee from "./BookMarquee";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [yourPhone, setyourPhone] = useState("");
  const [massage, setMassage] = useState("");
  const classValue = [
    {
      width: "w-72",
      minWidth: "min-w-72",
    },
    {
      bgColour: "bg-secondary",
    },
  ];

  return (
    <div className="">
      <section className="min-h-screen glassyBg rounded-3xl max-w-5xl flex flex-col px-6 md:p-16  ">
        <div className="text-white">
          <h1 className="text-8xl">
            Contact Fro <br />
            Work
          </h1>
        </div>
        <div className=" max-w-full mt-20 space-y-6 p-6 mb-10">
          <div className="space-y-12 ">
            <AnimatedInput icon={<Mail className="h-4 w-4 text-gray-400" />} label="Email Address" onChange={setEmail} placeholder="Enter your email" value={email} />
            <AnimatedInput icon={<User className="h-4 w-4 text-gray-400" />} label="Your Number" onChange={setyourPhone} placeholder="Enter your phone number" value={yourPhone} />
            <AnimatedInput icon={<MessageSquare className="h-4 w-4 text-gray-400" />} label="Massage" onChange={setMassage} placeholder="Enter your Massage" value={massage} inputClassName="textarea" />
          </div>
        </div>
        <StartedButton params={classValue} />
      </section>
      <BookMarquee />
    </div>
  );
};

export default Contact;
