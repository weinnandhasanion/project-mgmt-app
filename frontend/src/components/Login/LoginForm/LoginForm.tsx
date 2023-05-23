import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { resetErrors } from "components/modules/authReducer";
import { logUser } from "components/modules/authThunk";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState, StringMap } from "types";
import { loginPage } from "util/fields";

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.auth);
  const { fields } = loginPage;

  useEffect(() => {
    return () => {
      dispatch(resetErrors());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getInitialValues = () => ({
    username: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: getInitialValues() as StringMap,
    onSubmit: (values) => {
      dispatch(logUser(values));
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
      <Card variant="outlined">
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="h1" sx={{ textAlign: "center" }}>
            Login
          </Typography>
          {renderFields()}
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
