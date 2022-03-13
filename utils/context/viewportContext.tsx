import { createContext, useContext, useEffect, useState } from "react";

type VP = {
  width: number | undefined;
  height: number | undefined;
};

const viewportContext = createContext<VP>({
  width: undefined,
  height: undefined,
});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(global.innerWidth);
  const [height, setHeight] = useState(global.innerHeight);

  const handleWindowResize = () => {
    setWidth(global.innerWidth);
    setHeight(global.innerHeight);
  };

  useEffect(() => {
    global.addEventListener("resize", handleWindowResize);
    return () => global.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

export { viewportContext, ViewportProvider, useViewport };
