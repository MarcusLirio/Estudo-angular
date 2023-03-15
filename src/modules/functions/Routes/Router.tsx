import { BrowserRouter, Routes, Route } from "react-router-dom";
//imports necessary

import { SideNav } from "../../pages/Components/SideNav/Sidenav";
import { Contact } from "../../pages/View/Contact/Contact";
import { Graphics } from "../../pages/View/Graphics/Graphics";
//imports components

import { Home } from "../../pages/View/Home/Home";
import { Teste } from "../../pages/View/Teste/teste";
//imports views

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/doc" element={<SideNav children={<Teste />} pageTitle="Teste" />} />
        <Route path="/contact" element={<SideNav children={<Contact />} pageTitle="Contact" />} />
        <Route path="/graphics" element={<SideNav children={<Graphics />} pageTitle="Graphics" />} />
        <Route path="/doc" element={<SideNav children={<Teste />} pageTitle="Teste" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
