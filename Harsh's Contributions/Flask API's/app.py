from flask import Flask, render_template, request, url_for
from flask.helpers import send_file
import extract_text_from_pdf
from extract_text_from_pdf import get_text
import tabnanny
from summarise import top_sentence
import keywords_model as kmd
import spacy
from collections import Counter
from string import punctuation

nlp = spacy.load("en")

app = Flask(__name__)
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = './uploads'

import os
# import magic
import urllib.request
import os
import requests
import pdfplumber

from flask import Flask, flash, request, redirect, render_template
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])





def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def upload_form():
    return render_template('index.html')


@app.route('/upload', methods=['POST', 'GET'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)

        file = request.files['file']

        if file.filename == '':
            flash('No file selected for uploading')
            return redirect(request.url)

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)

            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            ext_txt=get_text(file)
            summary=top_sentence(ext_txt,2)
            vocab_dict,arr=kmd.textProcessing(ext_txt)
            tf = kmd.computeTF(vocab_dict, arr)
            idf = kmd.computeIDF([vocab_dict])
            tfidf = kmd.computeTfidf(tf, idf)
            keyword_ext=tfidf


            flash('File successfully uploaded')

            return render_template("index.html", value=ext_txt,summary_text=summary,keywords=keyword_ext)

        else:
            flash('Allowed file types are txt, pdf, png, jpg, jpeg, gif')
            return redirect(request.url)


if __name__ == "__main__":
    app.run(debug='on')
