"use client"
import { useFormik } from 'formik';
import Link from 'next/link';

interface FormValues {
  emailOrPhone: string;
  password: string;
  rememberMe: boolean;
}

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  if (!values.emailOrPhone) {
    errors.emailOrPhone = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const Loginform = () => {
  const formik = useFormik({
    initialValues: {
      emailOrPhone: '',
      password: '',
      rememberMe: false,
    },
    validate,
    onSubmit: (values: FormValues) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto" >
        <h1 className='flex text-intellibin-primary font-bold text-4xl leading-10 mb-4'>Welcome, Ben</h1>
      <div className="mb-4">
        <label htmlFor="emailOrPhone" className="block font-normal leading-6 text-base text-intellibingrey-400">Email or Phone</label>
        <input
          id="emailOrPhone"
          name="emailOrPhone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.emailOrPhone}
          className=" rounded-md border-intellibingrey-700 shadow-sm focus:border-intellibin-primary w-full py-2 px-3"
        />
        {formik.touched.emailOrPhone && formik.errors.emailOrPhone ? (
          <div className="text-red-500 text-sm">{formik.errors.emailOrPhone}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block font-normal leading-6 text-base text-intellibingrey-400">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="rounded-md border-intellibingrey-700 shadow-sm focus:border-intellibin-primary w-full py-2 px-3"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="flex flex-col-reverse items-left justify-between mb-4">
        <div>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="text-blue-500 rounded focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.rememberMe}
          />
          <label htmlFor="rememberMe" className="ml-2 font-normal leading-6 text-base text-intellibingrey-400">Remember login details on next login</label>
        </div>
        <div>
          <Link href="/forgot-password">
            <div className="font-bold text-intellibin-primary text-base mb-4 ">Forgot Password ?</div>
          </Link>
        </div>
      </div>

      <button type="submit" className="w-full bg-intellibin-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Login</button>
    </form>
  );
};

export default Loginform;
