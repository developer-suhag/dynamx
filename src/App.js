import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto/400.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useScrollTrigger, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import About from "./Pages/About/About/About";
import Blog from "./Pages/Blog/Blog/Blog";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Services/Services/Services";
import Header from "./Shared/Header/Header";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00FFFF",
    },
    secondary: {
      main: "#F9E7E7",
    },
    info: {
      main: "#febc10",
    },
  },
  background: {
    default: "#222222",
    paper:"#101620"
  },
});


// For Navbar
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

function App(props) {
  const classes = useStyles();

  return (
    <CssBaseline>
      <div className="App">
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <HideOnScroll {...props}>
              <Router>
                <Header classes={classes} theme={theme} />
                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route exact path="/home">
                    <Home></Home>
                  </Route>
                  <Route exact path="/services">
                    <Services></Services>
                  </Route>
                  <Route exact path="/blog">
                    <Blog></Blog>
                  </Route>
                  <Route exact path="/about">
                    <About></About>
                  </Route>
                  <Route exact path="/contact">
                    <About></About>
                  </Route>
                </Switch>
              </Router>
            </HideOnScroll>
          </div>
        </ThemeProvider>
      </div>
    </CssBaseline>
  );
}

export default App;
