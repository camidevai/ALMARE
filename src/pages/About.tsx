import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { Heart, Shield, HandHeart, Target, Users, Eye, Lightbulb, Brain } from 'lucide-react';

export default function About() {
  const { t } = useTranslation(['about', 'common']);

  useEffect(() => {
    Analytics.pageView('/about', t('about:hero.title'));
  }, [t]);

  const seo = generatePageSEO({
    title: t('about:hero.title'),
    description: t('about:hero.subtitle'),
  });

  const values = [
    {
      icon: Heart,
      title: t('about:values.empathy.title'),
      description: t('about:values.empathy.description'),
    },
    {
      icon: Shield,
      title: t('about:values.respect.title'),
      description: t('about:values.respect.description'),
    },
    {
      icon: HandHeart,
      title: t('about:values.accompaniment.title'),
      description: t('about:values.accompaniment.description'),
    },
    {
      icon: Target,
      title: t('about:values.commitment.title'),
      description: t('about:values.commitment.description'),
    },
    {
      icon: Users,
      title: t('about:values.inclusion.title'),
      description: t('about:values.inclusion.description'),
    },
    {
      icon: Eye,
      title: t('about:values.transparency.title'),
      description: t('about:values.transparency.description'),
    },
    {
      icon: Lightbulb,
      title: t('about:values.hope.title'),
      description: t('about:values.hope.description'),
    },
    {
      icon: Brain,
      title: t('about:values.awareness.title'),
      description: t('about:values.awareness.description'),
    },
  ];

  const team = [
    {
      name: 'María González',
      role: 'Directora Ejecutiva',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Coordinador de Proyectos',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    },
    {
      name: 'Ana Martínez',
      role: 'Responsable de Comunicación',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    },
  ];

  return (
    <>
      <SEOHead seo={seo} />
      
      <HeroSection
        title={t('about:hero.title')}
        subtitle={t('about:hero.subtitle')}
        backgroundImage="https://subir-imagen.com/images/2025/09/04/download45d1d53f845871c0.jpg"
      />

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('about:story.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about:story.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('about:values.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} hover>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      
    </>
  );
}