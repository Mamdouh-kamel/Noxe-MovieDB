import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../Api";
import { schema } from "../FormSchema/FormSchema";

export default function Signup() {
  const [loading, setloading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
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
    let result = await axiosPost(formData, "signup");

    if (result.message === "success") {
      navigate("/signin");
    } else {
      setloading(true);
      setErrorMsg(result.errors);
    }
    // console.log(result);
  };
  // console.log(formData);
  console.log(errors);
  return (
    <>
      <h1 className="mb-4">Registeration Form</h1>
      {errorMsg ? (
        <div className="alert alert-danger text-center">
          {errorMsg?.email.message}
        </div>
      ) : (
        ""
      )}

      <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first_name">First name:</label>
        <input
          {...register("first_name")}
          onInput={getFormData}
          type="text"
          name="first_name"
          id="first_name"
          className="form-control mb-2"
        />
        {errors.first_name ? (
          <span className="text-danger d-block mb-3">
            {errors.first_name.message}
          </span>
        ) : (
          ""
        )}

        <label htmlFor="last_name">Last name:</label>
        <input
          {...register("last_name")}
          onInput={getFormData}
          type="text"
          name="last_name"
          id="last_name"
          className="form-control mb-2"
        />
        {errors.last_name ? (
          <span className="text-danger d-block mb-3">
            {errors.last_name.message}
          </span>
        ) : (
          ""
        )}

        <label htmlFor="email">email:</label>
        <input
          {...register("email")}
          onInput={getFormData}
          type="email"
          name="email"
          id="email"
          className="form-control mb-2"
        />
        {errors.email ? (
          <span className="text-danger d-block mb-3">
            {errors.email.message}
          </span>
        ) : (
          ""
        )}

        <label htmlFor="password">password:</label>
        <input
          {...register("password")}
          onInput={getFormData}
          type="password"
          name="password"
          id="password"
          className="form-control mb-2"
        />
        {errors.password ? (
          <span className="text-danger d-block mb-3">
            {errors.password.message}
          </span>
        ) : (
          ""
        )}

        <label htmlFor="age">Age:</label>
        <input
          {...register("age")}
          onChange={getFormData}
          type="number"
          name="age"
          id="age"
          className="form-control mb-2"
        />
        {errors.age ? (
          <span className="text-danger d-block mb-3">{errors.age.message}</span>
        ) : (
          ""
        )}

        <button type="submit" className="btn btn-outline-info p-2 mt-2">
          {loading ? (
            "Register"
          ) : (
            <i className="fas fa-spinner fa-spin fs-5 px-4"></i>
          )}
        </button>
      </form>
    </>
  );
}
