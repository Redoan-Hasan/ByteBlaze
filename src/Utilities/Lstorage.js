import toast from "react-hot-toast";
// get 
export const gets = () =>{
    const stored = localStorage.getItem('blogs')
    if(stored){
        const blogs = JSON.parse(stored);
        return blogs;
    }
    return []
}

// save
export const saved = (blog)=>{
    const stored = gets();
    const exist = stored.find(b=>b.id === blog.id);
    if(exist){
        return toast.error('All Ready Bookmarked')
    }
    stored.push(blog);
    localStorage.setItem('blogs',JSON.stringify(stored))
    toast.success('Successfully Added')
}

// delete 
export const remove = (blog)=>{
    const stored = gets();
    const remaining = stored.filter(remains => remains.id !== blog.id)
    localStorage.setItem('blogs',JSON.stringify(remaining))
    toast.success('Successfully Removed')

}