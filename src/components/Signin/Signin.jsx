import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../Api";

export default function Signin() {
  const [loading, setloading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    
    email: "",
    password: "",
  });

  function getFormData({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  async function sendData(e) {
    setloading(false);
    e.preventDefault();
    let result = await axiosPost(formData, "signin");
    if (result.message === "success") {
      localStorage.setItem('token', result.token)
      navigate("/home");
    } else {
      setloading(true);
      setErrorMsg(result.message);
    }
    console.log(result);
  }
    console.log(formData);

  return (
    <>
      <h1 className="mb-4">Login now</h1>
      {errorMsg ? <div className="alert alert-danger text-center">{errorMsg}</div>: ""}
      <form className="myForm" onSubmit={sendData}>
        <label htmlFor="email">email:</label>
        <input
          onChange={getFormData}
          type="email"
          name="email"
          id="email"
          className="form-control mb-3"
        />

        <label htmlFor="password">password:</label>
        <input
          onChange={getFormData}
          type="password"
          name="password"
          id="password"
          className="form-control mb-3"
        />

        <button type="submit" className="btn btn-outline-info p-2 mt-2">
          {loading ? ("Login") : (<i className="fas fa-spinner fa-spin fs-5 px-4"></i>)}
        </button>
      </form>
    </>
  );
}
