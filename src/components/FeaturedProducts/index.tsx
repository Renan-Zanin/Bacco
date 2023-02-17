import styles from "./FeaturedProducts.module.css";
import Slider from "react-slick";

export function FeaturedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={styles.productsContainer}>
      <div className={styles.carrouselContainer}>
        <Slider {...settings}>
          <div className={styles.carrouselContainer}>
            <h1>1</h1>
          </div>
          <div className={styles.carrouselContainer}>
            <h2>2</h2>
          </div>
        </Slider>
      </div>
      <div className={styles.infoWrapper}>
        <h1 className={styles.productTitle}>Lorem ipsum dolor sit amet</h1>
        <span className={styles.productDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero
          quasi nulla deleniti!
        </span>
        <div>
          <button className={styles.productButton}></button>
        </div>
      </div>
    </section>
  );
}
