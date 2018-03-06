import React from 'react';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="nav__container">
            <div className="logo__container">
              <img src="./0.5x/Asset 2@0.5x.png" alt="" />
            </div>
            {/* <ul className="nav__links">
              <li className="nav__link">
                <a href="#about">About</a>
              </li>
              <li className="nav__link">
                <a href="#work">Work</a>
              </li>
              <li className="nav__link">
                <a href="#contact">Contact</a>
              </li>
            </ul> */}
          </div>
        </nav>
      </header>
      <main>
        <div className="main__container">
          <section className="main__hero">MAIN HERO</section>
          {/* <section className="main__portfolio">PORTFOLIO</section>
          <section className="main__skills">SKILLS</section> */}
        </div>
      </main>
      {/* <footer>FOOTER</footer> */}
    </div>
  );
};

export default App;
