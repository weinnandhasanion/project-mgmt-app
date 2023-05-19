import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { logUser } from "components/modules/authThunk";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch, StringMap } from "types";
import { loginPage } from "util/fields";

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fields } = loginPage;

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
