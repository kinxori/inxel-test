import InxelTest from "./components/inxel-test";

export default function App() {
  return (
    <article className="w-[80%] mx-auto my-20  font-[Rubik] ">
      <div className="">
        <h1 className=" text-[54px] font-bold    ">Hey There!</h1>
        <h3 className=" leading-[16px] font-bold     ">Welcome to this repository. </h3>
        <br></br>
        <p className="font-sans leading-[18px]    ">
          Here you can have a look on 1 technical challenge I complete for Inxel. You can have a
          clear step by step view through the whole process.
        </p>
      </div>
      <InxelTest />
      <div>
        <h3 className=" leading-[16px] font-bold   ">But... How does it work?</h3>
        <br></br>
        <p>This is mainly a simple but really usefull contact manager.</p>
        <p>
          This is running in a local enviorment with hard-coded data. This was a project requirment
          but it can fetch any API to add real data.
        </p>
        <br></br>
        <h3 className=" leading-[16px] font-bold   ">Step #1:</h3>
        <br></br>
        <p>The first step was to make the whole structure in HTML.</p>
      </div>
    </article>
  );
}
