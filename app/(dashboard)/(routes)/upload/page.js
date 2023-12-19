"use client";

import UploadForm from "./_components/UploadForm";
import { app } from "/firebaseConfig";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProgressBar from "./_components/ProgressBar";
import AlertMessage from "./_components/AlertMessage";
import UploadSuccess from "./_components/UploadSuccess";
import { useUser } from "@clerk/nextjs";
import { GenerateString } from "./_components/GenerateString";
import { useRouter } from "next/navigation";
/**
 * File upload component
 * @returns
 */
const Upload = () => {
  const [progressCount, setProgressCount] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const { user } = useUser();
  const db = getFirestore(app);
  const storage = getStorage(app);
  const router = useRouter();
  const [fileId, setFileId] = useState();

  //File upload function for firebase
  const uploadFile = (file) => {
    const storageRef = ref(storage, `filesharing/${file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, file?.type);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgressCount(progress);
      },
      (error) => {
        console.log("Upload Error: ", error);
      },
      () => {
        // Handle successful uploads on complete, For instance, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveFile(file, downloadURL);
        });
      }
    );
    setProgressCount(0);
  };

  // const currentTime = new Date();
  // console.log("Current time:", currentTime);

  const saveFile = async (file, fileUrl) => {
    const docId = GenerateString();
    setFileId(docId);
    try {
      await setDoc(doc(db, "fileSharingUpload", docId), {
        name: file?.name,
        size: file?.size,
        type: file?.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        password: "",
        id: docId,
        sortUrl: process.env.NEXT_PUBLIC_SHORT_URL + docId,
      });
    } catch (error) {
      console.log(error);
    }
    //Set doc id for file-preview page to download and email the file link.
  };
  // const endTime = new Date();
  // console.log("Total time:", endTime - currentTime);

  useEffect(() => {
    progressCount == 100 && setUploadCompleted(true);
  }, [progressCount == 100]);

  useEffect(() => {
    uploadCompleted &&
      fileId &&
      setTimeout(() => {
        setUploadCompleted(false);
        router.push(`/file-preview/${fileId}`);
      }, 10);
  }, [uploadCompleted == true, fileId]);

  return (
    <div className="flex justify-center flex-col w-full items-center">
      {!uploadCompleted ? (
        <UploadForm
          UploadBtnClickHandle={(file) => uploadFile(file)}
          progressCount={progressCount}
          uploadCompleted={uploadCompleted}
        />
      ) : (
        <UploadSuccess />
      )}
    </div>
  );
};

export default Upload;
