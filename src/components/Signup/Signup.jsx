import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../Api";

export default function Signup() {
  const [loading, setloading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: ""
  });

  function getFormData({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  async function sendData(e) {
    setloading(false)
    e.preventDefault();
    let result = await axiosPost(formData, "signup");

    if (result.message === "success") {
      navigate("/signin");
    } else {
      setloading(true);
      setErrorMsg(result.errors);
    }
    console.log(result);
  }
  console.log(formData);
  return (
    <>
      <h1 className="mb-4">Registeration Form</h1>
      {errorMsg ? (
        <div className="alert alert-danger text-center">{errorMsg?.email.message}</div>
      ) : (
        ""
      )}
      <form className="myForm" onSubmit={sendData}>
        <label htmlFor="first_name">First name:</label>
        <input
          onInput={getFormData}
          type="text"
          name="first_name"
          id="first_name"
          className="form-control mb-3"
        />

        <label htmlFor="last_name">Last name:</label>
        <input
          onInput={getFormData}
          type="text"
          name="last_name"
          id="last_name"
          className="form-control mb-3"
        />

        <label htmlFor="email">email:</label>
        <input
          onInput={getFormData}
          type="email"
          name="email"
          id="email"
          className="form-control mb-3"
        />

        <label htmlFor="password">password:</label>
        <input
          onInput={getFormData}
          type="password"
          name="password"
          id="password"
          className="form-control mb-3"
        />

        <label htmlFor="age">Age:</label>
        <input onChange={getFormData} type="text" name='age' id='age' className='form-control mb-3' />

        <button type="submit" className="btn btn-outline-info p-2 mt-2">
          {loading? ("Register") : (<i className="fas fa-spinner fa-spin fs-5 px-4"></i>)}
        </button>
      </form>
    </>
  );
}
