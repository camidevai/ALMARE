import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('notFound.title')}</h2>
          <p className="text-gray-600">
            {t('notFound.description')}
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            {t('notFound.backHome')}
          </Link>
          
          <div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('notFound.backPrevious')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}