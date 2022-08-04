import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Container({ children }: React.PropsWithChildren) {
  const [theme] = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-center items-center grow ${theme.background}`}
    >
      <div className="h-[500px] w-[500px] flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
