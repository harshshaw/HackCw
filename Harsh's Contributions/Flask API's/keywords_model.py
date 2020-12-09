import spacy

'''You can use any spacy language or any size for vocab '''
nlp = spacy.load("en")


def textProcessing(doc):
    '''Prepocessing of input text with
    1. tokenisation and Lemmatisation
    2. Removing stop words
    3. Creating and removing custom stop words.
    4. Generating required Vocabulary from input
    5. Preprocessing the input
    '''
    Nouns = []
    Noun_set = []
    trimmed_noun_set = []
    removing_duplicates = []
    arr = []
    vocab = []
    vocab_dict = {}

    doc = nlp(doc.upper())

    for possible_nouns in doc:
        if possible_nouns.pos_ in ["NOUN", "PROPN"]:
            Nouns.append([possible_nouns, [child for child in possible_nouns.children]])

    for i, j in Nouns:
        for k in j:
            Noun_set.append([k, i])

    for i, j in Noun_set:
        if i.pos_ in ['PROPN', 'NOUN', 'ADJ']:
            trimmed_noun_set.append([i, j])

    for word in trimmed_noun_set:
        if word not in removing_duplicates:
            removing_duplicates.append(word)

    for i in removing_duplicates:
        strs = ''
        for j in i:
            strs += str(j) + " "
        arr.append(strs.strip())

    for word in Noun_set:
        string = ''
        for j in word:
            string += str(j) + " "
        vocab.append(string.strip())

    for word in vocab:
        vocab_dict[word] = 0

    for word in arr:
        vocab_dict[word] += 1

    return vocab_dict, arr


def computeTF(wordDict, bow):
    '''Computing TF(Term Frequency of the vocab) '''
    tfDict = {}
    bowCount = len(bow)
    for word, count in wordDict.items():
        tfDict[word] = count / float(bowCount)
    return tfDict


def computeIDF(doclist):
    '''Computing IDF for the vocab '''
    import math
    count = 0
    idfDict = {}
    for element in doclist:
        for j in element:
            count += 1
    N = count

    # count no of documents that contain the word w
    idfDict = dict.fromkeys(doclist[0].keys(), 0)

    for doc in doclist:
        for word, val in doc.items():
            if val > 0:
                idfDict[word] += 1

    # divide N by denominator above
    for word, val in idfDict.items():
        if val == 0:
            idfDict[word] = 0.0
        else:
            idfDict[word] = math.log(N / float(val))

    return idfDict


def computeTfidf(tf, idf):
    '''Computing TF-IDF for the words in text '''
    tfidf = {}
    sorted_list = []
    for word, val in tf.items():
        tfidf[word] = val * idf[word]

    ranking_list = sorted(tfidf.items(), reverse=True, key=lambda kv: (kv[1], kv[0]))[:10]
    for i, _ in ranking_list:
        sorted_list.append(i)

    return sorted_list
