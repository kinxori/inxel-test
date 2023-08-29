import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function JustCode() {
  const parentComponent = `
  import React from "react";
  import { useState } from "react";
  
  export default function ContactManager() {

    const [contactsFilter, setContactsFilter] = useState("personalal");
    const [isSorted, setIsSorted] = useState(false);
    const [inputForm, setInputData] = useState({
      name: "",
      number: "",
      type: "personalal",
    });
    const [data, setData] = useState([
        { name: "John", number: "25937", type: "personalal" },
        { name: "Peter", number: "29745", type: "personalal" },
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
          type: "personalal",
        });
      } else null;
    };
  
    const handleRemove = (id) => {
      setData((prevData) => prevData.filter((card) => card.number !== id));
    };
  
    const handleToggle = (filtered) => {
      setContactsFilter(filtered);
    };
  
    const handleSorted = () => {
      setIsSorted(!isSorted);
    };
  
    const personalalType = () => {
      const filteredPersonalal = data.filter((item) => {
        return item.type === "personalal";
      });
      const filteredCompany = data.filter((item) => {
        return item.type === "company";
      });
      const sortedPersonalal = [...filteredPersonalal].sort((a, b) => a.name.localeCompare(b.name));
      const sortedCompany = [...filteredCompany].sort((a, b) => a.name.localeCompare(b.name));
  
      if (contactsFilter === "personalal" && !isSorted) {
        return filteredPersonalal;
      } else if (contactsFilter === "company" && !isSorted) {
        return filteredCompany;
      } else if (contactsFilter === "personalal" && isSorted) {
        return sortedPersonalal;
      } else if (contactsFilter === "company" && isSorted) {
        return sortedCompany;
      }
    };
  
    const filtereData = personalalType();
  
    return (
      <article>
        <div>
          <form>
            <input required={true} autoComplete="off" name="name" value={inputForm.name} onChange={handleChange} placeholder="name" type="text" ></input>
            <input required name="number" value={inputForm.number} onChange={handleChange} placeholder="number" type="text" ></input>
            <select name="type" value={inputForm.type} onChange={handleChange} >
              <option value="personalal" >Personal</option>
              <option value="company" >Company</option>
            </select>
            <button onClick={handleSubmit} type="submit" >
              Add Contact
            </button>
          </form>
        </div>
        <div>
          <div>
            <button className={ contactsFilter === "personalal" ? "activeClass" : "idleClass" } onClick={() => handleToggle("personalal")} >
              Personalal
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
                <Card name={c.name} number={c.number} handleRemove={handleRemove} />
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
          <button onClick={() => props.handleRemove(props.number)} >
            Remove
          </button>
        </div>
      </div>
    );
  }
  `;

  return (
    <>
      <div className="flex flex-col gap-2 ">
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
      </div>
    </>
  );
}
