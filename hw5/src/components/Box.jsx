import s from "./App.module.css";

export const Box = ({ children, theme }) => (
    <div className={theme? `${s.ligth}` : `${s.darck}`}>
      {children}
    </div>
  );