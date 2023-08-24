import requests
from flask import Flask

# def handler(request):
#     url = request.args.get('url')
#     response = requests.get(url)
#     return response.content

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def hello_world():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(port=5328)
