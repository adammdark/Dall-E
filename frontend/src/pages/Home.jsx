import React, { useEffect, useState } from 'react'
import { FormField,Loader } from '../components';
import {Card} from '../components';

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts,setAllPosts] = useState(null);
  const [searchText,setSearchText] = useState('');
  const [searchResults,setSearchResults] = useState(null);
  const [searchTimeOut,setSearchTimeOut] = useState(null);

  const RenderCards = ({data,title})=>{
    if(data?.length>0){
        return (
            data.map((post) => <Card key={post._id} {...post} />)
        );
    }
    return (
        <h2 className='font-bold text-lg mb-3 text-[#6469ff] uppercase'>{title}</h2>
    )
  }

  useEffect(()=>{

    const fetchPosts = async()=>{
        setLoading(true);
        try{

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}post`,{
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            });

            if(response.ok){
                const result = await response.json();
                setAllPosts(result.data.reverse());
            }
        }
        catch(error){
            alert(error);
        }
        finally{
            setLoading(false)
        }
    }

    fetchPosts();

  },[]);

  const handleSearchChange = (e)=>{

    clearTimeout(searchTimeOut);
    setSearchText(e.target.value);
    setSearchTimeOut(
        setTimeout(()=>{

        const searchResults = allPosts.filter((item)=>
            item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(searchResults);
    },500));

  }

  return (
    <section className='max-w-7xl mx-auto '>
        <div>
            <h1 className='text-2xl font-bold'>The Community Showcase</h1>
            <p className='mt-2 text-gray-600 text-md max-w-125'>Browse through collection of imaginative and visually stunning images</p>
        </div>
        <div className='mt-5'>
            <FormField 
                labelName='search'
                type='text'
                name='search'
                placeholder='Search Name or Prompt'
                value={searchText}
                handleChange={handleSearchChange}
            />
        </div>
        <div className='mt-5'>
            {loading?(
                <div className='flex justify-center items-center'>
                    <Loader/>
                </div>
            ):(
                <>
                    {searchText && (
                        <h2 className='font-medium text-lg mb-3 text-gray-600'>Showing results for: <span className='text-[#222328]'>{searchText}</span></h2>
                    )}
                    <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                        {searchText 
                        ?(<RenderCards data={searchResults} title="No search results found"/>)
                        :(<RenderCards data={allPosts} title="No posts found"/>)
                        }
                    </div>
                </> 
            )}
        </div>
    </section>
  )
}

export default Home;