import { resumeData } from '@/data/resume';

export default function Experience() {
  const { experiences } = resumeData;

  return (
    <section id="experience" className="py-16 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 tracking-tight">
          工作经历
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded p-6 md:p-8 border border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                  <p className="text-gray-600 mt-1">{exp.position}</p>
                </div>
                <p className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</p>
              </div>
              
              <ul className="space-y-2 text-sm text-gray-600">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}