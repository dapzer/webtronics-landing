import React from "react";
import styles from "./footer.module.scss"
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    href: "",
    title: "About Us"
  },
  {
    href: "",
    title: "Review"
  },
  {
    href: "",
    title: "Steps"
  },
  {
    href: "",
    title: "Gallery"
  },
  {
    href: "",
    title: "FAQs"
  }
];

const socials = [
  {href: "", icon: "facebook"},
  {href: "", icon: "gitlab"},
  {href: "", icon: "twitter"},
  {href: "", icon: "linkedin"}
]

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={`container ${styles.body}`}>
        <div className={styles.block}>
          <Link href={"/"}>
            <Image src={"logo.svg"} width={168} height={33} alt={"Logo"} />
          </Link>
          <p>Wisconsin Ave, Suite 700 <br/>
            Chevy Chase, Maryland 20815</p>
        </div>
        <div className={styles.block}>
          <p className={styles.title}>
            Company
          </p>
          <div className={styles.companyLinks}>
            {links.map((el, index) => (
              <Link key={index} href={el.href}>
                {el.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.block}>
          <p className={styles.title}>
            Social media
          </p>

          <div className={styles.socials}>
            {socials.map((el, index) => (
              <Link href={el.href} target="_blank" key={index}>
                <Image src={`socials/${el.icon}.svg`} alt={el.icon} width={23} height={22}/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
