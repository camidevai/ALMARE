import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MainLayout() {
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/services', label: t('navigation.services') },
    { href: '/transparency', label: t('navigation.transparency') },
    { href: '/donations', label: t('navigation.donations') },
    { href: '/blog', label: t('navigation.blog') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://subir-imagen.com/images/2025/09/04/bbc49be3-abe6-4e36-acf4-cfebdb870d17.png"
                alt="Almare Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">Almare</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(item.href)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
              >
                <Globe className="h-4 w-4" />
                <span>{i18n.language.toUpperCase()}</span>
              </button>
              <Link
                to="/donations"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {t('buttons.donate')}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
                >
                  <Globe className="h-4 w-4" />
                  <span>{i18n.language.toUpperCase()}</span>
                </button>
                <Link
                  to="/donations"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('buttons.donate')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Mission */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://subir-imagen.com/images/2025/09/04/bbc49be3-abe6-4e36-acf4-cfebdb870d17.png"
                  alt="Almare Logo"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold">Almare</span>
              </div>
              <p className="text-gray-300 mb-4">{t('footer.mission')}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
              <div className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
              <div className="space-y-2 text-gray-300">
                <p>{t('footer.contact.email')}</p>
                <p>{t('footer.contact.phone')}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">{t('footer.copyright')}</p>
              <div className="flex space-x-6">
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('footer.privacyPolicy')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}