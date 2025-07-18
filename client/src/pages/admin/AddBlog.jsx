import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import {parse} from 'marked'
import Loader from '../../components/AiLoader';

const AddBlog = () => {

    const {axios} = useAppContext();
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);

  // for quill to get text editor functionality
  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setsubTitle] = useState('');
  const [category, setcategory] = useState('Startup');
  const [isPublished, setisPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
        e.preventDefault();
        setIsAdding(true);
        
        const blog = {
            title,
            subTitle: subTitle,  
            description: quillRef.current?.root.innerHTML,
            category,
            isPublished
        };

        const formData = new FormData();  
        formData.append('blog', JSON.stringify(blog));
        formData.append('image', image);

        const {data} = await axios.post('/api/blog/add', formData);
        if(data.success){
            toast.success(data.message);
            setImage(false);
            setTitle('')
            quillRef.current.root.innerHTML = ''
            setcategory('Startup')
        }
        else{
            toast.error(data.message)
        }

    } catch (error) {
        
        
        toast.error(error.message);
    }
    finally{
        setIsAdding(false)
    }
};

  const generateContent = async()=>{
    if(!title)return toast.error('Please enter title')

        try{
            setLoading(true);
            const {data} = await axios.post('/api/blog/generate', {prompt: title})
            if(data.success){
                quillRef.current.root.innerHTML = parse(data.content)
                // to use parse -> npm i marked
            }
            else{
                toast.error(data.message)
            }
        }
        catch(err){
            toast.error(err.message)
        }
        finally{
            setLoading(false)
        }
  }

  useEffect(()=>{
    //initialize quill only once
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow'
      })
    }
  },[])

return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
        <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
            <p>Upload thumbnail</p>
            <label htmlFor="image">
                <img 
                    src={!image ? assets.upload_area : URL.createObjectURL(image)} 
                    alt="upload thumbnail" 
                    className='mt-2 h-16 rounded cursor-pointer'
                />
                <input 
                    type="file" 
                    id="image" 
                    hidden 
                    required 
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </label>

            <p className='mt-4'>Blog title</p>
    <input 
        type="text" 
        placeholder='Type here' 
        required 
        className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' 
        onChange={e => setTitle(e.target.value)} 
        value={title}
    />

    <p className='mt-4'>Sub title</p>
    <input 
        type="text" 
        placeholder='Type here' 
        required 
        className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' 
        onChange={e => setsubTitle(e.target.value)} 
        value={subTitle}
    />

    <p className='mt-4'>Blog Description</p>
    <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
        <div ref={editorRef}></div>
        {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white/70 rounded">
            <Loader />
        </div>
    )}
        <button 
            disabled={loading}
            type='button' 
            onClick={generateContent}  
            className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer'
        >
            Generate with AI
        </button>
    </div>

      <p className='mt-4'>Blog Category</p>
      <select 
        onChange={e => setcategory(e.target.value)} 
        name="category"
        className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'
    >
        <option value="">Select category</option>
        {blogCategories.map((item, index) => (
            <option key={index} value={item}>{item}</option>
        ))}
    </select>

    <div className='flex gap-2 mt-4 items-center'>
        <p>Publish Now</p>
        <input 
            type="checkbox" 
            checked={isPublished} 
            className='scale-125 cursor-pointer' 
            onChange={e => setisPublished(e.target.checked)} 
        />
    </div>

        <button disabled={isAdding} type='submit' className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm hover:scale-105 transition-all'>{isAdding ? 'Adding...' : 'Add Blog'}</button>

        </div>
    </form>
);
}

export default AddBlog