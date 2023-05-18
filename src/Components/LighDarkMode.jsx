import React from "react";
import { useTheme } from "../CustomHooks/CustomHooks";

const LighDarkMode = () => {
  const { theme, setTheme } = useTheme();

  const onThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button
        className={`${
          theme === "light"
            ? "text-dark bg bg-secondary"
            : "text-warning bg bg-light"
        } mb-3`}
        onClick={onThemeChange}
      >
        {theme === "light" ? (
          <i className="fa-regular fa-moon"></i>
        ) : (
          <i className="fa-regular fa-sun"></i>
        )}
      </button>
      <div
        style={{
          backgroundColor: theme === "dark" ? "black" : "",
          color: theme === "dark" ? "white" : ""
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
        repudiandae aperiam ipsum quam impedit aut numquam omnis sit cumque
        harum vel aliquid cupiditate voluptatum a modi architecto libero dolor,
        reprehenderit earum minus fugiat. Provident, nisi dignissimos quisquam
        et sint odio atque laboriosam at ut soluta quas veritatis suscipit
        corrupti fuga similique explicabo perspiciatis obcaecati porro nulla,
        numquam aliquid dolorum. Consectetur dicta, vitae exercitationem,
        aperiam voluptates eius in natus nesciunt suscipit quam odit aspernatur
        temporibus quaerat nobis commodi. Optio quas aspernatur esse quod saepe,
        maxime aut! Id eum esse ad vel, temporibus a voluptatibus quis quod?
        Rerum harum unde eveniet facilis.
      </div>
    </div>
  );
};

export default LighDarkMode;
