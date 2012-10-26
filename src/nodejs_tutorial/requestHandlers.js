function start() {
    console.log("Request handler 'start' was called.");
    return "Hallo start!";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hallo upload!";
}

exports.start = start;
exports.upload = upload;