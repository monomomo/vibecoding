import { resumeData } from '@/data/resume';

export default function About() {
  const { about } = resumeData;

  return (
    <section id="about" className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 tracking-tight">
          关于我
        </h2>
        
        <div className="bg-gray-50 rounded p-8 md:p-10">
          <div className="prose prose-base max-w-none">
            {about.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}