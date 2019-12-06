import React from "react";
import styled from "styled-components";
import FormInput from "../../../common/FormInput";
import FormButton from "../../../common/FormButton";
import FogotPassword from "./FogotPassword";
import Icon from "../../../common/InputIcon";
import SrcOk from "../../../assets/images/svg/ok_icon.svg";
import SrcCancel from "../../../assets/images/svg/no_icon.svg";
import Spinner from "../../../common/Spiner";

import InputAdornment from "@material-ui/core/InputAdornment";

import { withFormik } from "formik";
const Yup = require("yup");

const LoginForm = ({
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
    <WrapFormInput
      id="filled-email-input"
      label="Email"
      type="text"
      autoComplete="email"
      name={"email"}
      placeholder={"Enter Email"}
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      InputLabelProps={{ shrink: true }}
      helperText={errors.email && touched.email ? errors.email : null}
      error={errors.email && touched.email ? true : false}
      InputProps={{
        endAdornment: (
          <WrapInputAdornment position="end">
            {!values.email ? (
              ""
            ) : errors.email ? (
              <Icon src={SrcCancel} />
            ) : (
              <Icon src={SrcOk} />
            )}
          </WrapInputAdornment>
        )
      }}
    />
    <WrapFormInput
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
      helperText={
        errors.password && touched.password
          ? errors.password
          : requestError
          ? requestError
          : null
      }
      error={
        (errors.password && touched.password) || requestError ? true : false
      }
    />
    <WrapFogotPassword to="/reset-password">Forgot Password</WrapFogotPassword>
    <WrapFormButton green="green">
      {isLoading ? <Spinner green="green" /> : "Sign In"}
    </WrapFormButton>
    <FormButton>
      {isLoading ? <Spinner /> : "Register as local guide"}
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
`;

const WrapFormInput = styled(FormInput)`
  margin-bottom: 20px !important;

  input::-webkit-contacts-auto-fill-button {
    visibility: hidden !important;
    display: none !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

  input::-webkit-credentials-auto-fill-button {
    visibility: hidden !important;
    display: none !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }
`;

const WrapFormButton = styled(FormButton)`
  margin-top: 60px;
`;

const WrapInputAdornment = styled(InputAdornment)`
  position: absolute;
  top: 50%;
  right: 10px;
  img {
    width: 22px;
  }
`;

const WrapFogotPassword = styled(FogotPassword)`
  width: 100%;
  text-align: left;
  cursor: pointer;
`;

const EnhansedLoginPageForm = withFormik({
  mapPropsToValues: props => props.values,
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Required"),
    password: Yup.string()
      .required("Required")
      .min(5, "Min. 5 symbol")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values, setSubmitting);
  },
  displayName: "LoginPageForm"
})(LoginForm);

export default EnhansedLoginPageForm;
