import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkL52vR79UkFb3TlkFQX_ylT9oWu56XWM",
  authDomain: "react51175.firebaseapp.com",
  projectId: "react51175",
  storageBucket: "react51175.appspot.com",
  messagingSenderId: "1060703942451",
  appId: "1:1060703942451:web:8264527158d82baac7f046",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems() {
  const productsRef = collection(db, "products");
  const productsSnap = await getDocs(productsRef);
  const documents = productsSnap.docs;

  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return docsData;
}

export async function getSingleItem(idURL) {
  //referencia
  const docRef = doc(db, "products", idURL);
  //snapshot
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getItemsByCategory(categoryid) {
  const productsRef = collection(db, "products");

  /* Crear una consutlta A: productosREf  CUANDO se cumpla where( if( )) */
  const q = query(productsRef, where("category", "==", categoryid));

  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;

  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return docsData;
}
