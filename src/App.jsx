import InxelTest from "./components/inxel-test";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import asset1 from "./assets/inxel-test-asset-1.mp4";

export default function App() {
  const snippet1 = `  
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

  const snippet5 = `
  const [data, setData] = useState([
    {
      name: "John", number: "25937", type: "person",
    },
    {
      name: "Peter", number: "29745", type: "person",
    },
    {
      name: "Richard", number: "82832", type: "company",
    },
    {
      name: "Fer", number: "32195", type: "company",
    },
  ]);
`;

  const snippet6 = `
  const [inputForm, setInputData] = useState({
    name: "",
    number: "",
    type: "person",
  });
`;

  const snippet7 = `
  const handleChange = () => {};
`;

  const snippet8 = `
  const handleChange = (event) => {}; // We receive the event
`;

  const snippet9 = `
  const name = event.target.name;
`;

  const snippet10 = `
  const value = event.target.value;
`;

  const snippet11 = `
  // This is the same as...

  const { name, value } = event.target; 

  //...as this, but deconstructed

  const name = event.target.name;
  const value = event.target.value;
`;

  const snippet12 = `
  setInputData({ ...inputForm, [name]: value });
`;

  const snippet13 = `
  // What ever it's in here...

  { ...inputForm } 

  // We will add this

  [name]: value 

  // Update the varible content calling it's function from the useState

  setInputForm()
`;

  const snippet14 = `
  // From this: 

  const { name, value } = event.target

  // We end passing this

  [name]: value 

  // Final result

  setInputForm({ ...inputForm, [name]: value })
`;

  const snippet15 = `
  // We declare that "value" comes from each one of its "inputForm.name".
  // We pass the "handleChange" function to the "onChange" attribute in each Tag.
  // This could be interpreted as "I pass you the power to modify the data and the other one is just going to display that modified data".

  <input name="name" value={inputForm.name} onChange={handleChange}></input>

  <input name="number" value={inputForm.number} onChange={handleChange}></input>

  <select name="type" value={inputForm.type} onChange={handleChange}>
`;

  const snippet16 = `
  const handleSubmit = () => {}
  `;

  const snippet17 = `
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  `;

  const snippet18 = `
  const handleSubmit = (event) => {
    // event.preventDefault();
    const newEntry = { ...inputForm };
  }
  `;

  const snippet19 = `
  const handleSubmit = (event) => {
    // event.preventDefault();
    // const newEntry = { ...inputForm };
    if (inputForm.name && inputForm.number !== "") {
      setData((prevData) => [...prevData, newEntry]);
      setInputData({
        name: "",
        number: "",
        type: "person",
      });
    } else null;
  }
  `;

  const snippet20 = `
  function Card() {
    return (
      <div>
        <div>
          <h3></h3>
          <h3></h3>
          <button></button>
        </div>
      </div>
    );
  }
  `;

  const snippet21 = `
  function Card(props) {
    return (
      <div>
        <div>
          <h3> {props.name} </h3>
          <h3> +{props.number} </h3>
          <button onClick={null}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  `;

  const snippet22 = `
  const filteredPerson = data.filter((item) => {
    return item.type === "person";
  });

  const filteredCompany = data.filter((item) => {
    return item.type === "company";
  });
  `;

  const snippet23 = `
  // Here we are sorting the filteredPerson variable in alphabetical order.

  const sortedPerson = [...filteredPerson].sort((a, b) => a.name.localeCompare(b.name));

  // Here we are sorting the filteredCompany variable in alphabetical order.

  const sortedCompany = [...filteredCompany].sort((a, b) => a.name.localeCompare(b.name));

  `;

  const snippet24 = `
  // This will have "person" as string as the first value.

  const [contactsFilter, setContactsFilter] = useState("person");

  // This will have "false" as booleand as the first value.

  const [isSorted, setIsSorted] = useState(false);
  `;

  const snippet25 = `
  // We place our 4 variables inside this function

  const personType = () => {

     const filteredPerson = data.filter((item) => {
      return item.type === "person";
     });

    const filteredCompany = data.filter((item) => {
      return item.type === "company";
    });

    const sortedPerson = [...filteredPerson].sort((a, b) => a.name.localeCompare(b.name));

    const sortedCompany = [...filteredCompany].sort((a, b) => a.name.localeCompare(b.name));

  };
  `;

  const snippet26 = `
  const personType = () => {

    // const filteredPerson = data.filter((item) => {
    //   return item.type === "person";
    // });
    // const filteredCompany = data.filter((item) => {
    //   return item.type === "company";
    // });
   // const sortedPerson = [...filteredPerson].sort((a, b) => a.name.localeCompare(b.name));
   // const sortedCompany = [...filteredCompany].sort((a, b) => a.name.localeCompare(b.name));

  // Here we ask which of our 4 options will be returned. Only 1 will be returned based on our 2 "useState" we created recently.

    if (contactsFilter === "person" && !isSorted) {
      return filteredPerson;
    } else if (contactsFilter === "company" && !isSorted) {
      return filteredCompany;
    } else if (contactsFilter === "person" && isSorted) {
      return sortedPerson;
    } else if (contactsFilter === "company" && isSorted) {
      return sortedCompany;
    }
  };

  // Finally we call the function and store its value in a new variable.

  const filtereData = personType();
  `;

  const snippet27 = `
  // This is calling the "setContactsFilter" and updating its value to the parameter we receive as "filtered".

  const handleToggle = (filtered) => {
    setContactsFilter(filtered);
  };

  // This is just a simple toggle between "true" or "false". No need to receive any parameter.

  const handleSorted = () => {
    setIsSorted(!isSorted);
  };
  `;

  const snippet28 = `
  <button
    className={contactsFilter === "person" ? "activeClass" : "idleClass"}   // We use the value in "contactFilter" to toggle between classes
    onClick={() => handleToggle("person")}    // We use an anonymus function to pass the value we are waiting in "handleToggle"
  >
    Person
  </button>
  <button 
    className={contactsCompany === "person" ? "activeClass" : "idleClass"}   // We use the value in "contactFilter" to toggle between classes
   onClick={() => handleToggle("company")}    // We use an anonymus function to pass the value we are waiting in "handleToggle"
 >
    Company
 </button>
 <button
    className={isSorted ? "activeClass" : "idleClass"}    // We use the value in "isSorted" to toggle between classes
    onClick={handleSorted}    // We just call the function "handleSorted".
 >
    A-Z
 </button>
  `;

  const snippet29 = `
  <div>
    {filtereData?.map((c) => (    // We add the "chain Operator" to prevent failures if the data is not loaded yet
      <div key={c.number}>        // We add a unique "key" which will come from our "number" value of each object
        <Card name={c.name} number={c.number} />  // Finally we pass the props to our "Card" component
      </div>
    ))}
  </div>
  `;

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
        <div id="step-1" className="flex flex-col gap-2 ">
          <h3 className="text-[24px] underline leading-[24px] font-bold my-5  ">Step #1:</h3>
          <p>
            The first step was to make the whole structure in HTML. As we are working with React,
            the proper name would be JSX .
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 1</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet1}
            </SyntaxHighlighter>
          </div>
        </div>
        <div id="step-2" className="flex flex-col gap-2 ">
          <h3 className="text-[20px] leading-[16px] font-bold my-4">Step #2</h3>
          <p>Here we add the attributes each tag will have in order to work as planned.</p>
          <p>
            We add the "name" attribute as an identifier. Then we add the "value and onChange" with
            "&#123; &#125;" so they can receive dynamic values or functions.
          </p>
          <p>This is how the our Input, Select, and Option Tags should look like:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 2</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet2}
            </SyntaxHighlighter>
          </div>
          <p>
            The last Tag we are missing here is the Button to submit the data collected. We need to
            add the "type=submit" and the "onClick=&#123;&#125;" to execute something when is
            clicked.
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 3</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
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
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 4</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet4}
            </SyntaxHighlighter>
          </div>
        </div>
        <div id="step-3" className="flex flex-col gap-2 ">
          <h3 className="text-[20px] leading-[16px] font-bold my-4">Step #3</h3>
          <p>At this point, we need to start creating the logic for this parent component.</p>
          <p>
            First we create the "useState" that is going to have the hard-coded data (We can use any
            API to download real users and store them in the same useState).
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 5</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet5}
            </SyntaxHighlighter>
          </div>
          <p>As you can see, we only have 3 key-value per object:</p>
          <ul className="list-disc pl-[30px] flex flex-col gap-2 ">
            <li>name</li>
            <li>number</li>
            <li>type</li>
          </ul>
          <p>This is because for the purpose of the exercise, we don't need more data.</p>
          <p>
            Now we create the "useState" where we are going to receive the submitted data from the
            Form.
          </p>
          <p>
            Notice how we add the "name" as empty as well as the "number". But the "type" is already
            filled. This is because the value of the Input Tags will be empty at first, but "person"
            will be the default value at the start.
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 6</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet6}
            </SyntaxHighlighter>
          </div>
          <p>
            For now, we will have 2 main functions. 1 that handles the entry in the Input and Select
            Tags. And 2, the one that handles the Submit action.
          </p>
          <p>
            First, let's create "handleChange", this will control what happens with each Input and
            Select Tags.
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 7</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet7}
            </SyntaxHighlighter>
          </div>
          <p>Let's add the rest:</p>
          <ul className="list-disc pl-[30px] flex flex-col gap-2 ">
            <li>We receive an event</li>
            <li>We extract the name and the value from the "event.target".</li>
            <li>
              We send the received data to the empty variable we create in the useState "inputForm".
            </li>
          </ul>
          <p>First the event:</p>
          <p>
            As for any onChange attribute, we are going to receive an Event, that parameter is going
            to be used in this function.
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 8</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet8}
            </SyntaxHighlighter>
          </div>
          <p>
            Remember we add a "name" attribute to Input and Select Tags? Well, now we are going to
            extract them from the "event.target.name".
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 9</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet9}
            </SyntaxHighlighter>
          </div>
          <p>
            For the value it could be a little tricky because we added a "value" attribute to Input,
            Select and Option Tags, but we are going to extract the "value" from Input and Select
            Tags only. You will get it soon!
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 10</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet10}
            </SyntaxHighlighter>
          </div>
          <p>
            Now if we apply some deconstruction, we can write the next line because both "value" and
            "name" come from "event.target".
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 11</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet11}
            </SyntaxHighlighter>
          </div>
          <p>Great! Now we have to send the data entries to the "inputForm" variable we created.</p>
          <p>
            For this we need to call the function "setInputForm" and with the spread operator we
            create a new "inputForm" (like a copy) and then, we are going to add the entry data from
            the Input and Select Tags.
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 12</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet12}
            </SyntaxHighlighter>
          </div>
          <p>Again, let's break it down:</p>
          <p>After using the Spread Operator, we have to say what we want to add.</p>
          <p>Check it out:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 13</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet13}
            </SyntaxHighlighter>
          </div>
          <p>Now, what's that weird syntaxis of "[name]: value"?</p>
          <p>Do you remember we added the "name" attribute to each Input and Select Tag? </p>
          <p>Do you remember we were going to make them dynamic?</p>
          <p>Well, as we are basically receiving more than 1 value, we can call it an Array.</p>
          <p>We add the value to each one.</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 14</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet14}
            </SyntaxHighlighter>
          </div>
          <p>Great! Our handleChange function is complete!</p>
          <p>Let's add the corresponding information to each Tag.</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 15</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet15}
            </SyntaxHighlighter>
          </div>
          <p>
            Your Form should be controllable and at the same time updating the data inside your
            "inputForm" variable.
          </p>
          <div className="rounded-[10px] overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
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
          <p>
            Now let's create "handleSubmit". This is were we are going to send the data received in
            the "inputForm" and send it to the "data" variable. But here it's going to be stored.
          </p>
          <p>Let's start by creating the function:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 16</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet16}
            </SyntaxHighlighter>
          </div>
          <p>
            In this function we receive an event parameter as well. This is going to be only to
            prevent the defualt value of a Button Tag. Which is reload the page.
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 17</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet17}
            </SyntaxHighlighter>
          </div>
          <p>Now we save the current value of "inputForm" in a new variable called "newEntry".</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 18</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet18}
            </SyntaxHighlighter>
          </div>
          <p>Finally we are going to decide what to do with the click event.</p>
          <p>In this case we want to have a ternary. We are going to ask:</p>
          <ul className="list-disc pl-[30px] flex flex-col gap-2 ">
            <li>If both Inputs are empty, when click event is triggered do nothing.</li>
            <li>
              If both are filled, send the "inputForm" entry to "data" with "setData" function.
            </li>
            <li>
              After that, we restore the values in Input and Select to their original state with
              "setInputData" function.
            </li>
          </ul>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 19</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet19}
            </SyntaxHighlighter>
          </div>
          <p>
            By this point our Form should be working 100%. The Inputs and Select Tags are
            controllable. The Button Tag sends the data to our chosen variable.
          </p>
          <p>
            We are missing the logic to display our new entries as cards. We are missing the filter
            to select "person" or "company" and "A-Z" sort buttons. As well as the "Delete" inside
            each card.
          </p>
        </div>
        <div id="step-4" className="flex flex-col gap-2 ">
          <h3 className="text-[24px] underline leading-[24px] font-bold my-5  ">Step #4</h3>
          <p>
            Let's start creating our Card component. As we are working with React, we will use
            composition to achieve this.
          </p>
          <p>This is going to help us re-use the same Card component for each object.</p>
          <p>This is going to look like this as JSX:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 20</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet20}
            </SyntaxHighlighter>
          </div>
          <p>
            Alright! Now, as this is a composition component. We need to receive the data we want to
            display as props.
          </p>
          <p>We add the props parameter to the component.</p>
          <p>
            Then, based on our "data" key-value structure, we kwon we need to display the "name" and
            the "number" of each contact.
          </p>
          <p>We will also need to add an "onClick" function for the "delete" action. </p>
          <p>
            So, in this case, everything comes from "props". So we take everything from "props".
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 21</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet21}
            </SyntaxHighlighter>
          </div>
          <p>
            Now we can use it in our parent component and pass the corresponding props to the child
            component!
          </p>
          <p>But first...!</p>
          <p>We need to start with the filtering of the data.</p>
          <p>
            Each object has a key-value called "type", this is where we can filter them by "person"
            or "company".
          </p>
          <p>
            For this project we are going to create 2 new variables that will store each object with
            "person" or "company" types only.
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 22</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet22}
            </SyntaxHighlighter>
          </div>
          <p>
            Now we have 2 variables that store our filtered data based on the "type", but we also
            need 2 more that will store the sorted values for each one.
          </p>
          <p>
            These will be based on our previous filtered variables, this way our data source will
            always be the updated.
          </p>
          <p>Your sorted variables should look something like this:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 23</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet23}
            </SyntaxHighlighter>
          </div>
          <p>
            Now we need to create 2 "useState" more. Here we are going to decide which of our 4
            options will be rendered.
          </p>
          <ul className="list-disc pl-[30px] flex flex-col gap-2 ">
            <li>Filtered Person Contact</li>
            <li>Sorted Person Contact</li>
            <li>Filtered Company Contact</li>
            <li>Sorted Company Contact</li>
          </ul>
          <p>1 will choose to render "person" and the other "company".</p>
          <p>2 will choose to render "person filtered" or "company filtered".</p>
          <p>For that these "useState" will look like this:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 24</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet24}
            </SyntaxHighlighter>
          </div>
          <p>We need a function where we can decide which of our 4 options we will return.</p>
          <p>Check it out!</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 25</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet25}
            </SyntaxHighlighter>
          </div>
          <p>
            Then we add the conditional to decide which one will be the output depending on our 2
            "useState".
          </p>
          <p>Notice how we are using both of the "useState" we created.</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 26</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet26}
            </SyntaxHighlighter>
          </div>
          <p>By this point we are really close to finish this project.</p>
          <p>
            Let's start creating the functions to handle the toggle between "person" and "company".
          </p>
          <p>
            Then we can create the function to toggle between "sorted" or the original variable.
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 27</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet27}
            </SyntaxHighlighter>
          </div>
          <p>Let's use them!</p>
          <p>For this we have to go to our Button Tags we created for this purpose.</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 28</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet28}
            </SyntaxHighlighter>
          </div>
          <p>
            Now let's start using our Card component. We will use the array method "map" to display
            each object in the same composition component.
          </p>
          <p>
            We are going to map our "filteredData" variable, remember, this variable has the data we
            decide to render with our buttons.
          </p>
          <p>
            Inside our "map", we will add the component "Card" and pass the props we said before we
            will be receiving in our child component.
          </p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 29</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet29}
            </SyntaxHighlighter>
          </div>
          <p>Each "map" will display all objects from our "filtereData" variable as cards.</p>
          <p>Your project should be working like this:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Snippet 30</i>
            </div>
            <hr className="border-white border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippet27}
            </SyntaxHighlighter>
          </div>
          <p>At this point your componet just</p>
        </div>
      </div>
    </article>
  );
}
