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
    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="emailOrPhone" className="block text-gray-700">Email or Phone</label>
        <input
          id="emailOrPhone"
          name="emailOrPhone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.emailOrPhone}
          className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full py-2 px-3"
        />
        {formik.touched.emailOrPhone && formik.errors.emailOrPhone ? (
          <div className="text-red-500 text-sm">{formik.errors.emailOrPhone}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full py-2 px-3"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="flex items-center justify-between mb-4">
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
          <label htmlFor="rememberMe" className="ml-2 text-gray-700">Remember me</label>
        </div>
        <div>
          <Link href="/forgot-password">
            <div className="text-blue-500 hover:text-blue-700">Forgot Password?</div>
          </Link>
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Login</button>
    </form>
  );
};

export default Loginform;
