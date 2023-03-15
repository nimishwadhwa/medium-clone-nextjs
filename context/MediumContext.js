import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { auth, provider, db } from "../firebase";
import { createContext, useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); //current user

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));
      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );

      // const querySnapshot = onSnapshot(collection(db, "articles"), (snap) => {
      //   const dataArray = [];
      //   snap.forEach((doc) => {
      //     const data = doc.data();
      //     if (data.postDate) {
      //       // check if postDate exists
      //       const date = data.postDate; // convert Timestamp to Date
      //       dataArray.push({
      //         id: doc.id,
      //         data: {
      //           ...data,
      //           postDate: date, // replace Timestamp with Date
      //         },
      //       });
      //     } else {
      //       dataArray.push({
      //         id: doc.id,
      //         data: {
      //           ...data,
      //         },
      //       });
      //     }
      //   });
      // setPosts(dataArray);
      // });
    };
    getPosts();
  }, []);
  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      name: user.displayName,
      imageURL: user.photoURL,
      followerCount: 0,
    });
  };
  const handleUserAuth = async () => {
    try {
      const userData = await signInWithPopup(auth, provider);
      const user = userData.user;
      setCurrentUser(user);
      addUserToFirebase(user);
    } catch (error) {
      //console.error(error);
    }
  };

  return (
    <MediumContext.Provider
      value={{ posts, users, handleUserAuth, currentUser }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
