import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';

export default function Blog() {
  const { t } = useTranslation(['blog', 'common']);
  const [selectedCategory, setSelectedCategory] = useState(t('blog:categories.all'));

  useEffect(() => {
    Analytics.pageView('/blog', t('blog:hero.title'));
  }, [t]);

  const seo = generatePageSEO({
    title: t('blog:hero.title'),
    description: t('blog:hero.subtitle'),
  });

  const posts = [
    {
      slug: 'programa-bienestar-mental-2025',
      title: 'Nuevo programa de bienestar mental comunitario 2025',
      excerpt: 'Lanzamos nuestro programa integral de bienestar mental que incluye talleres, terapias grupales y apoyo psicológico para toda la familia.',
      publishedAt: '2025-01-05',
      author: 'Dra. Patricia Silva',
      image: 'https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg',
      category: 'Salud',
    },
    {
      slug: 'talleres-mindfulness-comunidad',
      title: 'Talleres de mindfulness transforman vidas en la comunidad',
      excerpt: 'Los talleres de atención plena han ayudado a más de 150 personas a manejar mejor el estrés y la ansiedad en su vida diaria.',
      publishedAt: '2024-12-20',
      author: 'Carlos Mendoza',
      image: 'https://images.pexels.com/photos/6646832/pexels-photo-6646832.jpeg',
      category: 'Salud',
    },
    {
      slug: 'red-apoyo-familiar',
      title: 'Red de apoyo familiar: Fortaleciendo vínculos comunitarios',
      excerpt: 'Creamos una red de apoyo que conecta familias para compartir experiencias y estrategias de cuidado mental.',
      publishedAt: '2024-12-10',
      author: 'Ana Martínez',
      image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg',
      category: 'Comunidad',
    },
    {
      slug: 'informe-impacto-2024',
      title: 'Informe de impacto 2024: Transformando vidas juntos',
      excerpt: 'Nuestro informe anual muestra cómo hemos impactado positivamente la vida de más de 1,200 personas este año.',
      publishedAt: '2024-12-01',
      author: 'María González',
      image: 'https://subir-imagen.com/images/2025/09/04/download30275424eb7ff8f1.jpg',
      category: 'Transparencia',
    },
    {
      slug: 'centro-bienestar-inauguracion',
      title: 'Inauguración del Centro de Bienestar Comunitario',
      excerpt: 'Abrimos las puertas de nuestro nuevo centro que ofrecerá servicios integrales de apoyo psicológico y bienestar.',
      publishedAt: '2024-11-15',
      author: 'Dr. Roberto Flores',
      image: 'https://images.pexels.com/photos/6646860/pexels-photo-6646860.jpeg',
      category: 'Infraestructura',
    },
    {
      slug: 'capacitacion-lideres-comunitarios',
      title: 'Capacitación en liderazgo para el bienestar comunitario',
      excerpt: 'Formamos a 25 líderes comunitarios en técnicas de apoyo emocional y promoción del bienestar mental.',
      publishedAt: '2024-11-01',
      author: 'Sofía Ramírez',
      image: 'https://images.pexels.com/photos/6646848/pexels-photo-6646848.jpeg',
      category: 'Desarrollo',
    },
  ];

  const categories = [
    { key: 'all', label: t('blog:categories.all') },
    { key: 'education', label: t('blog:categories.education') },
    { key: 'health', label: t('blog:categories.health') },
    { key: 'community', label: t('blog:categories.community') },
    { key: 'transparency', label: t('blog:categories.transparency') },
    { key: 'infrastructure', label: t('blog:categories.infrastructure') },
    { key: 'development', label: t('blog:categories.development') },
  ];

  const filteredPosts = selectedCategory === t('blog:categories.all')
    ? posts
    : posts.filter(post => {
        const categoryMap: { [key: string]: string } = {
          'Educación': t('blog:categories.education'),
          'Salud': t('blog:categories.health'),
          'Comunidad': t('blog:categories.community'),
          'Transparencia': t('blog:categories.transparency'),
          'Infraestructura': t('blog:categories.infrastructure'),
          'Desarrollo': t('blog:categories.development'),
        };
        return categoryMap[post.category] === selectedCategory;
      });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEOHead seo={seo} />
      
      <HeroSection
        title={t('blog:hero.title')}
        subtitle={t('blog:hero.subtitle')}
        backgroundImage="https://subir-imagen.com/images/2025/09/04/download.jpg"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.label)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.label
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.slug} hover>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {post.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    {t('common:buttons.learnMore')}
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('blog:empty')}</p>
            </div>
          )}

          {/* External News Section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Noticias Relacionadas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mantente informado sobre temas de bienestar mental y desarrollo comunitario en Chile
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card hover>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Ministerio de Salud - Salud Mental
                  </h3>
                  <p className="text-gray-600">
                    Información oficial sobre programas y políticas de salud mental en Chile
                  </p>
                  <a
                    href="https://www.minsal.cl/salud-mental/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Visitar sitio
                    <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>

              <Card hover>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Fundación Todo Mejora
                  </h3>
                  <p className="text-gray-600">
                    Organización dedicada a la prevención del suicidio y promoción del bienestar mental
                  </p>
                  <a
                    href="https://todomejora.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Visitar sitio
                    <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>

              <Card hover>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    ACHS - Bienestar Mental
                  </h3>
                  <p className="text-gray-600">
                    Recursos y programas de bienestar mental en el ámbito laboral y comunitario
                  </p>
                  <a
                    href="https://www.achs.cl/portal/trabajadores/Paginas/salud-mental.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Visitar sitio
                    <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}