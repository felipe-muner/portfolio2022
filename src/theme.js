import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#556cd6',
    // },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#0f0',
    // },
    // secondary: {
    //   main: '#500',
    // },
    // error: {
    //   main: red.A400,
    // },
  },
});