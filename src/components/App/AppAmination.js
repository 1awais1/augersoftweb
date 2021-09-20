import React   from 'react';
import { useRive } from "rive-react";
import RiveAni from "./auger_anime1.riv";
import { useState, useEffect } from "react";

const AppAmination = ()=> {
  const [isDark, toggleMode] = useState(false);

  const params = {
    src: RiveAni,
    autoplay: true,
  };

  const { RiveComponent, rive } = useRive(params);

  useEffect(() => {
    if (rive) {
      if (isDark) {
        console.log("dark");
        rive.reset();
        rive.play("dark");
      } else {
        rive.reset();
        rive.play("light");
      }
      console.log(rive.playingAnimationNames);
    }
  }, [isDark, rive]);

  return (
    <div>
      <div style={{ width: 600, height: 500 }}>
        <RiveComponent />
      </div>
      <button onClick={() => toggleMode(!isDark)}>
        Toggle Mode is:{isDark ? "dark" : "light"}
      </button>
    </div>
  );
}

export default AppAmination;
