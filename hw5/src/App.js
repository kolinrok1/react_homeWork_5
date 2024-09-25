import "./App.css";
import { Box } from "./components/Box";
import { HomePage } from "./components/HomePAge";
import { AboutPAge } from "./components/AboutPage";
import s from "./App.module.css";
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { ListImg } from "./components/ListImg";
import { Detail } from "./components/Detail";

function App() {
  const styleActiveLink = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  const goods = [
    {
      id: 1,
      title: "Xiaomi",
      price: "30000",
      img: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e4/ff/62/e4ff62a4-c3f4-e237-4f0a-06e2f0632bc4/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png",
    },
    {
      id: 2,
      title: "Samsung",
      price: "50000",
      img: "https://www.indiantelevision.com/sites/default/files/images/tv-images/2021/01/12/samsung.jpg",
    },
    {
      id: 3,
      title: "iPhone",
      price: "80000",
    },
  ];

  return (
    <>
      <Box>
        <BrowserRouter>
          <nav className={styleActiveLink}>
            <NavLink className={styleActiveLink} to="/">
              {" "}
              Главная{" "}
            </NavLink>
            <NavLink className={styleActiveLink} to="/about">
              {" "}
              О нас{" "}
            </NavLink>
            <NavLink className={styleActiveLink} to="/image">
              {" "}
              Картинки{" "}
            </NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPAge />} />
            <Route path="/image" element={<ListImg product={goods} />} />
            <Route
              path="/image/:productID"
              element={<Detail products={goods} />}
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
