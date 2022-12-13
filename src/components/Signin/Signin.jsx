import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../Api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6).max(12),
})
export default function Signin() {
  const [loading, setloading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

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

  const onSubmit = async function sendData(e) {
    
    setloading(false);
    // e.preventDefault();
    
    let result = await axiosPost(formData, "signin");
    if (result.message === "success") {
      localStorage.setItem("token", result.token);
      navigate("/Noxe-MovieDB");
    } else {
      setloading(true);
      setErrorMsg(result.message);
    }
    // console.log(result);
  }
  // console.log(formData);
  

  
  return (
    <>
      <h1 className="mb-4">Login now</h1>
      {errorMsg ? (
        <div className="alert alert-danger text-center">{errorMsg}</div>
      ) : (
        ""
      )}
      <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">email:</label>
        <input
        {...register('email')}
        onChange={getFormData}
        type="email"
        name="email"
        id="email"
        className="form-control mb-3"
        />
        {errors.email ? (
          <span className="text-danger d-block mb-3">{errors.email.message}</span>
        ) : (
          ""
        )}
        
        

        <label htmlFor="password">password:</label>
        <input
        {...register('password')} 
        onChange={getFormData}
          type="password"
          name="password"
          id="password"
          className="form-control mb-3"
          
        />
        {errors.password ? (
          <span className="text-danger d-block mb-3">{errors.password.message}</span>
        ) : (
          ""
        )}

        <button type="submit" className="btn btn-outline-info p-2 mt-2">
          {loading ? (
            "Login"
          ) : (
            <i className="fas fa-spinner fa-spin fs-5 px-4"></i>
          )}
        </button>
      </form>
    </>
  );
}
