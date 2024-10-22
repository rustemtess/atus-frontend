import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthProvider } from '@context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@routes/AppRoutes';
import ThemeProvider from '@context/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('atus') as HTMLElement,
);

root.render(
  <ThemeProvider>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>,
);
