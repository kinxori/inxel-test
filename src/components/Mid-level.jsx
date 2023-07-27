import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function MidLevel() {
  const snippet1 = `  
  export default function ParentComponent(){
    return (
        <article>
            <div>
                <form>
                    <input></input>
                    <input></input>
                    <select>
                        <option>Personal</option>
                        <option>Company</option>
                    </select>
                    <button> Add </button>
                </form>
            </div>
            <div>
                <div>
                    <button> Personal </button>
                    <button> Company </button>
                    <button> A-Z </button>
                </div>
                <div> 
                    <Card/> 
                </div>
            </div>
        </article>
      );
    }
`;

  const snippet2 = `  
    function Card(props) {
        return (
          <div>
            <div>
              <h3> {props.name} </h3>
              <h3> +{props.number} </h3>
              <button onClick={null}> Remove </button>
            </div>
          </div>
        );
      }
  `;

  const snippet3 = `  
  const [inputForm, setInputData] = useState({
    name: "",
    number: "",
    type: "personal",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { ...inputForm };
    if (inputForm.name && inputForm.number !== "") {
      setData((prevData) => [...prevData, newEntry]);
      setInputData({
        name: "",
        number: "",
        type: "personal",
      });
    } else null;
  };
`;

  const snippet4 = `  
<form>
    <input required={true} autoComplete="off" name="name" value={inputForm.name} onChange={handleChange} placeholder="name" type="text" ></input>
    <input required name="number" value={inputForm.number} onChange={handleChange} placeholder="number" type="text" ></input>
    <select name="type" value={inputForm.type} onChange={handleChange} >
        <option value="personal">Personal</option>
        <option value="company">Company</option>
    </select>
    <button onClick={handleSubmit} type="submit" >
        Add Contact
    </button>
</form>
`;

  const snippet = `
  const [contactsFilter, setContactsFilter] = useState("personal");
  const [isSorted, setIsSorted] = useState(false);
  const [inputForm, setInputData] = useState({
    name: "",
    number: "",
    type: "personal",
  });
  const [data, setData] = useState([
    { name: "John", number: "25937", type: "personal" },
    { name: "Peter", number: "29745", type: "personal" },
    { name: "Richard", number: "82832", type: "company" },
    { name: "Fer", number: "32195", type: "company" },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { ...inputForm };
    if (inputForm.name && inputForm.number !== "") {
      setData((prevData) => [...prevData, newEntry]);
      setInputData({
        name: "",
        number: "",
        type: "personal",
      });
    } else null;
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((card) => card.number !== id));
  };

  const handleToggle = (filtered) => {
    setContactsFilter(filtered);
  };

  const handleSorted = () => {
    setIsSorted(!isSorted);
  };

  const personalType = () => {
    const filteredPersonal = data.filter((item) => {
      return item.type === "personal";
    });
    const filteredCompany = data.filter((item) => {
      return item.type === "company";
    });
    const sortedPersonal = [...filteredPersonal].sort((a, b) => a.name.localeCompare(b.name));
    const sortedCompany = [...filteredCompany].sort((a, b) => a.name.localeCompare(b.name));

    if (contactsFilter === "personal" && !isSorted) {
      return filteredPersonal;
    } else if (contactsFilter === "company" && !isSorted) {
      return filteredCompany;
    } else if (contactsFilter === "personal" && isSorted) {
      return sortedPersonal;
    } else if (contactsFilter === "company" && isSorted) {
      return sortedCompany;
    }
  };

  const filtereData = personalType();
  `;

  return (
    <>
      <div id="step-1" className="flex flex-col gap-2 ">
        <h3 className="text-[24px] underline leading-[24px] font-bold my-5  ">Step #1:</h3>
        <p>
          The first step is to create all the JSX/HTML structure. For both parent and child
          component.
        </p>
        <p>
          We need to create two main Div. 1 for the Form and the other one to render the existing
          and created contacts. As well as their main buttons to filter.
        </p>
        <p>
          Inside our first Div, we will have one Form, inside this Form we will have 2 Inputs and 1
          Select with 2 Option and 1 Button Tags.
        </p>
        <p>
          In our second Div, we will place 3 Buttons and 1 Div to store the child component we will
          create.
        </p>
        <p>It should look similar to this:</p>
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
        <p>Now the child component.</p>
        <p>
          Here we wiill have the structure of the Card. Mainly, we will display the "name", the
          "number" and one Button to Remove the item.
        </p>
        <p>It should look similar to this:</p>
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
            {snippet2}
          </SyntaxHighlighter>
        </div>
      </div>
      <div id="step-2" className="flex flex-col gap-2 ">
        <h3 className="text-[24px] underline leading-[24px] font-bold my-5  ">Step #2:</h3>
        <p>Then we create the logic for the parent component.</p>
        <p>Let's start with the "useState" and the functions to handle the Form.</p>
        <p>For this, we will need 2 functions:</p>
        <ul className="list-disc pl-[30px] flex flex-col gap-2 ">
          <li>handleChange</li>
          <li>handleSubmit</li>
        </ul>
        <p>Here we will store our data entry from the Form.</p>
        <p>It should look similar to this:</p>
        <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 3</i>
          </div>
          <hr className="border-white border-[2px]"></hr>
          <SyntaxHighlighter
            language="text"
            customStyle={{ background: "black", color: "white" }}
            showLineNumbers
          >
            {snippet3}
          </SyntaxHighlighter>
        </div>
        <p>
          Then we will use those functions in our Form and add the corresponding attributes to each
          Tag.
        </p>
        <p>It should look similar to this:</p>
        <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 4</i>
          </div>
          <hr className="border-white border-[2px]"></hr>
          <SyntaxHighlighter
            language="text"
            customStyle={{ background: "black", color: "white" }}
            showLineNumbers
          >
            {snippet4}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
