import React, { useState } from 'react';
import { Play, Star, CheckCircle, Quote, X } from 'lucide-react';

export const TestimonialCard = ({ testimonial, onOpenVideo }) => {
  const isVideo = testimonial.type === 'video';

  return (
    <div className="glass-card glass-card-hover rounded-3xl p-6 bg-white/80 border border-white/60 shadow-soft flex flex-col justify-between relative overflow-hidden group">
      <div>
        {/* Top Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl">{testimonial.flag}</span>
            <span className="text-xs font-semibold text-gray-500">{testimonial.country}</span>
          </div>
          <div className="flex text-amber-400">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 stroke-amber-400" />
            ))}
          </div>
        </div>

        {/* Video Thumbnail Trigger if video */}
        {isVideo ? (
          <div 
            onClick={() => onOpenVideo(testimonial.videoUrl)}
            className="relative rounded-2xl overflow-hidden mb-4 cursor-pointer aspect-video bg-gray-900 group-hover:scale-[1.02] transition-transform duration-300 shadow-md"
          >
            <img 
              src={testimonial.poster} 
              alt={testimonial.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity" 
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#0F62FE] text-white flex items-center justify-center shadow-xl shadow-[#0F62FE]/50 group-hover:scale-110 transition-transform">
                <Play size={24} className="fill-white translate-x-0.5" />
              </div>
            </div>
            <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-md">
              Regarder le témoignage vidéo
            </span>
          </div>
        ) : (
          testimonial.image && (
            <div className="flex items-center space-x-3 mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-gray-200" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          )
        )}

        {/* Quote */}
        <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Footer Info */}
      <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
        <span className="font-bold text-gray-900">{testimonial.name}</span>
        {testimonial.verified && (
          <span className="flex items-center space-x-1 text-[#1FA971] text-[11px] font-medium">
            <CheckCircle size={12} />
            <span>Client Vérifié Bénin</span>
          </span>
        )}
      </div>
    </div>
  );
};

export const VideoTestimonialModal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
        >
          <X size={20} />
        </button>
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full max-h-[80vh] object-contain"
        >
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    </div>
  );
};
