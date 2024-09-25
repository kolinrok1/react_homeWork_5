import s from "./App.module.css";

export const Box = ({ children }) => (
    <div className={s.center}>
      {children}
    </div>
  );