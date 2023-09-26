import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const theme = {
  palette: {
    main: "	#212121",
    dark: "#121212",
    light: "#535353",
    contrast: "#b3b3b3",
    contrast2: "#808080",
    highlight: "#5554C8",
    spotiGreen: "#1db954",
  }
}

root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
