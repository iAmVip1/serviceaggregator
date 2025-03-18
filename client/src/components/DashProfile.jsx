import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const filePickerRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setImageFileUploadError('File size exceeds 2MB');
        return;
      }
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    console.log('Uploading image ...');
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError('Could not upload image (File must be less than 2MB)');
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          // You can dispatch here to update Redux state if necessary
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., updating user details)
  };

  return (
    <div className="max-w-lg mx-auto p-6 w-full bg-white shadow-md rounded-md">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Profile Picture */}
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={() => filePickerRef.current.click()}>
            {imageFileUploadProgress && (
              <CircularProgressbar
                value={imageFileUploadProgress || 0}
                text={`${imageFileUploadProgress}%`}
                strokeWidth={5}
                styles={{
                  root: { width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 },
                  path: { stroke: `rgba(62, 152, 199, ${imageFileUploadProgress / 100})` },
                }}
              />
            )}
            <img
              src={imageFileUrl || currentUser.profilePicture}
              alt="user"
              className="rounded-full w-full h-full object-cover border-4 border-gray-300"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={filePickerRef}
            hidden
          />
          {imageFileUploadError && (
            <div className="p-4 mt-2 mb-4 text-sm text-red-600 rounded-lg bg-red-100" role="alert">
              <span className="font-medium">Error!</span> {imageFileUploadError}
            </div>
          )}
        </div>

        {/* Username */}
        <input
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
          className="p-2 border rounded-md w-full"
        />

        {/* Email */}
        <input
          type="text"
          id="email"
          placeholder="Email"
          defaultValue={currentUser.email}
          className="p-2 border rounded-md w-full"
        />

        {/* Password */}
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="p-2 border rounded-md w-full"
        />

        {/* Update Button */}
        <button type="submit" className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Update
        </button>
      </form>

      {/* Account Actions */}
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer hover:underline">Delete Account</span>
        <span className="cursor-pointer hover:underline">Sign Out</span>
      </div>
    </div>
  );
}
