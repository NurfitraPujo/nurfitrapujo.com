import { BaseProps } from "../../types/components/Layout/Base";
import { Footer } from "./Footer";

function Base({ children }: BaseProps) {
  return (
    <div className="bg-black min-h-screen">
      <div
        className={`bg-repeat flex flex-col min-h-screen  w-[100%]`}
        style={{
          backgroundImage: `url('/img/blueprint-background.png')`,
        }}
      >
        <main className="flex flex-grow h-[100%] w-[100%] py-4 px-10">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export { Base };