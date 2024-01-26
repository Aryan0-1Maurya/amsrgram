import { useState } from "react";
import { db, storage } from "../firebase";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { uuidv4 } from "@firebase/util";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

export function usePost(id) {
  const q = doc(db, "posts", id);
  const [post, isLoading, error] = useDocumentData(q);
  if (error) throw error;
  return { post, isLoading };
}

export function usePosts(uid = null) {
  const q = uid
    ? query(
        collection(db, "posts"),
        orderBy("date", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, "posts"), orderBy("date", "desc"));
  const [posts, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { posts, isLoading };
}

export function useToggleLike({ id, isLiked, uid }) {
  const [isLoading, setLoading] = useState(false);

  async function toggleLike() {
    setLoading(true);
    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    setLoading(false);
  }
  return { toggleLike, isLoading };
}

export function useAddPost() {
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  async function addPost(post) {
    setLoading(true);
    const id = uuidv4();

    const fileRef = ref(storage, "pictures/" + id);
    await uploadBytes(fileRef, file);
    const pictureURL = await getDownloadURL(fileRef);

    await setDoc(doc(db, "posts", id), {
      ...post,
      id,
      picture: pictureURL,
      date: Date.now(),
      likes: [],
    });
    setLoading(false);
  }

  return {
    addPost,
    isLoading,
    fileURL: file && URL.createObjectURL(file),
    setFile,
  };
}

export function useDeletePost(id) {
  const [isLoading, setLoading] = useState(false);

  async function deletePost() {
    const res = window.confirm("Are you sure you want to delete this post?");
    if (res) {
      setLoading(true);

      // Delete post document
      await deleteDoc(doc(db, "posts", id));

      // Delete post's picture
      const storage = getStorage();
      const fileRef = ref(storage, "pictures/" + id);
      deleteObject(fileRef, where("postID", "==", id));

      // Delete comments
      const q = query(collection(db, "comments"), where("postID", "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));

      setLoading(false);
    }
  }
  return { deletePost, isLoading };
}
