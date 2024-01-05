import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import InfiniteTextAnimation from "../InfiniteTextAnimation/InfiniteTextAnimation";
import ReactTyped from "react-typed";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Government <br />
              Approved 
              <br /> Contractor
            </motion.h1>
            
          </div>
          <div className="flexColStart secondaryText flexhero-des">
          <ReactTyped
          strings={["Contact us to build your next dream project",
         "From societies"," community hall"," personal house", "renovation work... "]}
          typeSpeed={30}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
          </div>
          
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
              ₹ <CountUp start={300} end={410} duration={4} /> Lakh<span>+ </span>
              </span>
              <span className="secondaryText">Last year turn over</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={25} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Years of Experience</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={40} duration={4}/> <span>+</span>
              </span>
              <span className="secondaryText">&nbsp; &nbsp;Projects Completed </span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
          
          <img src="./hero.png" alt="houses" />
        
          {/* <source src="./animated.mp4" type="video/mp4"></source> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
