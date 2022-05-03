import { createTheme } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: amber[800],
    },
    secondary: {
      main: grey[800],
    },
  },
});