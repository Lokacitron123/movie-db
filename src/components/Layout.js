import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import SearchMoviesSuggestion from "../containers/SearchMoviesSuggestion";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#fff",
});

const H1 = styled("h1")({
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  width: 500,
  maxWidth: "100%",
  textDecoration: "none",
});

const LayoutWrapper = styled("div")(({ theme }) => ({
  margin: 24,
  width: "auto",
  [theme.breakpoints.up("lg")]: {
    marginLeft: "auto",
    marginRight: "auto",
    width: theme.breakpoints.values.lg,
  },
}));

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LayoutWrapper>
        <StyledLink to="/">
          <H1>MovieDB Explorer</H1>
        </StyledLink>
        <SearchMoviesSuggestion />
        {children}
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
