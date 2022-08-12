"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const handleError_1 = require("./middlewares/handleError");
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.routes);
app.use(handleError_1.errorHandler);
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));
//# sourceMappingURL=server.js.map