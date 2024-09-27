import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axiosInstance from '../Helpers/axiosinstance';
import HomeLayout from '../Layouts/HomeLayout';

function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [blogInput, setBlogInput] = useState({
        title: '',
        content: '',
        author: '',
    });

    // Function to fetch blogs
    const fetchBlogs = async () => {
        try {
            const response = await axiosInstance.get('/blogs');
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error('Failed to fetch blogs:', error);
            toast.error('Failed to load blogs');
        }
    };

    // Fetch blogs on component mount
    useEffect(() => {
        fetchBlogs();
    }, []);

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogInput({
            ...blogInput,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const { title, content, author } = blogInput;

        if (!title || !content || !author) {
            toast.error('All fields are mandatory');
            return;
        }

        try {
            const response = axiosInstance.post('/blogs', blogInput);
            toast.promise(response, {
                loading: 'Submitting your blog...',
                success: 'Blog submitted successfully!',
                error: 'Failed to submit the blog',
            });

            const blogResponse = await response;
            if (blogResponse.data.success) {
                setBlogInput({
                    title: '',
                    content: '',
                    author: '',
                });
                // Refresh the list of blogs
                fetchBlogs();
            }
        } catch (error) {
            console.error('Failed to submit blog:', error);
            toast.error('Failed to submit the blog');
        }
    };

    return (
        <HomeLayout>
            <div className="flex flex-col items-center justify-center gap-8 h-[100vh]">
                {/* Blog Form */}
                <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-2 p-5 w-[80vw] sm:w-[22rem] rounded-md text-white shadow-[0_0_10px_black]"
                >
                    <h1 className="text-3xl font-semibold">Submit a New Blog</h1>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="title" className="text-xl font-semibold">Title</label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Blog Title"
                            onChange={handleInputChange}
                            value={blogInput.title}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="author" className="text-xl font-semibold">Author</label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            type="text"
                            name="author"
                            id="author"
                            placeholder="Author Name"
                            onChange={handleInputChange}
                            value={blogInput.author}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="content" className="text-xl font-semibold">Content</label>
                        <textarea
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            name="content"
                            id="content"
                            placeholder="Blog Content"
                            onChange={handleInputChange}
                            value={blogInput.content}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    >
                        Submit Blog
                    </button>
                </form>

                {/* Blog List */}
                <div className="w-[80vw] sm:w-[40rem]">
                    <h2 className="text-3xl font-semibold mb-4">All Blogs</h2>
                    <ul>
                        {blogs.map((blog) => (
                            <li key={blog._id} className="mb-6 border-b pb-4">
                                <h3 className="text-xl font-bold">{blog.title}</h3>
                                <p className="text-sm">By {blog.author}</p>
                                <p className="mt-2">{blog.content}</p>
                                <p className="text-xs text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </HomeLayout>
    );
}

export default BlogPage;
