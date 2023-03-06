import styles from "./ClientsSection.module.css";
import Slider from "react-slick";

export function ClientsSection() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };
  return (
    <section className={styles.clientsContainer} id="clients">
      <h1 className={styles.clientsTitle}>Lorem ipsum dolor sit amet</h1>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          <div className={styles.carrouselContainer}>
            <h1>1</h1>
          </div>
          <div className={styles.carrouselContainer}>
            <h2>2</h2>
          </div>
          <div className={styles.carrouselContainer}>
            <h1>3</h1>
          </div>
          <div className={styles.carrouselContainer}>
            <h2>4</h2>
          </div>
          <div className={styles.carrouselContainer}>
            <h1>5</h1>
          </div>
          <div className={styles.carrouselContainer}>
            <h2>6</h2>
          </div>
        </Slider>
      </div>
    </section>
  );
}
