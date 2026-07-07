import Image from "next/image";

export default function Yuri() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-white w-full h-full p-6 md:p-36">
      <div className="flex w-full items-center justify-center flex-col h-full">
        <h2 className="text-3xl text-center md:text-left">I <em>LOVE</em> yuri</h2>
        <div className="bg-[url(/sigidober.jpg)] bg-contain bg-no-repeat bg-center">
          <Image
            src="/jackpot.gif"
            loading="eager"
            width="270"
            height={480}
            alt={"Agnes Digital forming a heart with her hands"}        />
        </div>
      </div>
    </main>
  );
}
