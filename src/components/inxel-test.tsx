import React from "react";
import { useState } from "react";

function InxelTest() {
  const [typeDisplay, setTypeDisplay] = useState("person");
  const [isSorted, setIsSorted] = useState(false);
  const [inputForm, setInputData] = useState({
    name: "",
    number: "",
    type: "person",
  });
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

  console.log("inputForm console: ", inputForm);

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
        type: "person",
      });
    } else null;
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((card) => card.number !== id));
  };

  const handleAlphabetic = () => {
    setIsSorted(!isSorted);
  };

  const filteredPerson = data.filter((item) => {
    return item.type === "person";
  });
  const filteredCompany = data.filter((item) => {
    return item.type === "company";
  });

  const sortedPersonArray = [...filteredPerson].sort((a, b) => a.name.localeCompare(b.name));

  const sortedCompanyArray = [...filteredCompany].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <article
      className="flex 
    flex-col 
    rounded-[10px] 
    border-[3px] 
    border-black 
    my-10
    bg-white
    overflow-hidden
    drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] 
    "
    >
      <div
        className="
        box-border
        p-[10px]
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
            bg-black
            placeholder:text-[rgba(250,250,250,.2)]
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
            bg-black
            placeholder:text-[rgba(250,250,250,.2)]
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
            bg-black
            "
          >
            <option value="person">Person</option>
            <option value="company">Company</option>
          </select>
          <button
            className="bg-white text-black  border-[2px] border-solid border-black  "
            onClick={handleSubmit}
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <div
        className="
        h-[300px]
        box-border
        p-[10px]
        flex
        flex-col
        overflow-auto
        gap-[20px]
       
        "
      >
        <div className=" flex gap-[5px] h-[40px] justify-around  ">
          <button
            className={typeDisplay === "person" ? " bg-black text-white " : "bg-white text-black"}
            onClick={() => setTypeDisplay("person")}
          >
            Person
          </button>
          <button
            className={typeDisplay === "company" ? " bg-black text-white " : "bg-white text-black"}
            onClick={() => setTypeDisplay("company")}
          >
            Company
          </button>
          <button
            onClick={handleAlphabetic}
            className={isSorted ? " bg-black text-white  " : " bg-white text-black "}
          >
            A-Z
          </button>
        </div>
        <div className="flex flex-col gap-[5px] overflowY-auto      ">
          {typeDisplay === "person" ? (
            <>
              {isSorted
                ? sortedPersonArray.map((c) => (
                    <div key={c.number}>
                      <Card name={c.name} number={c.number} handleDelete={handleDelete} />
                    </div>
                  ))
                : filteredPerson.map((c) => (
                    <div key={c.number}>
                      <Card name={c.name} number={c.number} handleDelete={handleDelete} />
                    </div>
                  ))}
            </>
          ) : (
            <>
              {isSorted
                ? sortedCompanyArray.map((c) => (
                    <div key={c.number}>
                      <Card name={c.name} number={c.number} handleDelete={handleDelete} />
                    </div>
                  ))
                : filteredCompany.map((c) => (
                    <div key={c.number}>
                      <Card name={c.name} number={c.number} handleDelete={handleDelete} />
                    </div>
                  ))}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default InxelTest;

function Card(props) {
  return (
    <div
      className="
 
      h-[60px]
      bg-black
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
        "
      >
        <h3>{props.name}</h3>
        <h3>+ {props.number}</h3>
        <button
          onClick={() => props.handleDelete(props.number)}
          className="
        ml-auto
        bg-white
        text-black
        "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
