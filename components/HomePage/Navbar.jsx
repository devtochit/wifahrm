import React,{useState} from "react";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(nav);

  const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 100) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  // window.addEventListener("scroll", changeColor);



  const { pathname } = useRouter();
  return (
    <div
      className={`${styles.wrapper} ${
        pathname === "/contact" && styles.change__bg
      } ${pathname === "/donate" && styles.change__bg}`}
    >
      <div className={styles.inner}>
        <div className={styles.logo__ctn}>
          <span>
            {/* <Image
              src="/svgs/logo-img.svg"
              alt="logo_image"
              className={styles.logo__img}
              width={50}
              height={50}
            /> */}
          </span>
          <span className={styles.logo__text}>
            WiFahrm
          </span>
        </div>

        <div className={styles.nav__content}>
          <div className={styles.top}>
            <div className={styles.contact__details}>
              <div className={styles.contact__icon}>
                <span>
                  <Image
                    src="/svgs/ic-contact.svg"
                    alt="contact_icon"
                    width={20}
                    height={20}
                  />
                </span>
                Wifahrm.gmail.com
              </div>
              <div className={styles.contact__icon}>
                <span>
                  <Image
                    src="/svgs/ic-dial.svg"
                    alt="contact_icon"
                    width={20}
                    height={20}
                  />
                </span>
                +222-234-0413
              </div>
            </div>


            <div className={styles.icon__ctn}>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-facebook.svg"
                  alt="facebook_icon"
                  width={17}
                  height={17}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-instagram.svg"
                  alt="instagram_icon"
                  width={17}
                  height={17}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-twitter.svg"
                  alt="twitter_icon"
                  width={17}
                  height={17}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-linkedIn.svg"
                  alt="linkedIn_icon"
                  width={17}
                  height={17}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <ul className={styles.links__ctn}>
              <li
                className={`${styles.links} ${
                  pathname === "/" && styles.route
                }`}
              >
                <Link href="/">
                Home
                </Link>
              </li>
              <li
                className={`${styles.links} ${
                  pathname === "/about" && styles.route
                }`}
              >
                <Link href="/about">
                  About
                </Link>
              </li>
              <li
                className={`${styles.links} ${
                  pathname === "/services" && styles.route
                }`}
              >
                <Link href="/services">
                Services
                </Link>
              </li>
              <li
                className={`${styles.links} ${
                  pathname === "/gallery" && styles.route
                }`}
              >
                <Link href="/gallery">
                  Gallery
                </Link>
              </li>
              <li
                className={`${styles.links} ${
                  pathname === "/contact" && styles.route
                }`}
              >
                <Link href="/contact">
                  Contact
                </Link>
              </li>
              <Link href="/signup">

                  <button type="button" className={styles.donate}>
                    Sign Up
                  </button>

              </Link>
              <Link href="/login">

                  <button type="button" className={styles.donate}>
                    Login
                  </button>

              </Link>
            </ul>
          </div>

    <div name="home" className={styles.navbar}>
      <div className={styles.hamburger} onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className={styles.icon} />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className={styles.icon}/>
        )}
      </div>

      <div className={nav ? `${styles.mobilemenu } ${styles.active}` : `${styles.mobilemenu}`}>
        <ul className={styles.mobilenav}>
        <Link href="/signup">
        <li>
                  <button type="button" className={styles.donate}>
                    Sign In
                  </button>
                  </li>
              </Link>

              <Link href="/login">
              <li>
                  <button type="button" className={styles.donate}>
                    Login
                  </button>
                  </li>
              </Link>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about" onClick={handleNav}>
            <li>About</li>
          </Link>
          <Link href="/services" onClick={handleNav}>
            <li>Services</li>
          </Link>

          <Link href="/contact"  onClick={handleNav}>
            <li>Contact</li>
          </Link>
        </ul>

        <div className={styles.mobilemenubottom}>
          <div className={styles.socialicons }>
          <FaFacebook className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaPinterest className={styles.icon} />
            <FaYoutube className={styles.icon} />
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
 </div>

  );
}





export default Navbar;
