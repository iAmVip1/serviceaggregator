import React, { useRef, useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


export default function ApplicaionForm() {
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const {currentUser} = useSelector(state => state.user)
    const [formData, setFromData] = useState({
        imageUrls: [],
        city: '',
        address: '',
        workType: null,
        phoneNumber1: '',
        phoneNumber2: '',
        experience: '',
       
        
    })
    const [imageUploadError, setImageUploadError] = useState(false);
    // const [selects, setSelects] = useState();
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(formData);
   
    const handleImageSubmit = (e) => {
        if (files.length > 0 && files.length + formData.imageUrls.length < 2) {
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

       setImageUploadError ('You can only upload 1 image ');
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
   
    const handleChange = (e) => {

        if (e.target.id === 'plumber' || e.target.id === 'maid' ||
            e.target.id === 'electrician' || e.target.id === 'carpenter' ||
            e.target.id === 'waterSupply' || e.target.id === 'laundryMan'
         ) {
         setFromData({
            ...formData,
            workType: e.target.id 
          })   
         }
 
            if (e.target.type === 'number' || e.target.type === 'text'|| e.target.type === 'select' ) {
            setFromData({
               ...formData,
               [e.target.id]: e.target.value
            })   
           } 
    };

    const handleSubmit = async (e) => {

 

        e.preventDefault();
     
    
        try {
     
    
            if (formData.imageUrls.length < 1) return setError('You must upload at least one image')
    
                if (formData.phoneNumber1.length < 10) return setError('Phone numbers must be 10 numbers')
                if (formData.phoneNumber2.length < 10) return setError('Phone numbers must be 10 numbers')
     
            setLoading(true);
            setError(false);
     
    
            const res = await fetch ('/api/application/create', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
     
    
                body: JSON.stringify({
                    ...formData,
                    userRef: currentUser._id,
                    userMail: currentUser.email,
                    userImage: currentUser.profilePicture,
                    username: currentUser.username,
    
                }),
            });
     
            const data = await res.json();
    
            setLoading(false);
            if (data.success === false){
                setError(data.message);
            }
     
    
            navigate (`/application/${data._id}`)
    
        } catch (error) {
    
            setError(error.message);
            setLoading(false);
    
        }
    
    }
     
    


  return (
    <main className='p-3 max-w-4xl mx-auto min-h-screen'>

        <h1 className=' text-3xl font-semibold text-center my-7 '>Documents and Details </h1>

        <form className='flex flex-col sm:flex-row gap-4' onSubmit={handleSubmit} >
        <div className="flex flex-col gap-4 flex-1 ">
            <input type="text" placeholder='City' className='border-gray-300 p-3 rounded-lg text-black' id='city' onChange={handleChange}
            value={formData.city} required />

             {/* <select value={formData.selects} id='woozie'
              className='border-gray-300 p-3 rounded-lg text-black' onChange={e=>setSelects(e.target.value)} required>
              <option value="">Select your city</option>
              <option >chino</option>
              <option >uganada</option>
              <option >nigeria</option>

              </select>    */}

              <input type="text" placeholder='Address' className='border-gray-300 p-3 rounded-lg text-black' id='address' onChange={handleChange}
            value={formData.address}
            required />

            <input type="number" placeholder='Contact Number' 
            className='border-gray-300 p-3 rounded-lg text-black' 
            id='phoneNumber1' onChange={handleChange} value={formData.phoneNumber1}
            required />
 

            <input type="number" placeholder='Contact Number 2' 
            className='border-gray-300 p-3 rounded-lg text-black' 
            id='phoneNumber2' onChange={handleChange} value={formData.phoneNumber2}
            required />

<label className=" font-bold text-gray-800 bg-amber-400 rounded-3xl text-center">Work Type</label>
<div className="flex gap-6 flex-wrap">
                

                {/* categories -6 */}
                {/* Plumber */}
                <div className="flex gap-2 flex-wrap items-center ">
                    <input type="checkbox" id='plumber' className='w-5'
                    onChange={handleChange} checked={formData.workType === 'plumber'}  />
                    <span>Plumber</span>
                </div>

                
                {/* carpenter */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='carpenter' className='w-5' 
                    onChange={handleChange} checked={formData.workType === 'carpenter'} />
                    <span>Carpenter</span>
                </div>
                
                {/* electrician  */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='electrician' className='w-5' 
                    onChange={handleChange} checked={formData.workType === 'electrician'} />
                    <span>Electrician</span>
                </div>

                {/* maid  */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='maid' className='w-5' 
                    onChange={handleChange} checked={formData.workType === 'maid'} />
                    <span>Maid</span>
                </div>

                {/* waterSupply  */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='waterSupply' className='w-5' 
                    onChange={handleChange} checked={formData.workType === 'waterSupply'} />
                    <span>Water Supply</span>
                </div>

                {/* laundryMan  */}
                <div className="flex gap-2 flex-wrap items-center">
                    <input type="checkbox" id='laundryMan' className='w-5' 
                    onChange={handleChange} checked={formData.workType === 'laundryMan'} />
                    <span>Laundry Man</span>
                </div>

                
           </div>
        </div>
 

        <div className="flex flex-col flex-1 gap-4">
                
        <input type="number" placeholder='Experience' 
            className='border-gray-300 p-3 rounded-lg text-black' 
            id='experience' onChange={handleChange} value={formData.experience}
            required />

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
           <img src={url} alt='application image' className='w-20 h-20 object-contain rounded-lg' />
           <button type='button' onClick={ () => handleRemoveImage(index)} className='p-3 text-red-700
           rounded-lg uppercase hover:opacity-60'>
            Delete
            </button>
        </div>
    ))
}   

            <button  disabled={loading || uploading}
             className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-2 rounded-full
            cursor-pointer hover:text-white' type='submit' >
          {loading ? 'Submitting...' : 'Submit'}
         </button>
         {error && <p className='text-red-700 text-sm'>{error}</p>}

        </div>
 
             </form>
 
        </main>
  )
}
