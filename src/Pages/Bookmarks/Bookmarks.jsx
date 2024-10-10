import { useEffect, useState } from "react";
import { gets, remove } from "../../Utilities/Lstorage";
import Singleblog from "../../Components/Singleblog";
import EmptyState from "../../Components/EmptyState";

const Bookmarks = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const savedBlogs = gets();
        setData(savedBlogs)
    },[])
    const handleBook=(blog)=>{
        remove(blog)
        const savedBlogs = gets();
        setData(savedBlogs)
    }
    if(data.length < 1){
        return <EmptyState message={`No Bookmarks Available`} path={`/blogs`} buttonTxt={`Browse Blogs`}/>
    }
    return (
        <div>
            <div className="p-6 grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl md:mx-auto lg:mx-auto lg:py-10">
                        {
                            data.map(blog=><Singleblog handleBook={()=>handleBook(blog)} deletable ={true} key={blog.id} blog={blog}></Singleblog>)
                        }
                    </div>
        </div>
    );
};

export default Bookmarks;