'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { resumeData } from '@/data/resume';
import { useState, useEffect } from 'react';

export default function PDFDownloadButton() {
  const { personalInfo } = resumeData;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <span className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded">
        下载简历
      </span>
    );
  }

  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName={`${personalInfo.name}_简历.pdf`}
      className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
    >
      {({ loading }) => (loading ? '生成中...' : '下载简历')}
    </PDFDownloadLink>
  );
}