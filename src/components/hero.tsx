// type TGetSummary = (input: string) => void;
import Image from "next/image";

export default function Hero(): JSX.Element {
  return (
    <>
      <div className="container px-6 py-5 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-mono font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Mini Vent
          </h1>
          <p className="mt-6 text-gray-500 font-mono dark:text-gray-300">
            An Economical Miniaturized Ventilation System.
          </p>
          <Image
            src="/mini-vent.jpeg"
            width={500}
            height={500}
            alt="Picture of Mini Vent"
            className="mt-5"
          />
        </div>
      </div>
    </>
  );
}
