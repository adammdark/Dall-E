import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField, Loader } from "../components";
import { preview } from "../assets";
import { getRandomPrompts } from "../utils/randomPrompt";
import { options } from "../utils/options";


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async() => {

    if(form.prompt){
      try {

        setGeneratingImg(true);
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}dalle`,{
          ...options,
          body: JSON.stringify({
            prompt: form.prompt,
          }), 
        });

        const data = await response.json();
        setForm({ ...form, photo:data.photo });
        
      } catch (error) {
        console.log(error);
      } finally {
        setGeneratingImg(false);
      }
    }
    else{
      alert("Please enter a prompt");
    }

  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(form.name && form.photo){
      setLoading(true);
      try{

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}post`,{
          ...options,
          body: JSON.stringify(form), 
        });
        
        await response.json()
        navigate('/');
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }
    else{
      alert('Please generate image before sharing');
    }
  };

  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompts(form.prompt);
    setForm({...form,prompt:randomPrompt}); 
  };

  
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Create</h1>
        <p className="mt-2 text-gray-600 text-md max-w-125">
          Create imaginative and visually stunning images
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A futuristic city with flying cars"
            value={form.prompt}
            isSurpriseMe
            handleChange={handleChange}
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-64 h-64 p-3 mt-5">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-50"
            />
          )}
          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
              <Loader />
            </div>
          )}
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className={`text-sm w-full sm:w-auto bg-green-700 text-white font-medium rounded-lg text-center px-5 py-2.5 hover:cursor-pointer ${generatingImg ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"}`}
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-5">
          <p className="mt-3 text-gray-500 text-sm w-full sm:auto">
            Once generated, you can share it with the community
          </p>
          <button
            type="submit"
            className={`mt-3 text-sm w-full sm:w-auto bg-blue-500 hover:cursor-pointer text-white font-medium rounded-lg text-center px-5 py-2.5 ${loading ? 'opacity-50 cursor-not-allowed': 'hover:bg-blue-700'}`}
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
