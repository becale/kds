import React from 'react';
import Header from '../components/Header'
import "../components/styles/ReservationsContent.css";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { Helmet } from 'react-helmet';

const Login = () => {

  const schema = yup.object({
    name: yup.string().required("Full name is a required field!"),
    email: yup.string().required("Email is a required field!").email("Email is not valid!"),
    telephone: yup.string().required("Telephone is a required field!").matches(/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/, "Phone number must match the form 233 00 000 0000"),
    guests: yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
    date: yup.string().required("Please select date and time!"),
    })

  const { handleSubmit, register, formState: { errors } } = useForm({
  resolver: yupResolver(schema)
  })

  console.log(errors)

  const formSubmit = (data) => {
  console.table(data)
  }

return (
<div>
  <Helmet>
    <title>Login</title>
    <meta property="og:title" content="Login" />
    <meta property="og:description" content="Welcome to the Login Page of little lemon" />
    <meta property="og:image" content="URL_to_image" />
    <meta property="og:url" content="http://littlelemon.com/login" />
  </Helmet>

  <Header />
  <h1 style={{textAlign: "center", paddingTop: "5%"}}>Login</h1>

  <form style={{textAlign: "center", paddingLeft: "35%", paddingRight: "35%"}} onSubmit={handleSubmit(formSubmit)}>
    <fieldset>
  
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="text@email.com" name="email" {...register("email")} />
        <span className="error-message">{errors.email?.message}</span>
      </div>
      <div className="field">
        <label htmlFor="password">password</label>
        <input type="password" placeholder="password" name="password" {...register("password")} />
        <span className="error-message">{errors.telephone?.message}</span>
      </div>

      <button className="reserve-btn" type="submit">Login</button>
    </fieldset>
  </form>
</div>
)
}

export default Login