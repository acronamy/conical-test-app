"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("@conical/core");
const server_module_1 = require("./src/server.module");
app.run(server_module_1.ServerModule);
