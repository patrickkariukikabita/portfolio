"use client"; 
import Image from "next/image";
import { motion } from "framer-motion";
import { IconCloudSkills } from "./skills-cloud";
import { Contact } from "./contact";


export default function Founder(){
    return(
    <div className="absolute  md:-translate-y-6 flex flex-col w-full h-96 md:h-88 top-5">
        <motion.div 
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full grid grid-cols-1 md:grid-cols-3 h-88 md:h-80 mt-12 md:mt-4  ">

            {/* founder contacts */}
            <motion.div 
            initial={{ opacity: 0, width: "10%" }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
             className=" order-3 md:order-1 col-span-1 flex flex-col h-full justify-center items-center mt-12 md:mt-4 ">
           <div className="text-base sm:text-xl md:text-2xl lg:text-2xl font-bold text-center text-sky-500"> Hire Me</div>
           <div className="flex justify-center items-center w-full h-88">  <Contact/></div>
            </motion.div>

            {/* founder image */}
            <motion.div 
              initial={{ opacity: 0.2,scale:0.5 }}
              whileInView={{ opacity: 1,scale:1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className=" h-96 order-1 md:order-2 col-span-1 flex justify-center items-center ">
             <Image src={`/founder.png`}
            alt="founder"
            height={100}
            width={200}
            />
            </motion.div>

            {/* founder skills */}
            <motion.div 
            initial={{ opacity: 0.5, width: "20%" }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="  order-2 md:order-3 col-span-1 flex flex-col h-full justify-center items-center mt-12 md:mt-4">
             <div className="text-base sm:text-xl md:text-2xl lg:text-2xl font-bold text-center text-sky-500"> My Skills</div>
           <div className="flex justify-center items-center w-full h-88">  
           <IconCloudSkills/>
           </div>
             </motion.div>
            
        </motion.div>
        </div>
    )
}