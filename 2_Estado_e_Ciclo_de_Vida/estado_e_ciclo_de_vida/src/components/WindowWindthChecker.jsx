import { useEffect, useState } from "react";

function WindowWindthChecker() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      <h2>A largura de tela é: {width}px</h2>
    </>
  );
}

export default WindowWindthChecker;
