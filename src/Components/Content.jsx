import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog=useLoaderData();
    console.log(blog)
    const{
        tags,cover_image,title,body_html,url
        }=blog;
    return (
        <div className="p-2 rounded-lg t border-2">
            <div className=" mx-auto group hover:no-underline focus:no-underline text-left">
                <img role="presentation" className="object-cover w-full rounded " src={cover_image || 'https://i.postimg.cc/bv0QWsTh/404.jpg'} />
                <div  className="flex flex-col lg:flex-row gap-2 lg:gap-8 font-semibold p-2 lg:py-6">
                    {tags.map((tag,idx) => <a key={idx}>#{tag}</a>)}
                </div>
                <div className="p-2 space-y-2">
                    <a href={url} target="blank" className="text-lg lg:text-2xl font-semibold ">{title}</a>
                    <div className=' overflow-hidden'>
                    <Markdown  rehypePlugins={rehypeRaw}>{body_html}</Markdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;