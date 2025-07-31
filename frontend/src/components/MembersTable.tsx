import { useState, useEffect } from "react";
interface Equipo {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    profesion: string;
    experiencia: string;
    foto: string;
    estado: string;

}

const MembersTable = () => {

    const [equipo, setEquipo] = useState<Equipo[]>([]);
    //const [nuevoEquipo, setNuevoEquipo] = useState([]);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/team');
                const data = await res.json();
                setEquipo(data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTeam();
    })




    return (
        <div className="p-8 max-w-8xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestión de Equipo Profesional</h1>

            {/* Formulario para agregar nueva noticia */}
            <div className="border-t pt-4 my-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Nuevo Equipo</h2>
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Apellido"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Profesión"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded"
                    />
                    <textarea
                        placeholder="Experiencia"
                        className="w-full border p-2 rounded"
                        rows={4}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full border p-2 rounded"
                    />
                    <select>
                        <option>Selecciones un estado</option>
                    </select>
                    <div className='text-center'>
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Guardar Profesional
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden mb-6">
                    <thead className="bg-orange-600 text-white text-left">
                        <tr>
                            <th className="py-3 px-4">Nombre</th>
                            <th className="py-3 px-4">Apellido</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Profesión</th>
                            <th className="py-3 px-4 w-[250px]">Experiencia</th>
                            <th className="py-3 px-4">Fotografía</th>
                            <th className="py-3 px-4">Estado</th>
                            <th className="py-3 px-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipo.map((miembro) => ( 
                        <tr key={miembro.id} className="border-t">
                            <td className="px-4 py-3">{miembro.nombre}</td>
                            <td className="px-4 py-3">{miembro.apellido}</td>
                            <td className="px-4 py-3">{miembro.email}</td>
                            <td className="px-4 py-3">{miembro.profesion}</td>
                            <td className="px-4 py-3 w-[250px]">{miembro.experiencia}</td>
                            <td className="px-4 py-3 w-[200px] "><img src={miembro.foto} /></td>
                            <td className="px-4 py-3">{miembro.estado}</td>
                            <td className="px-4 py-3 text-center space-x-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                    onClick={() => alert('Editar próximamente')}
                                >
                                    Editar
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                    onClick={() => alert('Eliminar próximamente')}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                       )) }
                    </tbody>
                </table>


            </div>
        </div >
    )
}

export default MembersTable;