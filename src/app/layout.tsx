import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Menu } from "@/components/ui/navbar-menu";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";
import { Footer } from "@/components/custom/footer";
import Logo from "@/components/custom/logo";
import { CartProvider } from "@/app/context/CartContext"; // Import CartProvider

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zulu Tech",
  description: "Zulu Tech Ethiopia",
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#05132e] dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Wrap children with CartProvider */}
          <CartProvider>
            <div className="z-[70] fixed flex justify-between px-10 items-center bg-inherit w-full h-24">
              <div>
                <div className="flex"></div>
                <div className="hidden sm:flex -mb-2">
                  <Logo width={125} height={125} />
                </div>
              </div>

              <FloatingNav navItems={navItems} />

              <ThemeToggle />
            </div>
            {children}
          </CartProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}