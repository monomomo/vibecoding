'use client';

import { resumeData } from '@/data/resume';
import { usePDF } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

export default function Hero() {
  const { personalInfo, contact } = resumeData;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center text-white text-6xl md:text-7xl font-bold shadow-lg">
              {personalInfo.name.charAt(0)}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-orange-600 font-medium mb-4">
                {personalInfo.title}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {personalInfo.tagline}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={`mailto:${contact.email}`}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  联系我
                </a>
                <PDFDownloadLink
                  document={<ResumePDF />}
                  fileName={`${personalInfo.name}_简历.pdf`}
                  className="px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-all duration-200"
                >
                  {({ loading }) => (loading ? '生成中...' : '下载简历')}
                </PDFDownloadLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}