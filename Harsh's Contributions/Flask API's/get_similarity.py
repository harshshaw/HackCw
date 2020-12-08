from nltk import word_tokenize          
from nltk.stem import WordNetLemmatizer

import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import numpy as np
import nltk
from nltk.corpus import stopwords

nltk.download('punkt')
stop_words = set(stopwords.words('english'))

def get_similarity_score(actual,query):
    class LemmaTokenizer:
        
   
        ignore_tokens = [',', '.', ';', ':', '"', '``', "''", '`']
        def __init__(self):
            self.wnl = WordNetLemmatizer()
        def __call__(self, doc):
            return [self.wnl.lemmatize(t) for t in word_tokenize(doc) if t not in self.ignore_tokens]

    tokenizer=LemmaTokenizer()
    
    tokens=str(actual)
    #tokenizer(tokens)
    
    documents=tokens
    search_terms = str(query)
    # search_terms = 'sewing machine'

    # Initialise TfidfVectorizer with the LemmaTokenizer. Also need to lemmatize the stop words as well
    token_stop = tokenizer(' '.join(stop_words))
    vectorizer = TfidfVectorizer(stop_words=token_stop, tokenizer=tokenizer)

    # Calculate the word frequency, and calculate the cosine similarity of the search terms to the documents

    
        
    vectors = vectorizer.fit_transform([search_terms] + [documents])
    cosine_similarities = linear_kernel(vectors[0:1], vectors).flatten()
    document_scores = [item.item() for item in cosine_similarities[1:]]  # convert back to native Python dtypes

    scores = [(score) for score in zip(document_scores)]
    perc_scores=scores[0][0]*100
    res=" Corupus Similarity Ratio:" + str(round(perc_scores,2))+"%"

    return res