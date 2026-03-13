import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import {Home, CreatePost} from './pages'
import { logo } from './assets'

const App = () => {
  return (
   <Router>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
       <Link to="/">
        <img src={logo} alt="logo" className='w-28 object-contain' />
       </Link>
       <Link to="/create-post" className='px-4 py-2  bg-blue-500 rounded-xl text-white font-medium  hover:bg-blue-700 hover:cursor-pointer '>
          Create
       </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-gray-100 min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main> 
   </Router>
  )
}

export default App