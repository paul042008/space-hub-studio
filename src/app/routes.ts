import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/RootLayout';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'portfolio',
        Component: Portfolio,
      },
    ],
  },
]);
