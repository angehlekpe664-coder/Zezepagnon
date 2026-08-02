import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export const DoctorProfileCard = ({ doctor }) => {
  return (
    <div className="glass-card glass-card-hover rounded-3xl p-6 md:p-8 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
      <div>
        {/* Doctor Header */}
        <div className="flex items-center space-x-4 mb-5">
          <div className="relative shrink-0">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#059669]/30 shadow-xs"
            />
            <div className="absolute -bottom-1 -right-1 bg-[#059669] text-white p-1 rounded-full border-2 border-white">
              <CheckCircle size={12} />
            </div>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{doctor.name}</h4>
            <p className="text-xs text-[#059669] font-bold">{doctor.role}</p>
            <p className="text-[11px] text-slate-600 font-medium">{doctor.institution} • {doctor.location}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {doctor.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-bold tracking-wider text-emerald-950 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full uppercase">
              {tag}
            </span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xs md:text-sm text-slate-700 italic leading-relaxed mb-4 pl-3 border-l-2 border-[#059669]">
          "{doctor.quote}"
        </blockquote>
      </div>

      <p className="text-[11px] text-slate-600 pt-3 border-t border-slate-100 font-medium">
        {doctor.bio}
      </p>
    </div>
  );
};
