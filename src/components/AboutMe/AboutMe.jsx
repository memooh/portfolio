import "./AboutMe.css";

import avatar from "/hero/avatar.png";
import lb from "/images/linebreaker.png";

const AboutMe = () => {
  return (
    <section id="aboutMeSection" className="aboutMe d-flex vh-100 align-items-center mt-5 mb-5">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={avatar}
              alt="Avatar of me. Memoji from Apple Iphone"
              className="img-fluid avatar"
            />
          </div>
          <div className="col-md-8">
            <p className="about-content">
              Hello there! I'm Mehmet Ozturk, a Dutch/Turkish web developer born
              and raised in the Netherlands. My journey with computers started
              early, from managing gaming servers to studying Application and
              Media Development.{" "}
            </p>

            <p className="about-content">
              After a brief detour into Human Resources during the pandemic,
              I've reignited my passion for coding. I'm now focused on creating
              websites and expanding my skills in web development. When I'm not
              coding, you'll find me cheering for Galatasaray, enjoying time
              with family and friends, or diving into a good history book. I'm
              excited about the possibilities in web development and eager to
              take on new challenges. Thanks for exploring my portfolio!
            </p>
          </div>
        </div>
        <div className="text-center d-none d-lg-block">
  <img src={lb} alt="Break line" className="img-fluid" />
</div>

      </div>
    </section>
  );
};

export default AboutMe;
