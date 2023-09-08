import { allowedOrigins } from "./allowedOrigins.js";

const CorsOptions = {
  origin: (origin, cb) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      return cb(null, true);
    }
    cb(new Error("Not allowed by cors", false));
  }
};

export { CorsOptions };
