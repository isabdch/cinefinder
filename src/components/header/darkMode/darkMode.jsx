import { DarkModeComponent } from "./darkModeStyles";

export function DarkMode({ darkTheme, setDarkTheme }) {

  return (
    <DarkModeComponent
      dark={darkTheme ? true : false}
      onClick={() => setDarkTheme(!darkTheme)}
    >
      <div>
        <i
          className={
            darkTheme ? "fa-duotone fa-moon-stars" : "fa-duotone fa-sun"
          }
        ></i>
      </div>
    </DarkModeComponent>
  );
}
