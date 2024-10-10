import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Blogs from "../Pages/Blogs/Blogs";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
        {
        path:"/",
        element: <Root />,
        children:[
            {
            path:"/",
            element: <Home />
            },
            {
            path:"/blogs",
            element:<Blogs />,
            loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=10')
            },
            {
            path:'/blogDetails/:id',
            element:<Blog/>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            children:[
                {
                    index:true,
                    element:<Content />,
                    loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
                },
                {
                    path:'author',
                    element:<Author />,
                    loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
                }
            ]
            },
            {
            path:"/bookmarks",
            element: <Bookmarks />
            }
        ]
        }
    ])