"use client";

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import NextNProgress from 'nextjs-progressbar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { FaUserCircle } from "react-icons/fa";
import Theme from "@/components/modules/themetogglebutton/index";
import { useUser } from "@clerk/nextjs";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

export default function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
   return (
    <div className="hidden  w-full h-16  justify-center items-center border border-b py-2 lg:flex">
      <div className="hidden fixed justify-between items-center h-10 w-full lg:w-5/6 bg-[435334]  lg:flex ">
            <div className="w-4/6 h-fit flex justify-between items-center space-x-4 ">
           <div className="text-xl font-bold lg:mr-4">Logo</div>
           <div className="flex justify-center space-x-4 w-4/6 items-center">
                <div className="capitalize cursor-pointer text-sm w-fit" >learning</div>
               <div className="capitalize cursor-pointer text-sm w-fit" >playground</div>
               <div className="capitalize cursor-pointer text-sm w-fit" >students stats</div>
                  <div className="capitalize cursor-pointer text-sm w-fit" >Class Stats</div>
           <div className="capitalize cursor-pointer text-sm w-fit" >Earnings</div>
           </div>
        </div>
        <Menubar>
          {isSignedIn ? (
            <MenubarMenu>
              <MenubarTrigger>
                <SignOutButton />
              </MenubarTrigger>
            </MenubarMenu>
          ) : (
            <MenubarMenu>
              <MenubarTrigger>
                <SignInButton />
              </MenubarTrigger>
            </MenubarMenu>
          )}
          <MenubarMenu>
            <MenubarTrigger>
              <Theme />
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              <FaUserCircle />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
       </div>
          <NextNProgress color="#F7E987" startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
         </div>
  );
}
