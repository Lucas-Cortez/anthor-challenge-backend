import "express-async-errors";
import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/handleError";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
