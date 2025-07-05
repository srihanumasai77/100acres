function Home() {
  return (
    <div>
      {/* Banner Section */}
      <div className="banner-blk">
        <div className="slider">
          <div>
            <a href="https://mahidharaprojects.com/mahidhara-springs/" target="_blank" rel="noopener noreferrer">
              <img src="images/spring1.png" style={{width:'100%'}} alt="Villa Plots For Sale in Patancheruvu" />
            </a>
          </div>
          <div>
            <a href="https://www.mahidharaprojects.com/mahidhara-fortunecity/?utm_source=Home_Page&utm_medium=Website&utm_campaign=Website_Home_Page" target="_blank" rel="noopener noreferrer">
              <img src="images/fortune-city.jpg" style={{width:'100%'}} alt="Mahidhara Fortune City - Villa Plots For Sale in Attibele" />
            </a>
          </div>
          <div>
            <a href="https://mahidharaprojects.com/mahidhara-supreme/" target="_blank" rel="noopener noreferrer">
              <img src="images/supreme-banner.jpg" style={{width:'100%'}} alt="Mahidhara Supreme - Open Plots For Sale in Oragadam" />
            </a>
          </div>
          <div>
            <a href="https://mahidharaprojects.com/paradise/" target="_blank" rel="noopener noreferrer">
              <img src="images/paradise.jpg" style={{width:'100%'}} alt="Mahidhara Paradise - Open Plots For Sale in Isnapur" />
            </a>
          </div>
          <div>
            <a href="https://mahidharaprojects.com/mahidhara-harmony/" target="_blank" rel="noopener noreferrer">
              <img src="images/harmony-banner.jpg" style={{width:'100%'}} alt="Mahidhara harmony - Luxury Villas in Sarjapura Road" />
            </a>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-blk">
        <div className="about-in d-flex flex-wrap">
          <div className="about-lt col-lg-6 animated fadeInUp wow">
            <img src="images/about-img.png" alt="Ongoing Projects in Hyderabad" />
          </div>
          <div className="about-rt col-lg-6 animated fadeInUp wow">
            <div className="head">
              <h2>About Us</h2>
              <h5>Building Tomorrow, Today!</h5>
              <p>
                We at Mahidhara believe in delivering value to one and all, by creating & delivering projects that
                take your lifestyle a notch higher. We aim to create spaces that enable you to focus on the things
                you consider important – whether it is building a career or a business, growing a family,
                connecting with friends, or simply finding the time and space to pursue your dreams. Our
                superiority in architectural design and pride in execution integrity has today made us one of the
                leading real estate developers across Hyderabad, Bangalore, and Chennai. Our projects speak of our
                worth with the right blend of aesthetics, practicality, and economy because we know it's not just a
                house, it's your home and eventually, a better lifestyle, a better tomorrow.
              </p>
            </div>
            <ul className="d-flex flex-wrap animated fadeInUp wow">
              <li className="col-md-4">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>3 Cities</p>
              </li>
              <li className="col-md-4">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>15+ Projects</p>
              </li>
            </ul>
            <div className="btn-blk">
              <a href="about.php">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="location-blk">
        <div className="container">
          <div className="location-in d-flex flex-wrap">
            <div className="location-lt">
              <ul className="d-flex flex-wrap">
                <li className="col-md-6 animated fadeInUp wow">
                  <div className="head">
                    <h2>Locations</h2>
                    <p>Owing to our expertise and ever-growing list of happy customers we are all set to expand
                      operations in Bengaluru, Chennai, and Hyderabad benchmarking the epitome of fine living.
                      Mahidhara believes in not just building houses, we are dedicated to creating homes that
                      will reflect your desire and lifestyle. Bring Home Happiness with Mahidhara.
                    </p>
                  </div>
                </li>
                <li className="col-md-6 animated fadeInUp wow">
                  <div className="loc-img">
                    <img src="images/location1.png" alt="Residential Projects in Hyderabad" />
                    <div className="loc-cnt">
                      <h2>Hyderabad</h2>
                      <div className="btn-blk">
                        <a href="hyderabad.php">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-md-12 animated fadeInUp wow">
                  <div className="loc-img">
                    <img src="images/location2.png" alt="Luxury villas For Sale in sarjapura road" />
                    <div className="loc-cnt">
                      <h2>Bangalore</h2>
                      <div className="btn-blk">
                        <a href="bangalore.php">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="location-rt animated fadeInUp wow">
              <div className="loc-img">
                <img src="images/location3.png" alt="villas for sale in Oragadam, Sriperumbudur" />
                <div className="loc-cnt">
                  <h2>Chennai</h2>
                  <div className="btn-blk">
                    <a href="chennai.php">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="project-inner">
        <div className="tab-head animated fadeInUp wow">
          <h2>Our Projects</h2>
        </div>
        <div className="tabBlock">
          <ul className="tabBlock-tabs nav-tabs feature-tab border-bottom-0" data-tabs="tabs">
            <li className="tabBlock-tab is-active animatable fadeInUp">
              <a className="nav-link" data-toggle="tab">Ongoing Projects</a>
            </li>
            <li className="tabBlock-tab animatable fadeInUp">
              <a className="nav-link" data-toggle="tab" id="tab3">Upcoming Projects</a>
            </li>
            <li className="tabBlock-tab animatable fadeInUp">
              <a className="nav-link" data-toggle="tab" id="tab2">Completed Projects</a>
            </li>
          </ul>
          <div className="tab-content tabBlock-content">
            <div className="tabBlock-pane">
              <ul className="d-flex flex-wrap">
                <li className="col-md-4">
                  <div className="proj-img">
                    <img src="images/spring.png" alt="Premium Villa Plots in Isnapur, Patancheru" />
                    <div className="proj-cnt">
                      <h3>MAHIDHARA SPRINGS</h3>
                      <p>@Chintalcheru | 17 Acres | Open Plots</p>
                      <div className="btn-blk">
                        <a href="https://mahidharaprojects.com/mahidhara-springs/" target="_blank" rel="noopener noreferrer">
                          Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-md-4">
                  <div className="proj-img">
                    <img src="images/fortune-ongoing.jpg" alt="Luxury Villa For Sale in Electronic City, Bengaluru" />
                    <div className="proj-cnt">
                      <h3>MAHIDHARA FORTUNE CITY</h3>
                      <p>@Attibele | 80 Acres | Open Plots</p>
                      <div className="btn-blk">
                        <a href="https://mahidharaprojects.com/fortune-city/" target="_blank" rel="noopener noreferrer">
                          Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-md-4">
                  <div className="proj-img">
                    <img src="images/supreme.jpg" alt="Luxury 3 Bhk Villas in Oragadam, Chennai" />
                    <div className="proj-cnt">
                      <h3>MAHIDHARA SUPREME</h3>
                      <p>@Oragadam | 80 Acres | Villas</p>
                      <div className="btn-blk">
                        <a href="https://mahidharaprojects.com/mahidhara-supreme/" target="_blank" rel="noopener noreferrer">
                          Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-blk">
        <div className="container">
          <div className="why-in d-flex flex-wrap">
            <div className="why-lt col-lg-2"></div>
            <div className="head col-lg-8 animated fadeInUp wow">
              <h2>Why Choose Us?</h2>
              <p>Driven by the inherited experience of generations, Mahidhara has built exceptional and value-based
                properties with high ROI since 2006.
                Popularly known as the No: 1 customer-friendly real estate firm in South India, Mahidhara tailors
                to a wide palette of housing developments, ranging from Premium Townships, Luxury Villas, Twin
                houses to affordable value-based Row houses and plots.
                With a team of internationally reputed award-winning Architects, Engineers, and Designers,
                Mahidhara Projects vouches on its Quality policy, Ultra-modern Building Technology.
              </p>
            </div>
            <div className="why-rt col-lg-2 animated fadeInUp wow">
              <img src="images/why-logo.png" alt="Open Plots for Sale in Hyderabad, Bengaluru, Chennai" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-blk">
        <div className="container">
          <div className="testimonial-in">
            <ul className="d-flex flex-wrap">
              <li className="col-lg-4 animated fadeInUp wow">
                <div className="test">
                  <i className="fa fa-star only-stars" aria-hidden="true"></i>
                  <h5>Proud Legacy</h5>
                  <div className="line"></div>
                  <p>The No. 1 customer-friendly real estate firm in South India since 2006</p>
                </div>
              </li>
              <li className="col-lg-4 animated fadeInUp wow">
                <div className="test">
                  <i className="fa fa-star only-stars" aria-hidden="true"></i>
                  <h5>Quality Construction</h5>
                  <div className="line"></div>
                  <p>Meticulous and sustainable designs which turn out to be long-term Assets & reap Investment benefits.</p>
                </div>
              </li>
              <li className="col-lg-4 animated fadeInUp wow">
                <div className="test">
                  <i className="fa fa-star only-stars" aria-hidden="true"></i>
                  <h5>Transparency</h5>
                  <div className="line"></div>
                  <p>We believe that transparency in business and compliance with norms are of vital importance.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="since-blk">
        <div className="since-in">
          <div className="since-img animated fadeInUp wow">
            <img src="images/since.png" alt="mahidhara projects reviews" />
          </div>
          <div className="form-in animated fadeInUp wow">
            <form method="post" action="olm_data/send.php">
              <ul className="d-flex flex-wrap">
                <li className="col-lg-4">
                  <input 
                    required 
                    pattern="[A-Za-z. ]+" 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    className="form-control" 
                  />
                </li>
                <li className="col-lg-5">
                  <input 
                    required 
                    pattern="^[0-9]{10}$" 
                    type="tel" 
                    name="phone" 
                    id="phone"
                    placeholder="Phone number" 
                    className="form-control" 
                  />
                </li>
                <li className="col-lg-3">
                  <div className="button">
                    <button name="submit" type="submit" className="btn1">
                      <img src="images/icon.png" alt="mahidhara projects reviews" />
                      GET IN TOUCH
                    </button>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-blk">
          <div className="container">
            <div className="footer-in d-flex flex-wrap">
              <div className="footer-lt1 col-lg-3 animated fadeInUp wow">
                <a href="index.php">
                  <img src="images/footer-logo.png" alt="img" />
                </a>
              </div>
              <div className="footer-lt col-lg-3 animated fadeInUp wow">
                <h5>PROJECTS</h5>
                <ul>
                  <li><a href="https://mahidharaprojects.com/mahidhara-harmony/" target="_blank" rel="noopener noreferrer">Mahidhara Harmony</a></li>
                  <li><a href="https://mahidharaprojects.com/mahidhara-supreme/" target="_blank" rel="noopener noreferrer">Mahidhara Supreme</a></li>
                  <li><a href="https://mahidharaprojects.com/fortune-city/" target="_blank" rel="noopener noreferrer">Mahidhara Fortune City</a></li>
                  <li><a href="https://www.mahidharaprojects.com/avasa/" target="_blank" rel="noopener noreferrer">Mahidhara Avasa</a></li>
                  <li><a href="https://mahidharaprojects.com/paradise/" target="_blank" rel="noopener noreferrer">Mahidhara Paradise</a></li>
                  <li><a href="https://mahidharaprojects.com/mahidhara-springs/" target="_blank" rel="noopener noreferrer">Mahidhara Spring</a></li>
                </ul>
              </div>
              <div className="footer-lt col-lg-3 animated fadeInUp wow">
                <h5>QUICK LINKS</h5>
                <ul>
                  <li><a href="about.php">About</a></li>
                  <li><a href="careers.php">Careers</a></li>
                  <li><a href="blog.php">Blog</a></li>
                  <li><a href="privacy_policy.php">Privacy policy</a></li>
                  <li>
                    <div className="footer-links">
                      <h5>Follow Us</h5>
                      <ul>
                        <li><a href="https://www.facebook.com/MahidharaOfficial" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/mahidhara-projects-pvt-ltd" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/mahidharaprojects/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/MahidharaIndia/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.youtube.com/@mahidharaprojectspvtltdvil972" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="footer-lt col-lg-3 animated fadeInUp wow">
                <ul>
                  <li>
                    <h5>Address</h5>
                    <address>H.No: 2-40, Plot No, 11, Hitex Road,
                      Shilpa Layout, HITEC City,<br />
                      Hyderabad, Telangana.</address>
                  </li>
                  <li>
                    <h5>Phone:</h5>
                    <a href="tel:+919959956789">+91 99599 56789, 98938 69999</a>
                    <a href="tel:04042673399">04042673399</a>
                  </li>
                  <li>
                    <h5>Email:</h5>
                    <a href="mailto: info@mahidharaprojects.com"> info@mahidharaprojects.com</a>
                    <a href="mailto: hrh@mahidharaprojects.com"> hrh@mahidharaprojects.com</a>
                    <a href="mailto: sales@mahidharaprojects.com"> sales@mahidharaprojects.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <p>Copyright © 2025 Mahidhara Projects All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;