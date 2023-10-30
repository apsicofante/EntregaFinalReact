import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where, deleteDoc } from 'firebase/firestore'
import { db } from "../firebase-config/firebase";

export const getAllProducts = () => {
    return getDocs(collection(db, 'products'))
    .then((snapshots) =>
    snapshots.docs
    .map((snapshot) => ({ id: snapshot.id, ...snapshot.data() })))
}

export const getItem = async(id) => {
  const item = await doc(db, 'products', id)
  return getDoc(item)
}

export const getItems = (category) => {
  const items = query(collection(db, 'products'),
    category && where('category', '==', category)
  )
  return getDocs(items)
}

export const addItem = (data) => {
  const category = collection(db, 'products')
  return addDoc(category, data)
}

export const updateItem = (id, data) => {
  const category = doc(db, 'products', id)
  return updateDoc(category, data)
}

export const removeItem = (id) => {
  const category = doc(db, 'products', id)
  return deleteDoc(category)
}