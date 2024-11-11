export default function Education() {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
        {/* Skills Section */}
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8">
            My <span className="text-yellow-600">Skills</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Coding Skills Column */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
                Coding Skills
              </h3>
              
              <div className="space-y-9">
                {/* Skill Bar for each skill */}
                {[
                  { name: 'HTML', level: '90%' },
                  { name: 'CSS', level: '80%' },
                  { name: 'TypeScript', level: '75%' },
                  { name: 'Next.js', level: '85%' },
                ].map((skill) => (
                  <div key={skill.name} className="w-full">
                    <h3 className="flex justify-between text-gray-900 font-medium">
                      {skill.name} <span>{skill.level}</span>
                    </h3>
                    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden mt-1">
                      <div
                        className={`h-full bg-yellow-600`}
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Professional Skills Column */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
                Professional Skills
              </h3>
              
              <div className="space-y-4">
                {/* Skill Bar for each skill */}
                {[
                  { name: 'Web Design', level: '80%' },
                  { name: 'Web Development', level: '85%' },
                ].map((skill) => (
                  <div key={skill.name} className="w-full">
                    <h3 className="flex justify-between text-gray-700 font-medium">
                      {skill.name} <span>{skill.level}</span>
                    </h3>
                    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden mt-1">
                      <div
                        className={`h-full bg-yellow-600`}
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
          </div>
        </section>
      </div>
    );
  }
  