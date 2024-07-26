

"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaWhatsapp, FaPhone, FaUser } from "react-icons/fa";
import { Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn( `z-12 flex size-10 md:size-12 items-center justify-center rounded-full 
        border-2 bg-gray-700 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]`, className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-96 md:h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-10 "
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch 
      justify-between gap-10 text-white">

        <div className="flex flex-row items-center justify-between">
          <a href="https://x.com/PatrickKabita" >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Circle ref={div1Ref} className="bg-black">
                    <Icons.x />
                  </Circle>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Twitter Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>

          <a href="mailto:patrickkariuki13@gmail.com" >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Circle ref={div5Ref} className="bg-red-500">
                    <Icons.gmail />
                  </Circle>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email Patrick</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </div>

        <div className="flex flex-row items-center justify-between">
          <a href="https://linkedin.com/in/patrick-kariuki-kabita" >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Circle ref={div2Ref} className="bg-blue-500">
                    <Icons.linkedin />
                  </Circle>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>

          <a href="#" >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Circle ref={div4Ref} className="size-14 md:size-16 z-50 bg-sky-500 ">
                    <Icons.founder />
                  </Circle>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Patrick Kariuki</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>

          <a href="https://www.facebook.com/profile.php?id=61557358306579" >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Circle ref={div6Ref} className="bg-blue-500">
                    <Icons.facebook />
                  </Circle>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Facebook Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </div>

        <div className="flex flex-row items-center justify-between ">
          <a href="https://wa.me/+254728158858" >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Circle ref={div3Ref} className="bg-green-600">
                    <Icons.whatsapp />
                  </Circle>
                </TooltipTrigger>
                <TooltipContent>
                  <p>WhatsApp Patrick</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
          
          <a href="https://github.com/patrickkariukikabita" >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Circle ref={div7Ref} className="bg-white ">
                    <Icons.github/>
                  </Circle>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  linkedin: () => (
    <FaLinkedin className=" md:size-12 size-6  lg:size-12"/>
  ),
  founder: () => (
    // <Image 
    //   src={'/founder.png'}
    //   height={18}
    //   width={18}
    //   className="size-12"
    //   alt={'founder'}
    // />
    <FaUser className=" md:size-10 size-6  lg:size-12 text-gray-50 z-50"/>
  ),
  x: () => (
    <FaTwitter className=" md:size-10 size-6  lg:size-12 text-white"/>
  ),
  whatsapp: () => (
    <FaWhatsapp className=" md:size-10 size-6  lg:size-12 text-white"/>
  ),
  gmail: () => (
    <Mail className=" md:size-10 size-6  lg:size-12 text-white"/>
  ),
  facebook: () => (
    <FaFacebook className=" md:size-10 size-6  lg:size-12 text-white"/>
  ),
  github: () => (
    <FaGithub className=" md:size-10 size-6  lg:size-12 text-gray-900"/>
  ),
};

