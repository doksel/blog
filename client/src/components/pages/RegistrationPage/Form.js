import React from "react";
import styled from "styled-components";
import FormInput from "../../../common/FormInput";
import FormButton from "../../../common/FormButton";
import Icon from "../../../common/InputIcon";
import SrcOk from "../../../assets/images/svg/ok_icon.svg";
import SrcCancel from "../../../assets/images/svg/no_icon.svg";
import Spinner from "../../../common/Spiner";

import InputAdornment from '@material-ui/core/InputAdornment';

import { withFormik } from "formik";
const Yup = require("yup");

const RegisterForm = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  handleBlur,
  touched,
  isLoading
}) => (
    <StyledForm onSubmit={handleSubmit}>
      <FormInput
        id="filled-email-input"
        label="Email"
        type="email"
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
              {!values.email ? '' : errors.email ? <Icon src={SrcCancel} /> : <Icon src={SrcOk} />}
            </WrapInputAdornment>
          ),
        }}
      />
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
      <FormButton green='green' onClick={}>{isLoading ? <Spinner green='green'/> : "Register"}</FormButton>
    </StyledForm>
  );


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 423px;
  span {
    margin-bottom: 20px;
    color: red;
  }
`;

const WrapInputAdornment = styled(InputAdornment)`
  position: absolute;
  right: 10px;
`;

const EnhansedRegistrationPageForm = withFormik({
  mapPropsToValues: props => props.values,
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Required")
      .trim(),
    password: Yup.string()
      .required("Required")
      .trim()
      .min(5, "Min. 5 symbol")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values, setSubmitting);
  },
  displayName: "RegistrationPageForm"
})(RegisterForm);

export default EnhansedRegistrationPageForm;