import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { GraduationCap, Heart, Building } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation(['services', 'common']);

  useEffect(() => {
    Analytics.pageView('/services', t('services:hero.title'));
  }, [t]);

  const seo = generatePageSEO({
    title: t('services:hero.title'),
    description: t('services:hero.subtitle'),
  });

  const programs = [
    {
      icon: GraduationCap,
      title: t('services:programs.education.title'),
      description: t('services:programs.education.description'),
      image: 'https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg',
    },
    {
      icon: Heart,
      title: t('services:programs.health.title'),
      description: t('services:programs.health.description'),
      image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg',
    },
    {
      icon: Building,
      title: t('services:programs.development.title'),
      description: t('services:programs.development.description'),
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',
    },
  ];

  return (
    <>
      <SEOHead seo={seo} />
      
      <HeroSection
        title={t('services:hero.title')}
        subtitle={t('services:hero.subtitle')}
        backgroundImage="https://subir-imagen.com/images/2025/09/04/download1fc9cc694c46ca51.jpg"
      />

      {/* Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const isReversed = index % 2 === 1;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isReversed ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={isReversed ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-100 rounded-lg p-2">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {program.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {t('services:programs.participate')} →
                    </Link>
                  </div>
                  <div className={isReversed ? 'lg:col-start-1' : ''}>
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('services:cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('services:cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              {t('services:cta.volunteer')}
            </Link>
            <Link
              to="/donations"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('services:cta.donate')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}