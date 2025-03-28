import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Search() {
    const navigate = useNavigate();
    const [sidebardata, setSidebardata] = useState({
        searchTerm: '',
        worktype: 'all',
        sort: 'created_at',
        order: 'desc',
    })
    
    

    const [loading, setLoading] = useState(false);
    const [applications, setApplications] = useState([]);

    console.log(applications);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        const worktypeFromUrl = urlParams.get('worktype');
        const sortFromUrl = urlParams.get('sort');
        const orderFromUrl = urlParams.get('order');

        if ( searchTermFromUrl ||
            worktypeFromUrl ||
            sortFromUrl ||
            orderFromUrl ) {
                setSidebardata({
                    searchTerm: searchTermFromUrl || '',
                    worktype: worktypeFromUrl || 'all',
                    sort: sortFromUrl || 'created_at',
                order: orderFromUrl || 'desc',
                })
        }
        const fetchApplications = async () => {
            setLoading(true);
            const searchQuery = urlParams.toString();
            const res = await fetch(`/api/application/get?${searchQuery}`);
            const data = await res.json();
            setApplications(data);
            setLoading(false);

        }
        fetchApplications();

    }, [location.search])

    const handleChange = (e) => {

        if (
            e.target.id === 'all' || e.target.id === 'plumber' ||
            e.target.id === 'carpenter' || e.target.id === 'electrician' ||
            e.target.id === 'maid' || e.target.id === 'laundryMan' ||
            e.target.id === 'waterSupply' 
          ) {
            setSidebardata({ ...sidebardata, type: e.target.id });
          }

          if (e.target.id === 'searchTerm') {
            setSidebardata({ ...sidebardata, searchTerm: e.target.value });
          }

          if (e.target.id === 'sort_order') {
            const sort = e.target.value.split('_')[0] || 'created_at';
      
            const order = e.target.value.split('_')[1] || 'desc';
      
            setSidebardata({ ...sidebardata, sort, order });
          }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams();
        urlParams.set('searchTerm', sidebardata.searchTerm);
        urlParams.set('worktype', sidebardata.worktype);
        urlParams.set('sort', sidebardata.sort);
        urlParams.set('order', sidebardata.order);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    }

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
        <div className="p-7 border-b-1 md:border-r-1 md:min-h-screen
         ">
            <form className='flex flex-col gap-8'
            onSubmit={handleSubmit}>
                <div className="flex items-center gap-2">
                    <label className='whitespace-nowrap font-semibold' >
                        Searched For:
                    </label>

                    <input type="text" id='searchTerm' placeholder='Search...' 
                    className='border rounded-lg p-3 w-full text-black'
                    value={sidebardata.searchTerm}
                    onChange={handleChange} />
                </div>


 

                {/* Work Type     */}
 

                <div className="flex gap-2 flex-wrap">
 

                    <label className='font-semibold'>
                        Services: 
                    </label>
 
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id='all' 
                        className='w-5'
                        onChange={handleChange}
                        checked={sidebardata.worktype === 'all'}
                        />
                        <span >All</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id='plumber' 
                        className='w-5'
                        onChange={handleChange}
                        checked={sidebardata.worktype === 'plumber'} />
                        <span >Plumber</span>
                    </div>
 

                   </div>

                    <div className="flex gap-2 flex-wrap ml-2">

                    <div className="flex gap-2 items-center">
 
 
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id='carpenter' 
                        className='w-5'
                        onChange={handleChange}
                        checked={sidebardata.worktype === 'carpenter'}
                         />
                        <span >Carpenter </span>
                    </div>
 

                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id='electrician' 
                        className='w-5'
                        onChange={handleChange}
                        checked={sidebardata.worktype === 'electrtician'}
                        />
                        <span >Electrician</span>
                    </div>

                        <input type="checkbox" id='maid' 
                         className='w-5'
                         onChange={handleChange}
                        checked={sidebardata.worktype === 'maid'}
                         />
                         <span >Maid</span>
                     </div>
                   </div>
 
                    <div className="flex gap-2 flex-wrap ml-2">
                
                    <div className="flex gap-2 items-center">
 

                 <input type="checkbox" id='laundryMan' 
                     className='w-5'
                     onChange={handleChange}
                        checked={sidebardata.worktype === 'laundryMan'}
                     />
                     <span >Laundry Man</span>

                </div>

                    <div className="flex gap-2 items-center">
 
                     <input type="checkbox" id='waterSupply' 
                    className='w-5'
                    onChange={handleChange}
                        checked={sidebardata.worktype === 'waterSupply'}
                    />
             <span >Water Supply</span>
                    </div>

                   </div>

                <div className="flex items-center gap-2">
                    <label className='font-semibold'>Sorted By:</label>
                    <select
                    onChange={handleChange}
                    defaultValue={'created_at_desc'}
                    id="sort_order" 
                    className='text-black border rounded-lg p-3 pr-8 '>

                        <option value="createdAt_desc">Latest</option>
                        <option value="createdAt_asc">Oldest</option>

                    </select>
 

                </div>
 

                <button className='bg-slate-500 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Search

          </button>
 
            </form>

        </div>
 

        <div className="flex-1">

            <h1 className='text-3xl font-semibold border-b border-gray-700 p-3 mt-5'>
               Available Users:
            </h1>
 

        </div>
 

    </div>
 

  )
 

}