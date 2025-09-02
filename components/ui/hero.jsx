"use client";
import Link from "next/link";
import { Button } from "./button";


const HeroSection = () => {
    return (
        <div className="pb-20 px-4 mt-32">
            <div className="container mx-auto text-center space-y-6">
                <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
                    Achieve your financial goals 
                </h1>
                <p>
                   Experience financial peace of mind. 
                   Let our smart platform handle the heavy lifting of tracking and analysis, 
                   so you can focus on reaching your life goals. 
                </p>
                <div>
                    <Link href='/dashboard'>
                    <Button size="lg" variant='outline' className="px-8">
                      Get Started  
                    </Button>
                    </Link>
                </div>
                <div>
                    <div>
                        <img src="/banner.jpeg" widht={1280} height={720} alt="dashboard preview" className="w-full h-auto mt-10 rounded-lg shadow-lg"
                        priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;