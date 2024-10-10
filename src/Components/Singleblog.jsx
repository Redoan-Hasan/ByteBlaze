/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Singleblog = ({blog,deletable,handleBook}) => {
    const {id,cover_image,title,description,published_at}=blog;
    return (
        <div className="relative">
            <div className="p-2 rounded-lg transition border-2 border-primary hover:border-secondary hover:scale-105 md:h-[476px] lg:h-[476px]">
                <Link rel="noopener noreferrer" to={`/blogDetails/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
                    <img role="presentation" className="object-cover w-full rounded h-44" src={cover_image || 'https://i.postimg.cc/bv0QWsTh/404.jpg'} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs">{new Date(published_at).toLocaleDateString()}</span>
                        <p>{description}</p>
                    </div>
                </Link>
            </div>
            {deletable && 
            <div onClick={() => handleBook(blog) } className=" absolute -right-5 z-10 -top-5 bg-primary opacity-70 text-secondary hover:opacity-90 border p-2 rounded-full">
                <MdDeleteForever size={20}/>
            </div>}
        </div>
    );
};

export default Singleblog;