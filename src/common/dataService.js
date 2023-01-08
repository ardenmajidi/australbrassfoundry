import { db } from '../components/firbase-config';
import { collection,getDoc, getDocs, addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore"
const dataCollectionRef = collection(db, "customers");
class DataService  {

    
     getAllData=()=>
    {
        return getDocs(dataCollectionRef)
    }
   
}

export default new DataService();