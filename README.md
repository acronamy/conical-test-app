conical-test-app


Here is an example of the syntax for defining a mount application and its routes.
If you recognize this you will see what I am doing here and how awesome this could be.

'''
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