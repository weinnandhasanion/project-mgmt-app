import { useEffect } from "react";
import { useFormik } from "formik";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  TextField,
} from "@mui/material";
import { signUpUser } from "components/modules/authThunk";
import { signupPage } from "util/fields";
import { resetErrors } from "components/modules/authReducer";
import { StringMap } from "types";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "hooks";

export const SignupForm = () => {
  const { error, loading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { fields } = signupPage;

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
      dispatch(resetErrors());
      dispatch(signUpUser(values));
    },
  });

  useEffect(() => {
    return () => {
      dispatch(resetErrors());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
          {/* <Button type="submit" variant="contained">
            Submit
          </Button> */}
          <LoadingButton type="submit" variant="contained" loading={loading}>
            Submit
          </LoadingButton>
        </CardActions>
      </Card>
    </form>
  );
};
