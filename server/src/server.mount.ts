import * as app from "@conical/core";

@app.mount({
    locator:module,
    localViews:[
        "views",
    ],
    url:"/"
})
export class AppMount{
    @app.route("/") root(req, res){
        return "index.html"
    }

    @app.route("/foo") foo(){
        return "foo.html"
    }
};