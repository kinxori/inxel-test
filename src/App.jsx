import InxelTest from "./components/inxel-test";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import asset1 from "./assets/inxel-test-asset-1.mp4";

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
      <div> <CardComponent...> </div>
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
    <select
    name="type"
    value={null}
    onChange={null}
  >
    <option value="person">Person</option>
    <option value="company">Company</option>
  </select>

`;

  const snippet3 = `
  <button onClick={null} type="submit">
    Add
  </button>

`;

  const snippet4 = `
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
  // This is the same as...

  const { name, value } = event.target; 

  //...as this, but deconstructed

  const name = event.target.name;
  const value = event.target.value;

`;

  const snippet13 = `
  setInputData({ ...inputForm, [name]: value });

`;

  const snippet14 = `
  // What ever it's in here...

  { ...inputForm } 

  // We will add this

  [name]: value 

  // Update the varible content calling it's function from the useState

  setInputForm()

`;

  const snippet15 = `
  // From this: 

  const { name, value } = event.target

  // We end passing this

  [name]: value 

  // Final result

  setInputForm({ ...inputForm, [name]: value })

`;

  const snippet16 = `
  // We declare that "value" comes from each one of its "inputForm.name".
  // We pass the "handleChange" function to the "onChange" attribute in each Tag.
  // This could be interpreted as "I pass you the power to modify the data and the other one is just going to display that modified data".

  <input name="name" value={inputForm.name} onChange={handleChange}></input>

  <input name="number" value={inputForm.number} onChange={handleChange}></input>

  <select name="type" value={inputForm.type} onChange={handleChange}>

`;

  return (
    <article className="w-[80%] mx-auto my-20  font-[Rubik] ">
      <div className=" flex flex-col gap-5">
        <h1 className=" text-[54px] font-bold    ">Hey There!</h1>
        <h3 className=" leading-[16px] font-bold     ">Welcome to this repository. </h3>
        <p className="font-sans leading-[18px]    ">
          Here you can have a look on 1 technical challenge I completed for Inxel. You can have a
          clear step by step view through the whole process.
        </p>
      </div>
      <InxelTest />
      <div className="flex flex-col gap-5 ">
        <h3 className=" leading-[16px] font-bold   ">But... How does it work?</h3>
        <p>This is mainly a simple but really usefull contact manager.</p>
        <p>
          This is running in a local enviorment with hard-coded data. This was a project requirment
          but you can fetch any API to add real data.
        </p>
        <div className="flex flex-col gap-5 ">
          <h3 className=" leading-[16px] font-bold   ">Step #1:</h3>
          <p>
            The first step was to make the whole structure in HTML. As we are working with React,
            the proper name would be JSX .
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 1</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet1}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <h3 className=" leading-[16px] font-bold ">Step #2</h3>
          <p>Here we add the attributes each tag will have in order to work as planned.</p>
          <p>
            We add the "name" attribute as an identifier. Then we add the "value and onChange" with
            "&#123; &#125;" so they can receive dynamic values or functions.
          </p>
          <p>This is how the our Input, Select, and Option Tags should look like:</p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 2</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet2}
            </SyntaxHighlighter>
          </div>
          <p>
            The last Tag we are missing here is the Button to submit the data collected. We need to
            add the "type=submit" and the "onClick=&#123;&#125;" to execute something when is
            clicked.
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 3</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet3}
            </SyntaxHighlighter>
          </div>
          <p>
            After that we keep adding attributes now to the buttons that are going to toggle the
            "Person and Company" lists, as well as the "A-Z" button.
          </p>
          <p>
            We add the "&#123; &#125;" to the className because we need to make the styles dynamic:
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 4</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet4}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <h3 className=" leading-[16px] font-bold ">Step #3</h3>
          <p>At this point, we need to start creating the logic for this parent component.</p>
          <p>
            First we create the "useState" that is going to have the hard-coded data (We can use any
            API to download real users) and store them in the same useState.
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 6</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet6}
            </SyntaxHighlighter>
          </div>
          <p>As you can see, we only have 3 values per object:</p>
          <ul className="list-disc pl-[30px]">
            <li>name</li>
            <li>number</li>
            <li>type</li>
          </ul>
          <p>This is because for the purpose of the exercise, we don't need more data.</p>
          <p>
            Now we create the "useState" where we are going to receive the data from the Form Tag.
          </p>
          <p>
            Notice how we add the "name" as empty as well as the "number". But the "type" is already
            filled. This is because "person" will be the default value.
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 7</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet7}
            </SyntaxHighlighter>
          </div>
          <p>
            For now, we will have 2 main functions. 1 that handles the entry in the Input and Select
            Tags. And 2, the one that handles the Submit action.
          </p>
          <p>
            First, let's create "handleChange", this will control what happens with each Input Tag
            and with the Select and Option Tags.
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 8</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet8}
            </SyntaxHighlighter>
          </div>
          <p>Let's break it down:</p>
          <ul className="list-decimal pl-[30px]">
            <li>We receive an event</li>
            <li>We "extract" the name and the value from the event.target</li>
            <li>We "send" the receive data to the empty variable we create in the useState.</li>
          </ul>
          <p>Point #1:</p>
          <p>
            As for any onChange attribute, we are going to receive an event, that event is going to
            be passed in the function to use it.
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 9</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet9}
            </SyntaxHighlighter>
          </div>
          <p>
            Remember we add a "name" attribute to Inputs and Select Tags? Well, now we are going to
            use extract them from the "event.target.name".
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 10</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet10}
            </SyntaxHighlighter>
          </div>
          <p>
            For the value it could be a little tricky because we added a "value" attribute to Input,
            Select and Option Tags, but we are going to extract the "value" from Input and Select
            Tags only. You will get it soon!
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 11</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet11}
            </SyntaxHighlighter>
          </div>
          <p>
            Now if we apply some deconstruction, we can write the next lines because both "value"
            and "name" come from "event.target".
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 12</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet12}
            </SyntaxHighlighter>
          </div>
          <p>
            Great! Now we have to send the data entries to the "inputForm" variable we created in
            the "useState".
          </p>
          <p>
            For this we need to call the function "setInputForm" and with the spread operator state
            that what ever it's already in there, we are going to add the entry data from the Input
            and Select Tags.
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 13</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet13}
            </SyntaxHighlighter>
          </div>
          <p>Again, let's break it down:</p>
          <p>After using the Spread Operator, we have to state what we want to add.</p>
          <p>Check it out:</p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 14</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet14}
            </SyntaxHighlighter>
          </div>
          <p>Now, what's that weird syntaxis of "[name]: value"?</p>
          <p>Do you remember we added the "name" attribute to each Input and Select Tag? </p>
          <p>Do you remember we were going to make them dynamic?</p>
          <p>
            Well, as we are basically receiving/listening each one of those attributes, we can call
            it an Array
          </p>
          <p>
            And as we are saying that each one of those "name" elements has a value, we add the
            value to each one.
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 15</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet15}
            </SyntaxHighlighter>
          </div>
          <p>Great! Our handleChange function is complete!</p>
          <p>Let's add the corresponding information to each Tag.</p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 16</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter language="jsx" style={dracula}>
              {snippet16}
            </SyntaxHighlighter>
          </div>
          <p>
            Your Form should be controllable and at the same time updating the data inside your
            "inputForm" variable.
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]   ">
            <video
              src={asset1}
              loop
              autoPlay
              controls
              disablePictureInPicture
              disableRemotePlayback
              controlsList="nodownload noremoteplayback noplaybackrate "
              muted
            ></video>
          </div>
        </div>
      </div>
    </article>
  );
}
