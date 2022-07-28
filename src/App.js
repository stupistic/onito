import { useState } from "react";
import { Form } from "./form";
import { Table } from "./Table";
import "./App.css";

function App() {
  const [table, setTable] = useState([]);
  const [formInput, setFormInput] = useState({
    Date: "",
    Amount: "",
    Payment_Mode: "",
    Remark: "",
  });

  const handlechange = (e) => {
    const newinput = (data) => ({ ...data, [e.target.name]: e.target.value });
    setFormInput(newinput);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const checking = !Object.values(formInput).every((res) => res === "");
    if (checking) {
      const newInput = (data) => [...data, formInput];
      setTable(newInput);
      setFormInput("");
    } else {
      const emptydata = { Date: "", Amount: "", Payment_Mode: "", Remark: "" };
      setFormInput(emptydata);
    }
  };

  return (
    <>
      <div className="App">
        <Form
          handlechange={handlechange}
          formInput={formInput}
          handlesubmit={handlesubmit}
        />
        {console.log(formInput)}
        <Table tabledata={table} />
      </div>
    </>
  );
}

export default App;
