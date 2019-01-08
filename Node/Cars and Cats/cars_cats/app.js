let http = require('http');
let fs = require('fs');
let server = http.createServer((request, response) => {
    console.log('client request URL: ', request.url);
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car1.jpeg') {
        fs.readFile('images/cars/car1.jpeg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car2.jpeg') {
        fs.readFile('images/cars/car2.jpeg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/cats') {
        fs.readFile('views/cats.html', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cats/spaceKitty.jpeg') {
        fs.readFile('images/cats/spaceKitty.jpeg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cats/tubeTheNube.jpeg') {
        fs.readFile('images/cats/tubeTheNube.jpeg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/cars/new') {
        fs.readFile('views/car_form.html', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else {
        response.writeHead(404);
        response.end('Page not found!!!')
    }
})
server.listen(8000);
console.log('Running in localhost port 8000')





