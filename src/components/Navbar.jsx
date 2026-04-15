// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   FaBars,
//   FaTimes,
//   FaGithub,
//   FaLinkedin,
//   FaDownload,
// } from "react-icons/fa";

// const navLinks = [
//   { href: "#about", text: "About" },
//   { href: "#skills", text: "Skills" },
//   { href: "#experience", text: "Experiences" },
//   { href: "#projects", text: "Projects" },
//   { href: "#education", text: "Education" },
// ];

// const socialLinks = [
//   {
//     href: "https://github.com/abhi-3000",
//     icon: <FaGithub size={20} />,
//     label: "GitHub",
//   },
//   {
//     href: "http://www.linkedin.com/in/abhishek-mandal-274475271/",
//     icon: <FaLinkedin size={20} />,
//     label: "LinkedIn",
//   },
// ];

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleNav = () => setNav(!nav);

//   const handleLinkClick = (e, href) => {
//     e.preventDefault();
//     setNav(false);

//     if (location.pathname === "/") {
//       const element = document.getElementById(href.replace("#", ""));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       navigate(`/${href}`);
//     }
//   };

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const navbarVariants = {
//     hidden: { y: -100, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { y: -20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   const menuVariants = {
//     hidden: { opacity: 0, clipPath: "circle(0% at 90% 10%)" },
//     visible: { opacity: 1, clipPath: "circle(150% at 90% 10%)", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
//   };

//   const menuExitVariants = {
//     hidden: { opacity: 0, clipPath: "circle(0% at 90% 10%)", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 } },
//   };

//   const mobileLinkContainerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
//   };

//   const mobileLinkVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   return (
//     <>
//       <motion.nav
//         className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl h-16 flex justify-between items-center px-6 z-50 bg-[#0f0f0f]/40 backdrop-blur-[21px] border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
//         variants={navbarVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.a
//           href="/"
//           onClick={(e) => handleLinkClick(e, "#home")}
//           variants={itemVariants}
//           className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 cursor-pointer"
//         >
//           AM
//         </motion.a>

//         <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/70">
//           {navLinks.map((link) => (
//             <motion.li key={link.text} variants={itemVariants}>
//               <a
//                 href={link.href}
//                 onClick={(e) => handleLinkClick(e, link.href)}
//                 className="px-5 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white cursor-pointer"
//               >
//                 {link.text}
//               </a>
//             </motion.li>
//           ))}
//         </ul>

//         <div className="hidden md:flex items-center gap-5">
//           <motion.a
//             href="#contact"
//             onClick={(e) => handleLinkClick(e, "#contact")}
//             variants={itemVariants}
//             className="bg-white text-black text-sm font-semibold rounded-full px-6 py-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
//           >
//             Contact
//           </motion.a>
          
//           <div className="flex items-center gap-4 border-l border-white/10 pl-5">
//             <motion.a
//               href="/resume.pdf"
//               download="Abhishek_Mandal_Resume.pdf"
//               variants={itemVariants}
//               className="text-white/60 hover:text-white transition-colors duration-300"
//             >
//               <FaDownload size={18} />
//             </motion.a>
//             {socialLinks.map((link) => (
//               <motion.a
//                 key={link.href}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 variants={itemVariants}
//                 className="text-white/60 hover:text-white transition-colors duration-300"
//               >
//                 {link.icon}
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         <div
//           onClick={handleNav}
//           className="block md:hidden text-white/80 z-[60] cursor-pointer p-2"
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={nav ? "times" : "bars"}
//               initial={{ opacity: 0, rotate: -90 }}
//               animate={{ opacity: 1, rotate: 0 }}
//               exit={{ opacity: 0, rotate: 90 }}
//               transition={{ duration: 0.3 }}
//             >
//               {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </motion.nav>

//       <AnimatePresence>
//         {nav && (
//           <motion.div
//             className="fixed inset-0 w-full h-screen bg-[#0f0f0f] flex flex-col items-center justify-center z-50 overflow-hidden"
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit={menuExitVariants.hidden}
//           >
//             <div
//               className="absolute inset-0 z-0 transition-all duration-300"
//               style={{
//                 background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.03) 0%, transparent 40%), #0f0f0f`,
//               }}
//             />
//             <div
//               className="absolute inset-0 z-0 opacity-20"
//               style={{
//                 backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
//                 backgroundSize: "40px 40px",
//               }}
//             />

//             <div
//               onClick={handleNav}
//               className="absolute top-8 right-8 text-white/80 z-[60] cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors"
//             >
//               <FaTimes size={28} />
//             </div>

//             <motion.ul
//               className="relative z-10 text-center flex flex-col items-center gap-4"
//               variants={mobileLinkContainerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {navLinks.map((link) => (
//                 <motion.li key={link.text} variants={mobileLinkVariants}>
//                   <a
//                     href={link.href}
//                     onClick={(e) => handleLinkClick(e, link.href)}
//                     className="text-3xl font-medium text-white/70 hover:text-white transition-colors duration-300 py-2 block cursor-pointer"
//                   >
//                     {link.text}
//                   </a>
//                 </motion.li>
//               ))}
              
//               <motion.li variants={mobileLinkVariants} className="mt-8 w-full px-8">
//                 <a
//                   href="#contact"
//                   onClick={(e) => handleLinkClick(e, "#contact")}
//                   className="bg-white text-black font-semibold rounded-full w-full py-4 text-lg block transition-transform active:scale-95 cursor-pointer"
//                 >
//                   Contact Me
//                 </a>
//               </motion.li>
              
//               <motion.li variants={mobileLinkVariants} className="mt-2 w-full px-8">
//                 <a
//                   href="/resume.pdf"
//                   download="Abhishek_Mandal_Resume.pdf"
//                   onClick={() => setNav(false)}
//                   className="btn-primary flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 md:px-9 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-[0_4px_20px_rgba(255,255,255,0.22)] active:scale-95"
//                 >
//                   Resume <FaDownload size={14} />
//                 </a>
//               </motion.li>
              
//               <motion.li variants={mobileLinkVariants} className="mt-8">
//                 <div className="flex items-center justify-center gap-8">
//                   {socialLinks.map((link) => (
//                     <a
//                       key={link.href}
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white/60 hover:text-white transition-colors duration-300"
//                     >
//                       {React.cloneElement(link.icon, { size: 32 })}
//                     </a>
//                   ))}
//                 </div>
//               </motion.li>
//             </motion.ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const navLinks = [
  { href: "#about", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#experience", text: "Experiences" },
  { href: "#projects", text: "Projects" },
  { href: "#education", text: "Education" },
];

const socialLinks = [
  {
    href: "https://github.com/abhi-3000",
    icon: <FaGithub size={20} />,
    label: "GitHub",
  },
  {
    href: "http://www.linkedin.com/in/abhishek-mandal-274475271/",
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = () => setNav(!nav);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setNav(false);

    if (location.pathname === "/") {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${href}`);
    }
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.2, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95, 
      transition: { duration: 0.15, ease: "easeIn" } 
    },
  };

  const mobileLinkContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
  };

  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl h-16 flex justify-between items-center px-6 z-50 bg-[#0f0f0f]/40 backdrop-blur-[21px] border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="/"
          onClick={(e) => handleLinkClick(e, "#home")}
          variants={itemVariants}
          className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 cursor-pointer"
        >
          AM
        </motion.a>

        <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/70">
          {navLinks.map((link) => (
            <motion.li key={link.text} variants={itemVariants}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-5 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white cursor-pointer"
              >
                {link.text}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <motion.a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            variants={itemVariants}
            className="bg-white text-black text-sm font-semibold rounded-full px-6 py-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Contact
          </motion.a>
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-5">
            <motion.a
              href="/resume.pdf"
              download="Abhishek_Mandal_Resume.pdf"
              variants={itemVariants}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <FaDownload size={18} />
            </motion.a>
            {socialLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div
          onClick={handleNav}
          className="block md:hidden text-white/80 z-[60] cursor-pointer p-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={nav ? "times" : "bars"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.nav>

      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleNav}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              className="fixed top-[96px] left-1/2 -translate-x-1/2 w-[92%] max-w-sm bg-[#141414]/95 backdrop-blur-[24px] border border-white/10 rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.6)] z-50 p-6 md:hidden flex flex-col"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.ul
                className="flex flex-col"
                variants={mobileLinkContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.text} variants={mobileLinkVariants}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-base font-medium text-white/70 hover:text-white transition-colors duration-300 py-3.5 border-b border-white/5 block cursor-pointer"
                    >
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div variants={mobileLinkContainerVariants} initial="hidden" animate="visible" className="mt-6 flex flex-col gap-3">
                <motion.a
                  variants={mobileLinkVariants}
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="bg-white text-black font-semibold rounded-full w-full py-3.5 text-sm text-center transition-transform active:scale-95 cursor-pointer"
                >
                  Contact Me
                </motion.a>
                
                <motion.a
                  variants={mobileLinkVariants}
                  href="/resume.pdf"
                  download="Abhishek_Mandal_Resume.pdf"
                  onClick={() => setNav(false)}
                  className="bg-white/5 border border-white/10 text-white font-medium py-3.5 rounded-full w-full text-sm text-center transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <FaDownload size={14} className="opacity-70" />
                  Download Resume
                </motion.a>
              </motion.div>
              
              <motion.div 
                variants={mobileLinkVariants}
                initial="hidden" 
                animate="visible" 
                className="mt-6 pt-5 border-t border-white/5 flex items-center justify-center gap-6"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors duration-300 p-2"
                  >
                    {React.cloneElement(link.icon, { size: 22 })}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;