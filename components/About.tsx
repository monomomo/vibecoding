import { resumeData } from '@/data/resume';

export default function About() {
  const { about } = resumeData;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          关于我
        </h2>
        
        <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-10 md:p-14 shadow-lg">
          <div className="prose prose-lg max-w-none">
            {about.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}