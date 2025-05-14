import multer from "multer";
import fs from "fs";
import path from "path";

async function createFolder() {
  if (!fs.existsSync("./uploads")) {
    fs.mkdir("./uploads", (err) => {
      if (err) {
        throw err;
      }
      console.log("Uploads Created SuccessFully");
    });
  }
}
createFolder();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("file ", file);
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

export const upload = multer({ storage: storage });
