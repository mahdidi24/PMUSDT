import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar.tsx";
import "./index.css";
import Footer from "./components/Footer/Footer.tsx";
import {presistor, store} from './store/store.ts'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import LoginProvider from "./components/LoginProvider.tsx/LoginProvider.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store = {store}>
        <PersistGate loading={null} persistor={presistor}>
      
      <BrowserRouter>
      <Navbar />
      <LoginProvider>
      <App />
      </LoginProvider>
      </BrowserRouter>
      <Footer />
      </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
