import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import { generatePageSEO } from '../lib/seo';
import { Analytics } from '../lib/analytics';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation(['blog', 'common']);

  // Mock post data - in a real app, this would come from an API or CMS
  const posts = {
    'nueva-escuela-san-miguel': {
      title: 'Nueva escuela en San Miguel: Un sueño hecho realidad',
      content: `
        <p>Después de 8 meses de arduo trabajo, hemos inaugurado oficialmente la nueva escuela en la comunidad de San Miguel. Este proyecto, que beneficiará directamente a más de 200 niños, representa un hito importante en nuestro compromiso con la educación de calidad.</p>
        
        <h2>El proceso de construcción</h2>
        <p>La construcción comenzó en abril de 2024 con la participación activa de la comunidad local. Más de 50 voluntarios participaron en las diferentes fases del proyecto, desde la preparación del terreno hasta los acabados finales.</p>
        
        <p>La escuela cuenta con 6 aulas completamente equipadas, una biblioteca, un laboratorio de ciencias básico y un área recreativa. Todas las instalaciones han sido diseñadas teniendo en cuenta la sostenibilidad ambiental y la eficiencia energética.</p>
        
        <h2>Impacto en la comunidad</h2>
        <p>La nueva infraestructura educativa permitirá que los niños de San Miguel y comunidades cercanas accedan a educación de calidad sin tener que recorrer largas distancias. Esto no solo mejora las oportunidades educativas, sino que también fortalece el tejido social de la comunidad.</p>
        
        <p>Agradecemos profundamente a todos los donantes, voluntarios y miembros de la comunidad que hicieron posible este sueño. Su apoyo continuo nos permite seguir construyendo un futuro mejor para estas comunidades.</p>
      `,
      publishedAt: '2024-12-15',
      author: 'María González',
      image: 'https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg',
      category: 'Educación',
    },
    'programa-nutricional-resultados': {
      title: 'Resultados del programa nutricional infantil',
      content: `
        <p>Después de un año de implementación, nuestro programa nutricional infantil ha mostrado resultados extraordinarios que superan nuestras expectativas iniciales.</p>
        
        <h2>Resultados obtenidos</h2>
        <p>El seguimiento médico realizado a los 180 niños participantes muestra una mejora promedio del 23% en su estado nutricional. Además, hemos observado una reducción del 45% en casos de desnutrición aguda en las comunidades participantes.</p>
        
        <p>Los indicadores de salud general también muestran mejoras significativas: mayor energía para las actividades escolares, mejor concentración en clase y un aumento en la asistencia escolar del 18%.</p>
        
        <h2>Metodología del programa</h2>
        <p>El programa combina la distribución de alimentos nutritivos con educación alimentaria para las familias. Cada mes, las familias reciben un kit alimentario balanceado junto con talleres sobre preparación de comidas nutritivas y cultivo de huertos familiares.</p>
        
        <p>La sostenibilidad del programa se basa en el empoderamiento de las comunidades para que puedan continuar aplicando estos conocimientos de manera independiente.</p>
      `,
      publishedAt: '2024-12-01',
      author: 'Dr. Carlos Rodríguez',
      image: 'https://images.pexels.com/photos/6646832/pexels-photo-6646832.jpeg',
      category: 'Salud',
    },
    'voluntarios-construccion-centro-salud': {
      title: 'Voluntarios internacionales se unen a la construcción del centro de salud',
      content: `
        <p>La llegada de 15 voluntarios internacionales marca un momento especial en la construcción de nuestro nuevo centro de salud comunitario. Estos voluntarios, provenientes de España, Francia, Italia y Portugal, han traído consigo no solo sus habilidades técnicas, sino también una energía contagiosa y un compromiso admirable con nuestra causa.</p>
        
        <h2>Un equipo diverso con un objetivo común</h2>
        <p>Entre los voluntarios encontramos arquitectos, ingenieros, médicos y estudiantes universitarios, todos unidos por el deseo de contribuir al desarrollo de comunidades vulnerables. Su experiencia y conocimientos han sido fundamentales para acelerar el progreso del proyecto.</p>
        
        <p>Durante las próximas 6 semanas, trabajarán codo a codo con nuestro equipo local y miembros de la comunidad para completar la segunda fase de construcción del centro de salud.</p>
        
        <h2>Más que construcción</h2>
        <p>Además del trabajo físico, los voluntarios están desarrollando talleres de capacitación para el personal local de salud y estableciendo protocolos para el funcionamiento futuro del centro.</p>
        
        <p>Este tipo de colaboración internacional enriquece enormemente nuestros proyectos y crea lazos duraderos entre comunidades de diferentes países.</p>
      `,
      publishedAt: '2024-11-20',
      author: 'Ana Martínez',
      image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg',
      category: 'Comunidad',
    }
  };

  const post = slug ? posts[slug as keyof typeof posts] : null;

  useEffect(() => {
    if (post) {
      Analytics.pageView(`/blog/${slug}`, post.title);
    }
  }, [slug, post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const seo = generatePageSEO({
    title: post.title,
    description: post.content.substring(0, 160) + '...',
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
      
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t('common:buttons.back')} al blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              ¿Te inspiró esta historia?
            </h3>
            <p className="text-gray-600 mb-4">
              Tu apoyo hace posible que podamos continuar con proyectos como este. 
              Cada donación, por pequeña que sea, marca la diferencia.
            </p>
            <Link
              to="/donations"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t('common:buttons.donate')}
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(posts)
                .filter(([postSlug]) => postSlug !== slug)
                .slice(0, 2)
                .map(([postSlug, relatedPost]) => (
                <Link
                  key={postSlug}
                  to={`/blog/${postSlug}`}
                  className="block group"
                >
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(relatedPost.publishedAt)}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}