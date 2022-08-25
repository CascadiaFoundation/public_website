import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import themes from './themes';
import Layout from './layouts';
import AppRouter from './routes';

const App = () => {
  return (
    <ThemeProvider theme={themes()}>
      <CssBaseline />
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
