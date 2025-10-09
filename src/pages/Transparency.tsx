import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { DollarSign, Download, TrendingUp, CheckCircle, Target, Heart, Users } from 'lucide-react';

export default function Transparency() {
  const { t } = useTranslation(['transparency', 'common']);

  useEffect(() => {
    Analytics.pageView('/transparency', t('transparency:hero.title'));
  }, [t]);

  const seo = generatePageSEO({
    title: t('transparency:hero.title'),
    description: t('transparency:hero.subtitle'),
  });

  const financialData = [
    {
      icon: DollarSign,
      label: t('transparency:financials.totalDonations'),
      value: '$0 USD',
      change: 'Iniciando',
    },
    {
      icon: Target,
      label: t('transparency:financials.targetGoal'),
      value: 'Aproximadamente $140,000 USD',
      change: 'Meta inicial',
    },
    {
      icon: TrendingUp,
      label: t('transparency:financials.programExpenses'),
      value: '0%',
      change: 'Inicial',
    },
    {
      icon: CheckCircle,
      label: t('transparency:financials.adminCosts'),
      value: '0%',
      change: 'Inicial',
    },
  ];

  const projects = [
    {
      name: 'Talleres de Bienestar Emocional',
      status: 'inDevelopment',
      progress: 0,
    },
    {
      name: 'Programa de Apoyo Psicológico Grupal',
      status: 'planned',
      progress: 0,
    },
    {
      name: 'Seminarios de Concientización en Salud Mental',
      status: 'inDevelopment',
      progress: 0,
    },
    {
      name: 'Almare TEA 360°',
      status: 'planned',
      progress: 0,
    },
    {
      name: 'Almare Educa',
      status: 'planned',
      progress: 0,
    },
    {
      name: 'Almare Laboral',
      status: 'planned',
      progress: 0,
    },
    {
      name: 'Almare Rural Conecta',
      status: 'planned',
      progress: 0,
    },
    {
      name: 'Almare Inclusión',
      status: 'planned',
      progress: 0,
    },
    {
      name: 'Almare Primera Infancia',
      status: 'planned',
      progress: 0,
    },
    {
      name: 'Almare Adulto Mayor',
      status: 'planned',
      progress: 0,
    },
    {
      name: 'Almare Resiliencia',
      status: 'planned',
      progress: 0,
    },
    {
      name: 'Almare Comunidad Segura',
      status: 'planned',
      progress: 0,
    },
  ];

  return (
    <>
      <SEOHead seo={seo} />
      
      <HeroSection
        title={t('transparency:hero.title')}
        subtitle={t('transparency:hero.subtitle')}
        backgroundImage="https://subir-imagen.com/images/2025/09/04/download30275424eb7ff8f1.jpg"
      />

      {/* Commitment to Transparency */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('transparency:commitment.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('transparency:commitment.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('transparency:currentStatus.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('transparency:currentStatus.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('transparency:financials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {financialData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index}>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                    <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                    <div className="text-xs text-green-600">{item.change}</div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              {t('transparency:financials.downloadReport')}
            </button>
          </div>
        </div>
      </section>

      {/* Programs in Development */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('transparency:projects.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('transparency:projects.description')}
            </p>
          </div>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.status === 'inDevelopment'
                          ? 'bg-blue-100 text-blue-800'
                          : project.status === 'planned'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {project.status === 'inDevelopment'
                          ? t('transparency:projects.inDevelopment')
                          : project.status === 'planned'
                          ? t('transparency:projects.planned')
                          : t('transparency:projects.completed')
                        }
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Desarrollo</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
