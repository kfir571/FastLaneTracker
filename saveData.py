# saveData.py
import datetime

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore



def some_function(price):



# Use a service account.

    card = cred = credentials.Certificate("serviceAccountKey.json")

    firebase_admin.initialize_app(cred)

    db = firestore.client()

    date = datetime.datetime.now()
    currentDate = date.strftime("%d_%m_%Y")  # Day/Month/Year
    time = date.strftime("%H:%M")            # Hour:Minute


    doc_ref = db.collection(currentDate).document(time)
    doc_ref.set({"price": price})



