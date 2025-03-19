import React, { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';


export default function ApplicaionForm() {
    const [files, setFiles] = useState([]);
    const [formData, setFromData] = useState({
        imageUrls: [],
    })
    const [imageUploadError, setImageUploadError] = useState(false);
    const [uploading, setUploading] = useState(false);
    console.log(formData);
   
    const handleImageSubmit = (e) => {
        if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
            setUploading(true);
            setImageUploadError(false);
            const promises= [];
            for (let i = 0; i < files.length; i++){
                promises.push(storeImage(files[i]));
            }
 

            Promise.all(promises).then((urls) => {
                setFromData({ ...formData, imageUrls: formData.imageUrls.concat(urls) 
                });
                setImageUploadError(false);
                setUploading(false);
            })
            .catch((err) => {

                setImageUploadError ('Image upload failed (2 MB max per image)');
                setUploading(false);
            })
 

    }else{

       setImageUploadError ('You can only upload 6 images ');
        setUploading(false);
    }

};
 

    const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref (storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = 
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
 

                (error)=>{
                    reject(error);
                },
                ()=>{
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=> {
                        resolve(downloadURL);
                    });
                }

            )
        });
    }
 

    const handleRemoveImage = (index) => {
        setFromData({
            ...formData, imageUrls: formData.imageUrls.filter((_, i) => i 
            !== index), 
        })
    }
  return (
    <main className='p-3 max-w-4xl mx-auto min-h-screen'>

        <h1 className=' text-3xl font-semibold text-center my-7 '>Documents and Details </h1>

        <form className='flex flex-col sm:flex-row gap-4' >
        <div className="flex flex-col gap-4 flex-1 ">
            <input type="text" placeholder='City' className='border-gray-300 p-3 rounded-lg text-black' id='city' 
            required />

             <select className='border-gray-300 p-3 rounded-lg text-black'>
              <option value="">Select your city</option>
              <option value="chino">chino</option>
              <option value="uganada">uganada</option>
              <option value="nigeria">nigeria</option>

              </select>   

              <input type="text" placeholder='Address' className='border-gray-300 p-3 rounded-lg text-black' id='address' 
            required />

            <input type="number" placeholder='Contact Number' 
            className='border-gray-300 p-3 rounded-lg text-black' 
            id='phoneNumber1' 
            required />
 

            <input type="number" placeholder='Contact Number 2' 
            className='border-gray-300 p-3 rounded-lg text-black' 
            id='phoneNumber2' 
            required />

<div className="flex gap-6 flex-wrap">
                

                {/* categories -6 */}
                {/* Plumber */}
                <div className="flex gap-2 flex-wrap items-center ">
                    <input type="checkbox" id='plumber' className='w-5'  />
                    <span>Plumber</span>
                </div>

                
                {/* carpenter */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='carpenter' className='w-5'  />
                    <span>Carpenter</span>
                </div>
                
                {/* electrician  */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='electrician' className='w-5'  />
                    <span>Electrician</span>
                </div>

                {/* maid  */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='maid' className='w-5'  />
                    <span>Maid</span>
                </div>

                {/* waterSupply  */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='waterSupply' className='w-5'  />
                    <span>Water Supply</span>
                </div>

                {/* laundryMan  */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='laundryMan' className='w-5'  />
                    <span>Laundry Man</span>
                </div>

                
           </div>
        </div>
 

        <div className="flex flex-col flex-1 gap-4">
 

            <p className='font-semibold'>Images:
 

            <span className='font-normal text-gray-500 ml-2'>Please upload your certificates or license
 

                </span>    
 

            </p>
 

            <div className="flex gap-4">
 

                <input className='p-1 border border-gray-300 rounded w-full' 
                    onChange={(e)=>setFiles(e.target.files)}
                 type='file' id='images' accept='image/*' />
 

                <button
                type='button'
                disabled={uploading}
                onClick={handleImageSubmit} className='p-2 text-green-500 border border-green-700 rounded 
                uppercase hover:shadow-lg disabled:opacity-80' >
                {uploading ? 'Uploading...' : 'Upload'}
                 </button>
            </div>
 
            <p className='text-red-700 text-sm'>{ imageUploadError && imageUploadError }</p>

 

{
    formData.imageUrls.length > 0 && formData.imageUrls.map ((url, index) => (
        <div 
        key={url}
        className="flex justify-between p-3 border items-center">
           <img src={url} alt='listing image' className='w-20 h-20 object-contain rounded-lg' />
           <button type='button' onClick={ () => handleRemoveImage(index)} className='p-3 text-red-700
           rounded-lg uppercase hover:opacity-60'>
            Delete
            </button>
        </div>
    ))
}   

            <button className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-2 rounded-full
            cursor-pointer hover:text-white' type='submit' >
          Submit
         </button>
 

        </div>
 

             </form>
 

        
 

        </main>
  )
}
