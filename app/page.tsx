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
} from "react-icons/si";

import { TbBrandCpp, TbLetterC } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { SiXml } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";



import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";




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
    items-center
    px-16
    pt-24
    lg:px-32
    lg:pt-16
  "
      >
        {/* Background Glow */}
        <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
              Welcome to my portfolio
            </p>

            <h1 className="text-5xl font-black leading-none md:text-5xl">
              MD. FAHIM
              <br />
              ABDULLAH
            </h1>

            <div className="mt-8">
              <p className="mb-4 text-lg text-slate-400">
                Computer Science & Engineering Graduate
              </p>

              <div className="min-h-[90px] text-2xl font-bold md:text-3xl">
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

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400">
              Passionate about Android development,
              machine learning, and software engineering.
              I enjoy transforming ideas into practical,
              user-focused solutions that create real impact.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
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
    -inset-4
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
    -inset-8
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
                  h-[340px]
                  w-[340px]
                  overflow-hidden
                  rounded-full
                  border-4
                  border-slate-800
                  bg-slate-900
                  shadow-[0_0_60px_rgba(56,189,248,0.2)]
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
  className="px-16 py-24 lg:px-32"
>
  <div className="w-full">

    {/* SECTION TITLE */}
    <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
      About Me
    </p>

    <h2 className="mb-16 text-4xl font-bold md:text-5xl">
      Who Am I?
    </h2>

    {/* TOP PART */}
    <div className="grid gap-12 lg:grid-cols-2">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-lg leading-9 text-slate-400">
          I am a Computer Science & Engineering graduate with a strong
          passion for software development, Android applications,
          artificial intelligence, and machine learning.
          I enjoy building technology that is practical,
          impactful, and capable of solving real-world problems.
        </p>

        <p className="mt-6 text-lg leading-9 text-slate-400">
          Throughout my academic journey, I have worked on projects
          involving Android development, machine learning,
          deep learning, and database-driven applications.
          These experiences have strengthened both my technical
          foundation and my ability to transform ideas into
          working solutions.
        </p>

        <p className="mt-6 text-lg leading-9 text-slate-400">
          Beyond development, I enjoy problem solving,
          research, continuous learning, and exploring emerging
          technologies. I strive to create software that combines
          functionality, efficiency, and a great user experience.
        </p>
      </motion.div>

      {/* RIGHT */}
      <div className="space-y-6">

        {/* Android */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            rounded-2xl
            border
            border-green-500/20
            bg-white/5
            p-6
            backdrop-blur-xl
            transition-all
          "
        >
          <h3 className="mb-2 text-xl font-bold text-green-400">
            📱 Android Development
          </h3>

          <p className="text-slate-400">
            Developing Android applications using Java,
            Firebase, SQL, and modern mobile development
            practices.
          </p>
        </motion.div>

        {/* AI */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            rounded-2xl
            border
            border-violet-500/20
            bg-white/5
            p-6
            backdrop-blur-xl
            transition-all
          "
        >
          <h3 className="mb-2 text-xl font-bold text-violet-400">
            🤖 AI & Machine Learning
          </h3>

          <p className="text-slate-400">
            Exploring machine learning and deep learning
            through research, experimentation, and
            intelligent software solutions.
          </p>
        </motion.div>

        {/* Problem Solving */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            rounded-2xl
            border
            border-cyan-500/20
            bg-white/5
            p-6
            backdrop-blur-xl
            transition-all
          "
        >
          <h3 className="mb-2 text-xl font-bold text-cyan-400">
            💡 Problem Solving
          </h3>

          <p className="text-slate-400">
            Applying analytical thinking, algorithms,
            and software engineering principles to
            solve practical challenges.
          </p>
        </motion.div>

      </div>
    </div>

{/* TECHNOLOGIES */}
<div className="mt-24">

  <h3 className="text-3xl font-bold">
    Technologies I Use
  </h3>

  <p className="mt-4 max-w-3xl text-slate-400 leading-8">
    Throughout Android development, machine learning projects,
    academic coursework, and software engineering practice,
    I have worked with a diverse set of technologies and tools.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

    {/* Programming Languages */}
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 0 25px rgba(34,211,238,0.10)",
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-500/30
      "
    >
      <h4 className="mb-5 text-xl font-semibold text-cyan-400">
        Programming Languages
      </h4>

      <div className="flex flex-wrap gap-8">

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <span className="text-3xl font-bold text-blue-300">C</span>
          </div>
          <span>C</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <TbBrandCpp className="text-3xl text-blue-500" />
          </div>
          <span>C++</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <FaJava className="text-3xl text-orange-400" />
          </div>
          <span>Java</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <FaPython className="text-3xl text-yellow-400" />
          </div>
          <span>Python</span>
        </div>

      </div>
    </motion.div>

    {/* Mobile Development */}
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 0 25px rgba(34,197,94,0.10)",
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-green-500/30
      "
    >
      <h4 className="mb-5 text-xl font-semibold text-green-400">
        Mobile Development
      </h4>

      <div className="flex flex-wrap gap-8">

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <SiAndroidstudio className="text-3xl text-green-500" />
          </div>
          <span>Android Studio</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <FaAndroid className="text-3xl text-green-400" />
          </div>
          <span>Android</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <SiFirebase className="text-3xl text-orange-500" />
          </div>
          <span>Firebase</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <SiXml className="text-3xl text-sky-400" />
          </div>
          <span>XML UI</span>
        </div>

      </div>
    </motion.div>

    {/* AI & Machine Learning */}
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 0 25px rgba(168,85,247,0.10)",
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-violet-500/30
      "
    >
      <h4 className="mb-5 text-xl font-semibold text-violet-400">
        AI & Machine Learning
      </h4>

      <div className="flex flex-wrap gap-8">

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <SiTensorflow className="text-3xl text-orange-500" />
          </div>
          <span>TensorFlow</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <SiPytorch className="text-3xl text-red-500" />
          </div>
          <span>PyTorch</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <SiOpencv className="text-3xl text-purple-400" />
          </div>
          <span>OpenCV</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <SiScikitlearn className="text-3xl text-orange-400" />
          </div>
          <span>Scikit-Learn</span>
        </div>

      </div>
    </motion.div>

    {/* Database & Tools */}
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 0 25px rgba(249,115,22,0.10)",
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-orange-500/30
      "
    >
      <h4 className="mb-5 text-xl font-semibold text-orange-400">
        Database & Tools
      </h4>

      <div className="flex flex-wrap gap-6">

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <SiMysql className="text-3xl text-sky-400" />
          </div>
          <span>SQL</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <FaGitAlt className="text-3xl text-red-400" />
          </div>
          <span>Git</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <FaGithub className="text-3xl text-white" />
          </div>
          <span>GitHub</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <VscCode className="text-3xl text-blue-400" />
          </div>
          <span>VS Code</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/5 p-2">
            <SiXampp className="text-3xl text-orange-500" />
          </div>
          <span>XAMPP</span>
        </div>

      </div>
    </motion.div>

  </div>

</div>

  </div>
</section>



<section
  id="projects"
  className="px-16 py-24 lg:px-32"
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
        <div className="h-48 overflow-hidden bg-slate-800">
          <img
            src="/projects/riceleaf.png"
            alt="Rice Leaf Disease Detection"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex h-[340px] flex-col p-6">

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
              href="#"
              className="
                rounded-xl
                border
                border-slate-700
                px-4
                py-2
                text-sm
                transition
                hover:border-cyan-400
              "
            >
              Repository
            </a>

            <a
              href="#"
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
        <div className="h-48 overflow-hidden bg-slate-800">
          <img
            src="/projects/cricket.png"
            alt="CricketScoreCard"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex h-[340px] flex-col p-6">

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
              href="#"
              className="
                rounded-xl
                border
                border-slate-700
                px-4
                py-2
                text-sm
                transition
                hover:border-cyan-400
              "
            >
              Repository
            </a>

            <a
              href="#"
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
        <div className="h-48 overflow-hidden bg-slate-800">
          <img
            src="/projects/pawmart.png"
            alt="PawMart"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex h-[340px] flex-col p-6">

          <h3 className="mb-4 text-xl font-bold">
            PawMart
          </h3>

          <p className="mb-5 text-slate-400 leading-8">
            Pet e-commerce Android application with Firebase
            authentication, Firestore integration, shopping cart,
            wishlist, and Google Maps support.
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
              href="#"
              className="
                rounded-xl
                border
                border-slate-700
                px-4
                py-2
                text-sm
                transition
                hover:border-cyan-400
              "
            >
              Repository
            </a>

            <a
              href="#"
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
  id="education"
  className="px-16 py-20 lg:px-32"
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

<section
  id="contact"
  className="relative px-20 pt-24 pb-20 lg:px-32"
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