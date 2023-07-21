import InxelTest from "./components/inxel-test";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
  <input 
    type="number" 
    value={null} 
    placeholder="Insert your name" 
    name="number" 
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

  const snippet4 = `
  <button onClick={null} type="submit">
    Add
  </button>

`;

  const snippet5 = `
  <button className={null} onClick={null}>
    Person
  </button>
  <button className={null} onClick={null}>
    Company
  </button>
  <button className={null} onClick={null}>
    A-Z
  </button>

`;

  const snippet6 = `
  const [data, setData] = useState([
    {
      name: "John",
      number: "25937",
      type: "person",
    },
    {
      name: "Peter",
      number: "29745",
      type: "person",
    },
    {
      name: "Richard",
      number: "82832",
      type: "company",
    },
    {
      name: "Fer",
      number: "32195",
      type: "company",
    },
  ]);

`;

  const snippet7 = `
  const [inputForm, setInputData] = useState({
    name: "",
    number: "",
    type: "person",
  });

`;

  const snippet8 = `
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputForm, [name]: value });
  };
  
`;

  const snippet9 = `
  const handleChange = (event) => {}; // We receive the event

`;

  const snippet10 = `
  const name = event.target.name;

`;

  const snippet11 = `
  const value = event.target.value;

`;

  const snippet12 = `
  const { name, value } = event.target;

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
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 1</i>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet1}
          </SyntaxHighlighter>
        </div>
        <br></br>
        <h3 className=" leading-[16px] font-bold ">Step #2</h3>
        <br></br>
        <p>Here we add the attributes each tag will have in order to work as planned.</p>
        <br></br>
        <p>
          We add the "name" attribute as an identifier. Then we add the "value and onChange" with
          "&#123; &#125;" so they can receive dynamic values or functions.
        </p>
        <br></br>
        <p>This is how the input tag should look like:</p>
        <br></br>
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 2</i>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet2}
          </SyntaxHighlighter>
        </div>
        <br></br>
        <p>Then we add the similar attributes to "option and select" tags:</p>
        <br></br>
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 3</i>
          </div>

          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet3}
          </SyntaxHighlighter>
        </div>
        <br></br>
        <p>
          The last tag we are missing here is the Button to submit the data collected. We need to
          add the "type=submit" and the "onClick=&#123;&#125;" to execute something when is clicked.
        </p>
        <br></br>
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 4</i>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet4}
          </SyntaxHighlighter>
        </div>
        <br></br>
        <p>
          After that we keep adding attributes now to the buttons that are going to toggle the
          "Person and Company" list, as well as the "A-Z" button.
        </p>
        <br></br>
        <p>
          We add the "&#123; &#125;" to the className because we need to make the styles dynamic:
        </p>
        <br></br>
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 5</i>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet5}
          </SyntaxHighlighter>
        </div>
        <br></br>
        <h3 className=" leading-[16px] font-bold ">Step #3</h3>
        <br></br>
        <p>At this point, we need to start creating the logic for this parent component.</p>
        <br></br>
        <p>
          First we create the "useState" that is going to have the hard-coded data (We can use any
          API to download real users) and store them in the same useState.
        </p>
        <br></br>
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 6</i>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet6}
          </SyntaxHighlighter>
        </div>
        <br></br>
        <p>As you can see, we only have 3 values per object:</p>
        <br></br>
        <ul className="list-disc pl-[30px]">
          <li>name</li>
          <li>number</li>
          <li>type</li>
        </ul>
        <br></br>
        <p>This is because for the purpose of the exercise, we don't need more data.</p>
        <br></br>
        <p>
          Now we create the "useState" where we are going to receive the data from the Form Tag.
        </p>
        <br></br>
        <p>
          Notice how we add the "name" as empty as well as the "number". But the "type" is already
          filled. This is because "person" will be the default value.
        </p>
        <br></br>
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 7</i>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet7}
          </SyntaxHighlighter>
        </div>
        <br></br>
        <p>
          For now, we will have 2 main functions. 1 that handles the entry in the Input and Select
          Tags. And 2, the one that handles the Submit action.
        </p>
        <br></br>
        <p>
          First, let's create "handleChange", this will control what happens with each Input Tag and
          with the Select and Option Tags.
        </p>
        <br></br>
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 8</i>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet8}
          </SyntaxHighlighter>
        </div>
        <br></br>
        <p>Let's break it down:</p>
        <br></br>
        <ul className="list-decimal pl-[30px]">
          <li>We receive an event</li>
          <li>We "extract" the name and the value from the event.target</li>
          <li>We "send" the receive data to the empty variable we create in the useState.</li>
        </ul>
        <br></br>
        <p>Point #1:</p>
        <br></br>
        <p>
          As for any onChange attribute, we are going to receive an event, that event is going to be
          passed in the function to use it.
        </p>
        <br></br>
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 9</i>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet9}
          </SyntaxHighlighter>
        </div>
        <br></br>
        <p>
          Remember we add a "name" attribute to Inputs and Select Tags? Well, now we are going to
          use extract them from the "event.target.name".
        </p>
        <br></br>
        <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 9</i>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {snippet9}
          </SyntaxHighlighter>
        </div>
      </div>
    </article>
  );
}
