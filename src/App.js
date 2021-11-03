import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto/400.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About/About";
import Blog from "./Pages/Blog/Blog/Blog";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Services/Services/Services";

const theme = createTheme({
  palette: {
    // mode: "dark",
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
  },
});

function App() {
  return (
    <CssBaseline>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
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
        </ThemeProvider>
      </div>
    </CssBaseline>
  );
}

export default App;
