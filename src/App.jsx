import InxelTest from "./components/inxel-test";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  darcula,
  dark,
  docco,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function App() {
  const snippet1 = `  
  {*  Basic HTML structure *}

  <article>
    <div>
      <form>
        <input></input>
        <input></input>
        <select>
          <option>Person</option>
          <option>Company</option>
        </select>
        <button> Add </button>
      </form>
    </div>
    <div>
      <div>
        <button> Person </button>
        <button> Company </button>
        <button> A-Z </button>
      </div>
      <div> <Card Component> </div>
    </div>
  </article>

`;

  const snippet2 = `
  <input 
    type="text" 
    value={null} 
    placeholder="Insert your name" 
    name="name" 
    onChange={null}
  >
  </input>

`;

  const snippet3 = `
  <select
    name="type"
    value={inputForm.type}
    onChange={handleChange}
  >
      <option value="person">Person</option>
      <option value="company">Company</option>
  </select>

`;

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
        <p>
          The first step was to make the whole structure in HTML. As we are working with React, the
          proper name would be JSX .
        </p>
        <br></br>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="rounded-[10px] overflow-hidden "
        >
          {snippet1}
        </SyntaxHighlighter>
        <br></br>
        <h3 className=" leading-[16px] font-bold   ">Step #2</h3>
        <br></br>
        <p>Here we add the attributes each tag will have in order to work as planned.</p>
        <br></br>
        <p>
          We add the "name" attribute as an identifier. Then we add the "value and onChange" with "
          {}" so they can receive dynamic values or functions.
        </p>
        <br></br>
        <p>This is how the input tag should look like:</p>
        <br></br>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="rounded-[10px] overflow-hidden "
        >
          {snippet2}
        </SyntaxHighlighter>
        <br></br>
        <p>Then we add the similar attributes to "option and select" tags:</p>
        <br></br>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="rounded-[10px] overflow-hidden "
        >
          {snippet3}
        </SyntaxHighlighter>
        <br></br>
      </div>
    </article>
  );
}
