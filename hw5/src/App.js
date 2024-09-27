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
import { Provider, useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./components/ToggleTheme/ToggleTheme";
import { store } from "./components/ToggleTheme/Store";
import { Switcher } from "./components/ToggleTheme/Switcher";

function App() {
  const styleActiveLink = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  }; //isActive смотреть в библиотке className

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

  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handlerToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box theme={theme}>
      <button onClick={handlerToggleTheme} style={{ margin: "20px" }}>
        Сменить тему
      </button>

      <BrowserRouter>
        <nav>
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
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/about" element={<AboutPAge theme={theme} />} />
          <Route
            path="/image"
            element={<ListImg product={goods} theme={theme} />}
          />
          <Route
            path="/image/:productID"
            element={<Detail products={goods} theme={theme} />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
