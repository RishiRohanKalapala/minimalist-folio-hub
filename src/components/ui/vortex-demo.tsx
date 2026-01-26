import React from "react";
import { Vortex } from "@/components/ui/vortex";

export default function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          What will I have after?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          A: Skills that leave a permanent mark.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="https://ckrdatacenter.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            Go to CKR
          </a>
        </div>
      </Vortex>
    </div>
  );
}
