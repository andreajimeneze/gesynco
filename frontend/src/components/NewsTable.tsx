import { useEffect, useState } from 'react';
import { generarSlug } from '../utils/slug';

interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  fecha_publicacion: string;
  url_imagen: string;
  texto: string;
  fecha_edicion: string;
  slug: string;
}

const NoticiasTable = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [archivoImagen, setArchivoImagen] = useState<File | null>(null);
  const [nuevaNoticia, setNuevaNoticia] = useState<{
    titulo: string;
    resumen: string;
    texto: string;
    slug: string;
    url_imagen: string;
    fecha_publicacion: string;
    fecha_edicion: string;
    imagen: File | null;
  }>({
    titulo: '',
    resumen: '',
    texto: '',
    slug: '',
    url_imagen: '',
    fecha_publicacion: '',
    fecha_edicion: '',
    imagen: null
  });


  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/news');
      const data = await res.json();


      setNoticias(data);
    } catch (error: unknown) {
      console.error('Error al cargar noticias:', error);
      if (error instanceof Error) {
        setError(`Error: ${error.message}`);
      } else {
        setError('No se pudieron cargar las noticias.');
      }
    } finally {
      setLoading(false);
    }
  };

  const eliminarNoticia = async (id: number) => {
    if (!confirm('¿Estás seguro de eliminar esta noticia?')) return;
    try {
      const res = await fetch(`http://localhost:3000/api/news/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Error al eliminar');
      setNoticias(noticias.filter((n) => n.id !== id));
    } catch (error) {
      console.error(error);
      alert('Error al eliminar');
    }
  };

  const agregarNoticia = async () => {
    if (!nuevaNoticia.titulo || !nuevaNoticia.resumen) {
      alert('Título y resumen son obligatorios');
      return;
    }

    const slug = generarSlug(nuevaNoticia.titulo);
    const fechaPublicacion = new Date().toISOString();

    const formData = new FormData();
    formData.append('titulo', nuevaNoticia.titulo);
    formData.append('resumen', nuevaNoticia.resumen);
    formData.append('texto', nuevaNoticia.texto);
    formData.append('slug', slug);
    formData.append('fecha_publicacion', fechaPublicacion);
    formData.append('fecha_edicion', '');
    if (archivoImagen) {
      formData.append('imagen', archivoImagen);
    }


    try {
      const res = await fetch('http://localhost:3000/api/news/create', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setNoticias([...noticias, data]);
      setNuevaNoticia({
        titulo: '',
        resumen: '',
        texto: '',
        slug: '',
        url_imagen: '' ,
        fecha_publicacion: '',
        fecha_edicion: '',
        imagen: null
      });
      setArchivoImagen(null);
    } catch (error) {
      console.error(error);
      alert('Error al guardar la noticia');
    }
  };

  return (
    <div className="p-8 max-w-8xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestión de Noticias</h1>

      {/* Formulario para agregar nueva noticia */}
      <div className="border-t pt-4 my-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Nueva Noticia</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Título"
            className="w-full border p-2 rounded"
            value={nuevaNoticia.titulo}
            onChange={(e) =>
              setNuevaNoticia({ ...nuevaNoticia, titulo: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Resumen"
            className="w-full border p-2 rounded"
            value={nuevaNoticia.resumen}
            onChange={(e) =>
              setNuevaNoticia({ ...nuevaNoticia, resumen: e.target.value })
            }
          />
          <textarea
            placeholder="Texto completo"
            className="w-full border p-2 rounded"
            rows={4}
            value={nuevaNoticia.texto}
            onChange={(e) =>
              setNuevaNoticia({ ...nuevaNoticia, texto: e.target.value })
            }
          />
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={(e) => setArchivoImagen(e.target.files?.[0] || null)}
          />
          <div className='text-center'>
            <button
              onClick={agregarNoticia}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Guardar Noticia
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-500">Cargando noticias...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden mb-6">
            <thead className="bg-orange-600 text-white text-left">
              <tr>
                <th className="py-3 px-4 w-[200px]">Título</th>
                <th className="py-3 px-4 w-[350px]">Resumen</th>
                <th className="py-3 px-4 ">Imagen</th>
                <th className="py-3 px-4">Fecha publicación</th>
                <th className="py-3 px-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map((noticia) => (
                <tr key={noticia.id} className="border-t">
                  <td className="px-4 py-3 w-[200px]">{noticia.titulo}</td>
                  <td className="px-4 py-3 w-[350px]">{noticia.resumen}</td>
                  <td className="px-4 py-3 w-[200px] "><img src={`http://localhost:3000/public/${noticia.url_imagen}`} alt={noticia.titulo}/></td>
                  <td className="px-4 py-3">
                    {new Date(noticia.fecha_publicacion).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-center space-x-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      onClick={() => alert('Editar próximamente')}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      onClick={() => eliminarNoticia(noticia.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


        </>
      )}
    </div>
  );
};

export default NoticiasTable;
