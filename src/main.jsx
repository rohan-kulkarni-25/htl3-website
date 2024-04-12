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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/leagueHeroes", element: <LeagueHeroes /> },
      { path: "/team", element: <Team /> },
      { path: "/tracks", element: <TracksPage /> },
      { path: "/communitypartners", element: <CommunityPartner /> },
      { path: "/prizes", element: <Prizes /> },
      { path: "/sponsors", element: <Sponsors /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
