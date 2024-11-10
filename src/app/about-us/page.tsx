
import Image from "next/image";
import profileImage from "@/public/profileImage.jpg"

export default function About (){
    return(
       <div>
       
        <section className="about">
          <div className="about-img">
            <Image
            src={profileImage}
            alt="about-img"
            />
          </div>
          <div className="about-text">
        <h2>About <span>Me</span></h2>
          <h4>Web Developer!</h4>
          <p>"As a driven and detail-oriented front-end developer, i excel in crafting responsive,
            scalable, and maintainable web applications. With a strong foundation in HTML, CSS and 
            Typescript, I deliver innovative solutions that combine functionality and aesthetics. I'm 
            passionate about staying update with industry trends and best practices, continuously enhancing 
            My Skills. Collaborative, curious,and creative, I thrive in dynamic environments, fostering meaningful 
            connections and driving project success through dedication and expertise".
          </p>
        </div>
        </section>



       </div>
    )
}