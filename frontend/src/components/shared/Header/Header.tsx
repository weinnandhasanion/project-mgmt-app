import { useState } from "react";
import { Link, To } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Menu } from "@mui/icons-material";
import { APPBAR_TITLE } from "util/constants";
import { RouteObj, routes } from "routes";
import { logoutUser } from "components/modules/authReducer";
import { enqueueSnackbar } from "notistack";
import { useAppDispatch, useAppSelector } from "hooks";

export const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const openLogoutAlert = () => setOpen(true);

  const handleLogout = () => {
    setOpen(false);
    dispatch(logoutUser());
    enqueueSnackbar("Logout successful", { variant: "success" });
  };

  const renderLink = (route: RouteObj) => {
    switch (route.routeType) {
      case "protected": {
        if (user) {
          return (
            <Button key={route.path}>
              <Link to={route.path as To}>{route.linkName}</Link>
            </Button>
          );
        }

        return null;
      }

      case "private":
        if (user) {
          return null;
        }

        return (
          <Button key={route.path}>
            <Link to={route.path as To}>{route.linkName}</Link>
          </Button>
        );

      default:
        return (
          <Button key={route.path}>
            <Link to={route.path as To}>{route.linkName}</Link>
          </Button>
        );
    }
  };

  const renderLinks = routes.map((route) => renderLink(route));

  return (
    <>
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {renderLinks}
            {user && (
              <LoadingButton
                variant="text"
                color="error"
                onClick={openLogoutAlert}
              >
                Logout
              </LoadingButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={() => setOpen((open) => !open)}>
        <DialogTitle>Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleLogout}>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
