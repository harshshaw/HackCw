from flask import Flask, render_template, request, url_for
from flask.helpers import send_file
import extract_text_from_pdf
from extract_text_from_pdf import get_text
from get_similarity import get_similarity_score
from auto_eval import get_eval
import os
# import magic
import urllib.request
import os
import requests
import pdfplumber
import tabnanny
from summarise import top_sentence
import keywords_model as kmd
import spacy
from collections import Counter
from string import punctuation


from flask import Flask, flash, request, redirect, render_template
from werkzeug.utils import secure_filename
nlp = spacy.load("en")

app = Flask(__name__)
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = './uploads'



ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def upload_form():
    return render_template('eval.html')


@app.route('/upload', methods=['POST', 'GET'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)

        file = request.files['file']

        file1=request.files['file1']

        if file.filename == '':
            flash('No file selected for uploading')
            return redirect(request.url)

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)

            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            act_txt = get_text(file)

            flash('File successfully uploaded')

            if file1.filename == '':
                flash('No file selected for uploading')
                return redirect(request.url)

            if file1 and allowed_file(file1.filename):
                filename = secure_filename(file1.filename)

                file1.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

                que_txt = get_text(file1)

                flash('File successfully uploaded')
            score=get_eval(act_txt,que_txt)
            return render_template("eval.html", act_text=act_txt,que_text=que_txt,similar=score)

        else:
            flash('Allowed file types are txt, pdf, png, jpg, jpeg, gif')
            return redirect(request.url)


if __name__ == "__main__":
    app.run(debug='on')
