import { useEffect, useState } from "react";

export const Loader = (page: any) => {
  const [color, setColor] = useState<string>("var(--main-yellow)");
  useEffect(() => {
    if (page.currentPage === "signInForm") {
      setColor("var(--main-yellow)");
    } else {
      setColor("var(--main-blue)");
    }
  }, [page]);
  return (
    <span className="loading">
      <h1 style={{ color: color, fontSize: "2.5rem" }}>Loading</h1>
      <div className="snippet" data-title="dot-pulse">
        <div className="stage">
          <div className="dot-pulse" style={{ color: color }}></div>
        </div>
      </div>
    </span>
  );
};
