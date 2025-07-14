# 📝 AI Powered Blog Website

This is a **full-stack blog website** built with modern technologies, featuring **AI-powered content generation** to help authors write blogs efficiently.

---

## 🚀 **Features**

✅ Create, edit, delete, and manage blogs  
✅ Rich text editor with Quill.js  
✅ Upload thumbnails using ImageKit  
✅ AI integration to generate blog content automatically  
✅ Comment system with approval workflows  
✅ Admin dashboard with recent blogs, comments, and drafts overview 
✅ Responsive and modern UI built with Tailwind CSS  
✅ Clean code with React, Express, and MongoDB stack

---

## ⚡ **Tech Stack**

- **Frontend:** React.js, Tailwind CSS, Quill.js  
- **Backend:** Node.js, Express.js, MongoDB  
- **AI Integration:** GeminiAPI (for blog content generation)  
- **Image Hosting:** ImageKit  
- **State Management:** React Context API  
- **Other Libraries:** Axios, React Hot Toast, Moment.js

---

## 🔧 **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/krishnaMittal23/BlogIT.git
cd BlogIT

# For server
cd server
npm install

# For client
cd ../client
npm install


## Set up environment variables

Create a .env file in the server folder with:
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

## Run the application

# In server folder
npm run dev

# In client folder (separate terminal)
npm start
