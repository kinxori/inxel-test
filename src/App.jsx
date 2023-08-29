import InxelTest from "./components/Inxel-test";
import BegginerLevel from "./components/Begginer-level";
import JustCode from "./components/JustCode";
import MidLevel from "./components/Mid-level";
import ScrollTopButton from "./components/scrollTopButton";
import { useState } from "react";

export default function App() {
  const [panel, setPanel] = useState("");

  return (
    <section className="font-[rubik]  ">
      <ScrollTopButton />
      <div className="border-box p-[10%] flex flex-col mx-auto ts:w-[70%] ds:w-[100%] ts:p-[5%] ds:p-[10%] ds:h-[100vh] ds:gap-[10%] ds:flex-row ds:justify-center ds:items-center">
        <div className=" flex flex-col ds:w-[100%]">
          <h1 className=" text-[54px] font-bold underline ds:text-[90px]   ">Hey There!</h1>
          <h3 className="text-[24px] underline leading-[24px] font-bold my-5  ">
            Welcome to this repository.
          </h3>
          <p className="font-sans leading-[18px] ds:w-[90%] text-justify  ">
            Here you can have a look on 1 technical challenge I completed for one company. You can
            have a clear step by step view through the whole process to create this Contact Manager.
          </p>
        </div>
        <InxelTest />
      </div>
      <article className="flex flex-col mx-auto border-box p-[10%] ts:p-[5%] gap-3 ts:w-[70%] ds:w-[60%]">
        <p>
          This is running in a local enviorment with hard-coded data. This was a project requirment
          but you can fetch any API to add real data.
        </p>
        <div className="rounded-[10px] border-[2px] border-white my-5 bg-black overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] box-border p-[15px] flex flex-col gap-2 ">
          <h3 className="text-[24px] underline leading-[24px] font-bold ">Hey!</h3>
          <p>
            If you want to see the code of this component, choose a level below and check it out! 👇
          </p>
          <i className="text-[12px]  ">*This component doesn't include styles</i>
        </div>
        <div className="flex flex-col justify-center items-center w-[100%] mt-5 mb-20 mx-auto">
          <div className="flex gap-1 justify-evenly ">
            <div>
              <button
                onClick={() => setPanel("beginner")}
                className={panel === "beginner" ? " bg-white text-black " : "bg-black text-white"}
              >
                Beginner
              </button>
            </div>
            <div>
              <button
                onClick={() => setPanel("mid-level")}
                className={panel === "mid-level" ? " bg-white text-black " : "bg-black text-white"}
              >
                Mid-Level
              </button>
            </div>
            <div>
              <button
                onClick={() => setPanel("code")}
                className={panel === "code" ? "bg-white text-black" : "bg-black text-white"}
              >
                Code
              </button>
            </div>
          </div>
          <div className="my-5 flex flex-col w-[100%]  ">
            {panel === "beginner" ? (
              <BegginerLevel />
            ) : panel === "mid-level" ? (
              <MidLevel />
            ) : (
              panel === "code" && <JustCode />
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
