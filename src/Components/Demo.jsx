const Demo = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-10 col-md-12  ">
            <nav className="navbar  navbar-expand-lg nav-bor ">
              <div className="container-fluid">
                <a className="navbar-brand  " id="logo" href="/">
                  Blood Bank
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarNav">
                  <ul className="navbar-nav  n-list">
                    <li className="nav-item  ">
                      <a className="nav-link " aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Available Blood
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Demo;
