import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';


const myRouter = createBrowserRouter([
  { path:"/MYPortfolio", element: <Layout />, children: [
    { path:"", element: <Home /> },
    { path:"home", element: <Home /> },
    { path:"about", element: <About /> },
    { path:"skills", element: <Skills /> },
    { path:"projects", element: <Projects /> },
    { path:"contact", element: <Contact /> },
    { path:"*", element: <Error /> },
  ] },
])


function App() {
  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  );
}

export default App;
