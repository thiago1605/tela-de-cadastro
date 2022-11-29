import app from "../firebase/app.js";

import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

console.log(app);

export async function subscribe(subscription) {
  const db = getFirestore(app),
    formCollection = collection(db, "form"),
    docRf = await addDoc(formCollection, subscription);
  return docRf.id;
}
