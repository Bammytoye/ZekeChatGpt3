import menu from '/src/assets/menu-60.png'
import close from '/src/assets/clsoemenu.png'
import { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

    return (
        <div className="fixed w-full bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 px-12 lg:px-24 py-4 z-50 border-b-[5px]  border-blue-900">
            <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-8">
                    <div>
                        <a href="#">
                            <img src="/src/assets/img/GPT-3.svg" alt="" className="w-[90px]" />
                        </a>
                    </div>

                    <div className="md:flex hidden md:space-x-7 md:text-sm">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">What is GPT?</a>
                        <a href="#" className="hover:underline">Open AI</a>
                        <a href="#" className="hover:underline">Case Studies</a>
                        <a href="#" className="hover:underline">Library</a>
                    </div>
                </div>

                <div className="hidden md:flex md:space-x-4 md:text-sm">
                    <button className="border-b-2 rounded-md border-r-2 border-gray-600 px-4 py-1">Sign In</button>
                    <button className="bg-red-500 px-4 py-1 rounded-md">Sign Up</button>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={toggle?close:menu} alt="" className='w-[30px]'/>
                </div>
            </div>

            <div className={toggle?'flex flex-col justify-center items-center space-y-4 md:hidden' : 'hidden'}>
                <div className="flex text-white flex-col justify-center items-center space-y-3">
                    <a href="#" className="hover:border-b-2 border-white">Home</a>
                    <a href="#" className="hover:border-b-2 border-white">What is GPT?</a>
                    <a href="#" className="hover:border-b-2 border-white">Open AI</a>
                    <a href="#" className="hover:border-b-2 border-white">Case Studies</a>
                    <a href="#" className="hover:border-b-2 border-white">Library</a>
                </div>
            

                <div className="flex flex-col space-y-4">
                    <button className="border rounded-md bg-white border-gray-600 px-4 py-1">Sign In</button>
                    <button className="bg-red-500 px-4 py-1 text-white rounded-md">Sign Up</button>
                </div>
            </div>    
        </div>
    )
}

export default Navbar