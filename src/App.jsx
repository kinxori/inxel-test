import { useState } from "react";

import "./App.css";

function App() {
  const [inputForm, setInputData] = useState({
    name: "",
    number: "",
    type: "Person",
  });
  const [data, setData] = useState([{}]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { ...inputForm };
    setData((prevData) => [...prevData, newEntry]);
    setInputData({
      name: "",
      number: "",
      type: "Person",
    });
  };

  const filteredPerson = data.filter((p) => {
    p.type === "person";
  });
  const filteredCompany = data.filter((p) => {
    p.type === "company";
  });

  console.log("input", inputForm);
  console.log("data", data);

  return (
    <article style={{ display: "flex" }}>
      <div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            name="name"
            value={inputForm.name}
            onChange={handleChange}
            placeholder="name"
            type="text"
          ></input>
          <input
            name="number"
            value={inputForm.number}
            onChange={handleChange}
            placeholder="number"
            type="text"
          ></input>
          <select name="type" value={inputForm.type} onChange={handleChange}>
            <option value="person">Person</option>
            <option value="company">Company</option>
          </select>
          <button onClick={handleSubmit} type="submit">
            Add
          </button>
        </form>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <button>Person</button>
          <button>Company</button>
          <button>A-Z</button>
        </div>
        <div>
          {filteredPerson.map((p) => (
            <>
              <Card name={p.name} number={p.number} />
            </>
          ))}
        </div>
      </div>
    </article>
  );
}

export default App;

function Card(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        background: "black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div width={{ width: "70%" }}>
        <h3>{props.name}</h3>
        <h3>{props.number}</h3>
      </div>
      <div width={{ width: "30%" }}>
        <button>Delete</button>
      </div>
    </div>
  );
}
