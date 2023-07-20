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
        <div className="overflow-hidden w-[10%]    ">
          <p
            class="codepen"
            data-height="300"
            data-theme-id="dark"
            data-default-tab="html"
            data-slug-hash="xxaPQey"
            data-user="kinxori"
            style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          >
            <span>
              See the Pen <a href="https://codepen.io/kinxori/pen/xxaPQey">practica 1</a> by kinxori
              (<a href="https://codepen.io/kinxori">@kinxori</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </span>
          </p>
          <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
        </div>
      </div>
    </article>
  );
}
