import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from './../components/Navbar';
import Moment from 'moment'
import Footer from './../components/Footer';
// import Loader from '../components/Loader';
import ShimmerLoader from '../components/ShimmerLoader';

const Blog = () => {

  const {id} = useParams();
  const [data,setdata] = useState(null);
  const [comments,setcomments] = useState([]);
  const [name,setname] = useState('');
  const [content,setcontent] = useState('');


  const fetchBlogData = async()=>{
    const data = blog_data.find(item => item._id===id);
    setdata(data);
  }

  const fetchComments = async()=>{
    setcomments(comments_data)
  }

  const addcomment = async(e)=>{
    e.preventDefault();
  }

  useEffect(()=>{
    fetchBlogData();
    fetchComments();
  },[])

  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} className='absolute -top-50 -z-1 opacity-50'/>
      <Navbar/>

      <div className='text-center mt-20 text-gray-600'>
          <p className='text-primary py-4 font-medium'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
          <h1 className='my-5 max-w-lg truncate mx-auto' dangerouslySetInnerHTML={{__html: data.subTitle}}></h1>
          <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Michael brown</p>
      </div>

      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        <img src={data.image} className='rounded-3xl mb-5'/>
        <div dangerouslySetInnerHTML={{__html: data.description}} className='rich-text mx-auto max-w-3xl'></div>

        {/* comments section */}
        <div className='mt-14 mb-10 max-w-3xl mx-auto'>
          <p className='font-semibold mb-3'>comments  ({comments.length})</p>
          <div className='flex flex-col gap-4'>
             {comments.map((item,index)=>(
              <div className='relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600' key={index}>
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} className='w-6'/>
                  <p className='font-medium'>{item.name}</p>
                </div>
                <p className='text-sm max-w-md ml-8'>{item.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()}</div>

              </div>
             ))}
          </div>

        </div>


             {/* add comment section */}
        <div className='max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Add Your Comment</p>
          <form onSubmit={addcomment} className='flex flex-col items-start gap-4 max-w-lg'>
            <input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder='Name' required className='w-full p-2 border border-gray-300 rounded outline-none'/>
            <textarea onChange={(e)=>setcontent(e.target.value)} value={content} placeholder='comment' className='w-full p-2 border border-gray-300 rounded outline-none h-48'/>
            <button type="submit" className='bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>

          </form>
        </div>

        {/* share buttons */}
        <div className='my-24 max-w-3xl mx-auto'>
          <p className='font-semibold my-4'>share this article on social media</p>
          <div className='flex'>
            <img src={assets.facebook_icon} width={50}/>
            <img src={assets.twitter_icon} width={50}/>
            <img src={assets.googleplus_icon} width={50}/>
          </div>
        </div>


      </div>
      <Footer/>


    </div>
  ) : <ShimmerLoader/>
}

export default Blog