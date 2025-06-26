import { TeamModel } from "../models/index.js";

export const getTeam = async (req, res) => {
  try {
    const team = await TeamModel.findAll();

    if (!team) {
      return res
        .status(404)
        .json({ message: "No hay miembros del equipo actualmente" });
    }
    return res
      .status(200)
      .json({ message: "Equipo obtenido exitosamente", data: team });
  } catch (error) {
    res.status(500).json({ error: "Error interno del sistema" });
  }
};

export const getMember = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await TeamModel.findByPk(id);

    if (!member) {
      res.status(404).json({
        message: "Miembro del equipo no existe",
      });
    }
    res.status(200).json({
      message: "Miembro del equipo obtenido exitosamente",
      data: member,
    });
  } catch (error) {
    res.status(500).json({ error: "Error interno del sistema" });
  }
};

export const createNewMember = async (req, res) => {
    const { first_name, last_name, email, profession, experience, image, status } = req.body;

    try {
        const newMember = await TeamModel.create({
            nombre: first_name,
            apellido: last_name,
            email, 
            profesion: profession,
            experiencia: experience,
            foto: image,
            estado: status
        })

        res.status(200).json({ message: 'Miembro de equipo creado exitosamente', data: newMember});
    } catch (error) {
        console.error("Error al crear miembro", error);
    res.status(500).json({ error: "Error interno del sistema" });
  }
}

export const editMember = async (req, res) => {
    const { first_name, last_name, email, profession, experience, image, status } = req.body;
    const { id } = req.params;
    try {
        const existingMember = await TeamModel.findByPk(id);

        if(!existingMember) {
           return res.status(404).json({ message: 'Miembro de equipo no existe'});
        }
        
        const updateMember = await existingMember.update({
            nombre: first_name || existingMember.first_name,
            apellido: last_name || existingMember.last_name,
            email: email || existingMember.email, 
            profesion: profession || existingMember.profession,
            experiencia: experience || existingMember.experience,
            foto: image || existingMember.image,
            estado: status || existingMember.status
        })
        res.status(201).json({message: 'Miembro de equipo actualizado correctamente', data: updateMember});
    } catch (error) {
        console.error("Error al crear miembro", error);
    res.status(500).json({ error: "Error interno del sistema" });
  }
}