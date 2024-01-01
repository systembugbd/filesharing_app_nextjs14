"use client";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./../../../../firebaseConfig";
import { useUser } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { GalleryThumbnails, ListIcon } from "lucide-react";

import GetAllFileByUser from "./_components/GetAllFileByUser";

const Files = () => {
  const { user } = useUser();
  const [userEmail, setUserEmail] = useState();
  const [data, setData] = useState([]);
  const [changeStyle, setChnageStyle] = useState();
  const loginUser = user?.primaryEmailAddress?.emailAddress;
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  if (!isLoaded || !userId) {
    return null;
  }

  const db = getFirestore(app);
  const loginUserEmailAddress = user?.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    if (sessionId && isLoaded) {
      getListOfImageByUser();
      setUserEmail(loginUserEmailAddress);
    }
  }, [sessionId, isLoaded, user]);

  const getListOfImageByUser = async () => {
    const querySnapshot = await getDocs(
      collection(db, process.env.NEXT_PUBLIC_DB_COLLECTION_NAME)
    );

    const userData = [];

    querySnapshot.forEach((doc) => {
      const email = doc.data().userEmail;
      // console.log(email, userEmail);
      // if (email === userEmail) {
      //   userData.push({ id: doc.id, ...doc.data() });
      // }
      userData.push({ id: doc.id, ...doc.data() });
    });

    setData(userData);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div
        onClick={() => setChnageStyle(!changeStyle)}
        className="bg-green-400 w-10 h-10 justify-center items-center flex rounded-full text-white hover:bg-purple-400 cursor-pointer"
      >
        {changeStyle ? <ListIcon /> : <GalleryThumbnails />}
      </div>
      <div
        className={`${
          changeStyle
            ? "flex flex-col justify-center items-center md:flex-row flex-wrap"
            : "flex flex-col w-full justify-center items-center"
        }`}
      >
        {data.map(
          (item) =>
            loginUser === item?.userEmail && (
              <GetAllFileByUser data={item} changeStyle={changeStyle} />
            )
        )}
      </div>
    </div>
  );
};

export default Files;
