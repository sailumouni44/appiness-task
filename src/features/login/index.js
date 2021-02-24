import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import { validateAsync, findIsAuthenticated } from "./_loginSlice";

const LoginFeature = (props) => {
  const { isAuthenticated, message } = useSelector(findIsAuthenticated);
  console.log("--== ** login ", isAuthenticated);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isAuthenticated) {
      console.log("--== ** move to dashboard ", props);
      const { history } = props;
      history.push("/dashboard");
    }
  }, [isAuthenticated, props]);
  return (
    <React.Fragment>
      <div className="d-flex flex-column h-100 align-items-center justify-content-center">
        <Formik
          initialValues={{ email: "hruday@gmail.com", password: "hruday123" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
        >
          {({ errors, touched, values }) => (
            <div className="card col-4 p-0">
              <div className="card-header">
                <div>Appiness: Task - Login</div>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Email</label>
                  <Field
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                  />
                  <small className="form-text text-danger">
                    <ErrorMessage name="email" component="div" />
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Password</label>
                  <Field
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                  />
                  <small className="form-text text-danger">
                    <ErrorMessage name="password" component="div" />
                  </small>
                </div>
                <small className="form-text text-danger">
                  {message && message.status === 500 && message.value}
                </small>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={
                      Object.keys(errors).length > 0 ||
                      !touched.email ||
                      !touched.password
                    }
                    onClick={() => dispatch(validateAsync(values))}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default LoginFeature;
