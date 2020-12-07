#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import pandas as pd
pd.set_option('display.max_columns', None)

import pandas as pd
from sklearn import preprocessing
from pandas.plotting import scatter_matrix
from matplotlib import pyplot
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier
import joblib
# import numpy as np


# In[2]:


df=pd.read_csv("data/data500.csv")
df.head(30)


# In[3]:


df.columns=["Name","gender","marks_1","caste","marks_2","Disabled","Attendance","marks_3","marks_4","marks_5","marks_6","Dropout"]


# In[4]:


df


# In[5]:


df_final=df[["Name","gender","caste","Disabled","Attendance","marks_1","marks_2","marks_3","marks_4","marks_5","marks_6","Dropout"]]


# In[6]:


df_final


# In[7]:


class MultiColumnLabelEncoder:
    def __init__(self, columns=None):
        self.columns = columns  # array of column names to encode

    def fit(self, X, y=None):
        return self # not relevant here

    def transform(self, X):
        '''
        Transforms columns of X specified in self.columns using
        LabelEncoder(). If no columns specified, transforms all
        columns in X.
        '''
        output = X.copy()
        if self.columns is not None:
            for col in self.columns:
                output[col] = LabelEncoder().fit_transform(output[col])
        else:
            for colname, col in output.iteritems():
                output[colname] = LabelEncoder().fit_transform(col)
        return output

    def fit_transform(self, X, y=None):
        return self.fit(X, y).transform(X)


# In[57]:


def generateModel(file, _id):

    dataset = MultiColumnLabelEncoder(columns=['gender', 'caste']).fit_transform(file)

    array = dataset.values
    X = array[:, 1:10]
    Y = array[:, 11]
    # print(Y)
    Y = Y.astype('int')

    model = DecisionTreeClassifier()
    model.fit(X, Y)
    filename = 'schoolModels/' + _id + '.pkl'
    joblib.dump(model, filename)

    return True


# In[20]:


def get_prediction(data, _id):

    filename = 'schoolModels/' + _id + '.pkl'
    predict_from_joblib = joblib.load(filename)

    X_predict = {}
    for key, value in data.items():
        X_predict[key] = [value]

    X_predict = pd.DataFrame(data, index=[0])

    le = preprocessing.LabelEncoder()

    X_predict['gender'] = le.fit_transform(X_predict['gender'])
    X_predict['caste'] = le.fit_transform(X_predict['caste'])

    X_predict.to_numpy()
    prediction = predict_from_joblib.predict(X_predict)

    return prediction


# In[58]:


df_final = MultiColumnLabelEncoder(columns=['gender', 'caste']).fit_transform(df_final)

array = df_final.values
X = array[:, 1:10]
Y = array[:, 11]
# print(Y)
Y = Y.astype('int')


# In[59]:


X


# In[60]:


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.3, random_state=0)


# In[61]:


X_train


# In[62]:


y_test,len(y_test)


# In[63]:


model = DecisionTreeClassifier()
model.fit(X_train, y_train)


# In[64]:


preds=model.predict(X_test)
preds


# In[65]:


y_test


# In[66]:


df_pred=pd.DataFrame({"original":y_test,"predictions":preds})
df_pred


# In[67]:


from sklearn.metrics import accuracy_score


# In[68]:


print("Accuracy Score : ",round(accuracy_score(y_test,preds),2)*100)


# In[69]:


filename = 'schoolModels/' + 'try1.pkl'
joblib.dump(model, filename)


# In[70]:


X_train[0].shape


# In[72]:


X_train[0]


# ## Custom Input :

# In[71]:


filename = 'schoolModels/' + 'try1.pkl'
model=joblib.load(filename)


# In[73]:


input_val=[1,1,0,3,20,20,10,20,10]


# In[74]:


model.predict(np.array(input_val).reshape(1,-1))


# In[ ]:




