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
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
      {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.location}
      />
      {formik.errors.location ? <div>{formik.errors.location}</div> : null}

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}

      <label htmlFor="password">Create Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}

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
