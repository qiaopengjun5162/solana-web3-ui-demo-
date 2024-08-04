// eslint-disable-next-line
import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme } from "@mui/material/styles";

import { SnackbarProvider } from "notistack";
import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

export default function Layout({ children, customHeaderButton }) {
  return (
    <SnackbarProvider maxSnack={10}>
      <CssBaseline />

      <Header />

      <div className="container" style={{ minHeight: "600px" }}>
        {children}
      </div>

      <Footer />
    </SnackbarProvider>
  );
}
