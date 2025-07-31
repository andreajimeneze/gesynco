import { NewsModel } from "../models/index.js";

export const getNews = async (req, res) => {
  try {
    const allNews = await NewsModel.findAll();
    if (allNews) {
      return res.status(200).json(allNews);
    } else {
      res.status(404).json({ message: "No hay noticias actualmente" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getOneNews = async (req, res) => {
  const { id } = req.params;
  try {
    const oneNews = await NewsModel.findByPk(id);
    if (oneNews) {
      return res.status(200).json(oneNews);
    } else {
      return res.status(404).json({ message: "Noticia no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createNews = async (req, res) => {
  const { text, resume, title, slug, url_image } = req.body;
  const currentDate = new Date();
  try {
         
    const newNews = await NewsModel.create({
      titulo: title,
      resumen: resume,
      texto: text,
      slug,
      fecha_publicacion: currentDate,
      fecha_edicion: null,
      url_imagen: req.file ? `/images/news/${req.file?.filename}` : null
    });
    res
      .status(201)
      .json({ message: "Noticia creada exitosamente", data: newNews });
  } catch (error) {
    console.error("Error en createNews:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const editNews = async (req, res) => {
  const { text, resume, title, slug, url_image } = req.body;
  const currentDate = new Date();

  try {
    const { id } = req.params;
    const existingNews = await NewsModel.findByPk(id);

    if (existingNews) {
      const updatedFields = await existingNews.update({
        titulo: existingNews.title || title,
        resumen: existingNews.resume || resume,
        texto: existingNews.text || text,
        slug: existingNews.slug || slug,
        url_imagen: existingNews.url_image || url_image,
        fecha_publicacion: existingNews.fecha_publicacion,
        fecha_edicion: currentDate,
      });

      if(req.file) {
        updatedFields.url_imagen = `/images/news/${req.file?.filename}`;
      }

      const editedNews = await existingNews.update(updatedFields);
      return res
        .status(201)
        .json({ message: "Noticia editada correctamente", data: editedNews });
    }
  } catch (error) {
    console.error("Error en updateNews", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCount = await NewsModel.destroy({ where: { id } });

    if (deleteCount === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    return res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
