import { BaseProps } from "../../types/components/Layout/Base";

function Base({ children }: BaseProps) {
  return (
    <div className="bg-black">
      <div
        className={`bg-repeat`}
        style={{
          backgroundImage: `url('/img/blueprint-background.png')`,
        }}
      >
        <main className="flex w-[100%] min-h-screen p-4">{children}</main>
      </div>
    </div>
  );
}

export { Base };
