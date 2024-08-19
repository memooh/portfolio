import "./ContactMe.css";

import linkedin from "/contact/linkedin.webp";
import github from "/contact/github.png";
import nosocialmedia from "/contact/nosocialmedia.png";

const ContactMe = () => {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mehmet-emin-ozturk-04a21b324/",
      icon: linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/memooh",
      icon: github,
    },
    {
      name: "No other social media",
      url: "#",
      icon: nosocialmedia,
    },
  ];

  return (
    <section id="contactMeSection" className="contactMe ">
      <div className="container text-center">
        <h1>
          For inquiries or professional opportunities, please contact me via
          email at:
        </h1>
        <h3 className="email mt-5">
          <a href="mailto:m.ovdb@outlook.com">m.ovdb@outlook.com</a>
        </h3>
        <h1 className="mt-5">You can also find me on:</h1>
        <div className="row mt-5">
          {links.map((link, index) => (
            <div key={index} className="col-md-4 mb-3">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <div className="social-icon">
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="social-icon-img"
                  />
                </div>
                <div className="social-name mt-2">{link.name}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
