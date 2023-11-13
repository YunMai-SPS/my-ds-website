
from flask import Flask, render_template
from dash import Dash

app = Flask(__name__)

dash_app = Dash(__name__, server=app, url_base_pathname='/dash/')

@app.route('/')
def home():
    image_filename = "sky_3.png"
    return render_template('navigation.html',image_filename=image_filename)

@app.route('/data_analytics')
def da_page():
    return render_template('da.html')

@app.route('/business_intelegent')
def bi_page():
    return render_template('bi.html')

@app.route('/dashboard')
def db_page():
    return render_template('db.html')

@app.route('/bioinfomatics')
def bioinf_page():
    return render_template('bioinf.html')

@app.route('/nlp')
def nlp_page():
    return render_template('nlp.html')

if __name__ == '__main__':
    app.run(debug=True)