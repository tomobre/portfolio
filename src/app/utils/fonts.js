import localFont from "next/font/local";

export const cascadiaCode = localFont({
  display: "swap",
  variable: "--font-cascadiacode",
  src: [
    {
      path: "../fonts/CascadiaCode-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/CascadiaCode-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/CascadiaCode-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/CascadiaCode-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
});
