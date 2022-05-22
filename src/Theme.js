import { createTheme } from "@mui/material/styles";
import orange from "@mui/material/colors/orange"

export const theme = createTheme({
    palette: {
      primary: {
        main: "#FDBF5A"
      },
      secondary: {
        main: "#ffffff"
      }
    },
    status: {
      danger: orange[500]
    },
    overrides: {
      MuiFormLabel: {
        root: {
          "&$focused": {
            color: "#1473e6"
          }
        }
      },
      MuiLink: {
        root: {
          color: "#1473e6",
          cursor: "pointer"
        }
      },
      MuiInput: {
        underline: {
          "&:after": {
            "border-bottom-color": "#1473e6"
          }
        }
      },
      MuiFormHelperText: {
        root: {
          position: "absolute",
          bottom: "-1.2em"
        }
      },
      MuiButton: {
        root: {
          textTransform: 'none'
        },
        containedPrimary: {
          boxShadow: "none",
          backgroundColor: "#ffc617",
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
          }
        }
      }
    }
  });