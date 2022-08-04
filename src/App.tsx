import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import UseStateDemo from "./components/demos/UseStateDemo";
import UseEffectDemo from "./components/demos/UseEffectDemo";
import React, { useState } from "react";
import UseContextDemo from "./components/demos/UseContextDemo";
import UseReducerDemo from "./components/demos/UseReducerDemo";
import UseMemoDemo from "./components/demos/UseMemoDemo";
import UseCallbackDemo from "./components/demos/UseCallbackDemo";
import UseIdDemo from "./components/demos/UseIdDemo";
import UseDeferredValue from "./components/demos/UseDeferredValue";
import UseTransitionDemo from "./components/demos/UseTransitionDemo";

interface Theme {
  [theme: string]: any;
}

const themes: Theme = {
  light: {
    background: "bg-slate-100",
  },
  dark: {
    background: "bg-slate-500",
  },
};

export const ThemeContext = React.createContext(themes.light);

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <Navbar />
      <ThemeContext.Provider value={[themes[theme], toggleTheme]}>
        <Container>
          <Routes>
            <Route path="*" element={<UseStateDemo />} />
            <Route path="useEffect" element={<UseEffectDemo />} />
            <Route path="useContext" element={<UseContextDemo />} />
            <Route path="useReducer" element={<UseReducerDemo />} />
            <Route path="useMemo" element={<UseMemoDemo />} />
            <Route path="useCallback" element={<UseCallbackDemo />} />
            <Route path="useId" element={<UseIdDemo />} />
            <Route path="useDeferredValue" element={<UseDeferredValue />} />
            <Route path="useTransition" element={<UseTransitionDemo />} />
          </Routes>
        </Container>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
