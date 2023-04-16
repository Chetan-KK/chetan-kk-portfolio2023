import React from "react";
import "./About.css";
import boyIcon from "/iconsImg/boy.png";

function About() {
  return (
    <div className="About">
      <div className="main-title">
        <img src={boyIcon} alt="" className="imgIcon boyIcon" />
        About Me
      </div>
      <div className="heading">
        <b>here are some things about me...</b>
      </div>
      <div className="about-info" id="about">
        <p>
          Hello everyone, my name is Chetan and I'm an experienced front-end
          developer with a specialization in THREE JS development and motion
          design for the web. With around three years of experience in web
          development, I have gained extensive knowledge of several programming
          languages and tools, including JavaScript, React, GSAP, Vite.js,
          Node.js, Express.js, Tailwind, Chart.js, and version control tools
          like Git and GitHub. I also possess proficiency in several designing
          softwares such as Photoshop, Adobe XD, Figma, Blender, Illustrator,
          Canva, Lightroom, and Spline.
        </p>
        <p>
          In my career as a front-end developer, I have used several
          technologies and tools to create interactive, visually-appealing, and
          engaging user experiences for websites and applications. I have worked
          with HTML5, CSS3, SASS, JavaScript, React, THREE JS, GSAP, Chart.js,
          Bootstrap, Tailwind, WordPress, Vite, Node.js, Express.js, and Axios.
          These are some of my favorite working tools that have helped me create
          outstanding web experiences for clients.
        </p>
        <p>
          I'm proficient in using VSCODE, Git, Photoshop, Adobe XD, Figma,
          Blender, Illustrator, Canva, Lightroom, and Spline. These tools have
          helped me create stunning designs, and the knowledge of these tools
          has enabled me to create unique and innovative web experiences.
        </p>
        <p>
          Apart from my specialization in THREE JS development and motion
          design, I have also worked with other technologies such as Java and
          Python. I believe that my proficiency in these languages and tools has
          helped me create efficient and robust web experiences that cater to
          the needs of my clients.
        </p>
        <p>
          Overall, I'm passionate about web development, and I believe that my
          expertise in the latest web technologies and tools combined with my
          designing skills has helped me create engaging and interactive web
          experiences that leave a lasting impression on users. I'm currently
          pursuing my Bachelor's of Engineering in ADYPU, Pune, and I'm looking
          forward to exploring new technologies and tools in the field of web
          development to create innovative web experiences that meet the needs
          of my clients.
        </p>
      </div>
    </div>
  );
}

export default About;
