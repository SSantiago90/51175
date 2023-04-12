import { initializeApp } from "firebase/app";
import { getFirestore, orderBy, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch } from "firebase/firestore";

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

  const q = query(productsRef, orderBy("index"));
  const productsSnap = await getDocs(q);
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

export async function createOrder(order) {
  const collectionOrdersRef = collection(db, "orders");
  const response = await addDoc(collectionOrdersRef, order);
  return response.id; // resolve(response.id)
}

export async function exportData() {
  const products = [
    {
      id: 1,
      title: "Leskovac",
      category: "Serbia",
      price: 9960.69,
      stock: 64,
      offer: 15,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Leskovacpanoramic.jpg/400px-Leskovacpanoramic.jpg",
    },
    {
      id: 2,
      title: "Okuta",
      category: "Nigeria",
      price: 7017.59,
      stock: 45,
      offer: 25,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/7c/31/d5/kajuru-castle.jpg?w=700&h=-1&s=1",
    },
    {
      id: 3,
      title: "Akure",
      category: "Nigeria",
      price: 5553.04,
      stock: 0,
      img: "https://i0.wp.com/www.travelwithapen.com/wp-content/uploads/2017/07/Agbokim-Waterfalls-scaled.jpg",
    },
    {
      id: 4,
      title: "Wola Rębkowska",
      category: "Poland",
      price: 7318.24,
      stock: 0,
      img: "https://www.poland.travel/images/en-EN/unesco/KrakowWawel-540.jpg",
    },
    {
      id: 5,
      title: "Jiamaogong",
      category: "China",
      price: 4835.13,
      stock: 225,
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/08/Intrepid-Travel-china_shanghai_yuyuan-garden-city.jpg",
    },
    {
      id: 6,
      title: "Kombësi",
      category: "Albania",
      price: 4521.85,
      stock: 382,
      img: "https://deih43ym53wif.cloudfront.net/saranda-albania-shutterstock_204912118_fcdee299f8.jpeg",
    },
    {
      id: 7,
      title: "Al Lagowa",
      category: "Sudan",
      price: 7474.76,
      stock: 103,
      img: "https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Sudan-MeroePyramids-118344388-urosr-copy.jpg",
    },
    {
      id: 8,
      title: "Sumberrejo",
      category: "Indonesia",
      price: 6819.1,
      stock: 403,
      img: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/homepage-hightlight-destination/JF-labuanbajo-mobile.jpg",
    },
    {
      id: 10,
      title: "Dapchi",
      category: "Nigeria",
      price: 2630.42,
      stock: 377,
      img: "https://ocdn.eu/images/pulscms/MWY7MDA_/998753d28ebd13c7796c13ebf6eeb4a8.jpeg",
    },
    {
      id: 11,
      title: "La’ershan",
      category: "China",
      price: 4742.41,
      stock: 414,
      img: "https://media.cnn.com/api/v1/images/stellar/prod/230104122913-03-china-reopening-tourism-thailand.jpg?c=original",
    },
    {
      id: 12,
      title: "Yakarta",
      category: "Indonesia",
      price: 5526.74,
      stock: 40,
      img: "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg",
    },
  ];

  const collectionRef = collection(db, "products");

  /* products.forEach( item => {...}) */
  for (let item of products) {
    item.index = item.id;
    delete item.id;
    const response = await addDoc(collectionRef, item);
    console.log("producto exportado con ID: " + response.id);
  }
}

export async function exportDataWithBatch() {
  const products = [
    {
      id: 1,
      title: "Leskovac",
      category: "Serbia",
      price: 9960.69,
      stock: 64,
      offer: 15,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Leskovacpanoramic.jpg/400px-Leskovacpanoramic.jpg",
    },
    {
      id: 2,
      title: "Okuta",
      category: "Nigeria",
      price: 7017.59,
      stock: 45,
      offer: 25,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/7c/31/d5/kajuru-castle.jpg?w=700&h=-1&s=1",
    },
    {
      id: 3,
      title: "Akure",
      category: "Nigeria",
      price: 5553.04,
      stock: 0,
      img: "https://i0.wp.com/www.travelwithapen.com/wp-content/uploads/2017/07/Agbokim-Waterfalls-scaled.jpg",
    },
    {
      id: 4,
      title: "Wola Rębkowska",
      category: "Poland",
      price: 7318.24,
      stock: 0,
      img: "https://www.poland.travel/images/en-EN/unesco/KrakowWawel-540.jpg",
    },
    {
      id: 5,
      title: "Jiamaogong",
      category: "China",
      price: 4835.13,
      stock: 225,
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/08/Intrepid-Travel-china_shanghai_yuyuan-garden-city.jpg",
    },
    {
      id: 6,
      title: "Kombësi",
      category: "Albania",
      price: 4521.85,
      stock: 382,
      img: "https://deih43ym53wif.cloudfront.net/saranda-albania-shutterstock_204912118_fcdee299f8.jpeg",
    },
    {
      id: 7,
      title: "Al Lagowa",
      category: "Sudan",
      price: 7474.76,
      stock: 103,
      img: "https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Sudan-MeroePyramids-118344388-urosr-copy.jpg",
    },
    {
      id: 8,
      title: "Sumberrejo",
      category: "Indonesia",
      price: 6819.1,
      stock: 403,
      img: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/homepage-hightlight-destination/JF-labuanbajo-mobile.jpg",
    },
    {
      id: 10,
      title: "Dapchi",
      category: "Nigeria",
      price: 2630.42,
      stock: 377,
      img: "https://ocdn.eu/images/pulscms/MWY7MDA_/998753d28ebd13c7796c13ebf6eeb4a8.jpeg",
    },
    {
      id: 11,
      title: "La’ershan",
      category: "China",
      price: 4742.41,
      stock: 414,
      img: "https://media.cnn.com/api/v1/images/stellar/prod/230104122913-03-china-reopening-tourism-thailand.jpg?c=original",
    },
    {
      id: 12,
      title: "Yakarta",
      category: "Indonesia",
      price: 5526.74,
      stock: 40,
      img: "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg",
    },
  ];

  const collectionRef = collection(db, "products");
  const batch = writeBatch(db);

  for (let item of products) {
    item.index = item.id;
    delete item.id;
    const newDoc = doc(collectionRef);

    batch.set(newDoc, item);
  }

  await batch.commit();
}
