import PostList from "../../../components/PostsList/PostList";
import PostCreate from "../../../components/PostCreate/PostCreate";
import { useState, useEffect } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { db } from "./../../../firebase/config";

const CenterContentMF = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snap) => {
      setData(
        snap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div className='signInBreakpoint900:grid signInBreakpoint900:col-span-2 space-y-4 max-w-2xl mx-auto signInBreakpoint900:w-full headerBreakpoint1100:col-span-2'>
      <PostCreate />
      <PostList data={data} />
    </div>
  );
};

export default CenterContentMF;
