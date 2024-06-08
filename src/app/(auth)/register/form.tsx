"use client";
import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      location: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      confirmPrivacy: false,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: values => {
        const errors: {
            fullName?: string;
            email?: string;
            location?: string;
            phoneNumber?: string;
            password?: string;
            confirmPassword?: string;
            confirmPrivacy?: string;
        } = {};

        if (!values.fullName) {
            errors.fullName = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.location) {
            errors.location = 'Required';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords do not match';
        }
        if (!values.confirmPrivacy) {
            errors.confirmPrivacy = 'You must agree to the privacy policy';
        }
        return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto w-[538px] pt-[40px] pr-[24px] pb-[40px] pl-[24px] ">
      <h1 className="flex text-intellibin-primary font-bold text-4xl leading-10 ">
          Sign Up
        </h1>
        <p className="font-normal leading-6 text-base text-intellibingrey-400 mb-4 ">Create an account to get started</p>
      <div className='mb-4'>
      <label htmlFor="fullName" className="block font-normal leading-6 text-base text-intellibingrey-400">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
        className=" rounded-md border-intellibingrey-700 shadow-sm focus:border-intellibin-primary w-full py-2 px-3"
      />
      {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
      </div>

      <div className='mb-4 '>
      <label htmlFor="email" className="block font-normal leading-6 text-base text-intellibingrey-400">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className=" rounded-md border-intellibingrey-700 shadow-sm focus:border-intellibin-primary w-full py-2 px-3"
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}</div>     
     
      <div className='mb-4'>
      <label htmlFor="location" className="block font-normal leading-6 text-base text-intellibingrey-400">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.location}
        className=" rounded-md border-intellibingrey-700 shadow-sm focus:border-intellibin-primary w-full py-2 px-3"
      />
      {formik.errors.location ? <div>{formik.errors.location}</div> : null}
      </div>
    
      <div className='mb-4'>
      <label htmlFor="phoneNumber" className="block font-normal leading-6 text-base text-intellibingrey-400">Phone Number</label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
        className=" rounded-md border-intellibingrey-700 shadow-sm focus:border-intellibin-primary w-full py-2 px-3"
      />
      {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
      </div>
     
      <div className='mb-4'>
      <label htmlFor="password" className="block font-normal leading-6 text-base text-intellibingrey-400">Create Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        className=" rounded-md border-intellibingrey-700 shadow-sm focus:border-intellibin-primary w-full py-2 px-3"
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>
      

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}

      <div>
        <input
          type="checkbox"
          id="confirmPrivacy"
          name="confirmPrivacy"
          onChange={formik.handleChange}
          checked={formik.values.confirmPrivacy}
        />
        <label htmlFor="confirmPrivacy">I agree to the privacy policy</label>
        {formik.errors.confirmPrivacy ? <div>{formik.errors.confirmPrivacy}</div> : null}
      </div>

      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignupForm;
