import React from "react";
import useForm from "./useForm"
import validate from './ValidateInfo'
const FormSign = () => {
    const {handleChange,values,handleSubmit,errors} = useForm(validate)
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today Crate your account by filling out the
          information below
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="username"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
           {errors.password && <p>{errors.password}</p>}
         
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Enter your username"
            value={values.password2}
            onChange={handleChange}
          />
            {errors.password && <p>{errors.password}</p>}
         
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">Already have an account? Login<a href="#">here</a> </span>
      </form>
    </div>
  );
};

export default FormSign;
