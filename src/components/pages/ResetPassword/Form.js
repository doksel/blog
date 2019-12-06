import React from "react";
import styled from "styled-components";
import FormInput from "../../../common/FormInput";
import FormButton from "../../../common/FormButton";
import Icon from "../../../common/InputIcon";
import SrcOk from "../../../assets/images/svg/ok_icon.svg";
import SrcCancel from "../../../assets/images/svg/no_icon.svg";
import Spinner from "../../../common/Spiner";

import InputAdornment from "@material-ui/core/InputAdornment";

import { withFormik } from "formik";
const Yup = require("yup");

const ResetPasswordForm = ({
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
      helperText={
        requestError
          ? requestError
          : errors.email && touched.email
          ? errors.email
          : null
      }
      error={requestError ? true : errors.email && touched.email ? true : false}
      InputProps={{
        endAdornment: (
          <WrapInputAdornment position="end">
            {!values.email ? (
              ""
            ) : errors.email ? (
              <Icon src={SrcCancel} />
            ) : requestError ? (
              <Icon src={SrcCancel} />
            ) : (
              <Icon src={SrcOk} />
            )}
          </WrapInputAdornment>
        )
      }}
    />
    <FormButton green="green">
      {isLoading ? <Spinner green="green" /> : "Send password"}
    </FormButton>
  </StyledForm>
);

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  span {
    margin-bottom: 20px;
    color: red;
  }
`;

const WrapFormInput = styled(FormInput)`
  margin-bottom: 100px !important;
`;

const WrapInputAdornment = styled(InputAdornment)`
  position: absolute;
  top: 50%;
  right: 10px;
  img {
    width: 22px;
  }
`;

const EnhansedResetPasswordPageForm = withFormik({
  mapPropsToValues: props => props.values,
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Required")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values, setSubmitting);
  },
  displayName: "ResetPasswordPageForm"
})(ResetPasswordForm);

export default EnhansedResetPasswordPageForm;
