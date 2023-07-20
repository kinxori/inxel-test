import InxelTest from "./components/inxel-test";

export default function App() {
  return (
    <article className="w-[80%] mx-auto my-10 overflow-hidden font-[Rubik] ">
      <div className="">
        <h1 className=" text-[54px] font-bold    ">Hey There!</h1>
        <h3 className=" leading-[16px] font-bold     ">Welcome to this repository. </h3>
        <br></br>
        <p className="font-sans leading-[18px]    ">
          Here you can have a look on 1 technical challenge I complete for Inxel. You can have a
          step by step through the whole process I did.
        </p>
      </div>
      <InxelTest />
    </article>
  );
}
