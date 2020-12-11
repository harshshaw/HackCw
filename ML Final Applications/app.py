from werkzeug.utils import secure_filename
from flask import Flask, flash, request, redirect, render_template, url_for
import pdfplumber
import requests
import urllib.request
import os
from flask.helpers import send_file
import extract_text_from_pdf
from extract_text_from_pdf import get_text
import tabnanny
from summarise import top_sentence
import keywords_model as kmd
import spacy
from collections import Counter
from string import punctuation
import joblib
import numpy as np
from auto_eval import get_eval
from get_similarity import get_similarity_score

nlp = spacy.load("en_core_web_sm")
dropout_model = joblib.load('./models/try1.pkl')
counsel_model = joblib.load('./models/xgbmodel_cp.dat')


app = Flask(__name__)
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = './uploads'


@app.route('/summary', methods=['POST'])
def summary():
    if 'file' not in request.files:
        return {"data": "none"}

    file = request.files['file']

    ext_txt = get_text(file)
    summary = top_sentence(ext_txt, 2)
    vocab_dict, arr = kmd.textProcessing(ext_txt)
    tf = kmd.computeTF(vocab_dict, arr)
    idf = kmd.computeIDF([vocab_dict])
    tfidf = kmd.computeTfidf(tf, idf)
    keyword_ext = tfidf

    return {"value": ext_txt, "summary_text": summary, "keywords": keyword_ext}

@app.route('/plagarism', methods=['POST'])
def plagarism():
    if 'file1' not in request.files or 'file2' not in request.files:
        flash('No file part')
        return redirect(request.url)

    file = request.files['file1']

    file1 = request.files['file2']

    act_txt = get_text(file)
    que_txt = get_text(file1)
    sim_score = get_similarity_score(act_txt, que_txt)

    return {"act_text": act_txt, "que_text": que_txt, "similar": sim_score}

@app.route('/dropout', methods=['POST'])
def dropout():
    # Input retrieve
    data = request.form

    gender = int(data['gender'])
    cast = int(data['cast'])
    disabled = int(data['disabled'])
    att = int(data['att'])
    marks = list(map(int, data['marks'].split()))

    input_val = [gender, cast, disabled, att] + marks
    prediction = dropout_model.predict(np.array(input_val).reshape(1,-1))
    return {'prediction' : int(prediction[0])}

@app.route('/counsel', methods=['POST'])
def counsel():
    data = request.json
    input_val = []
    vals = [
        'sslc',
        'hsc',
        'cgpa',
        'school_type',
        'no_of_miniprojects',
        'no_of_projects',
        'coresub_skill',
        'aptitude_skill',
        'problemsolving_skill',
        'programming_skill',
        'abstractthink_skill',
        'design_skill',
        'first_computer',
        'first_program',
        'lab_programs',
        'ds_coding',
        'technology_used',
        'sympos_attend',
        'sympos_won',
        'extracurricular',
        'learning_style',
        'college_bench',
        'clg_teachers_know',
        'college_performence',
        'college_skills']
    for s in vals:
        input_val.append(int(data[s]))
    prd = counsel_model.predict([input_val])[0]
    role=[
        "Business Analyst",
        "Data Analyst",
        "Software Developer",
        "Software Tester",
        "Technical Support",
        "Technical Writer",
        "UI/UX Designer",
        "Web Developer"]
    return {'role' : role[prd]}

@app.route('/evaluate', methods=['POST'])
def evaluate():
    if 'file1' not in request.files and 'file2' not in request.files:
        flash('No file part')
        return redirect(request.url)

    file = request.files['file1']
    file1 = request.files['file2']

    act_txt = get_text(file)
    que_txt = get_text(file1)
    score = get_eval(act_txt, que_txt)

    return {'act_text': act_txt, 'que_text': que_txt, 'percentage': score[0], 'marks': score[1]}

if __name__ == "__main__":
    app.run(debug='on')
