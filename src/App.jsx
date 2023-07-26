import InxelTest from "./components/inxel-test";
import BegginerLevel from "./components/begginer-level";
import { useState } from "react";

export default function App() {
  const [panel, setPanel] = useState("");

  return (
    <article className="w-[80%] mx-auto my-20  font-[Rubik] ">
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
      <div className="flex flex-col gap-2 ">
        <h3 className="text-[24px] underline leading-[24px] font-bold my-5  ">
          But... How does it work?
        </h3>
        <p>This is mainly a simple but really usefull contact manager.</p>
        <p>
          This is running in a local enviorment with hard-coded data. This was a project requirment
          but you can fetch any API to add real data.
        </p>
        <div className="w-[100%] my-5 mx-auto">
          <div className="flex gap-1 justify-evenly ">
            <div>
              <button onClick={() => setPanel("beginner")}>Beginner</button>
            </div>
            <div>
              <button onClick={() => setPanel("mid-level")}>Mid-Level</button>
            </div>
            <div>
              <button onClick={() => setPanel("code")}>Code</button>
            </div>
          </div>
          <div className="my-5     ">
            {panel === "" ? (
              <div>Choose a level!</div>
            ) : panel === "beginner" ? (
              <BegginerLevel />
            ) : panel === "mid-level" ? (
              <div> Intermediate </div>
            ) : (
              panel === "code" && <div>Just code </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
