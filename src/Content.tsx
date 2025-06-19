import { useEffect } from "react";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Simulation from "./Simulation";
import HowToUse from "./HowToUse";
import Documentation from "./Documentation";


type ContentProps = {
  selectedPage: string | null;
};

const ROUTES = [
  { path: "/home", element: <Home /> },
  { path: "/simulation", element: <Simulation /> },
  { path: "/howtouse", element: <HowToUse /> },
  { path: "/documentation", element: <Documentation /> },
];

function InnerContent( {selectedPage }: ContentProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPage) {
      navigate(selectedPage);
    }
  }, [selectedPage, navigate]);

  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

function Content({ selectedPage }: ContentProps) {


  return (
    <BrowserRouter>
      <InnerContent selectedPage={selectedPage} />
    </BrowserRouter>
  );
}

export default Content;
