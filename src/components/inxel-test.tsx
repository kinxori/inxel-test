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
    border-[2px] 
    border-white 
    my-10
    bg-black
    overflow-hidden
    drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] 
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
            bg-white
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
            <option value="person">Person</option>
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
        flex
        flex-col
        overflow-auto
        gap-[20px]
       
        "
      >
        <div className=" flex gap-[5px] h-[40px] justify-around  ">
          <button
            className={typeDisplay === "person" ? " bg-white text-black " : "bg-black text-white"}
            onClick={() => setTypeDisplay("person")}
          >
            Person
          </button>
          <button
            className={typeDisplay === "company" ? " bg-white text-black " : "bg-black text-white"}
            onClick={() => setTypeDisplay("company")}
          >
            Company
          </button>
          <button
            onClick={handleAlphabetic}
            className={isSorted ? " bg-white text-black  " : " bg-black text-white "}
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
          onClick={() => props.handleDelete(props.number)}
          className="
        ml-auto
        bg-black
        text-white
        "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
