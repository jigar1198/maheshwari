import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import brandLogo from "../assets/images/logo.png";
import SearchUsers from "./searchBox";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appBarColor: {
    backgroundColor: "rgb(255, 81, 0)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  profileTextDeco: {
    textDecoration: "none",
    color: "black"
  },
  brandLogo: {
    width: "100%",
    maxWidth: "36px",
    height: "40px"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  loginButtonInMenu: {
    margin: theme.spacing(1),
    color: "black !important"
  },
  signupButton: {
    margin: theme.spacing(1),
    backgroundColor: "rgb(0, 151, 25)",
    color: "white"
  },
  appBarTextDeco: {
    textDecoration: "none",
    color: "white"
  },
  // search: {
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: fade(theme.palette.common.white, 0.25)
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(3),
  //     width: "auto"
  //   }
  // },
  searchIcon: {
    // height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  // inputRoot: {
  //   color: "inherit"
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 7),
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("md")]: {
  //     width: 50
  //   }
  // },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const PrimarySearchAppBar = ({ user }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user && (
        <MenuItem onClick={handleMenuClose}>
          <Link to="/userProfile" className={classes.profileTextDeco}>
            Profile: {user.name}
          </Link>
        </MenuItem>
      )}
      <MenuItem onClick={handleMenuClose}>
        <Link to="/myAccount" className={classes.profileTextDeco}>
          My Account
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/logout" className={classes.profileTextDeco}>
          Log out
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {!user && (
        <React.Fragment>
          <Button
            className={classes.loginButtonInMenu}
            color="secondary"
            variant="contained"
          >
            <Link to="/login" className={classes.appBarTextDeco}>
              Log in
            </Link>
          </Button>
          <br />
          <Button className={classes.signupButton} variant="contained">
            <Link to="/signup" className={classes.appBarTextDeco}>
              Sign up
            </Link>
          </Button>
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Settings</p>
          </MenuItem>
        </React.Fragment>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link to="/">
              <img src={brandLogo} alt="logo" className={classes.brandLogo} />
            </Link>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.appBarTextDeco}>
              Maheshwari Samaj
            </Link>
          </Typography>
          <div className={classes.grow} />
          {!user && (
            <div className={classes.sectionDesktop}>
              <Button className={classes.loginButton}>
                <Link to="/login" className={classes.appBarTextDeco}>
                  Log in
                </Link>
              </Button>
              <Button className={classes.signupButton} variant="contained">
                <Link to="/signup" className={classes.appBarTextDeco}>
                  Sign up
                </Link>
              </Button>
            </div>
          )}
          {user && (
            <div className={classes.sectionDesktop}>
              <div>
                <IconButton
                  aria-label="search users"
                  aria-controls={null}
                  aria-haspopup="true"
                  onClick={null}
                  color="inherit"
                >
                  <Link to="/searchUsers">
                    <SearchIcon className={classes.searchIcon} />
                  </Link>
                </IconButton>
              </div>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
          <div className={classes.sectionMobile}>
            {user && (
              <div>
                <IconButton
                  aria-label="search users"
                  aria-controls={null}
                  aria-haspopup="true"
                  onClick={null}
                  color="inherit"
                >
                  <Link to="/searchUsers">
                    <SearchIcon className={classes.searchIcon} />
                  </Link>
                </IconButton>
              </div>
            )}
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default PrimarySearchAppBar;
