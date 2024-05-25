import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LeagueHeroes from "./pages/LeagueHeroes.jsx";
import Team from "./pages/Team.jsx";
import TracksPage from "./pages/TracksPage.jsx";
import CommunityPartner from "./pages/CommunityPartner.jsx";
import Prizes from "./pages/Prizes.jsx";
import Sponsors from "./pages/Sponsors.jsx";
// import Evangelists from "./pages/Evangelists.jsx";
// import ContestArena from "./pages/ContestArena.jsx";
import AboutUs from "./components/aboutus-section/AboutUs.jsx";
import RHP from "./pages/RHP.jsx";
import Live from "./pages/Live.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/leagueHeroes", element: <LeagueHeroes /> },
      { path: "/team", element: <Team /> },
      { path: "/tracks", element: <TracksPage /> },
      { path: "/communitypartners", element: <CommunityPartner /> },
      { path: "/prizes", element: <Prizes /> },
      { path: "/sponsors", element: <Sponsors /> },
      { path: "/remoteHackerProgram", element: <RHP /> },

      // { path: "/evangelists", element: <Evangelists /> },
      // { path: "/contestarena", element: <ContestArena /> },
    ],
  },
  {
    path: "/live",
    element: <Live />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
