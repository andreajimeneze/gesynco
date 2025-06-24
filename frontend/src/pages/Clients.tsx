import { Star, Quote, /*Users, Building,*/ CheckCircle } from 'lucide-react';

const Clients = () => {
  const testimonials = [
    {
      name: 'Sindicato de Trabajadores Mineros',
      sector: 'Minería',
      logo: '⛏️',
      testimonial: 'Gracias a su asesoría logramos el mejor convenio colectivo en 10 años. Su análisis económico fue fundamental para demostrar la viabilidad de nuestras propuestas salariales.',
      result: 'Aumento salarial del 15% y mejores beneficios de salud',
      rating: 5
    },
    {
      name: 'Sindicato Portuario de Valparaíso',
      sector: 'Transporte y Logística',
      logo: '🚢',
      testimonial: 'Su estrategia de negociación y apoyo mediático nos permitió posicionar nuestras demandas de manera efectiva ante la opinión pública y la empresa.',
      result: 'Implementación de mejores condiciones de seguridad laboral',
      rating: 5
    },
    {
      name: 'Federación de Profesores',
      sector: 'Educación',
      logo: '📚',
      testimonial: 'El acompañamiento integral durante todo el proceso fue excepcional. Su conocimiento jurídico nos dio la confianza necesaria para alcanzar nuestros objetivos.',
      result: 'Reducción de horas lectivas y aumento de tiempo de preparación',
      rating: 5
    },
    {
      name: 'Sindicato de Trabajadores de la Salud',
      sector: 'Salud',
      logo: '🏥',
      testimonial: 'Logramos no solo mejoras salariales sino también condiciones laborales que impactan directamente en la calidad de atención que podemos brindar.',
      result: 'Mejora en turnos y bonificaciones por riesgo',
      rating: 5
    },
    {
      name: 'Sindicato Metalúrgico Regional',
      sector: 'Manufactura',
      logo: '🏭',
      testimonial: 'Su capacitación en técnicas de negociación fortaleció nuestro equipo dirigencial. Ahora tenemos herramientas para futuras negociaciones.',
      result: 'Equipo dirigencial capacitado y convenio favorable',
      rating: 5
    },
    {
      name: 'Asociación de Empleados Bancarios',
      sector: 'Servicios Financieros',
      logo: '🏦',
      testimonial: 'Su asesoría tributaria nos ayudó a optimizar los beneficios para nuestros afiliados, maximizando el valor real de los aumentos negociados.',
      result: 'Optimización tributaria de beneficios obtenidos',
      rating: 5
    }
  ];

  const sectors = [
    { name: 'Minería', count: 12, icon: '⛏️' },
    { name: 'Educación', count: 8, icon: '📚' },
    { name: 'Salud', count: 15, icon: '🏥' },
    { name: 'Transporte', count: 6, icon: '🚛' },
    { name: 'Manufactura', count: 10, icon: '🏭' },
    { name: 'Servicios', count: 9, icon: '💼' },
    { name: 'Construcción', count: 7, icon: '🏗️' },
    { name: 'Agricultura', count: 5, icon: '🌾' }
  ];

  const caseStudies = [
    {
      title: 'Negociación Colectiva Sector Minero',
      challenge: 'Sindicato de 800 trabajadores necesitaba mejorar condiciones salariales y de seguridad en contexto de precios bajos del cobre.',
      solution: 'Análisis económico detallado, estrategia de negociación escalonada y campaña mediática para sensibilizar sobre condiciones laborales.',
      results: [
        'Aumento salarial 12% en 2 años',
        'Inversión $2M en mejoras de seguridad',
        'Reducción 40% en accidentes laborales',
        'Mejora en clima laboral'
      ],
      duration: '4 meses',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Conflicto Sectorial en Educación',
      challenge: 'Múltiples sindicatos de profesores requerían coordinación para negociación sectorial con el Ministerio de Educación.',
      solution: 'Coordinación inter-sindical, análisis presupuestario del sector público y estrategia comunicacional unificada.',
      results: [
        'Convenio sectorial beneficia 45,000 profesores',
        'Reducción horas lectivas de 44 a 38 semanales',
        'Aumento 8% en asignación de perfeccionamiento',
        'Mejora en carrera docente'
      ],
      duration: '6 meses',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros <span className="text-orange-500">Clientes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Casos de éxito y testimonios de sindicatos que han confiado en nuestra asesoría
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-orange-100">Negociaciones Exitosas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">72</div>
              <div className="text-orange-100">Sindicatos Asesorados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">85K+</div>
              <div className="text-orange-100">Trabajadores Beneficiados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-orange-100">Tasa de Éxito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sectores Industriales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tenemos experiencia en diversos sectores de la economía chilena
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                <div className="text-4xl mb-3">{sector.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{sector.name}</h3>
                <p className="text-sm text-gray-600">{sector.count} sindicatos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Testimonios de Nuestros Clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lo que dicen los sindicatos que han trabajado con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.logo}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.sector}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                <Quote className="h-6 w-6 text-orange-600 mb-2" />
                <p className="text-gray-700 mb-4 italic">"{testimonial.testimonial}"</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="font-medium">Resultado:</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Casos de Éxito Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ejemplos detallados de negociaciones exitosas y sus resultados
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="bg-orange-100 inline-block px-3 py-1 rounded-full text-sm font-medium text-orange-800 mb-4">
                    Duración: {study.duration}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Desafío:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Solución:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Resultados:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres Ser Nuestro Próximo Caso de Éxito?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a los más de 70 sindicatos que han confiado en nuestra experiencia
          </p>
          <a
            href="/contacto"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Solicitar Consulta Inicial
          </a>
        </div>
      </section>
    </div>
  );
};

export default Clients;