import { Link, To } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { APPBAR_TITLE } from "util/constants";
import { routes } from "routes";

export const Header = () => {
  const renderLinks = routes.map((route) => (
    <Button key={route.path}>
      <Link to={route.path as To}>{route.linkName}</Link>
    </Button>
  ));

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flex: 1 }}
        >
          {APPBAR_TITLE}
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>{renderLinks}</Box>
      </Toolbar>
    </AppBar>
  );
};
