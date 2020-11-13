/**
 * file: C:\Users\johnc\workspace4\second_server\main.js
 */

// **** port to listen on ****
const port = 3000;

// **** require these modules ****
http = require("http");
httpStatus = require("http-status-codes");

// **** create the server ****
app = http.createServer();

// **** wait on request ****
app.on("request", (req, res) => {

    // **** to hold chunck content (if any) ****
    var body = [];

    // **** collect data ****
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });

    // **** end of data transmission ****
    req.on("end", () => {

        // **** convert array contents to string of text ****
        body = Buffer.concat(body).toString();

        // ???? ????
        console.log(`<<< body ==>${body}<==`);
    });

    // ???? log request contents ????
    console.log(`<<< method: ${getJSONString(req.method)}`);
    console.log(`<<< url: ${getJSONString(req.url)}`);
    console.log(`<<< headers: ${getJSONString(req.headers)}`);

    // **** response OK content type ****
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });

    // **** response message ****
    let resMsg = "<h1>This message will show on the web browser.</h1>";

    // **** send response and end connection ****
    res.end(resMsg);
});

// **** server listening on this port ****
app.listen(port);

// ???? ????
console.log(`<<< server up and running on port: ${port}`);


/**
 * 
 */
const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
}
