import Image from "next/image";
import profileImage from "@/public/profileImage.jpg";

export default function About() {
  return (
    <div>
      <section className="about grid grid-cols-1 md:grid-cols-2 gap-6 md:px-40 px-5 bg-[#262525] mt-0">
        {/* About Image */}
        <div className="about-img max-w-[530px] mx-auto md:ml-40 rounded-lg">
          <Image
            src={profileImage}
            alt="about-img"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* About Text */}
        <div className="about-text md:mr-40 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-5">
            About <span className="text-orange-500">Me</span>
          </h2>
          <h4 className="text-xl md:text-3xl font-semibold text-gray-400 mb-8">
            Web Developer!
          </h4>
          <p className="text-beige text-gray-300 md:text-lg font-serif leading-7 md:leading-8 mb-16">
            As a driven and detail-oriented front-end developer I excel in crafting responsive
            scalable and maintainable web applications. With a strong foundation in HTML CSS and 
            Typescript I deliver innovative solutions that combine functionality and aesthetics I am 
            passionate about staying updated with industry trends and best practices continuously enhancing 
            my skills. Collaborative curious and creative I thrive in dynamic environments fostering meaningful 
            connections and driving project success through dedication and expertise.
          </p>
        </div>
      </section>
    </div>
  );
}
