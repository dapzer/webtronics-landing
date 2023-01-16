import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    href: "",
    title: "About"
  },
  {
    href: "",
    title: "Programs"
  },
  {
    href: "",
    title: "Steps"
  },
  {
    href: "",
    title: "Questions"
  },
  {
    href: "",
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
          <Link key={index} href={el.href}>
            {el.title}
          </Link>
        ))}
      </div>

    </header>
  );
};

export default Header;
