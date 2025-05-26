import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/authContext";
import Navbar from "@/components/Nav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MCQ-AI",
  description: "Create Quiz powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20 pr-2 pl-2 h-dvh w-dvw bg-back dark:bg-white back`}
      >
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
