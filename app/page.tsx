"use client";

import {
  FaJava,
  FaPython,
  FaAndroid,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowUp,
} from "react-icons/fa6";
import {
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import {
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiMysql,
  SiAndroidstudio,
  SiXampp, 
  SiFastapi,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import { TbBrandCpp, TbLetterC } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { SiXml } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { TbFileTypeXml } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";


import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const TechItem = ({ icon, title }: any) => (
  <div
    className="
      flex items-center gap-4
      rounded-2xl
      bg-white/[0.05]
      hover:bg-white/[0.08]
      border border-white/5
      hover:border-cyan-400/20
      p-4
      transition-all duration-300
    "
  >
    <div
      className="
        w-12 h-12
        rounded-xl
        bg-white/10
        flex items-center justify-center
        text-2xl
      "
    >
      {icon}
    </div>

    <span className="font-semibold text-gray-200">
      {title}
    </span>
  </div>
);




export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050816] text-white">
      <Navbar />

<section
  id="home"
  className="
      relative
    flex
    min-h-screen
    items-start
    lg:items-center
    px-6
    py-20
    md:px-12
    lg:px-32
    
  "
      >
        {/* Background Glow */}
        <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
              Welcome to my portfolio
            </p>

           <h1 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
              MD. FAHIM
              <br />
              ABDULLAH
            </h1>

            <div className="mt-8">
              <p className="mb-4 text-lg text-slate-400">
                Computer Science & Engineering Graduate
              </p>

             <div className="min-h-[70px] text-xl font-bold sm:text-2xl lg:text-3xl">
                <span
                  className="
                    inline-block
                    bg-gradient-to-r
                    from-cyan-400
                    via-sky-400
                    to-violet-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  <TypeAnimation
                    sequence={[
                      "Android Developer",
                      2000,
                      "AI & Machine Learning Enthusiast",
                      2000,
                      "Problem Solver",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-full text-base leading-relaxed text-slate-400 sm:text-lg lg:max-w-xl">
              Passionate about Android development,
              machine learning, and software engineering.
              I enjoy transforming ideas into practical,
              user-focused solutions that create real impact.
            </p>

           <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-violet-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
                "
              >
                View Projects
              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-slate-700
                  px-6
                  py-3
                  transition-all
                  duration-300
                  hover:border-cyan-500
                  hover:bg-slate-800
                "
              >
                Resume
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">

              {/* Glow Behind Photo */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -inset-8
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500/20
                  to-violet-500/20
                  blur-3xl
                "
              />

              {/* Outer Ring */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute
    -inset-2 lg:-inset-4
    rounded-full
    border
    border-cyan-400/30
  "
/>

{/* Inner Ring */}
<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 28,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute
    -inset-4 lg:-inset-8
    rounded-full
    border
    border-violet-400/20
  "
/>

{/* Glow Dot */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute -inset-8"
>
  <div
    className="
      absolute
      left-1/2
      top-0
      h-3
      w-3
      -translate-x-1/2
      rounded-full
      bg-cyan-400
      shadow-[0_0_20px_#22d3ee]
    "
  />
</motion.div>

              {/* Profile Image */}
              <div
  className="
    relative
    h-[240px]
    w-[240px]
    overflow-hidden
    rounded-full
    border-4
    border-slate-800
    bg-slate-900
    shadow-[0_0_60px_rgba(56,189,248,0.2)]
    sm:h-[300px]
    sm:w-[300px]
    lg:h-[340px]
    lg:w-[340px]
  "
>
                <img
                  src="/profile.png"
                  alt="Md. Fahim Abdullah"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

            </div>
          </motion.div>

        </div>
      </section>

<section
  id="about"
  className="px-6
    py-20
    md:px-12
    lg:px-32"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
      About Me
    </p>

    <h2 className="mb-12 text-3xl font-bold md:text-4xl lg:text-5xl">
      Who Am I?
    </h2>

    <div className="grid gap-10 lg:grid-cols-2">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-lg leading-8 text-slate-400">
          Computer Science & Engineering graduate passionate about
          Android development, Artificial Intelligence and Machine
          Learning. I enjoy building practical software solutions
          that solve real-world problems and create meaningful impact.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          My interests include mobile application development,
          deep learning, computer vision, research, and software
          engineering.
        </p>

        {/* Quick Info */}
        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">
              250+
            </h3>
            <p className="mt-1 text-slate-400">
              Problems Solved
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
            <h3 className="text-3xl font-bold text-violet-400">
              10+
            </h3>
            <p className="mt-1 text-slate-400">
              Projects Completed
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
            <h3 className="text-3xl font-bold text-green-400">
              AI and ML
            </h3>
            <p className="mt-1 text-slate-400">
              Research Interest
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
  <h3 className="text-3xl font-bold text-orange-400">
    6+
  </h3>
  <p className="mt-1 text-slate-400">
    Certifications
  </p>
</div>

          

        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-white/[0.03]
          p-8
          backdrop-blur-sm
        "
      >
        <h3 className="mb-6 text-2xl font-bold">
          Core Expertise
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="skill-pill">Android Development</span>
          <span className="skill-pill">Java</span>
          <span className="skill-pill">Firebase</span>
          <span className="skill-pill">Machine Learning</span>
          <span className="skill-pill">Deep Learning</span>
          <span className="skill-pill">TensorFlow</span>
          <span className="skill-pill">FastAPI</span>
          <span className="skill-pill">Computer Vision</span>
          <span className="skill-pill">Python</span>
          <span className="skill-pill">SQL</span>
          <span className="skill-pill">Git</span>
          <span className="skill-pill">Research</span>

        </div>

        <div className="mt-8 rounded-2xl bg-cyan-500/5 p-6 border border-cyan-500/10">
          <p className="text-slate-300 leading-8">
            Currently focused on Android applications,
            AI-powered systems, machine learning research,
            and intelligent solutions for real-world problems.
          </p>
        </div>

      </motion.div>

    </div>

  </div>
</section>



<section
  id="projects"
  className="px-6
    py-20
    md:px-12
    lg:px-32"
>
  <div className="max-w-7xl">

    <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
      Projects
    </p>

    <h2 className="mb-6 text-5xl font-bold">
      Featured Work
    </h2>

    <p className="mb-16 max-w-3xl text-xl leading-9 text-slate-400">
      A selection of projects showcasing my experience in Android
      development, machine learning, artificial intelligence,
      and software engineering.
    </p>

    <div className="grid gap-8 lg:grid-cols-3">

      {/* PROJECT 1 */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/40
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-500/40
        "
      >
        <div className="bg-gradient-to-br from-slate-200 to-slate-300 p-5">
  <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-lg">
    <img
      src="/riceleaf.png"
      alt="Rice Leaf Disease Detection"
      className="w-full object-contain"
    />
  </div>
</div>

        <div className="flex flex-col p-6">

          <h3 className="mb-4 text-xl font-bold">
            Rice Leaf Disease Detection
          </h3>

          <p className="mb-5 text-slate-400 leading-8">
            Android application for rice leaf disease detection using
            Deep Learning Stacking Ensemble and an AI-powered
            farming assistant.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              Android
            </span>
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              Java
            </span>
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              TensorFlow
            </span>
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              FastAPI
            </span>
          </div>

          <div className="mt-auto flex gap-3">
            <a
  href="https://github.com/abdullah6163/Rice_Leaf_Disease_Detection"
  className="
    flex items-center gap-2
    rounded-xl
    border
    border-slate-700
    px-4
    py-2
    text-sm
    transition-all
    hover:border-cyan-400
    hover:text-cyan-400
  "
>
  Repository
  <FaGithub size={16} />
</a>

            <a
              href="https://drive.google.com/file/d/1whEtZ5b6Qe6O-R4pmtrYwI12jhyXomyz/view?usp=drive_link"
              className="
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-violet-500
                px-4
                py-2
                text-sm
                font-semibold
              "
            >
              APK
            </a>
          </div>

        </div>
      </div>

      {/* PROJECT 2 */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/40
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-500/40
        "
      >
        <div className="bg-gradient-to-br from-slate-200 to-slate-300 p-5">
  <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-lg">
    <img
      src="/cricket.png"
      alt="CricketScoreCard"
      className="w-full object-contain"
    />
  </div>
</div>

        <div className="flex flex-col p-6">

          <h3 className="mb-4 text-xl font-bold">
            CricketScoreCard
          </h3>

          <p className="mb-5 text-slate-400 leading-8">
            Professional cricket scoring application featuring
            live scoring, detailed scorecards, player statistics,
            match reports, and PDF export.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              Android
            </span>
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              Java
            </span>
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              Material UI
            </span>
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              PDF Export
            </span>
          </div>

          <div className="mt-auto flex gap-3">
            <a
  href="https://github.com/abdullah6163/CricketScoreCard"
  className="
    flex items-center gap-2
    rounded-xl
    border
    border-slate-700
    px-4
    py-2
    text-sm
    transition-all
    hover:border-cyan-400
    hover:text-cyan-400
  "
>
  Repository
  <FaGithub size={16} />
</a>

            <a
              href="https://drive.google.com/file/d/1g0AhZgcsV_To3Bw2htHgf_5Oi8uHbCVQ/view?usp=drive_link"
              className="
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-violet-500
                px-4
                py-2
                text-sm
                font-semibold
              "
            >
              APK
            </a>
          </div>

        </div>
      </div>

      {/* PROJECT 3 */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/40
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-500/40
        "
      >
        <div className="bg-gradient-to-br from-slate-200 to-slate-300 p-5">
  <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-lg">
    <img
      src="/riceleaf.png"
      alt="PawMart"
      className="w-full object-contain"
    />
  </div>
</div>

        <div className="flex flex-col p-6">

          <h3 className="mb-4 text-xl font-bold">
            PawMart
          </h3>

          <p className="mb-5 text-slate-400 leading-8">
            Pet e-commerce Android application with Firebase
            authentication, Firestore integration, shopping cart,
            wishlist, and Google Maps.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              Android
            </span>
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              Java
            </span>
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              Firebase
            </span>
            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
              Google Maps
            </span>
          </div>

          <div className="mt-auto flex gap-3">
            <a
  href="https://github.com/abdullah6163/PawMart"
  className="
    flex items-center gap-2
    rounded-xl
    border
    border-slate-700
    px-4
    py-2
    text-sm
    transition-all
    hover:border-cyan-400
    hover:text-cyan-400
  "
>
  Repository
  <FaGithub size={16} />
</a>

            <a
              href="https://drive.google.com/file/d/1UdfzZI3oeHC4hHPIYlCu1DyTzArS1ELE/view?usp=drive_link"
              className="
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-violet-500
                px-4
                py-2
                text-sm
                font-semibold
              "
            >
              APK
            </a>
          </div>

        </div>
      </div>

    </div>

    <div className="mt-14 text-center">
      <a
        href="/projects"
        className="
          inline-flex
          items-center
          rounded-xl
          border
          border-cyan-500/40
          px-8
          py-3
          text-cyan-400
          transition-all
          duration-300
          hover:bg-cyan-500/10
        "
      >
        View All Projects →
      </a>
    </div>

  </div>
</section>

<section
  id="skills"
  className="px-6
    py-20
    md:px-12
    lg:px-32"
>
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
      TECH STACK
    </span>

    <h2 className="mt-4 text-5xl font-bold text-white">
      Technologies I Use
    </h2>

    <p className="mt-6 max-w-4xl text-lg text-gray-400 leading-relaxed">
      Throughout Android development, machine learning projects,
      academic coursework, and software engineering practice,
      I have worked with a diverse set of technologies and tools.
    </p>

    {/* Cards */}
    <div className="grid gap-8 mt-14 lg:grid-cols-3">

      {/* Mobile Development */}
      <div className="rounded-3xl border border-green-500/20 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-green-400/40 hover:-translate-y-2 transition-all duration-300">

        <h3 className="flex items-center gap-3 text-2xl font-bold text-green-400 mb-8">
          📱 Mobile Development
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <TechItem
            icon={<FaAndroid className="text-green-500" />}
            title="Android"
          />

          <TechItem
            icon={<FaJava className="text-orange-500" />}
            title="Java"
          />

          <TechItem
            icon={<SiFirebase className="text-yellow-500" />}
            title="Firebase"
          />

          <TechItem
            icon={<SiAndroidstudio className="text-green-400" />}
            title="Android Studio"
          />

          <TechItem
            icon={<SiXml className="text-sky-400" />}
            title="XML UI"
          />

          <TechItem
  icon={<MdDesignServices className="text-purple-400" />}
  title="Material Design"
/>

        </div>
      </div>

      {/* AI & ML */}
      <div className="rounded-3xl border border-purple-500/20 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300">

        <h3 className="flex items-center gap-3 text-2xl font-bold text-purple-400 mb-8">
          🤖 AI & Machine Learning
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <TechItem
            icon={<SiTensorflow className="text-orange-500" />}
            title="TensorFlow"
          />

          <TechItem
            icon={<SiPytorch className="text-red-500" />}
            title="PyTorch"
          />

          <TechItem
            icon={<SiOpencv className="text-purple-500" />}
            title="OpenCV"
          />

          <TechItem
            icon={<SiScikitlearn className="text-orange-400" />}
            title="Scikit-Learn"
          />

          <TechItem
            icon={<SiFastapi className="text-teal-400" />}
            title="FastAPI"
          />

          <TechItem
            icon={<FaPython className="text-yellow-400" />}
            title="Python"
          />

        </div>
      </div>

      {/* Programming & Tools */}
      <div className="rounded-3xl border border-orange-500/20 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-orange-400/40 hover:-translate-y-2 transition-all duration-300">

        <h3 className="flex items-center gap-3 text-2xl font-bold text-orange-400 mb-8">
          🛠 Programming & Tools
        </h3>

        <div className="grid grid-cols-2 gap-4">

  

          <TechItem
            icon={<SiCplusplus className="text-blue-500" />}
            title="C++"
          />

          <TechItem
            icon={<SiMysql className="text-sky-400" />}
            title="SQL"
          />

          <TechItem
            icon={<FaGitAlt className="text-orange-600" />}
            title="Git"
          />

          <TechItem
            icon={<FaGithub className="text-white" />}
            title="GitHub"
          />

          <TechItem
            icon={<FaCode className="text-sky-400" />}
            title="VS Code"
          />

          <TechItem
            icon={<SiXampp className="text-orange-500" />}
            title="XAMPP"
          />

        </div>
      </div>

    </div>
  </div>
</section>






<section
  id="education"
  className="px-6
    py-20
    md:px-12
    lg:px-32"
>
  <div className="max-w-7xl">

    <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
      Education
    </p>

    <h2 className="text-5xl font-black">
      Academic Journey
    </h2>

    <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-400">
      My academic background reflects a consistent commitment to
      excellence, from school to university, while building strong
      foundations in computer science, software engineering, and
      artificial intelligence.
    </p>

    <div className="mt-14 grid gap-8 lg:grid-cols-3">

      {/* University */}
      <div
        className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-slate-900/40
          p-8
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-cyan-400/50
          hover:-translate-y-1
        "
      >
        <div className="mb-5 text-4xl">🎓</div>

        <h3 className="text-2xl font-bold">
          B.Sc. in Computer Science & Engineering
        </h3>

        <p className="mt-3 text-cyan-400 font-medium">
          Daffodil International University
        </p>

        <p className="mt-2 text-slate-400">
          2022 – 2026
        </p>

        <div
          className="
            mt-6
            inline-block
            rounded-full
            bg-cyan-500/10
            px-4
            py-2
            text-cyan-300
            font-semibold
          "
        >
          CGPA: 3.93 / 4.00
        </div>
      </div>

      {/* HSC */}
      <div
        className="
          rounded-3xl
          border
          border-violet-500/20
          bg-slate-900/40
          p-8
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-violet-400/50
          hover:-translate-y-1
        "
      >
        <div className="mb-5 text-4xl">📘</div>

        <h3 className="text-2xl font-bold">
          Higher Secondary Certificate
        </h3>

        <p className="mt-3 text-violet-400 font-medium">
          Dhaka City College
        </p>

        <p className="mt-2 text-slate-400">
          Passed in 2020
        </p>

        <div
          className="
            mt-6
            inline-block
            rounded-full
            bg-violet-500/10
            px-4
            py-2
            text-violet-300
            font-semibold
          "
        >
          GPA: 5.00 / 5.00
        </div>
      </div>

      {/* SSC */}
      <div
        className="
          rounded-3xl
          border
          border-emerald-500/20
          bg-slate-900/40
          p-8
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-emerald-400/50
          hover:-translate-y-1
        "
      >
        <div className="mb-5 text-4xl">🏫</div>

        <h3 className="text-2xl font-bold">
          Secondary School Certificate
        </h3>

        <p className="mt-3 text-emerald-400 font-medium">
          Savar Cantonment Board Boys High School
        </p>

        <p className="mt-2 text-slate-400">
          Passed in 2018
        </p>

        <div
          className="
            mt-6
            inline-block
            rounded-full
            bg-emerald-500/10
            px-4
            py-2
            text-emerald-300
            font-semibold
          "
        >
          GPA: 5.00 / 5.00
        </div>
      </div>

    </div>
  </div>
</section>





<section id="certifications" className="px-6
    py-20
    md:px-12
    lg:px-32">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-16">
      <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
        Certifications
      </p>

      <h2 className="text-5xl font-bold mb-6">
        Achievements & Certifications
      </h2>

      <p className="text-slate-400 text-xl max-w-3xl leading-9">
        A collection of competitions, hackathons and certifications
        that highlight my passion for problem solving, artificial
        intelligence, machine learning and software development.
      </p>
    </div>

    {/* Cards */}
    <div className="grid lg:grid-cols-3 gap-8">

      {/* ICPC */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border border-slate-800
          bg-slate-900/40
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-500/40
        "
      >
        {/* Fixed Image Area */}
        <div className="h-72 bg-slate-300 p-5 flex items-center justify-center">
          <img
            src="/icpc.png"
            alt="ICPC"
            className="max-h-full max-w-full object-contain rounded-xl"
          />
        </div>

        <div className="p-8 h-[260px] flex flex-col">
          <h3 className="text-2xl font-bold mb-4">
            ICPC Preliminary Contest
          </h3>

          <p className="text-slate-400 leading-8 mb-6">
            Honorable Mention in the ICPC Online Preliminary Contest
            representing Daffodil International University.
          </p>

          <div className="mt-auto">
            <span className="rounded-lg bg-cyan-500/10 px-4 py-2 text-cyan-400">
              2024
            </span>
          </div>
        </div>
      </div>

      {/* SOLVIO */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border border-slate-800
          bg-slate-900/40
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-violet-500/40
        "
      >
        <div className="h-72 bg-slate-300 p-5 flex items-center justify-center">
          <img
            src="/solvio.png"
            alt="SOLVIO"
            className="max-h-full max-w-full object-contain rounded-xl"
          />
        </div>

        <div className="p-8 h-[260px] flex flex-col">
          <h3 className="text-2xl font-bold mb-4">
            SOLVIO AI Hackathon
          </h3>

          <p className="text-slate-400 leading-8 mb-6">
            Successfully qualified for Round 2 in the national
            SOLVIO AI Hackathon 2025 organized by Sheba Platform.
          </p>

          <div className="mt-auto">
            <span className="rounded-lg bg-violet-500/10 px-4 py-2 text-violet-400">
              2025
            </span>
          </div>
        </div>
      </div>

      {/* NDAC */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border border-slate-800
          bg-slate-900/40
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-emerald-500/40
        "
      >
        <div className="h-72 bg-slate-300 p-5 flex items-center justify-center">
          <img
            src="/DataVisionary.jpg"
            alt="NDAC"
            className="max-h-full max-w-full object-contain rounded-xl"
          />
        </div>

        <div className="p-8 h-[260px] flex flex-col">
          <h3 className="text-2xl font-bold mb-4">
            Data Visionary Competition
          </h3>

          <p className="text-slate-400 leading-8 mb-6">
            Certificate of Appreciation for participation in the
            National Data Analytics Competition (NDAC 2025).
          </p>

          <div className="mt-auto">
            <span className="rounded-lg bg-emerald-500/10 px-4 py-2 text-emerald-400">
              2025
            </span>
          </div>
        </div>
      </div>

    </div>

    {/* Button */}
    <div className="mt-16 flex justify-center">
      <button
        className="
          px-10 py-4
          rounded-2xl
          border border-cyan-500/40
          text-cyan-400
          hover:bg-cyan-500/10
          transition
        "
      >
        View All Certifications →
      </button>
    </div>

  </div>
</section>







<section
  id="contact"
  className="px-6
    py-20
    md:px-12
    lg:px-32"
>
  <div className="max-w-7xl">

    {/* Heading */}
    <div className="mb-14">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
        Contact
      </p>

      <h2 className="text-5xl font-bold text-white">
        Let's Connect
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-400">
        I'm always interested in discussing Android development,
        machine learning projects, research opportunities,
        internships, and software engineering roles.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-8 lg:grid-cols-2">

      {/* Left Card */}
      <div
        className="
          rounded-3xl
          border border-slate-800
          bg-slate-900/40
          p-8
          backdrop-blur-sm
        "
      >
        <h3 className="mb-8 text-3xl font-bold text-white">
          Contact Details
        </h3>

        <div className="space-y-7">

          <div className="flex items-start gap-4">
            <FaEnvelope className="mt-1 text-cyan-400 text-xl" />
            <div>
              <p className="text-sm text-cyan-400 uppercase tracking-wider">
                Email
              </p>
              <p className="text-slate-300">
                abdullah15-6163@s.diu.edu.bd
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhone className="mt-1 text-cyan-400 text-xl" />
            <div>
              <p className="text-sm text-cyan-400 uppercase tracking-wider">
                Phone
              </p>
              <p className="text-slate-300">
                +8801783667070
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLocationDot className="mt-1 text-cyan-400 text-xl" />
            <div>
              <p className="text-sm text-cyan-400 uppercase tracking-wider">
                Location
              </p>
              <p className="text-slate-300">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

        </div>

        {/* Social Icons */}
        <div className="mt-10 flex gap-5">

          <a
            href="https://github.com/abdullah6163"
            target="_blank"
            rel="noreferrer"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl bg-slate-800
              text-xl text-slate-300
              transition-all
              hover:bg-cyan-500 hover:text-white
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mdfahimabdullah6163/"
            target="_blank"
            rel="noreferrer"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl bg-slate-800
              text-xl text-slate-300
              transition-all
              hover:bg-cyan-500 hover:text-white
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/mohammadfahim.abdullah/"
            target="_blank"
            rel="noreferrer"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl bg-slate-800
              text-xl text-slate-300
              transition-all
              hover:bg-cyan-500 hover:text-white
            "
          >
            <FaFacebook />
          </a>

        </div>
      </div>

      {/* Right Card */}
      <div
        className="
          rounded-3xl
          border border-slate-800
          bg-slate-900/40
          p-8
          backdrop-blur-sm
        "
      >
        <h3 className="text-3xl font-bold text-white">
          Send a Message
        </h3>

        <p className="mt-3 mb-8 text-slate-400">
          Have an internship opportunity, project idea,
          or research collaboration? Feel free to reach out.
        </p>

        <form className="space-y-5">

          <div className="grid gap-5 md:grid-cols-2">

            <input
              type="text"
              placeholder="Your Name"
              className="
                rounded-xl
                border border-slate-800
                bg-slate-950
                px-5 py-4
                text-white
                outline-none
                focus:border-cyan-400
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                rounded-xl
                border border-slate-800
                bg-slate-950
                px-5 py-4
                text-white
                outline-none
                focus:border-cyan-400
              "
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            className="
              w-full rounded-xl
              border border-slate-800
              bg-slate-950
              px-5 py-4
              text-white
              outline-none
              focus:border-cyan-400
            "
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="
              w-full rounded-xl
              border border-slate-800
              bg-slate-950
              px-5 py-4
              text-white
              outline-none
              focus:border-cyan-400
            "
          />

          <button
            type="submit"
            className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              px-8 py-4
              font-semibold
              text-white
              transition
              hover:scale-105
            "
          >
            Send Message
          </button>

        </form>
      </div>

    </div>
  </div>
</section>

<footer
  className="
    border-t border-slate-800
    bg-slate-950/70
    backdrop-blur-sm
  "
>
  <div
    className="
      mx-auto
      flex
      max-w-7xl
      flex-col
      items-center
      justify-between
      gap-6
      px-20
      py-8
      lg:flex-row
      lg:px-32
    "
  >
    <p className="text-slate-400">
      © 2026 Md. Fahim Abdullah. All rights reserved.
    </p>

    <div className="flex items-center gap-6">

      <a
        href="https://github.com/abdullah6163"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 transition hover:text-cyan-400"
      >
        <FaGithub size={22} />
      </a>

      <a
        href="https://www.linkedin.com/in/mdfahimabdullah6163/"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 transition hover:text-cyan-400"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href="https://www.facebook.com/mohammadfahim.abdullah/"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 transition hover:text-cyan-400"
      >
        <FaFacebook size={22} />
      </a>

      <a
        href="#home"
        className="
          ml-3 flex items-center gap-2
          text-slate-400
          transition hover:text-cyan-400
        "
      >
        <FaArrowUp />
        <span>Back to top</span>
      </a>

    </div>
  </div>
</footer>


    </main>
  );
}