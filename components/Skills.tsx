import { resumeData } from '@/data/resume';

export default function Skills() {
  const { skillCategories } = resumeData;

  const getLevelColor = (level: string) => {
    switch (level) {
      case '精通':
        return 'bg-gradient-to-r from-orange-500 to-rose-500 text-white';
      case '熟练':
        return 'bg-gradient-to-r from-amber-400 to-orange-400 text-white';
      case '了解':
        return 'bg-gradient-to-r from-yellow-300 to-amber-300 text-gray-800';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          技能专长
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-orange-200">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          skill.level === '精通' 
                            ? 'bg-gradient-to-r from-orange-500 to-rose-500 w-full' 
                            : skill.level === '熟练'
                            ? 'bg-gradient-to-r from-amber-400 to-orange-400 w-4/5'
                            : 'bg-gradient-to-r from-yellow-300 to-amber-300 w-3/5'
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