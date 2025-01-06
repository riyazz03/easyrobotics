import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./Componets/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"], 
});

export const metadata = {
  title: "EasyRobotics",
  description: "We Move Your Parts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
