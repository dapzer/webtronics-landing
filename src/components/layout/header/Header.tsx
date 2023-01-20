import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    href: "#about",
    title: "About"
  },
  {
    href: "#programs",
    title: "Programs"
  },
  {
    href: "#steps",
    title: "Steps"
  },
  {
    href: "#questions",
    title: "Questions"
  },
  {
    href: "#contact",
    title: "Get in touch"
  }
];

const Header = () => {
  return (
    <header className={`container ${styles.body}`}>
      <Link href={"/"}>
        <Image src={"logo.svg"} width={168} height={33} alt={"Logo"} />
      </Link>

      <div className={styles.links}>
        {links.map((el, index) => (
          <Link key={index} href={el.href} scroll={false}>
            {el.title}
          </Link>
        ))}
      </div>

    </header>
  );
};

export default Header;
