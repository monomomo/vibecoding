import { resumeData } from '@/data/resume';

export default function Experience() {
  const { experiences } = resumeData;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          工作经历
        </h2>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-orange-400 to-rose-400 transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 md:text-right">
                  {index % 2 === 0 ? (
                    <div className="md:pl-8">
                      <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="absolute left-4 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0" />
                        <p className="text-sm text-orange-600 font-medium mb-2">{exp.period}</p>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.company}</h3>
                        <p className="text-lg text-gray-600 mb-4">{exp.position}</p>
                        <ul className="space-y-2 text-gray-600">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-sm flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="md:pr-8">
                      <div className="bg-white border-l-4 border-rose-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="absolute left-4 w-4 h-4 bg-rose-500 rounded-full transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0" />
                        <p className="text-sm text-rose-600 font-medium mb-2">{exp.period}</p>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.company}</h3>
                        <p className="text-lg text-gray-600 mb-4">{exp.position}</p>
                        <ul className="space-y-2 text-gray-600">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-sm flex items-start gap-2">
                              <span className="text-rose-500 mt-1">•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="hidden md:block w-4 h-4 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full absolute left-1/2 transform -translate-x-1/2 mt-6 shadow-lg" />
                
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}