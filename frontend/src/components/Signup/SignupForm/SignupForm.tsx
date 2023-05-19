import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { signUpUser } from "components/modules/authThunk";
import { signupPage } from "util/fields";
import { resetErrors } from "components/modules/authReducer";
import { AppDispatch, RootState, StringMap } from "types";

export const SignupForm = () => {
  const { error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const { fields } = signupPage;

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
      dispatch(resetErrors());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const initialFormikValues = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  } as StringMap;

  const formik = useFormik({
    initialValues: initialFormikValues,
    onSubmit: (values) => {
      dispatch(signUpUser(values));
    },
  });

  const hasError = (name: string) => error && Object.keys(error).includes(name);

  const renderFields = () => {
    return fields.map((field) => (
      <TextField
        key={field.name}
        name={field.name}
        variant="outlined"
        size="small"
        label={field.label}
        inputProps={{
          type: field.type,
        }}
        sx={{ marginBlockStart: 2 }}
        onChange={formik.handleChange}
        value={formik.values[field.name]}
        error={hasError(field.name)}
        helperText={error && error[field.name]}
      />
    ));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card variant="outlined" sx={{ width: 420 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="h1" sx={{ textAlign: "center" }}>
            Signup
          </Typography>
          {renderFields()}
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
