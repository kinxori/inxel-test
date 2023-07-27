import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function JustCode() {
  const parentComponent = `
  import React from "react";
  import { useState } from "react";
  
  export default function InxelTest() {

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
        { name: "Fer", number: "32195", type: "company", },
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
  
    return (
      <article>
        <div>
          <form>
            <input required={true} autoComplete="off" name="name" value={inputForm.name} onChange={handleChange} placeholder="name" type="text" ></input>
            <input required name="number" value={inputForm.number} onChange={handleChange} placeholder="number" type="text" ></input>
            <select name="type" value={inputForm.type} onChange={handleChange} >
              <option value="personal" >Person</option>
              <option value="company" >Company</option>
            </select>
            <button onClick={handleSubmit} type="submit" >
              Add Contact
            </button>
          </form>
        </div>
        <div>
          <div>
            <button className={ contactsFilter === "personal" ? "activeClass" : "idleClass" } onClick={() => handleToggle("personal")} >
              Personal
            </button>
            <button className={ contactsFilter === "company" ? "activeClass" : "idleClass" } onClick={() => handleToggle("company")} >
              Company
            </button>
            <button className={ isSorted ? "activeClass" : "idleClass"} onClick={handleSorted} >
              A-Z
            </button>
          </div>
          <div>
            {filtereData?.map((c) => (
              <div key={c.number}>
                <Card name={c.name} number={c.number} handleDelete={handleDelete} />
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }
    `;

  const childComponent = `
  function Card(props) {
    return (
      <div>
        <div>
          <h3>{props.name}</h3>
          <h3>+ {props.number}</h3>
          <button onClick={() => props.handleDelete(props.number)} >
            Remove
          </button>
        </div>
      </div>
    );
  }
  `;

  return (
    <article className="flex flex-col gap-2 ">
      <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
        <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
          <i className="text-black  ">Parent Component</i>
        </div>
        <hr className="border-black border-[2px]"></hr>
        <SyntaxHighlighter
          language="text"
          customStyle={{ background: "black", color: "white" }}
          showLineNumbers
        >
          {parentComponent}
        </SyntaxHighlighter>
      </div>
      <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
        <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
          <i className="text-black  ">Child Component</i>
        </div>
        <hr className="border-black border-[2px]"></hr>
        <SyntaxHighlighter
          language="text"
          customStyle={{ background: "black", color: "white" }}
          showLineNumbers
        >
          {childComponent}
        </SyntaxHighlighter>
      </div>
    </article>
  );
}
