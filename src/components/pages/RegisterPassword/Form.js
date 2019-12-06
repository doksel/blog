import React from "react";
import styled from "styled-components";
import FormInput from "../../../common/FormInput";
import FormButton from "../../../common/FormButton";
import Spinner from "../../../common/Spiner";

import { withFormik } from "formik";
const Yup = require("yup");

const RegisterPasswordForm = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  handleBlur,
  touched,
  requestError,
  isLoading
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <FormInput
      id="standard-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      name={"password"}
      placeholder={"Enter Password"}
      value={values.password}
      onChange={handleChange}
      fullWidth
      onBlur={handleBlur}
      InputLabelProps={{ shrink: true }}
      helperText={errors.password && touched.password ? errors.password : null}
      error={errors.password && touched.password ? true : false}
    />
    <FormInput
      id="confirmPassword-input"
      label="Confirm password"
      type="password"
      autoComplete="current-confirmPassword"
      name={"confirmPassword"}
      placeholder={"Enter Password"}
      value={values.confirmPassword}
      onChange={handleChange}
      fullWidth
      onBlur={handleBlur}
      InputLabelProps={{ shrink: true }}
      helperText={
        errors.confirmPassword && touched.confirmPassword
          ? errors.confirmPassword
          : null
      }
      error={errors.confirmPassword && touched.confirmPassword ? true : false}
    />
    <FormButton green="green">
      {isLoading ? <Spinner green="green" /> : "Register"}
    </FormButton>
  </StyledForm>
);

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 525px;
  span {
    margin-bottom: 20px;
    color: red;
  }
  input::-webkit-contacts-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
`;

const EnhansedRegisterPasswordPageForm = withFormik({
  mapPropsToValues: props => props.values,
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .required("Required")
      .min(5, "Min. 5 symbol"),
    confirmPassword: Yup.string()
      .required("Confirm password is a required field")
      .test("passwords-match", "Passwords must match", function(value) {
        return this.parent.password === value;
      })
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values, setSubmitting);
  },
  displayName: "RegisterPasswordPageForm"
})(RegisterPasswordForm);

export default EnhansedRegisterPasswordPageForm;
