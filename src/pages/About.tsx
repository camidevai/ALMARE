import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { Eye, Target, Users, Leaf } from 'lucide-react';

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
      icon: Eye,
      title: t('about:values.transparency'),
      description: 'Mantenemos total transparencia en el uso de recursos y resultados.',
    },
    {
      icon: Target,
      title: t('about:values.impact'),
      description: 'Nos enfocamos en generar cambios reales y medibles en las comunidades.',
    },
    {
      icon: Users,
      title: t('about:values.community'),
      description: 'Trabajamos con y para las comunidades, respetando su cultura y necesidades.',
    },
    {
      icon: Leaf,
      title: t('about:values.sustainability'),
      description: 'Buscamos soluciones sostenibles que perduren en el tiempo.',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('about:team.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover>
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}