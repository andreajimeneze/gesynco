import { useEffect, useState } from "react";

interface Cliente {
    id: number;
    nombre: string;
    actividad_economica: string;
    direccion: string;
    locality: string;
    telefono: string;
    email: string;
    logo: string;
    numeroMiembros: number;
    testimonio: string
}

const ClientsTable = () => {
    const [clients, setClients] = useState<Cliente[]>([]);
    const [nuevoCliente, setNuevoCliente] = useState<Omit<Cliente, 'id' | 'logo'>>({
        nombre: '',
        actividad_economica: '',
        direccion: '',
        locality: '',
        telefono: '',
        email: '',
        numeroMiembros: 0,
        testimonio: ''
    });
    const [logo, setLogo] = useState<string>('');


    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/clients');
                const data = await res.json()
                
                setClients(data.rows);
            } catch (error) {
                console.error(error);
            }
        }
        fetchClients();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNuevoCliente(prev => ({...prev, [name]: value }));
    };

    const agregarNuevoCliente = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/clients', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...nuevoCliente, logo }),
            });
            if (!res.ok) throw new Error('Error al guardar cliente');
            const guardarNuevoCliente = await res.json();
            setClients(prev => [...prev, guardarNuevoCliente]);

            // Opcional: limpiar formulario
            setNuevoCliente({
                nombre: '',
                actividad_economica: '',
                direccion: '',
                locality: '',
                telefono: '',
                email: '',
                numeroMiembros: 0,
                testimonio: '',
            });
            setLogo('');
        } catch (error) {
            console.error(error);
        }


    };


    return (
        <div className="p-8 max-w-8xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestión de Clientes</h1>

            {/* Formulario para agregar nueva noticia */}
            <div className="border-t pt-4 my-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Nuevo Cliente</h2>
                <div className="space-y-2">
                    <input
                        type="text"
                        name="nombre"
                        value={nuevoCliente.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="actividad_economica"
                        value={nuevoCliente.actividad_economica}
                        onChange={handleChange}
                        placeholder="Actividad económica"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="direccion"
                        value={nuevoCliente.direccion}
                        onChange={handleChange}
                        placeholder="Dirección"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="locality"
                        value={nuevoCliente.locality}
                        onChange={handleChange}
                        placeholder="Ciudad"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="telefono"
                        value={nuevoCliente.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="number"
                        name="numeroMiembros"
                        value={nuevoCliente.numeroMiembros}
                        onChange={handleChange}
                        placeholder="Número Socios"
                        className="w-full border p-2 rounded"
                    />
                    <textarea
                        name="testimonio"
                        value={nuevoCliente.testimonio}
                        onChange={handleChange}
                        placeholder="Testimonio"
                        rows={4}
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full border p-2 rounded"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setLogo(reader.result as string); // base64
                                };
                                reader.readAsDataURL(file);
                            }
                        }}
                    />
                    <div className='text-center'>
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            onClick={agregarNuevoCliente}
                        >
                            Guardar Cliente
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden mb-6">
                    <thead className="bg-orange-600 text-white text-left">
                        <tr>
                            <th className="py-3 px-4">Nombre</th>
                            <th className="py-3 px-4">Actividad económica</th>
                            <th className="py-3 px-4">Dirección</th>
                            <th className="py-3 px-4">Localidad</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Telefono</th>
                            <th className="py-3 px-4">N° Socios</th>
                            <th className="py-3 px-4 w-[250px]">Testimonio</th>
                            <th className="py-3 px-4">Logo Sindicato</th>
                            <th className="py-3 px-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map((cliente) => (
                                <tr key={cliente.id} className="border-t">
                                    <td className="px-4 py-3">{cliente.nombre}</td>
                                    <td className="px-4 py-3">{cliente.actividad_economica}</td>
                                    <td className="px-4 py-3">{cliente.direccion}</td>
                                    <td className="px-4 py-3">{cliente.locality}</td>
                                    <td className="px-4 py-3">{cliente.email}</td>
                                    <td className="px-4 py-3">{cliente.telefono}</td>
                                    <td className="px-4 py-3">{cliente.numeroMiembros}</td>
                                    <td className="px-4 py-3 w-[250px]">{cliente.testimonio}</td>
                                    <td className="px-4 py-3 w-[200px] "><img src={cliente.logo} /></td>
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
                            ))}
                    </tbody>
                </table>


            </div>
        </div >
    )
}

export default ClientsTable;