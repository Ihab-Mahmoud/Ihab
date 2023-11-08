import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from './components/layout';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Porfolio from './components/portfolio';
function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Porfolio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
