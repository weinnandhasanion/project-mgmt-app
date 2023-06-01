import { Button, Container, TextField, Typography } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";

type FormikSubmit = <T, K>(
  values: T,
  formikHelpers: FormikHelpers<T>
) => void | Promise<K>;

export const CreateProject = () => {
  const handleSubmit: FormikSubmit = (values) => {
    console.log(values);
  };

  const {
    values,
    handleChange,
    handleSubmit: handleFormikSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={handleFormikSubmit}>
      <Container
        maxWidth="xs"
        sx={{
          marginBlock: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Create project</Typography>

        <TextField
          label="Project name"
          name="name"
          size="small"
          value={values.name}
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Project description"
          name="description"
          multiline
          rows={4}
          fullWidth
          value={values.description}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained">
          Add project
        </Button>
      </Container>
    </form>
  );
};
