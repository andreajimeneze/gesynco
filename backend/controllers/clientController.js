import { ClientModel } from "../models/index.js";

export const getClients = async (req, res) => {
    try {
        const clients = await ClientModel.findAll();

        if(!clients) {
            return res.status(404).json({message: 'No hay clientes para mostrar'});
        }

        return res.status(200).json({ message: 'Clientes obtenidos exitosamente', data: clients });
    } catch(error) {
        res.status(500).json({error: 'Error interno del sistema'});
    }
}

export const getOneClient = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await ClientModel.findByPk(id);

        if(!client) {
            return res.status(404).json({ message: 'Cliente no existe'});
        }

        return res.status(200).json({message: 'Cliente obtenido exitosamente', data: client});
    } catch(error) {
        res.status(500).json({error: 'Error interno del sistema'});
    }
}

export const createNewClient = async (req, res) => {
    
    const { name, activity, address, locality, phoneNumber, email, logo } = req.body;
console.log('body cliente', address);
    try{
        const newClient = await ClientModel.create({
            nombre: name,
            actividad_economica: activity,
            direccion: address,
            locality,
            telefono: phoneNumber,
            email,
            logo
        })

        res.status(200).json({ message: 'Nuevo cliente creado exitosamente', data: newClient});
    } catch(error) {
        console.error("error al crear cliente", error);
        res.status(500).json({error: 'Error interno del sistema'});
    }
}

export const editClient = async (req, res) => {
    const { name, activity, address, locality, phoneNumber, email, logo } = req.body;
    console.log("dirección body", address);
    const { id } = req.params;

    try {
        const existingClient =  await ClientModel.findByPk(id);

        if(!existingClient) {
            return res.status(404).json({ message: 'No se puede modificar cliente porque no existe'});
        }
        const updateClient = await existingClient.update({
            nombre: name || existingClient.name,
            actividad_economica: activity || existingClient.activity,
            direccion: address || existingClient.address,
            locality: locality || existingClient.locality,
            telefono: phoneNumber || existingClient.phoneNumber,
            email: email || existingClient.email,
            logo: logo || existingClient.logo
        })
        res.status(201).json({message: 'Cliente modificado exitosamente', data: updateClient});
    } catch(error) {
        console.error("error al crear cliente", error);
        res.status(500).json({error: 'Error interno del sistema'});
    }
}