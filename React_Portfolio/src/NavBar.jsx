
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light meraBg heightWala">
        <div className="container-fluid">
          <a className="navbar-brand firstOne" href="#startbootstrap">
            START BOOTSTRAP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            // eslint-disable-next-line react/no-unknown-property
            dataBsToggle="collapse"
            // eslint-disable-next-line react/no-unknown-property
            dataBsTarget="#navbarNav"
            // eslint-disable-next-line react/no-unknown-property
            ariaControls="navbarNav"
            // eslint-disable-next-line react/no-unknown-property
            ariaExpanded="false"
            // eslint-disable-next-line react/no-unknown-property
            ariaLabel="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <div className="nav-item">
                <a
                  className="nav-link secondOne active"
                  aria-current="page"
                  href="#portfolio"
                >
                  PORTFOLIO
                </a>
              </div>
              <div className="nav-item thirdOne">
                <a className="nav-link active" href="#about">
                  ABOUT
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link fourthOne active" href="#contact">
                  CONTACT
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
