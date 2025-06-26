import  { UserModel }  from "../models/index.js";

export const login = async (req, res) => {
  
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ Where: { email } });
    if (!user || user.email !== email) {
      return res.status(404).json({ message: "Usuario no existe o incorrecto" });
    }
    if (password !== user.contrasenia) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }
    res.status(200).json({ message: "Usuario logueado correcta" });
  } catch (error) {
    res.status(500).json({ error: "No se pudo conectar a la base de datos" });
  }
};
