import React from 'react';
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5E81AC',
    },
    secondary: {
      main: '#EEEEEE',
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </div>
      </ThemeProvider>
  );
}

export default App;