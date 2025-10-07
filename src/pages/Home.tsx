import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { Users, BookOpen, Heart, Calendar } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation(['home', 'common']);

  useEffect(() => {
    Analytics.pageView('/', t('home:hero.title'));
  }, [t]);

  const seo = generatePageSEO({
    title: t('home:hero.title'),
    description: t('home:hero.subtitle'),
  });

  const impactStats = [
    { icon: Users, label: t('home:impact.familiesHelped'), value: '2,500+' },
    { icon: Calendar, label: t('home:impact.projectsCompleted'), value: '45' },
    { icon: Heart, label: t('home:impact.volunteersActive'), value: '180' },
    { icon: BookOpen, label: t('home:impact.yearsOfWork'), value: '7' },
  ];

  return (
    <>
      <SEOHead seo={seo} />
      
      <HeroSection
        title={t('home:hero.title')}
        subtitle={t('home:hero.subtitle')}
        ctaText={t('home:hero.cta')}
        ctaLink="/about"
        size="large"
        backgroundImage="https://subir-imagen.com/images/2025/09/04/download.jpg"
      />

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('home:impact.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('home:mission.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('home:mission.description')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {t('common:buttons.learnMore')}
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://subir-imagen.com/images/2025/09/04/download.jpg"
                alt="Community work"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home:actions.donate.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('home:actions.donate.description')}
              </p>
              <Link
                to="/donations"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {t('home:actions.donate.cta')} →
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home:actions.volunteer.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('home:actions.volunteer.description')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {t('home:actions.volunteer.cta')} →
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home:actions.transparency.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('home:actions.transparency.description')}
              </p>
              <Link
                to="/transparency"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {t('home:actions.transparency.cta')} →
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}