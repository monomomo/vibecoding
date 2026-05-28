'use client';

import { resumeData } from '@/data/resume';
import PDFDownloadButton from './PDFDownloadButton';

export default function Hero() {
  const { personalInfo, contact } = resumeData;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 pt-20 pb-16">
      <div className="max-w-5xl w-full">
        <div className="bg-white border border-gray-200 rounded-lg p-12 md:p-16">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gray-900 flex items-center justify-center text-white text-5xl md:text-6xl font-bold">
              {personalInfo.name.charAt(0)}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
                {personalInfo.title}
              </p>
              <p className="text-base text-gray-500 mb-8 leading-relaxed">
                {personalInfo.tagline}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={`mailto:${contact.email}`}
                  className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
                >
                  联系我
                </a>
                <PDFDownloadButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}