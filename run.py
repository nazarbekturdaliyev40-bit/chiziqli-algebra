#!/usr/bin/env python3
"""
Chiziqli Algebra Web Ilovasini bir zumda ishga tushiruvchi skript.
Port: 8080 (agar band bo'lsa boshqa bo'sh port tanlanadi)
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    os.chdir(DIRECTORY)
    port = PORT
    for _ in range(10):
        try:
            with socketserver.TCPServer(("", port), Handler) as httpd:
                url = f"http://localhost:{port}"
                print("=" * 60)
                print("🚀 Chiziqli Algebra — Interaktiv Yechuvchi Ilova ishga tushdi!")
                print(f"🔗 Brauzerda ochish manzili: {url}")
                print("=" * 60)
                print("To'xtatish uchun: Ctrl + C bosing.")
                
                # Avtomatik brauzerda ochish
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                
                httpd.serve_forever()
                break
        except OSError:
            port += 1

if __name__ == "__main__":
    start_server()
