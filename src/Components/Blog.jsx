import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saved } from "../Utilities/Lstorage";


const Blog = () => {
    const [tabIdx, setTabIdx]=useState(0)
    const blogDetail = useLoaderData();
    const{
        comments_count,
        title,
        reading_time_minutes,
        public_reactions_count,
        published_at,
        }=blogDetail;
        const handleBook =(blogDetail)=>{
            saved(blogDetail)
        }
    return (
        <div>
            <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 ">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
                            <p className="text-sm">{reading_time_minutes} min read• {new Date(published_at).toLocaleDateString()}</p>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} reactions</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center  -mx-4 overflow-x-auto overflow-y-hidden max-sm:justify-center lg:justify-left flex-nowrap">
                        <Link to='' onClick={()=>setTabIdx(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 font-semibold ${tabIdx===0?'border-2 border-black  border-b-0 rounded-t-lg':'border-b-2 border-black'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span className="">Content</span>
                        </Link>
                        <Link to='author' onClick={()=>setTabIdx(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 font-semibold  ${tabIdx===1?'border-2 border-black border-b-0 rounded-t-lg ':'border-b-2  border-black'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                <span>Author</span>
                        </Link>
                        <div onClick={() => handleBook(blogDetail) } className="ml-3 bg-primary bg-opacity-30 opacity-70 text-secondary hover:opacity-90 border p-2 rounded-full">
                            <MdBookmarkAdd size={30}/>
                        </div>
                    </div>
                    
                </article>
                <Outlet />
                
            </div>
        </div>
    );
};

export default Blog;