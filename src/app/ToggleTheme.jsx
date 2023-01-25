import "../style.css";
export const ToggleTheme = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      localStorage.setItem("checkbox", false);
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      localStorage.setItem("checkbox", true);
      theme = darkTheme;
    }
  };

  if (theme === "dark") {
    setTimeout(() => {
      document.getElementById("checkbox").setAttribute("checked", "checked");
    }, 0);

    console.log("dark");
  }

  return (
    <>
      <div className="container col-2 fs-6 position-absolute top-0 start-0 toggle mt-5">
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkbox"
            onClick={switchTheme}
          />
          <label className="form-check-label" htmlFor="checkbox">
            <div className="image"></div>
          </label>
        </div>
      </div>
    </>
  );
};
