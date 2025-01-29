import React, { useEffect, useState } from "react";
import { useFormContext } from "./FormProvider";
import user from "../interfaces/user";
import errorInterface from "../interfaces/errorInterface";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

const FormComponent: React.FC = () => {
  const { users, adduser, selecteduser, editRow } = useFormContext();
  const {register, handleSubmit, formState:{errors}}=useForm();
  const [formData, setFormData] = useState<user>({
    id: 0,
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    country: "",
    area: "",
    city: "",
    pin: "",
  });

 useEffect(()=>{
  if(selecteduser!=null){
    setFormData(selecteduser);
  }
  else{
    setFormData({email:"", firstname:"", lastname:"", phone:"", password:"", country:"", area:"", pin:"",city:"", id:0});
  }
 }, [selecteduser]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const onSubmit:SubmitHandler<FieldValues> = () => {
    if(selecteduser!=null){
      editRow(formData);
    }
    else{
    const newUser={...formData, id:users.length}
    adduser(newUser);
    }
    setFormData({email:"", firstname:"", lastname:"", phone:"", password:"", country:"", area:"", pin:"",city:"", id:0});
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} id="myForm">
        <div className="para-field">
          <label>Email</label>
          <input
          {...register("email", {
            required:{
              value:true,
              message:'Email is required'
            },
            pattern: {
              value: /^(.+)@(.+)$/,
              message: 'Email is not valid'
            },
            minLength: {
              value: 10,
              message: 'Email should contain atleast 10 characters'
            },
            maxLength: {
              value: 20,
              message: 'Email not be more than 20 characters'
            },
            
            })}
            name="email"
            className="inputs"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          ></input>
          
        </div>
        <p>{errors.email?.message as string}</p>
        <div className="para-field">
          <label>Password</label>
          <input
          {...register("password", {
            required:{
              value:true,
              message:'Password is required'
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: 'Password is not valid'
            },
            minLength: {
              value: 8,
              message: 'Password should contain atleast 8 characters'
            },
            maxLength: {
              value: 20,
              message: 'Password not be more than 20 characters'
            },
            
            })}
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          ></input>
           
        </div>
        <p>{errors.password?.message as string}</p>
        <div className="para-field">
          <label>Phone Number</label>
          <input
          {...register("phone", {
            required:{
              value:true,
              message:'Phone number is required'
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: 'Phone is not valid'
            },
            minLength: {
              value: 10,
              message: 'Phone should contain 10 digits'
            },
            maxLength: {
              value: 10,
              message: 'Password should not be more than 10 digits'
            },
            
            })}
            name="phone"
            className="inputs"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
          ></input>
           
        </div>
        <p>{errors.phone?.message as string}</p>

        <div className="para-field">
          <label>First Name</label>
          <input
          {...register("firstname", {
            required:{
              value:true,
              message:'First name is required'
            },
            })}
            id="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          ></input>
        </div>
        <p>{errors.firstname?.message as string}</p>

        <div className="para-field">
          <label>Last Name</label>
          <input
           {...register("lastname", {
            required:{
              value:true,
              message:'Last name is required'
            },
            })}
            id="lastname"
            name="Last Name"
            value={formData.lastname}
            onChange={handleInputChange}
          ></input>
        </div>
        <p>{errors.lastname?.message as string}</p>

        <div className="para-field">
          <label>Country</label>
          <input
           {...register("country", {
            required:{
              value:true,
              message:'Country is required'
            },
            })}
            name="Country"
            className="inputs"
            id="country"
            value={formData.country}
            onChange={handleInputChange}
          ></input>
        </div>
        <p>{errors.country?.message as string}</p>

        <div className="para-field">
          <label>City</label>
          <input
           {...register("city", {
            required:{
              value:true,
              message:'City is required'
            },
            })}
            name="City"
            className="inputs"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
          ></input>
        </div>
        <p>{errors.city?.message as string}</p>

        
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
