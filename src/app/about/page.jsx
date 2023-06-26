import React from "react";
import styles from './page.module.css';
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Stroytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We ? </h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
                        placeat possimus explicabo adipisci reiciendis
                        error numquam delectus! Est tempora maiores, in suscipit
                        tempore, esse repellendus odit dolore delectus atque nisi! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.<br /> Nostrum quidem,
                        atque recusandae est vero obcaecati iure sequi odit quis at, beatae quam,
                        veniam provident aperiam ex consequatur qui? Accusantium,
                        doloribus.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do ? </h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
                        placeat possimus explicabo adipisci reiciendis
                        error numquam delectus! Est tempora maiores, in suscipit
                        tempore, esse repellendus odit dolore delectus atque nisi! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.<br /><br /> Nostrum quidem,
                        atque recusandae est vero obcaecati iure sequi odit quis at, beatae quam,
                        veniam provident aperiam ex consequatur qui? Accusantium,
                        doloribus.
                    </p>
                    <Button url="contact" text="Contact" />
                </div>
            </div>
        </div>
    );
};

export default About;
