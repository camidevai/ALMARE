import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { Shield, Eye, Lock, FileText, Mail, Calendar, Users, AlertTriangle } from 'lucide-react';

export default function PrivacyPolicy() {
  const { t } = useTranslation(['privacy', 'common']);

  useEffect(() => {
    Analytics.pageView('/privacy-policy', t('privacy:hero.title'));
  }, [t]);

  const seo = generatePageSEO({
    title: t('privacy:hero.title'),
    description: t('privacy:hero.subtitle'),
    keywords: 'políticas de privacidad, protección de datos, Chile, LOPD, información personal',
  });

  const dataTypes = [
    {
      icon: Users,
      title: t('privacy:dataCollection.types.identification.title'),
      description: t('privacy:dataCollection.types.identification.description'),
    },
    {
      icon: FileText,
      title: t('privacy:dataCollection.types.navigation.title'),
      description: t('privacy:dataCollection.types.navigation.description'),
    },
    {
      icon: Mail,
      title: t('privacy:dataCollection.types.communication.title'),
      description: t('privacy:dataCollection.types.communication.description'),
    },
  ];

  const rights = [
    {
      icon: Eye,
      title: t('privacy:rights.access.title'),
      description: t('privacy:rights.access.description'),
    },
    {
      icon: FileText,
      title: t('privacy:rights.rectification.title'),
      description: t('privacy:rights.rectification.description'),
    },
    {
      icon: AlertTriangle,
      title: t('privacy:rights.cancellation.title'),
      description: t('privacy:rights.cancellation.description'),
    },
    {
      icon: Lock,
      title: t('privacy:rights.opposition.title'),
      description: t('privacy:rights.opposition.description'),
    },
  ];

  return (
    <>
      <SEOHead seo={seo} />
      
      <HeroSection
        title={t('privacy:hero.title')}
        subtitle={t('privacy:hero.subtitle')}
        backgroundImage="https://subir-imagen.com/images/2025/09/04/download.jpg"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('privacy:introduction.title')}</h2>
                  <p className="text-gray-600">{t('privacy:introduction.lastUpdated')}</p>
                </div>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy:introduction.content1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy:introduction.content2')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('privacy:dataCollection.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {dataTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} hover>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {type.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('privacy:dataCollection.purposes.title')}</h3>
              <div className="space-y-3 text-gray-700">
                <p>• {t('privacy:dataCollection.purposes.donations')}</p>
                <p>• {t('privacy:dataCollection.purposes.communication')}</p>
                <p>• {t('privacy:dataCollection.purposes.volunteering')}</p>
                <p>• {t('privacy:dataCollection.purposes.transparency')}</p>
                <p>• {t('privacy:dataCollection.purposes.improvement')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-green-100 rounded-lg p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('privacy:security.title')}</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>{t('privacy:security.description')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('privacy:security.measures.encryption')}</li>
                  <li>{t('privacy:security.measures.access')}</li>
                  <li>{t('privacy:security.measures.backup')}</li>
                  <li>{t('privacy:security.measures.audits')}</li>
                  <li>{t('privacy:security.measures.training')}</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('privacy:retention.title')}</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>{t('privacy:retention.description')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('privacy:retention.purposes.fulfillment')}</li>
                  <li>{t('privacy:retention.purposes.legal')}</li>
                  <li>{t('privacy:retention.purposes.disputes')}</li>
                </ul>
                <p className="mt-4">
                  {t('privacy:retention.deletion')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('privacy:rights.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {rights.map((right, index) => {
              const IconComponent = right.icon;
              return (
                <Card key={index} hover>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {right.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {right.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('privacy:rights.exercise.title')}</h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  {t('privacy:rights.exercise.description')}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p><strong>{t('privacy:rights.exercise.email')}</strong></p>
                  <p><strong>{t('privacy:rights.exercise.address')}</strong></p>
                  <p><strong>{t('privacy:rights.exercise.phone')}</strong></p>
                </div>
                <p className="text-sm text-gray-600">
                  {t('privacy:rights.exercise.response')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-orange-100 rounded-lg p-2">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cookies y Tecnologías de Seguimiento</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies Esenciales</h4>
                    <p className="text-sm text-gray-600">Necesarias para el funcionamiento básico del sitio web.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies de Análisis</h4>
                    <p className="text-sm text-gray-600">Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio.</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador.
                </p>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-red-100 rounded-lg p-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Compartir Información con Terceros</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en los siguientes casos:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro sitio web y servicios</li>
                  <li><strong>Obligaciones legales:</strong> Cuando sea requerido por ley o autoridades competentes</li>
                  <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad</li>
                  <li><strong>Consentimiento:</strong> Cuando hayas dado tu consentimiento explícito</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Marco Legal Aplicable</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Esta Política de Privacidad se rige por la legislación chilena vigente, incluyendo:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full w-2 h-2 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ley N° 19.628</h4>
                      <p className="text-sm text-gray-600">Sobre Protección de la Vida Privada</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full w-2 h-2 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ley N° 20.575</h4>
                      <p className="text-sm text-gray-600">Principio de Finalidad en el Tratamiento de Datos Personales</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full w-2 h-2 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ley N° 19.496</h4>
                      <p className="text-sm text-gray-600">Sobre Protección de los Derechos de los Consumidores</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact and Updates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-green-100 rounded-lg p-2">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Contacto y Consultas</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>
                  Si tienes preguntas sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales,
                  no dudes en contactarnos:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Datos de Contacto</h4>
                      <p className="text-sm text-gray-600 mb-1"><strong>Organización:</strong> Almare</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong> privacidad@almare.org</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Teléfono:</strong> +56 2 1234 5678</p>
                      <p className="text-sm text-gray-600"><strong>Dirección:</strong> Santiago, Chile</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Horarios de Atención</h4>
                      <p className="text-sm text-gray-600 mb-1">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-sm text-gray-600 mb-1">Sábados: 9:00 - 13:00</p>
                      <p className="text-sm text-gray-600">Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Modificaciones a esta Política</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>
                  Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento.
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                </p>
                <p>
                  Te notificaremos sobre cambios significativos a través de:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Aviso destacado en nuestro sitio web</li>
                  <li>Correo electrónico (si tienes una cuenta con nosotros)</li>
                  <li>Nuestros canales de comunicación habituales</li>
                </ul>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Recomendación:</strong> Te sugerimos revisar periódicamente esta política para mantenerte
                    informado sobre cómo protegemos tu información.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
