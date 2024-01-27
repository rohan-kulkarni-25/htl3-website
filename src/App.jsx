import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="bg-cover bg-gradient z-30">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
// bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 bg-no-repeat  bg-cover
