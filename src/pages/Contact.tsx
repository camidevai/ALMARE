import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { Mail, Phone, MapPin, Send, Clock, Users, Heart } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Nombre requerido'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Asunto requerido'),
  message: z.string().min(10, 'Mensaje muy corto'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t } = useTranslation(['contact', 'common']);

  useEffect(() => {
    Analytics.pageView('/contact', t('contact:hero.title'));
  }, [t]);

  const seo = generatePageSEO({
    title: t('contact:hero.title'),
    description: t('contact:hero.subtitle'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      Analytics.contactForm(data.subject);
      alert('¡Mensaje enviado correctamente! Te responderemos pronto.');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@almare.org',
      description: 'Respuesta en 24 horas',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 123 456 789',
      description: 'Lunes a Viernes, 9:00 - 18:00',
    },
    {
      icon: MapPin,
      title: 'Oficina',
      value: 'Madrid, España',
      description: 'Cita previa necesaria',
    },
  ];

  const volunteerOpportunities = [
    {
      icon: Heart,
      title: 'Voluntariado en terreno',
      description: 'Participa directamente en nuestros proyectos comunitarios',
    },
    {
      icon: Users,
      title: 'Apoyo administrativo',
      description: 'Ayuda con tareas de organización y gestión desde casa',
    },
    {
      icon: Clock,
      title: 'Eventos especiales',
      description: 'Colabora en nuestros eventos de recaudación y difusión',
    },
  ];

  return (
    <>
      <SEOHead seo={seo} />
      
      <HeroSection
        title={t('contact:hero.title')}
        subtitle={t('contact:hero.subtitle')}
        backgroundImage="https://subir-imagen.com/images/2025/09/04/download.jpg"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('common:name')}
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('common:email')}
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="¿En qué te podemos ayudar?"
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('common:message')}
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cuéntanos más detalles sobre tu consulta o interés..."
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>{t('common:buttons.send')}</span>
                    </div>
                  )}
                </button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Información de contacto</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-blue-100 rounded-lg p-2">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{info.title}</h4>
                          <p className="text-gray-900 font-medium">{info.value}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Oportunidades de voluntariado</h3>
                <div className="space-y-4">
                  {volunteerOpportunities.map((opportunity, index) => {
                    const IconComponent = opportunity.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="bg-green-100 rounded-full p-2">
                          <IconComponent className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{opportunity.title}</h4>
                          <p className="text-sm text-gray-600">{opportunity.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    ¿Interesado en ser voluntario? Incluye "Voluntariado" en el asunto de tu mensaje.
                  </p>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Horarios de atención</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="font-medium">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span className="font-medium text-red-600">Cerrado</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Preguntas frecuentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Cómo puedo ser voluntario?
                </h4>
                <p className="text-gray-600">
                  Envíanos un mensaje con el asunto "Voluntariado" y te contactaremos para explicarte las oportunidades disponibles y el proceso de inscripción.
                </p>
              </Card>
              
              <Card>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Las donaciones son deducibles de impuestos?
                </h4>
                <p className="text-gray-600">
                  Sí, somos una organización registrada. Te proporcionaremos un certificado de donación para tus deducciones fiscales.
                </p>
              </Card>
              
              <Card>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo visitar los proyectos?
                </h4>
                <p className="text-gray-600">
                  Organizamos visitas guiadas a nuestros proyectos para donantes y voluntarios. Contáctanos para coordinar una visita.
                </p>
              </Card>
              
              <Card>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Cómo garantizan la transparencia?
                </h4>
                <p className="text-gray-600">
                  Publicamos informes anuales detallados y mantenemos una política de puertas abiertas. Visita nuestra sección de transparencia para más información.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}