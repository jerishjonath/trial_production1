import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero/index";
import Pricing from "@/components/Pricing/index";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Commingsoon from "@/components/commingsoon/commingsoon";
import { Metadata } from "next";





export const metadata: Metadata = {
  title: "NOOBIKID | DIGITAL",
  description: "",
   
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Pricing type={undefined} />
      <Hero />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Commingsoon/>
      
     {/* <Features />  */}
      {/* <Video /> */}
      {/* <Brands /> */}

      {/* <Testimonials /> */}
      {/* <Blog /> */}
      {/* <Contact />  */}
    </>
  );
}
