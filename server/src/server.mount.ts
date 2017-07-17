import * as app from "@conical/core";

@app.mount({
    views:[
        "views"
    ],
    url:"/"
})
export class AppMount{
    @app.route("/") root(req, res){
        return "html.html"
    }

    @app.route("/foo") foo(){
        return "foo.html"
    }
};