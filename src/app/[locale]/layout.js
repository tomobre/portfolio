import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tomas Obregon",
  description: "Tomas Obregon portfolio",
};

export default function RootLayout({ params: { locale }, children }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <TransitionProvider locale={locale}>{children}</TransitionProvider>
      </body>
    </html>
  );
}
