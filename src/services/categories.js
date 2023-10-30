import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config/firebase";

export const getAllCategories = () => {
    return getDocs(collection(db, 'categories'))
    .then((snapshots) =>
    snapshots.docs
    .map((snapshot) => ({ id: snapshot.id, ...snapshot.data() })))
}