import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx'
import ErrorPage from './components/error/Error.jsx'
import Welcome from './pages/Welcome.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import CreatePost from './pages/CreatePost.jsx'
import NewsLetter from './pages/NewsLetter.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Welcome /> },
            {
                path: '/blog',
                element: <Blog />,
                children: [
                    {
                        path: ":id",
                        element: <BlogPost />
                    }
                ]
            },
            {
                path: '/blog/new',
                element: <CreatePost />,
            }
        ]
    },
    {
        path: '/newsletter',
        element: <NewsLetter />,
        errorElement: <ErrorPage />,
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
