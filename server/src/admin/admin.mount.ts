import * as app from "@conical/core";

@app.mount({
    locator:module,
    localViews:[
        "views"
    ],
    url:"/admin",
    localProviders:[
        
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