/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiSvelte, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import "./LandingPage.css";
import Logo33 from "../assets/mysql.svg"; // Adjust the path as needed
import Logo4 from "../assets/laravel.svg";
import Logo5 from "../assets/nodejs.svg";
// import FaceSvg from "../assets/mf-avatar.svg";
import About from "../assets/about-us.png.svg";
import div_befor from "../assets/div_before.svg";
// import Logo from "../assets/logo.png.svg";
import Logo3 from "../assets/logo3.png.svg";
import s1 from "../assets/s1.png.svg";
import s2 from "../assets/s2.png.svg";
import s3 from "../assets/s3.png.svg";
import s4 from "../assets/s4.png.svg";
import profile from "../assets/profile_resize.svg";
import Home_avtar from "../assets/home-right.png.svg";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("header");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="content navbar">
          <div className="logo">
            {/* <img src={Logo} alt={" not found"} /> */}
            <h1>Call Center</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#hero">home</a>
              </li>
              <li>
                <a href="#intro">about</a>
              </li>
              <li>
                <a href="#portfolio">Framework</a>
              </li>
              <li>
                <a href="#services">service</a>
              </li>
              <div className="drop">
                <li>
                  <a href="https://callcenterstore.xyz">
                    Web Store
                  </a>
                </li>
              </div>

              {/*               <li>
                <a href="#">pages</a>
              </li>
                            <li>
                <a href="#contact">contact</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      <section className="content landingpage" id="hero">
        <div className="left left-content">
          <div className="head">
            <div className="hii">
              <h3>HELLO</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="name">
            <h1>
              <Typewriter
                words={["WE ARE YOUR TEAM"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={80}
              />
            </h1>
            <h5 className="about1">
              <Typewriter
                words={[
                  "Your Call Center Experts",
                  "Providing Top-Notch Web Solutions",
                  "&",
                  "24/7 Support",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h5>
          </div>
          <div className="btn">
            <a href="https://www.instagram.com/callcenteridn/">
              <button>Contact Us</button>
            </a>
            <div className="hire">
              <a href="#services">
                <button>Get Our Services</button>
              </a>
            </div>
          </div>
        </div>
        <div className="right forgot">
          <img src={Home_avtar} alt="" />
        </div>
      </section>
      <section className="intro" id="intro">
        <div className="left forgot">
          <img src={About} alt="About Us" />
        </div>
        <div className="right">
          <div className="about">
            <div className="about-text">
              <h2>
                Welcome to Web Development <br />
                Services We <br />
              </h2>
              <p>
                Our name is Web Development Team and we have over two years of
                experience in building innovative web solutions. We are experts
                in various web development technologies, including ReactJS,
                NodeJS, Laravel, PHP Native, and MySQL. Our team is committed to
                creating high-quality, responsive websites, tailored to your
                business needs. We are also experienced in designing attractive
                and functional UI/UX, ensuring optimal user experience across
                devices. With deep expertise in frontend and backend
                development, we are ready to help you develop web applications
                that meet the latest industry standards. We also have extensive
                knowledge of basic data management, APIs, and DevOps best
                practices to ensure smooth integration and optimal performance.
                Contact us to get the right web solution and professional
                support from our team.
              </p>
            </div>
            <div className="download-btn">
              <a href="https://www.instagram.com/callcenteridn/">
                <button>Contact us</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content content-logo" id="portfolio">
        <div className="left">
          <div className="top">
            <div className="image">
              <a href="#">
                <AiOutlineHtml5 style={{ color: "orange", fontSize: "70px" }} />
                <p>HTML 5</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <FaCss3Alt style={{ color: "blue", fontSize: "70px" }} />
                <p>css 3</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <TbBrandJavascript
                  style={{ color: "yellow", fontSize: "70px" }}
                />
                <p>javascript</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <FaBootstrap style={{ color: "purple", fontSize: "70px" }} />
                <p>bootstrap</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiTailwindcss
                  style={{ color: "light-blue", fontSize: "70px" }}
                />
                <p>tailwindcss</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiReact style={{ color: "cyan", fontSize: "70px" }} />
                <p>react</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <img src={Logo33} alt="MySql" />
                <p>MySQL</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <img src={Logo5} alt="Node.Js" />
                <p>Node.Js</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <img src={Logo4} alt="Laravel" />
                <p>Laravel</p>
              </a>
            </div>
          </div>
        </div>
        <div className="right Experience">
          <div className="sk wid">
            <div className="div-image">
              <img src={div_befor} alt="" />
            </div>
            <div className="contact wid">
              <div className="year wid">
                <h1 style={{ fontSize: '90px' }}>New</h1>
                  <h3>
                    Freshly{" "}
                    <br />
                    Launched{" "}
                    <br />
                    Service{" "}
                  </h3>
              </div>

              <div className="no wid">
                <div className="sub-no">
                  <p>Contact Us Today</p>
                  <h2 type="tel">(+62) 81280321877</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offers" id="services">
        <div className="headline">
          <h1>Our Service Offers</h1>
          <p>
            We provide a range of web development services tailored to meet your
            needs.
            <br />
            From front-end to back-end solutions, we use the latest technologies
            to create high-quality websites and applications.
          </p>
        </div>
        <div className="offer-content">
          <div className="offer-img">
            <img src={s1} alt="ReactJS Development" />
            <h2>ReactJS Development</h2>
            <p>
              Crafting dynamic and responsive user interfaces <br />
              using ReactJS for seamless web experiences <br />
              optimized for performance and scalability.
            </p>
          </div>

          <div className="offer-img">
            <img src={s2} alt="NodeJS Development" />
            <h2>NodeJS Development</h2>
            <p>
              Building scalable and efficient server-side solutions <br />
              with NodeJS for fast and reliable web applications <br />
              that handle high traffic and complex processes.
            </p>
          </div>

          <div className="offer-img">
            <img src={s3} alt="Laravel Development" />
            <h2>Laravel Development</h2>
            <p>
              Developing robust and secure web applications <br />
              using Laravel's elegant framework features <br />
              to ensure clean code and maintainable projects.
            </p>
          </div>

          <div className="offer-img">
            <img src={s4} alt="PHP Native & MySQL" />
            <h2>PHP Native & MySQL</h2>
            <p>
              Delivering custom solutions with PHP and MySQL <br />
              for traditional web applications <br />
              that require a reliable and proven technology stack.
            </p>
          </div>
        </div>
      </section>

      <section className="offers" id="services">
        <div className="headline">
          <h1>Our Team</h1>
          <p>
            Our team is made up of dedicated professionals who bring expertise and passion to everything we do.
            <br />
            Learn more about the amazing individuals behind our success.
          </p>
        </div>
        <div className="offer-content">
          {[
            {
              name: "Hendriansyah Rizky Setiawan",
              role: "Laravel Full Stack Developer",
              description: "Specializes in building robust web applications with Laravel framework.",
              whatsapp: "https://wa.me/6281296579157",
              instagram: "https://www.instagram.com/gh0stxpl0it/",
              portfolio: "https://hendriansyah.vercel.app/",
              imageAlt: "Hendriansyah Rizky Setiawan",
            },
            {
              name: "Kenny Josiah Silaen",
              role: "Dedicated support for developers",
              description: "Provides a wide range of design assets to bring your ideas to life seamlessly.",
              whatsapp: "https://wa.me/6281280321877",
              instagram: "https://instagram.com/kensmoba",
              portfolio: "https://portofolio-kenny-josiah-silaen.vercel.app/",
              imageAlt: "Kenny Josiah Silaen",
            },
            {
              name: "Mohamad Akbar Hernanda",
              role: "Customer Service Specialist",
              description: "Handles customer inquiries, assists with web ordering process, and provides support related to ordering.",
              whatsapp: "https://wa.me/6285156306684",
              instagram: "https://instagram.com/Barrhn_",
              imageAlt: "Mohamad Akbar Hernanda",
            },
            {
              name: "Rifqi Alisba Garwita Sutrisno",
              role: "Full Stack Developer",
              description: "Specializes in React Js, Node.js, and REST API for innovative and efficient development solutions.",
              whatsapp: "https://wa.me/6281220884573",
              instagram: "https://instagram.com/rfqiags",
              portfolio: "https://rifqi-alisba.vercel.app/",
              imageAlt: "Rifqi Alisba Garwita Sutrisno",
            },
          ].map(({ name, role, description, whatsapp, instagram, portfolio, imageAlt }) => (
            <div className="offer-img" key={name}>
              <img src={profile} alt={imageAlt} />
              <h2>{name}</h2>
              <p>{role}<br />{description}</p>
              <p className="contact-info">
                <strong>WhatsApp:</strong>{" "}
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {whatsapp.replace('https://wa.me/', '')}
                </a>{" "}
                 <br />
                <strong>Instagram:</strong>{" "}
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {instagram.split('/').pop()}
                </a>{" "}
                 <br />
                <strong>Portfolio:</strong>{" "}
                <a
                  href={portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {portfolio}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="content">
        <div className="project">
          <h1>
            quality work <br />
            Recently done project
            {/* <a href={rahasia} download>
              Download Project
            </a>*/}
          </h1>
        </div>
      </section>
      <section className="footer">
        <footer>
          <div className="text">
            <h1>Call Center</h1>
            <h2>Follow Us</h2>
            <div className="icon">
              <a href="https://www.instagram.com/callcenteridn/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>

              <a href="https://github.com/kyy-95631488">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              <a href="https://wa.me/6281296579157">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <p>
            Copyright ©2024 All rights reserved |
            <span>
              <a href="/"> Call Center </a>
            </span>
          </p>
        </footer>
        <p></p>
        <p></p>
      </section>
    </>
  );
};

export default LandingPage;
