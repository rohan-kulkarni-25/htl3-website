import Navbar from "./components/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import StripFooter from "./components/stripfooter/StripFooter";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="bg-cover sm:bg-cover sm:bg-center sm:bg-repeat-y bg-no-repeat bg-gradient z-30 h-screen overflow-hidden flex flex-col justify-start ">
      <Navbar />
      <Outlet />
      <StripFooter />
    </main>
  );
}

export default App;

