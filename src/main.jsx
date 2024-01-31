import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx'
import ErrorPage from './pages/Error'
import Welcome from './pages/Welcome.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import CreatePost from './pages/CreatePost.jsx'
import NewsLetter from './pages/NewsLetter.jsx'
import Components from './pages/Components'

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
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <NewsLetter /> }
        ]
    },
    {
        path: '/components',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Components /> }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
