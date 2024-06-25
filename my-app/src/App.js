import ReactDOM from "react-dom";
import React from "react";
import LandingPage from "./components/LandingPage";

function App() {
  const handleMouseEnter = (e) => (e.target.style.color = "#dddddd");
  const handleMouseLeave = (e) => (e.target.style.color = "");
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1); // Remove '#' from the id
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if (targetId === "about") {
        // Special case for "About Me": Scroll to the top of the page
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
      } else if (targetId === "work") {
        // Special case for "About Me": Scroll to the top of the page
        window.scrollTo({
          top: 1400,
          behavior: "smooth",
        });
      } else {
        // General case for other sections: Scroll to the center
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const targetOffsetTop = targetElement.offsetTop;
        const targetHeight = targetElement.offsetHeight;

        // Calculate the position to scroll to, which is the top of the target minus half the viewport height plus half the target height
        const scrollToPosition =
          targetOffsetTop - viewportHeight / 2 + targetHeight / 2;

        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Scroll detection logic
  React.useEffect(() => {
    const nav = document.querySelector("nav");
    let lastScrollTop = 0;

    const checkScrollDirection = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // User has scrolled down, hide the nav
        nav.classList.add("nav-hidden");
        nav.classList.remove("nav-visible");
      } else if (scrollTop < lastScrollTop) {
        // User has scrolled up, show the nav
        nav.classList.remove("nav-hidden");
        nav.classList.add("nav-visible");
      }
      lastScrollTop = scrollTop; // Update lastScrollTop with the current scroll position
    };

    window.addEventListener("scroll", checkScrollDirection);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkScrollDirection);
    };
  }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              href="/eli_chen_resume.pdf"
              download
              className="resume-button"
            >
              Resume
            </a>
            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              href="#work"
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <LandingPage />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
