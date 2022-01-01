# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
import time
import os

hostName = ""
serverPort = 8080
user = os.getlogin()

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        #print(self.path)
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        
        if self.path == "/user":
            self.wfile.write(bytes("{user:\"" + user + "\"}", "utf-8"))
        else:
            self.wfile.write(bytes("{message:\":)\"}", "utf-8"))

        #self.send_header("Content-type", "text/html")
        #self.wfile.write(bytes("{user:\"" + user + "\"}", "utf-8"))
        #self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
        #self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
        #self.wfile.write(bytes("<body>", "utf-8"))
        #self.wfile.write(bytes("<p>This is an example web server.</p>", "utf-8"))
        #self.wfile.write(bytes("</body></html>", "utf-8"))
        
if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")

    # convert .py to exe : 
    # 