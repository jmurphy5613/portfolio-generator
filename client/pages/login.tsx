import { useRouter } from "next/router";

import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "../styles/Login.module.css";

type LoginProps = {
  host: string;
};

type LoginFormValues = {
  email: string;
  password: string;
};

const Login = (props: LoginProps) => {
  const router = useRouter();

  //error handling
  const [loginError, setLoginError] = useState<string>();

  const initialValues = {
    email: "",
    password: "",
  };

  const formSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().min(8).required("Required"),
  });

  const formSubmission = (values: LoginFormValues) => {
    
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formSubmission}
      validationSchema={formSchema}
    >
      <Form className={styles["login-form"]}>
        <h1 className={styles.title}>Welcome back to Portfolio Creator</h1>
        <p className={styles.description}>
          {loginError ? (
            <span className={styles["error-handling"]}>{loginError}</span>
          ) : (
            "Login to access your saved websites!"
          )}
        </p>
        <div>
          <label>Email</label>
          <ErrorMessage name="email">
            {(msg) => (
              <>
                {" — "}
                <span className={styles.span}>{msg}</span>
              </>
            )}
          </ErrorMessage>
        </div>
        <Field
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <div>
          <label>Password</label>
          <ErrorMessage name="password">
            {(msg) => (
              <>
                {" — "}
                <span className={styles.span}>{msg}</span>
              </>
            )}
          </ErrorMessage>
        </div>
        <Field
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className={styles.login} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default Login;