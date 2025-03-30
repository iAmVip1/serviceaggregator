import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';
import Background from '../../../images/work1.jpg'

export default function Admin() {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
     
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.email || !formData.password) {
        return dispatch(signInFailure('Please fill all the fields'));
      }
      try {
        dispatch(signInStart());
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
    
        if (data.success === false) {
          dispatch(signInFailure(data.message));
          return;
        }
    
        if (res.ok) {
          if (data.isAdmin) {
            // Proceed with admin login
            dispatch(signInSuccess(data));
            navigate('/');
          } else {
            // Handle non-admin login attempt
            dispatch(signInFailure('Access restricted to admins only'));
          }
        }
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
    };
  
  return (
<div className="flex items-center justify-center h-screen bg-cover bg-center "  style={{backgroundImage: `url(${Background})`}} >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
              <OAuth />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition disabled:opacity-80" disabled={loading}
          >
            {
              loading ? 'Loading...' : 'Login'
            }
          </button>
        </form>
        {
            errorMessage && (
              <div className='p-4 mt-2 mb-4 text-sm text-red-600 rounded-lg bg-red-100 " role="alert'>
                <span className="font-medium">Error!</span> {errorMessage}
              </div>
            )
          }
      </div>
    </div>

  )
}


