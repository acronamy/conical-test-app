import * as app from "@conical/core";

@app.mount({
    views:"views",
    path:"/admin",
    providers:[

    ]
})
export class AdminMount{
    @app.route("/admin") root(req, res){
        return "./index/html.html"
    }

    @app.route("/admin/yeah") foo(req, res){
        return "./index/foo.html"
    }
};