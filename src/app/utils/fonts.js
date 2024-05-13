import localFont from "next/font/local";

export const poppins = localFont({
  display: "swap",
  variable: "--font-poppins",
  src: [
    {
      //regular
      path: "../fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      //extra-bold
      path: "../fonts/Poppins-ExtraBold.ttf",
      weight: "600",
      style: "bold",
    },
    {
      //black
      path: "../fonts/Poppins-Black.ttf",
      weight: "700",
      style: "bold",
    },
    {
      //light
      path: "../fonts/Poppins-Light.ttf",
      weight: "300",
      style: "light",
    },
  ],
});
