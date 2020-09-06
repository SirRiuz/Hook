


from flask import (request , render_template , request , redirect)
from server import app


@app.errorhandler(404)
def notFound(e):
    return render_template('not_found.html')


@app.errorhandler(405)
def notFound(e):
    return render_template('method_error.html')

@app.route('/')
def index():
    return redirect('https://localhost:3000/')
