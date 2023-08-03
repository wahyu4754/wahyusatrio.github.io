import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Image Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Envato</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>3 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>WordPress</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/GTZXHqR3MDM?enablejsapi=1&version=3&playerapiid=ytplayer"
                allowFullScreen=""
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Odwag Product Animation</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>3D Animation</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Odwag India</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>After Effects, Blender</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/NAUTIKAL.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-1.jpg" title="img" />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>PT. Pesona Nautikal Indonesia</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Visual Brand Design</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>PT. Pesona Nautikal Indonesia</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Software :
                  </span>
                  <span>Adobe Illustrator</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-3.jpg"
                alt="External Project"
              />
            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>External Link</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Advertising</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Envato</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Adobe Premiere</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
