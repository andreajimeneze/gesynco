import { useState } from 'react';
import { Calendar, User, ArrowRight, /*Tag,*/ Search } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', 'Negociación Colectiva', 'Derecho Laboral', 'Economía Laboral', 'Comunicación Sindical', 'Tributario'];

  const blogPosts = [
    {
      id: 1,
      title: 'Nuevas Tendencias en Negociación Colectiva 2024',
      excerpt: 'Análisis de las principales tendencias y cambios normativos que están impactando las negociaciones colectivas en Chile durante este año.',
      author: 'María Elena Rodríguez',
      date: '15 de Enero, 2024',
      category: 'Negociación Colectiva',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '5 min lectura'
    },
    {
      id: 2,
      title: 'Fuero Sindical: Protección y Alcances Legales',
      excerpt: 'Guía completa sobre el fuero sindical en Chile, sus alcances, limitaciones y cómo ejercer efectivamente esta protección legal.',
      author: 'Ana Patricia Vega',
      date: '10 de Enero, 2024',
      category: 'Derecho Laboral',
      image: 'https://images.pexels.com/photos/8116943/pexels-photo-8116943.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '7 min lectura'
    },
    {
      id: 3,
      title: 'Análisis Económico en Negociaciones: Cómo Fundamentar Propuestas',
      excerpt: 'Métodos y herramientas para realizar análisis económicos sólidos que respalden las propuestas salariales en negociaciones colectivas.',
      author: 'Carlos Mendoza Silva',
      date: '8 de Enero, 2024',
      category: 'Economía Laboral',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '6 min lectura'
    },
    {
      id: 4,
      title: 'Estrategias de Comunicación Durante Conflictos Laborales',
      excerpt: 'Cómo manejar la comunicación pública y medios durante conflictos laborales para mantener el apoyo de la opinión pública.',
      author: 'Roberto Fernández Castro',
      date: '5 de Enero, 2024',
      category: 'Comunicación Sindical',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '4 min lectura'
    },
    {
      id: 5,
      title: 'Beneficios Tributarios para Trabajadores: Guía 2024',
      excerpt: 'Actualización sobre los beneficios tributarios disponibles para trabajadores y cómo optimizar la planificación fiscal personal.',
      author: 'Susana Morales Díaz',
      date: '3 de Enero, 2024',
      category: 'Tributario',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '8 min lectura'
    },
    {
      id: 6,
      title: 'Técnicas Avanzadas de Negociación para Dirigentes Sindicales',
      excerpt: 'Herramientas psicológicas y técnicas de negociación que todo dirigente sindical debe conocer para maximizar resultados.',
      author: 'Diego Herrera Ruiz',
      date: '1 de Enero, 2024',
      category: 'Negociación Colectiva',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '10 min lectura'
    },
    {
      id: 7,
      title: 'Prácticas Antisindicales: Identificación y Defensa Legal',
      excerpt: 'Cómo identificar y actuar legalmente ante prácticas antisindicales por parte de empleadores.',
      author: 'Ana Patricia Vega',
      date: '28 de Diciembre, 2023',
      category: 'Derecho Laboral',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '6 min lectura'
    },
    {
      id: 8,
      title: 'Impacto de la Inflación en Negociaciones Salariales',
      excerpt: 'Análisis del impacto inflacionario en el poder adquisitivo y estrategias para negociar aumentos reales.',
      author: 'Carlos Mendoza Silva',
      date: '25 de Diciembre, 2023',
      category: 'Economía Laboral',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '5 min lectura'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro <span className="text-orange-500">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Análisis, consejos y actualizaciones sobre negociación colectiva y derecho laboral
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 text-white">
                <div className="bg-orange-800 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Artículo Destacado
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-orange-100 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-orange-200 text-sm mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <User className="h-4 w-4 mr-2" />
                  <span>{featuredPost.author}</span>
                </div>
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
                  Leer Artículo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center">
                      Leer más
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mantente Actualizado
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín para recibir los últimos artículos y actualizaciones laborales
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-300"
            />
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;