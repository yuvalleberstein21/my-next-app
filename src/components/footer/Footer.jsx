import React from "react";
import styles from './footer.module.css';
import Image from "next/image";

const Footer = () => {


  return (
    <div className={styles.container}>
      <div>@2023 NEXTAPP, All right reserved.</div>
      <div className={styles.social}>

        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="NEXT App facebook account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="NEXT App" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="NEXT App" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="NEXT App" />

      </div>
    </div>
  );
};

export default Footer;
