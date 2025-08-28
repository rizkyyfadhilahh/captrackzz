import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "CapTrackzz",
  description: "Your Capital, on the Right Track.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* {header} */}
         <Header />
        <main className="min-h-screen">
          {children}
        </main>
        {/* {footer} */}
        <footer className="bg-blue-200 py-12">
          <div className="container mx-auto px-4 text-center text-gray-700">
            <p>
              2025 CapTrackzz. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider> 
  );
}
