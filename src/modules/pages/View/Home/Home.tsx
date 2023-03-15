import React from "react";

export function Home() {
  const [theme, setTheme] = React.useState<boolean>(false);

  const selectTheme = () => {
    console.log("teste")
    if (theme === true) {
      localStorage.removeItem("style");
    } else {
      localStorage.setItem("style", "Black");
    }
  };
  
  React.useEffect(() => {
    let s = localStorage.getItem("style");
    if (s) setTheme(true);
    else setTheme(false);
  }, [theme]);

  return (
    <>
      <div>
        <h1 style={{color: theme ? "#fff" : "#111"}}>Hello world</h1>
      </div>
      <button onClick={selectTheme}> asjidhasjkh</button>
    </>
  );
}
