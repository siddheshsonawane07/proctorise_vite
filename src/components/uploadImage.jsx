import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { auth, app } from "../utils/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const UploadImage = ({ webcamRef}) => {
  const storage = getStorage(app);
  const [user] = useAuthState(auth);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // const user = result.user;
      console.log(user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const capture = () => {
    const video = webcamRef.current.video;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageSrc = canvas.toDataURL("image/png");
    setImage(imageSrc);
  };

  const uploadImageFunction = async () => {
    if (image) {
      try {
        setUploading(true);

        const storageRef = ref(storage, `/images/${user.email}`);

        const imageBlob = await fetch(image);
        const imageBytes = await imageBlob.blob();

        const uploadTask = await uploadBytesResumable(storageRef, imageBytes);

        uploadTask.task.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            console.error(error);
          },
          () => {
            getDownloadURL(uploadTask.task.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
            });
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      {/* <Webcam ref={webcamRef} screenshotFormat="image/png" /> */}
      <button onClick={capture}>Capture Photo</button>
      {image && (
        <>
          <button onClick={uploadImageFunction}> Upload Photo </button>
        </>
      )}

      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
    </div>
  );
};

export default UploadImage;