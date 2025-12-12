"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerMenuIcon, DrawerMenuItem, DrawerTrigger, SocialSection } from "@/components/ui/drawer";
import Link from "next/link";
import { motion } from "motion/react";
import MenuNav from "../layout/menuNav/MenuNav";
import { navItems } from "@/lib/menuNav";
import Heading from "../Heading";
import SectionTitle from "../sectionTitle/SectionTitle";
import { LucideLayoutDashboard } from "lucide-react";

const drawerVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    x: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

const menuItems = navItems;

export default function SmoothDrawer({}) {
  const [open, setOpen] = React.useState(false);

  const handleItemClick = (itemId) => {
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen} modal={false}>
      <DrawerTrigger asChild>
        <div variant="outline" className="w-12 h-12 bg-secondary text-foreground rounded-full flex items-center justify-center cursor-pointer">
          <LucideLayoutDashboard />
        </div>
      </DrawerTrigger>
      <DrawerContent className="p-6 rounded-2xl shadow-xl border-l" showOverlay={true} onOverlayClick={() => setOpen(false)}>
        <SectionTitle params="Menu" />
        <motion.div variants={drawerVariants} initial="hidden" animate="visible" className=" flex flex-col justify-around">
          <motion.div variants={itemVariants} className="space-y-5 mb-8">
            {menuItems.map((item) => (
              <DrawerMenuItem key={item.id} data-tip={item.label} onClick={() => handleItemClick(item.id)} className="cursor-pointer">
                <DrawerMenuIcon icon={item.icon} id={item.id} />
              </DrawerMenuItem>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <DrawerFooter className="flex flex-col gap-3 px-0">
            <SocialSection />
          </DrawerFooter>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
