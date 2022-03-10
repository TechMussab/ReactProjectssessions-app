function Header({ theme }) {
  const classNames={
    headerText:{
      light:'header-title',
    dark:"text-info"},

  }
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
          </div>
          <div className={classNames['headerText'][theme]}>
            <h4 className={classNames['headerText'][theme]}>Silicon Valley Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            Hello Mr. Smith &nbsp;&nbsp;
            <span>
              <a href="#">sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
