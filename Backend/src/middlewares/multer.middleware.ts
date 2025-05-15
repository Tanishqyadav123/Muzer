import { Request } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads");
  },
  filename(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.filename + "-" + uniqueSuffix);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (file.size > 5 * 1024 * 1024) {
    cb(null, false);
  }
};

export const upload = multer({ storage, fileFilter });
