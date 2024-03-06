import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <ClientOnly>
        </ClientOnly> */}
        <>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
