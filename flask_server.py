from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/test", methods=['GET'])
def test():
    a = request.args.get('a')
    b = request.args.get('b')

    z = int(a) +int(b)

    return str(z)



if __name__ == '__main__':
    app.run(debug=True)
