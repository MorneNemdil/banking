import MobileNavbar from "@/components/ui/mobile-navbar";
import Sidebar from "@/components/ui/sidebar";
import Image from "next/image";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const loggedIn = { firstName: 'Morne', lastName: 'Nemdil' }
  
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
