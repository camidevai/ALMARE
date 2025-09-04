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
import { Heart, CreditCard, Shield, CheckCircle } from 'lucide-react';

const donationSchema = z.object({
  amount: z.number().min(5, 'Mínimo €5').max(10000, 'Máximo €10,000'),
  name: z.string().min(2, 'Nombre requerido'),
  email: z.string().email('Email inválido'),
  message: z.string().optional(),
});

type DonationFormData = z.infer<typeof donationSchema>;

export default function Donations() {
  const { t } = useTranslation(['donations', 'common']);

  useEffect(() => {
    Analytics.pageView('/donations', t('donations:hero.title'));
  }, [t]);

  const seo = generatePageSEO({
    title: t('donations:hero.title'),
    description: t('donations:hero.subtitle'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: { amount: 25 },
  });

  const selectedAmount = watch('amount');

  const presetAmounts = [10, 25, 50, 100];

  const onSubmit = async (data: DonationFormData) => {
    try {
      // Simulate donation processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      Analytics.donation(data.amount);
      alert(`¡Gracias por tu donación de €${data.amount}!`);
    } catch (error) {
      console.error('Error processing donation:', error);
    }
  };

  const impactAreas = [
    {
      title: 'Educación',
      description: 'Becas escolares y materiales educativos',
      amount: '€25',
      impact: 'Ayuda a un niño por un mes',
    },
    {
      title: 'Salud',
      description: 'Atención médica básica y medicamentos',
      amount: '€50',
      impact: 'Tratamiento médico completo',
    },
    {
      title: 'Alimentación',
      description: 'Comidas nutritivas para familias vulnerables',
      amount: '€100',
      impact: 'Alimenta a una familia por una semana',
    },
  ];

  return (
    <>
      <SEOHead seo={seo} />
      
      <HeroSection
        title={t('donations:hero.title')}
        subtitle={t('donations:hero.subtitle')}
        backgroundImage="https://subir-imagen.com/images/2025/09/04/download67c4166f06f8b5f8.jpg"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <Card>
                <div className="flex items-center space-x-2 mb-6">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Hacer una Donación</h3>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Cantidad
                    </label>
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setValue('amount', amount)}
                          className={`p-3 border rounded-lg text-center font-medium transition-colors ${
                            selectedAmount === amount
                              ? 'border-blue-600 bg-blue-50 text-blue-600'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          €{amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                      <input
                        {...register('amount', { valueAsNumber: true })}
                        type="number"
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Cantidad personalizada"
                      />
                    </div>
                    {errors.amount && (
                      <p className="text-red-600 text-sm mt-1">{errors.amount.message}</p>
                    )}
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('common:name')}
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Comparte por qué quieres apoyar nuestra causa..."
                    />
                  </div>

                  {/* Security Notice */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                      <div className="text-sm text-gray-600">
                        <p className="font-medium text-gray-900 mb-1">Donación Segura</p>
                        <p>Tus datos están protegidos con cifrado SSL y no almacenamos información de tarjetas.</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Procesando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4" />
                        <span>Donar €{selectedAmount}</span>
                      </div>
                    )}
                  </button>
                </form>
              </Card>
            </div>

            {/* Impact Information */}
            <div className="space-y-8">
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tu Impacto</h3>
                <div className="space-y-4">
                  {impactAreas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                      <div className="bg-green-100 rounded-full p-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-gray-900">{area.title}</h4>
                          <span className="text-blue-600 font-bold">{area.amount}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{area.description}</p>
                        <p className="text-xs text-green-600 font-medium">{area.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">¿Por qué donar?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>85% de tu donación va directamente a programas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Transparencia total en el uso de fondos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Impacto medible y verificable</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Certificado de donación para deducciones fiscales</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}