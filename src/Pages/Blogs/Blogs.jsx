
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Singleblog from "../../Components/Singleblog";
import { useState } from "react";
import Loader from "../../Components/Loader";


const Blogs = () => {
    const [dataLength,setDataLength] = useState(6);
    const blogData = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === 'loading') return <Loader></Loader>
    return (
        <div>
            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <Link to={`/blogDetails/${blogData[0].id}`} className="block max-w-sm gap-3 mx-auto p-2 transition hover:scale-105 border-primary hover:border-secondary border-2 rounded-lg
                    sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                        <img src={blogData[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogData[0].title}</h3>
                            <span className="text-xs ">{new Date(blogData[0].published_at).toLocaleDateString()}</span>
                            <p>{blogData[0].description}</p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogData.slice(1,dataLength + 1 ).map(blog=><Singleblog key={blog.id} blog={blog}></Singleblog>)
                        }
                    </div>
                    <div className="flex justify-center">
                    <button className={dataLength === blogData.length-2? 'hidden':''} 
                            onClick={()=>setDataLength(blogData.length -2)}   > 
                        <a  href="#_" className="relative inline-block px-4 py-2 font-medium group text-center">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Loads More</span>
                        </a>
                    </button>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Blogs;