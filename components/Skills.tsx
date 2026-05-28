import { resumeData } from '@/data/resume';

export default function Skills() {
  const { skillCategories } = resumeData;

  const getLevelColor = (level: string) => {
    switch (level) {
      case '精通':
        return 'bg-gray-900 text-white';
      case '熟练':
        return 'bg-gray-600 text-white';
      case '了解':
        return 'bg-gray-200 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section id="skills" className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 tracking-tight">
          技能专长
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded p-6 border border-gray-200"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-5 pb-3 border-b border-gray-200">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className={`text-xs px-2 py-1 rounded font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          skill.level === '精通' 
                            ? 'bg-gray-900' 
                            : skill.level === '熟练'
                            ? 'bg-gray-600'
                            : 'bg-gray-400'
                        }`}
                        style={{ width: skill.level === '精通' ? '100%' : skill.level === '熟练' ? '80%' : '60%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}