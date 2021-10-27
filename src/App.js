import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./store/store";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';


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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <div className="App">
                <Routes/>

            </div>
        </ThemeProvider>
      </Provider>



  );
}

export default App;