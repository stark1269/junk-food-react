import { collection, addDoc } from "firebase/firestore";
import {db} from './config';

export const addToOrder = async (order) => {
  await addDoc(collection(db, "orders"), order);
};