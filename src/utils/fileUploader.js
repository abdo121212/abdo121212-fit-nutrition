// import multer, { diskStorage } from "multer";
// import { nanoid } from "nanoid";

// export const upload = ({ folder }) => {
//   const storage = diskStorage({
//     destination: `upload/${folder} `,
//     filename: (req, file, cb) => {
//       console.log(file);
//       cb(null, nanoid() + "__" + file.originalname);
//     },
//   });

//   const multerUpload = multer({ storage });
//   return multerUpload;
// };

import multer, { diskStorage } from "multer";

export const fliterObject = {
  image: ["image/jpg", "image/png", "image/jpeg", "image/webp"],
  pdf: ["application/pdf"],
  video: ["video/mp4"],
};
export const fileUploader = (filterArray) => {
  const fileFilter = (req, file, cb) => {
    if (!filterArray.includes(file.mimetype)) {
      return cb(new Error("invalid file Format ", false));
    }
    return cb(null, true);
  };

  return multer({ storage: diskStorage({}), fileFilter });
};
