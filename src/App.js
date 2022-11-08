import "./App.css";
import Calculator from "./features/Calculator";
import ScientificCalculator from "./features/ScientificCalculator";
import { ThemeProvider } from "@emotion/react";
import { styledTheme } from "./styled-theme";

function App() {
  return (
    <div className="App">
      <Calculator />
      <ThemeProvider theme={styledTheme}>
        <ScientificCalculator />
      </ThemeProvider>
    </div>
  );
}

export default App;
