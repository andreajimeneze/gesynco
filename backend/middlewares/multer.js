import multer from 'multer';
import path from 'path';
import fs from 'fs';

 const createUploadMiddleware = (folderName ) => {
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/images/${folderName}`);
    const dir = `public/images/${folderName}`;
    
    if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },

  filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const nombreBase = path.basename(file.originalname, ext).replace(/\s+/g, '-');
      const timestamp = Date.now();
      cb(null, `${nombreBase}-${timestamp}${ext}`);
    }
});

return multer({ storage });
}

export  {createUploadMiddleware};
