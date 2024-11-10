export default function Education() {
    return (
       <div>
           {/* Skills Section */}
           <section className="skills" id="skills">
               <h2 className="heading"> My <span>Skills</span></h2>
               <div className="skills-row">
                   
                   {/* Coding Skills Column */}
                   <div className="skills-column">
                       <h3 className="title">Coding Skills</h3>
                       <div className="skill-box">
                           <div className="skills-content">
                               <div className="progress">
                                   <h3>HTML <span>90%</span></h3>
                                   <div className="bar"> <span></span></div>
                               </div>
                               <div className="progress">
                                   <h3>CSS <span>80%</span></h3>
                                   <div className="bar"> <span></span></div>
                               </div>
                               <div className="progress">
                                   <h3>Typescript <span>75%</span></h3>
                                   <div className="bar"> <span></span></div>
                               </div>
                               <div className="progress">
                                   <h3>Next.js <span>85%</span></h3>
                                   <div className="bar"> <span></span></div>
                               </div>
                           </div>
                       </div>
                   </div>

                   {/* Professional Skills Column */}
                   <div className="skills-column">
                       <h3 className="title">Professional Skills</h3>
                       <div className="skill-box">
                           <div className="skills-content">
                               <div className="progress">
                                   <h3>Web Design <span>80%</span></h3>
                                   <div className="bar"> <span></span></div>
                               </div>
                               <div className="progress">
                                   <h3>Web Development <span>85%</span></h3>
                                   <div className="bar"> <span></span></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
               </div>
           </section>
       </div>
    )
}
