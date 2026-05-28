import { resumeData } from '@/data/resume';

export default function Footer() {
  const { personalInfo, contact } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{personalInfo.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              快速链接
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  关于我
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">
                  工作经历
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                  技能专长
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                  项目展示
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              联系方式
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{contact.email}</p>
              {contact.phone && <p>{contact.phone}</p>}
              {contact.location && <p>{contact.location}</p>}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}