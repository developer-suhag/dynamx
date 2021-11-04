import { AppBar, IconButton,Button, Box, Toolbar, Typography, Container } from '@mui/material';
import { MenuItem, Menu , useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import React from 'react';
import logo from "../../images/logo.png"

const Header = ({classes, theme}) => {
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
      };

    return (
        <AppBar style={{backgroundColor:"#101620"}}>
            <Container>
              <Toolbar>
                <Typography
                  component="p"
                  color="secondary"
                  className={classes.title}
                >
                  <img src={logo} alt="" style={{width:"180px"}} />
                </Typography>
                {isMobile ? (
                  <>
                    <IconButton
                      color="secondary"
                      className={classes.menuButton}
                      edge="start"
                      aria-label="menu"
                      onClick={handleMenu}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchor}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      KeepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      open={open}
                    >
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                        to="/home"
                      >
                        <Typography variant="h6" color="primary"> Home </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                        to="/services"
                      >
                        <Typography variant="h6" color="primary"> Services </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                        to="/blog"
                      >
                        <Typography variant="h6" color="primary"> Blog </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                        to="/about"
                      >
                        <Typography variant="h6" color="primary"> About </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                        to="/contact"
                      >
                        <Typography variant="h6" color="primary"> Contact </Typography>
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Box style={{ marginRight: "2rem"}}>
                    <Button
                      variant="text"
                      component={Link}
                      to="/home"
                      color="primary"
                    >
                      Home
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/services"
                      color="primary"
                    >
                      Services
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/blog"
                      color="primary"
                    >
                      Blog
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/about"
                      color="primary"
                    >
                      About
                    </Button>
                    <Button
                      variant="text"
                      component={Link}
                      to="/contact"
                      color="primary"
                    >
                      Contact
                    </Button>
                  </Box>
                )}
              </Toolbar>
            </Container>
          </AppBar>
    );
};

export default Header;