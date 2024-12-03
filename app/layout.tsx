import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zibras Ismail - Full Stack Developer",
  description: "Full Stack Developer with 1+ years of experience",
  icons: {
    icon: { url: "/brand.png", type: "image/png" },
    shortcut: { url: "/brand.png", type: "image/png" }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen bg-white dark:bg-neutral-950`}>
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-transparent to-transparent" />
          <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-yellow-500/30 rounded-full blur-[128px]" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <main className="relative z-10">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}