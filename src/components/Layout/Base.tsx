import dynamic from "next/dynamic";
import { BaseProps } from "../../types/components/Layout/Base";

const Footer = dynamic(() => import("./Footer"));

function Base({ children }: BaseProps) {
  return (
    <div className="bg-black flex flex-col min-h-screen  w-[100%]">
      <main className="flex-grow flex h-[100%] w-[100%] py-4 px-5 sm:px-10 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export { Base };
