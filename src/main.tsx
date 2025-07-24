import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import CVPage from './pages/CVPage.tsx';
import PassionsPage from './pages/PassionsPage.tsx';
import SkillsPage from './pages/SkillsPage.tsx';
import RealisationsPage from './pages/RealisationsPage.tsx';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/CV",
        element: <CVPage />,
      },
      {
        path: "/passions",
        element: <PassionsPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/realisations",
        element: <RealisationsPage />,
      },
        {
        path: "*",
        element: <h1>Tu es perdu !</h1>,
      },
      // Renders the App component for the home page
    ],
  },
  ]);
const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
     <ThemeProvider>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
