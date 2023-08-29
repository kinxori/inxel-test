import React from "react";
import { useState } from "react";

export default function ContactManagerTest() {
  const [contactsFilter, setContactsFilter] = useState("personal");
  const [isSorted, setIsSorted] = useState(false);
  const [inputForm, setInputData] = useState({
    name: "",
    number: "",
    type: "personal",
  });
  const [data, setData] = useState([
    {
      name: "John",
      number: "25937",
      type: "personal",
    },
    {
      name: "Peter",
      number: "29745",
      type: "personal",
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

  const handleToggle = (filtered) => {
    setContactsFilter(filtered);
  };

  const handleSorted = () => {
    setIsSorted(!isSorted);
  };

  const handleRemove = (id) => {
    setData((prevData) => prevData.filter((card) => card.number !== id));
  };

  const outputType = () => {
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

  const filtereData = outputType();

  return (
    <article
      className="flex 
    flex-col 
    rounded-[10px] 
    border-[2px] 
    border-white 
    my-10
    bg-black
    overflow-hidden
    drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] 
    w-[100%]
    "
    >
      <div
        className="
        box-border
        p-[10px]
        ts:p-[20px]
        "
      >
        <form className="flex flex-col gap-[5px]   ">
          <input
            required={true}
            autoComplete="off"
            name="name"
            value={inputForm.name}
            onChange={handleChange}
            placeholder="name"
            type="text"
            className="
            h-[40px]
            rounded-[10px]
            pl-[10px]
            bg-white
            text-black
            placeholder:text-[rgba(0,0,0,.5)]
            "
          ></input>
          <input
            required
            name="number"
            value={inputForm.number}
            onChange={handleChange}
            placeholder="number"
            type="text"
            className="
            h-[40px]
            rounded-[10px]
            pl-[10px]
            bg-white
            text-black
            placeholder:text-[rgba(0,0,0,.5)]
            "
          ></input>
          <select
            name="type"
            value={inputForm.type}
            onChange={handleChange}
            className="
            h-[40px]
            rounded-[10px]
            pl-[5px]
            bg-white
            text-black
            "
          >
            <option value="personal">Personal</option>
            <option value="company">Company</option>
          </select>
          <button
            className="
            bg-white
            text-black 
            border-white  
              rounded-[10px]
              h-[40px]
              "
            onClick={handleSubmit}
            type="submit"
          >
            Add Contact
          </button>
        </form>
      </div>
      <div
        className="
        h-[300px]
        box-border
        p-[10px]
        ts:p-[20px]
        flex
        flex-col
        overflow-auto
        gap-[20px]
       
        "
      >
        <div className="w-[100%] flex gap-[5px] h-[40px] justify-around ">
          <button
            className={
              contactsFilter === "personal" ? " bg-white text-black " : "bg-black text-white"
            }
            onClick={() => handleToggle("personal")}
          >
            Personal
          </button>
          <button
            className={
              contactsFilter === "company" ? " bg-white text-black " : "bg-black text-white"
            }
            onClick={() => handleToggle("company")}
          >
            Company
          </button>
          <button
            onClick={handleSorted}
            className={
              isSorted ? " bg-white text-black   ts:ml-auto " : " bg-black text-white  ts:ml-auto "
            }
          >
            A-Z
          </button>
        </div>
        <div className="flex flex-col gap-[5px] overflowY-auto      ">
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

function Card(props) {
  return (
    <div
      className="
 
      h-[60px]
      bg-white
      flex
      rounded-[10px]
      "
    >
      <div
        className="
        w-[100%]
        flex
        justify-center
        items-center
        gap-[10px]
        mx-[10px]
        text-black
        "
      >
        <h3>{props.name}</h3>
        <h3>+ {props.number}</h3>
        <button
          onClick={() => props.handleRemove(props.number)}
          className="
        ml-auto
        bg-black
        text-white
        "
        >
          Remove
        </button>
      </div>
    </div>
  );
}
