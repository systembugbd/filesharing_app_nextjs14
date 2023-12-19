"use client";

import { app } from "/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import FileShareForm from "./_components/FileShareForm";

const FilePreview = ({ params }) => {
  const [file, setFile] = useState();

  useEffect(() => {
    params?.fileId && getData();
  }, [params.fileId]);

  const getData = async () => {
    const db = getFirestore(app);
    const docRef = doc(db, "fileSharingUpload", params.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setFile("No such document!");
    }
  };
  return (
    <div>
      <FileShareForm file={file} />
    </div>
  );
};

export default FilePreview;
