import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Webia. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="webia fb"/>
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="webia insta"/>
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="webia twitter"/>
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="webia youtube"/>
        </div>
    </div>
  )
}
export default Footer