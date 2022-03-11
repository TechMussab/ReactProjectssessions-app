import {ThemeContext} from "./Layout";
import {useContext} from "react";
function SpeakersToolbar({ showSessions, setShowSessions }) {
  const { theme, setTheme } = useContext(ThemeContext);

  const styles={
    toolbarBackground:{
      light:"white",
      dark:'#222222',
    },
    textColor:
    {
      light:"#222222",
      dark:'white',
    },
    container:
    {
      light:"white",
      dark:'#222222',
    },
    textClass:
    {
      light:"",
      dark:'text-info',
    }
  }
  // theme === "light" ? "container-fluid light" : "container-fluid dark"
  // container:
  //   {
  //     light:"container-fluid light",
  //     dark:"container-fluid dark",
  //   },
  //style={{color:styles['textColor'][theme]}}
  return (
    <section className='toolbar dark-theme-header'>
      <div className="container" style={{backgroundColor:styles['container'][theme],borderColor:styles['container'][theme]}}>
        <div className="justify-content-between" >
          <ul className={`toolrow d-flex flex-column flex-lg-row`} >
            <li className={`d-flex flex-column flex-md-row ${styles["textClass"][theme]}`}>
              <b >Show Sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onChange={(event) => {
                    setShowSessions(event.target.checked);
                  }}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className={`d-flex flex-column flex-md-row ml-sm-5 ml-0 ${styles["textClass"][theme]}`}
            >
              <strong >Theme</strong>
              <label className="dropdown">
                <select
                  className="form-control theme"
                  value={theme}
                  onChange={(event) => {
                    setTheme(event.target.value);
                  }}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpeakersToolbar;
