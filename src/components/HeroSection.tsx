import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  size?: 'default' | 'large';
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  size = 'default'
}: HeroSectionProps) {
  const sizeClasses = size === 'large' ? 'py-24 lg:py-32' : 'py-16 lg:py-20';

  return (
    <section 
      className={`relative ${sizeClasses} bg-gradient-to-br from-blue-600 to-blue-800`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}