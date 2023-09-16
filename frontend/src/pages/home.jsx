import React from "react";
import NavigationBar from "../components/common/navbar";
import Crousel from "../components/home/crousel";
import Feedbacks from "../components/home/feedbacks";
import Partners from "../components/home/partners";
import Footer from "../components/footer/footer";
import { motion } from "framer-motion";
import TypeWrite from "../components/home/typeWriter";
import { StyledText, StyledTitle } from "../components/styles/common.style";
import { Gift } from "../components/styles/home.style";
import gift from "../assets/gift.png";
import cartImage from "../assets/cart image.png";

export default function Home() {
  return (
    <>
      <NavigationBar pages={["products"]} currentPage={"home"} />
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "100px",
          }}>
          <div>
            <StyledTitle>Why to Choose Us?</StyledTitle>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}>
              <TypeWrite />
            </motion.div>
          </div>
          <Gift style={{ position: "absolute" }}>
            <motion.div
              initial={{
                y: -210,
              }}
              animate={{
                y: 170,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                stiffness: 800,
              }}>
              <img src={gift} alt="gif" style={{ marginRight: "130px" }} />
            </motion.div>
            <img
              src={cartImage}
              alt="cart"
              style={{
                position: "relative",
                top: "0",
                width: "450px",
                height: "330px",
              }}
            />
          </Gift>
        </div>
        <Crousel />
        <motion.div
          initial={{
            scale: 0.5,
          }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 2.3,
            },
          }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}>
          <StyledText size={"40px"} color={"white"}>
            Alpha Shop: Your trusted online store for quality products at great
            prices. Discover amazing deals and a seamless shopping experience
            with us. Join us for a whole new way to shop!
          </StyledText>
        </motion.div>
        <Partners />

        <Feedbacks />
        <Footer />
      </main>
    </>
  );
}
