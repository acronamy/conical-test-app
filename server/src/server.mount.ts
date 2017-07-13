import * as app from "@conical/core";

@app.mount({
    views:[
        "views/app"
    ],
    path:"/"
})
export class AppMount{
    @app.route("/") root(req, res){
        return "./index/html.html"
    }

    @app.route("/foo") foo(){
        return "./foo.html"
    }
};