import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zibras Ismail | Portfolio",
  description: "Full Stack Developer Portfolio",
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen bg-black dark:bg-neutral-950`}>
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-transparent to-transparent" />
          <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-yellow-500/30 rounded-full blur-[128px]" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="relative z-10">
            <NavBar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}