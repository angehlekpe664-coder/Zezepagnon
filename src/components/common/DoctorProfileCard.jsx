import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export const DoctorProfileCard = ({ doctor }) => {
  return (
    <div className="glass-card glass-card-hover rounded-3xl p-6 md:p-8 bg-white/80 border border-white/60 shadow-soft flex flex-col justify-between">
      <div>
        {/* Doctor Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#0F62FE]/30 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 bg-[#1FA971] text-white p-1 rounded-full border-2 border-white">
              <CheckCircle size={12} />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 leading-snug">{doctor.name}</h4>
            <p className="text-xs text-[#0F62FE] font-medium">{doctor.role}</p>
            <p className="text-[11px] text-gray-400">{doctor.institution} • {doctor.location}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {doctor.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-bold tracking-wider text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full uppercase">
              {tag}
            </span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xs md:text-sm text-gray-600 italic leading-relaxed mb-4 pl-3 border-l-2 border-[#0F62FE]">
          "{doctor.quote}"
        </blockquote>
      </div>

      <p className="text-[11px] text-gray-400 pt-3 border-t border-gray-100">
        {doctor.bio}
      </p>
    </div>
  );
};
