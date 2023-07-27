import InxelTest from "./components/Inxel-test";
import BegginerLevel from "./components/Begginer-level";
import JustCode from "./components/JustCode";
import MidLevel from "./components/Mid-level";
import { useState } from "react";

export default function App() {
  const [panel, setPanel] = useState("");

  return (
    <article className="w-[80%] mx-auto mt-20 font-[Rubik] ">
      <div className=" flex flex-col">
        <h1 className=" text-[54px] font-bold underline   ">Hey There!</h1>
        <h3 className="text-[24px] underline leading-[24px] font-bold my-5  ">
          Welcome to this repository.
        </h3>
        <p className="font-sans leading-[18px]    ">
          Here you can have a look on 1 technical challenge I completed for Inxel. You can have a
          clear step by step view through the whole process.
        </p>
      </div>
      <InxelTest />
      <div className="flex flex-col gap-3 ">
        <h3 className="text-[24px] underline leading-[24px] font-bold my-5  ">
          But... How does it work?
        </h3>
        <p>This is mainly a simple but really usefull contact manager.</p>
        <p>
          This is running in a local enviorment with hard-coded data. This was a project requirment
          but you can fetch any API to add real data.
        </p>
        <div className="rounded-[10px] border-[2px] border-white my-5 bg-black overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] box-border p-[15px] flex flex-col gap-2 ">
          <h3 className="text-[24px] underline leading-[24px] font-bold ">Hey!</h3>
          <p>
            If you want to see the process of this component, choose a level below and check it out!
            👇
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[100%] mt-5 mb-20 mx-auto">
          <div className="flex gap-1 justify-evenly ">
            <div>
              <button onClick={() => setPanel("beginner")} className="bg-black text-white">
                Beginner
              </button>
            </div>
            <div>
              <button onClick={() => setPanel("mid-level")} className="bg-black text-white">
                Mid-Level
              </button>
            </div>
            <div>
              <button onClick={() => setPanel("code")} className="bg-black text-white">
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
      </div>
    </article>
  );
}
