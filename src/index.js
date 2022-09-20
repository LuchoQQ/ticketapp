import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/arimo/700.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/poppins/900.css"
import "@fontsource/expletus-sans/700.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({ fonts: { primary: "Montserrat", secondary: "Arimo", tertiary: "Expletus Sans"} });

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
