import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h2">Projects</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate("/projects/create")}
        >
          Add new project
        </Button>
      </Box>
    </Box>
  );
};
