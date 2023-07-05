// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Typewriter from "typewriter-effect";

// const Hero = () => {
//   return (
//     <section className="text-gray-600 body-font bg-gray-100">
//       <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//             I am
//             <br className="hidden lg:inline-block" />
//             <Typewriter
//               options={{
//                 strings: [
//                   "Web Developer",
//                   "UI/UX Designer",
//                   "Geophysicist",
//                   "GIS Analyst",
//                 ],
//                 autoStart: true,
//                 loop: true,
//               }}
//             />
//           </h1>
//           <div className="w-[100px] h-[2px] bg-blue-700"></div>
//           <p className="mb-8 leading-relaxed">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum soluta
//             quod dolore sint fuga vitae architecto quibusdam omnis minima nisi
//             assumenda dolores id repudiandae ea necessitatibus illo laboriosam,
//             aliquid corporis.
//           </p>
//           <div className="flex justify-center">
//             <Link href={"#Contact"}>
//               <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
//                 Contact
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//           <Image
//             className="object-cover object-center rounded mx-auto w-[15rem]"
//             alt="hero"
//             width={500}
//             height={500}
//             src={require("../../../public/assets/picture/ruchi.jpg")}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-3/5">
      <section className="text-gray-600 body-font h-3/5 bg-gray-100">
        <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center mb-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">
              <span className="text-3xl pb-2">Hi,</span>
              <br />
              <span className="text-3xl pb-2 mb-1">I'm Ruchi</span>
              <br className="hidden lg:inline-block " />
              <Typewriter
                options={{
                  strings: ["Mern Stack Developer", "UI Designer", "Coder"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700 "></div>
            <p className="mb-8 mt-5 leading-relaxed">
              This is my official portfolio website to show my skills and
              Projects.I have a strong foundation in front-end & back-end
              development and am skilled in creating user-friendly and
              responsive web applications using React and its ecosystem.
              {/* I'm
              working on a variety of projects,including building and
              maintaining single page applications, integrating with REST APIs,
              and implementing responsive design principles. */}
              {/* I am also
              proficient in using tools such as Webpack, npm, and Git for
              development and deployment. */}
            </p>
            {/* <p>
              I am able to work effectively with cross-functional teams and am
              comfortable taking on new challenges and learning new technologies
              as needed.
            </p> */}
            <div className="flex justify-center ">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Hire me
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <Image
              className="object-cover object-center rounded mx-auto w-[18rem]"
              alt="hero"
              src={require("../../../public/assets/picture/ruchi.jpg")}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-start">
          <div className="ml-10 mr-10 mb-10">
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-5">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILLS ON
            </h2>
            <div className="flex gap-5">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiNextdotjs />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <SiFigma />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
