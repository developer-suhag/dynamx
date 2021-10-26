import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto/400.css";
import {
  Button,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./App.css";

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
          <Typography variant="h2" sx={{ color: "#00FFFF" }}>
            Dynamx a web startup
          </Typography>
          <Button variant="outlined" color="secondary">
            Click me
          </Button>
        </ThemeProvider>
      </div>
    </CssBaseline>
  );
}

export default App;
