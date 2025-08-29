import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { LayoutDashboard } from "lucide-react";


const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={"/LOGOTEXT.png"}
            alt="captrackzz logo"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>
        {/* Auth Buttons */}
        <div>
            <SignedIn>
                <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                <Button variant="outline" className="text-gray-700 hover:text-blue-600">
                    <LayoutDashboard size={18}/>
                    <span className="hidden md:inline">Dashboard</span>
                </Button>
                </Link>

                <Link href={"/transaction/create"}>
                <Button variant="outline" className="flext items-center gap-2">
                    <LayoutDashboard size={18}/>
                    <span className="hidden md:inline">Dashboard</span>
                </Button>
                </Link>

            </SignedIn>  
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
                 <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;