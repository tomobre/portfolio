import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import { poppins } from "../utils/fonts";

export const metadata = {
  title: "Tomas Obregon",
  description: "Tomas Obregon portfolio",
};

export default function RootLayout({ params: { locale }, children }) {
  return (
    <html lang={locale}>
      <body className={`${poppins.className}  `}>
        <TransitionProvider locale={locale}>{children}</TransitionProvider>
      </body>
    </html>
  );
}
