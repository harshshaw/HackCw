import pdfplumber

def get_text(filename):
    with pdfplumber.open(filename) as pdf:
        words = []
        pages = pdf.pages
        for page in pages:
            page_text = page.extract_text()
            words.append(page_text)

    text = (' '.join(words))

    splitted_text = text.split()
    for word in splitted_text:

        if word.isalnum() == False:
            del word

    final_text = (' '.join(splitted_text))

    return final_text