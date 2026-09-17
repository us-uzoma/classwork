import './App.css'

function App() {
  return (
    <div className="App">
    <section className="gym-image-holder">
        <nav>
            <div className="logo"><a href="gym.html">Gym<span>Rat</span></a></div>
            <ul className="nav-bar-one">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Quick Tour</a></li>
                <li><a href="#">Login</a></li>
                <li><a className="register" href="#">Sign Up</a></li>
            </ul>
        </nav>
        <div className="hero">
            <h1 className="hero-h1">i-<span>Fitness</span> <br /> on steroids</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque blanditiis recusandae quo.
            </p>
            <a href="#">Quick tour</a>
        </div>
    </section>

    {/* <!-- ABOUT --> */}
     <section className="about">
        <div className="about-text">
            <h4>About Us</h4>
            <h2>Building Skills, <br />Building Futures</h2>
            <p>
                At morning className Digital Skill Academy, We provide practial training that helps you create a future.
            </p>
            <ul>
                <li>&#10004; Practical Hands-on Learning</li>
                <li>&#10004; Expert Instructors</li>
                <li>&#10004; Flexible Learning</li>
            </ul>
            <a href="#" className="btn">Learn More</a>
        </div>
        <div className="about-image">
            <img src="./about.png" alt="about us"/>
        </div>
     </section>

     {/* <!-- Testimonies --> */}
     <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback from our students</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src="./profile (1).jpg" alt="profile card"/>
                <h2>Oluchi Iwueze</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis officia facere placeat repellat nesciunt maiores ratione reprehenderit est, totam debitis! Ullam odit rem aut cupiditate impedit accusantium? Deleniti, officiis.
                </p>
            </div>
            <div className="card">
                <img src="./profile (2).jpg" alt="profile card"/>
                <h2>Taiye Taiwo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis officia facere placeat repellat nesciunt maiores ratione reprehenderit est, totam debitis! Ullam odit rem aut cupiditate impedit accusantium? Deleniti, officiis.
                </p>
            </div>
            <div className="card">
                <img src="./profile (3).jpg" alt="profile card"/>
                <h2>Olugbenga Femi</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis officia facere placeat repellat nesciunt maiores ratione reprehenderit est, totam debitis! Ullam odit rem aut cupiditate impedit accusantium? Deleniti, officiis.
                </p>
            </div>
        </div>
     </section>
     {/* <!-- CTA --> */}
     <section className="cta">
        <div className="cta-content">
            <h2>Ready To Start Your Learning Journey?</h2>
            <p>
                Join us today and start learning practical digital skills that can transform your future.
            </p>
            <a className="cta-button" href="#">Get Started</a>
        </div>
     </section>
     {/* <!-- FOOTER --> */}
      <footer className="footer">
        <div className="footer-container">
            {/* <!-- ABOUT --> */}
             <div className="footer-box">
                <h2>Our Digital Skills Academy</h2>
                <p>
                    Empowering students with practical digital skills for a better future.
                </p>
             </div>
             {/* <!-- QUICK LINKS --> */}
              <div className="footer-box">
                <h3>Quick Links</h3>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Courses</a>
                <a href="#">Contact</a>
              </div>
              {/* <!-- CONTACT --> */}
               <div className="footer-box">
                <h3>Contact Us</h3>
                <p>Phone: +234 800 000 0000</p>
                <p>Owerri, Imo state</p>
               </div>
        </div>
        {/* <!-- COPYRIGHT --> */}
         <div className="copyright">
            <p>&copy; 2026 Our Digital SSkills Academy. All Rights Reserved.</p>
         </div>
      </footer>
    </div>
  );
}

export default App
