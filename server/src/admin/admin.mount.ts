import * as app from "@conical/core";

@app.mount({
    views:"views",
    url:"/admin",
    providers:[

    ]
})
export class AdminMount{
    @app.route("/") root(req, res){
        return "html.html"
    }

    @app.route("/yeah") foo(req, res){
        return "foo.html"
    }
};