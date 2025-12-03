"use client";

import AnimatedInput from "@/components/ui/animated-input";
import { Book, Mail, MessageSquare, User } from "lucide-react";
import { useState } from "react";
import BookMarquee from "./BookMarquee";
import StartedButton from "@/components/startedButton/StartedButton";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [yourPhone, setyourPhone] = useState("");
  const [massage, setMassage] = useState("");
  const classValue = [{ width: "w-60", minWidth: "min-w-60" }, { bgColour: "bg-ring" }, { padding: "py-0" }, { text: "text-secondary" }];

  return (
    <div className="">
      <section className=" glassyBg rounded-3xl max-w-4xl flex flex-col c-padding ">
        <div className="text-white">
          <h1 className="text-6xl">
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
