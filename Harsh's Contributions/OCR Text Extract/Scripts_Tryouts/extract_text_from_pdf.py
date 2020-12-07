# to Get Text Data from all Pages from the pdfs:
import os
import requests
import pdfplumber


def get_text_ocr_pdf(path):
    with pdfplumber.open(path) as pdf:
        for i in pdf.pages:
            page = i.extract_text()
            print(page)
