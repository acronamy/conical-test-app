import * as app from "@conical/core";

import { AppMount } from "./server.mount";
import { AdminMount } from "./admin/admin.mount";

@app.module({
    host:"0.0.0.0",
    port:8080,
    declarations:[
        AppMount,
        AdminMount
    ]
})
export class ServerModule{  }