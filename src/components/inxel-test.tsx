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
      name: "Juan",
      number: "1209312",
      type: "person",
    },
    {
      name: "Pedro",
      number: "901031",
      type: "person",
    },
    {
      name: "Ricardo",
      number: "82832",
      type: "company",
    },
    {
      name: "Fernando",
      number: "1291203",
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
    if (inputForm.name || inputForm.number !== "") {
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
    <article className="flex flex-col rounded-[10px] border border-solid border-white       ">
      <div
        className="
        box-border
        p-[10px]
        "
      >
        <form style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <input
            name="name"
            value={inputForm.name}
            onChange={handleChange}
            placeholder="name"
            type="text"
            className="
            h-[40px]
            rounded-[10px]
            pl-[10px]
            "
          ></input>
          <input
            name="number"
            value={inputForm.number}
            onChange={handleChange}
            placeholder="number"
            type="text"
            className="
            h-[40px]
            rounded-[10px]
            pl-[10px]
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
            "
          >
            <option value="person">Person</option>
            <option value="company">Company</option>
          </select>
          <button className="bg-white text-black" onClick={handleSubmit} type="submit">
            Add
          </button>
        </form>
      </div>
      <hr></hr>
      <div
        className="
        h-[300px]
        box-border
        p-[10px]
        flex
        flex-col
        overflow-auto
        "
      >
        <div className=" flex gap-[5px] h-[40px] justify-around   ">
          <button
            className={typeDisplay === "person" ? " bg-white text-black " : "bg-black"}
            onClick={() => setTypeDisplay("person")}
          >
            Person
          </button>
          <button
            className={typeDisplay === "company" ? " bg-white text-black " : "bg-black"}
            onClick={() => setTypeDisplay("company")}
          >
            Company
          </button>
          <button
            onClick={handleAlphabetic}
            className={isSorted ? " bg-white text-black " : " text-white bg-black "}
          >
            A-Z
          </button>
        </div>
        <hr style={{ margin: "10px 0" }}></hr>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", overflowY: "auto" }}>
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
      style={{
        width: "100%",
        height: "50px",
        background: "black",
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "0 20px",
        }}
      >
        <h3>{props.name}</h3>
        <h3>{props.number}</h3>
        <button onClick={() => props.handleDelete(props.number)} style={{ marginLeft: "auto" }}>
          Delete
        </button>
      </div>
    </div>
  );
}
