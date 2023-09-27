import Image from "next/image";
import { discount, robot,woman } from "../assets";
import GetStarted from "./GetStarted";
import styles from "@/app/style";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col  md:py-0 py-16`}>
      <div className={`flex-1 flex justify-center items-start  flex-col  md:px-6 px-4`}>
        <div className="flex flex-row items-start py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} md:text-lg text-base ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="sm:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[100.8px] leading-[75px] w-full">
          Online Learning Platform.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the cources
          most likely to fit your needs..
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className=" rounded-xl h-[70%]">
        <Image src={woman} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-lg" />

        </div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`sm:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
