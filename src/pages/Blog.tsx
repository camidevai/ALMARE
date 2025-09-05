import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { Calendar, User, ArrowRight } from 'lucide-react';

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
      slug: 'nueva-escuela-san-miguel',
      title: 'Nueva escuela en San Miguel: Un sueño hecho realidad',
      excerpt: 'Después de 8 meses de trabajo, inauguramos la nueva escuela que beneficiará a más de 200 niños en la comunidad de San Miguel.',
      publishedAt: '2024-12-15',
      author: 'María González',
      image: 'https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg',
      category: 'Educación',
    },
    {
      slug: 'programa-nutricional-resultados',
      title: 'Resultados del programa nutricional infantil',
      excerpt: 'Los resultados de nuestro programa nutricional muestran una mejora significativa en el estado de salud de los niños participantes.',
      publishedAt: '2024-12-01',
      author: 'Dr. Carlos Rodríguez',
      image: 'https://images.pexels.com/photos/6646832/pexels-photo-6646832.jpeg',
      category: 'Salud',
    },
    {
      slug: 'voluntarios-construccion-centro-salud',
      title: 'Voluntarios internacionales se unen a la construcción del centro de salud',
      excerpt: 'Un grupo de 15 voluntarios de diferentes países llegó para apoyar la construcción de nuestro nuevo centro de salud comunitario.',
      publishedAt: '2024-11-20',
      author: 'Ana Martínez',
      image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg',
      category: 'Comunidad',
    },
    {
      slug: 'informe-transparencia-2024',
      title: 'Informe de transparencia 2024: Nuestros logros y desafíos',
      excerpt: 'Publicamos nuestro informe anual de transparencia donde detallamos todos nuestros proyectos, finanzas y el impacto generado.',
      publishedAt: '2024-11-10',
      author: 'María González',
      image: 'https://subir-imagen.com/images/2025/09/04/download30275424eb7ff8f1.jpg',
      category: 'Transparencia',
    },
    {
      slug: 'agua-potable-comunidad-rural',
      title: 'Proyecto de agua potable lleva esperanza a comunidad rural',
      excerpt: 'La instalación de un nuevo sistema de agua potable beneficia directamente a 450 personas en la comunidad de Valle Verde.',
      publishedAt: '2024-10-28',
      author: 'Carlos Rodríguez',
      image: 'https://images.pexels.com/photos/6646860/pexels-photo-6646860.jpeg',
      category: 'Infraestructura',
    },
    {
      slug: 'capacitacion-mujeres-emprendedoras',
      title: 'Capacitación para mujeres emprendedoras genera nuevas oportunidades',
      excerpt: 'Nuestro programa de capacitación empresarial ha ayudado a 30 mujeres a iniciar sus propios negocios locales.',
      publishedAt: '2024-10-15',
      author: 'Ana Martínez',
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
       {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
 */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('blog:empty')}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}