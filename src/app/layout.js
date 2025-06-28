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
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-3 pb-16 bg-white `}
      >
        <AuthProvider>
          {children}
          <Navbar />
          <footer className="text-center py-6 text-gray-500 text-sm">
            © 2025 MCQ-AI. Built by Lian.
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
