import React from "react";
import styles from "./gallery.module.scss";
import Image from "next/image";

const Gallery = () => {
  return (
    <section>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.grid}>
        <div className={styles.column}>
          <p>By the end of this course, you will be able to develop and publish your very own Google Chrome extension!
            In
            this course we will focus on coding exercises and projects. </p>
          <Image src={"/gallery/developer 4.jpg"} width={651} height={434} alt={""} />
        </div>

        <div className={styles.photos}>
          <Image src={"/gallery/developer 1.jpg"} width={651} height={434} alt={""} />
          <Image src={"/gallery/developer 2.jpg"} width={314} height={209} alt={""} />
          <Image src={"/gallery/developer 3.jpg"} width={314} height={209} alt={""} />
          <p>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this
            course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This
            course
            was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a
            simple
            web page.</p>
        </div>
      </div>

    </section>
  );
};

export default Gallery;
