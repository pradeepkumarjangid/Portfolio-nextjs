import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/ui/CursorFollower";
import ThemeProvider from "@/components/providers/ThemeProvider";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Pradeep Kumar | Full Stack Developer",
  description:
    "Portfolio of Pradeep Kumar, a Full Stack Developer with experience in React.js, Next.js, Node.js, Express.js, MongoDB, Redux Toolkit, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.className}  h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
      <CursorFollower />
        <ThemeProvider>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
