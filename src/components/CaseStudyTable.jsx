import React from 'react';
import SectionHeading from './SectionHeading';

const CaseStudyTable = ({ number, title, description, tableData }) => {
  return (
    <div className="relative w-full py-6">
      <div className="mb-8">
        <SectionHeading title={title}/>
        {description && (
          <p className="text-white/70 text-base md:text-lg leading-relaxed">{description}</p>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-white/20">
              {tableData.headers.map((header, i) => (
                <th key={i} className="py-5 pr-6 font-bold text-white text-sm md:text-base">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className={`py-5 pr-6 text-sm md:text-base ${cellIndex === 0 ? 'font-bold text-white' : 'text-white/70'} ${cellIndex === row.length - 1 && title.includes("Matrix") ? 'font-bold text-white' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CaseStudyTable;