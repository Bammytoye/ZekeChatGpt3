import featureImage from '/src/assets/img/Feature Image.png'

const Appss = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 h-80vh px-12 lg:px-24 pt-20">
            <div className="lg:flex lg:justify-between lg:items-center lg:space-x-24 cursor-pointer">
                <div className="hidden md:block">
                    <img src={featureImage} alt="" className="lg:w-[2200px] md:w-[800px]"/>
                </div>

                <div className="sm:space-y-10 space-y-5 lg:space-y-2">
                    <p className="text-green-100">Request Early Access to Get Started</p>

                    <p className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-300 to-blue-400">
                        The possibilities are beyond your imagination
                    </p>

                    <p className="text-white text-justify">
                        The potential of ChatGPT 3 is vast and continuously expanding. With its ability to generate human like responses across a wide range of topics and tasks, ChatGPT e opens up numerous new possibilities for creative applications, problems-solving, languages, and understanding of, and more. 
                    </p>

                    <p className="px-4 py-1 bg-gray-900 text-[12px] md:text-[15px] text-white lg:w-3/5 rounded-lg">Request Early Access to Get Started</p>
                </div>
            </div>

            <div className="hidden lg:block p-3 bg-gradient-to-r from-blue-800 via-yellow-900 to-red-900 rounded-full">
                <div className="flex justify-between items-center px-4">
                        <div>
                            <p className="text-sm text-white">Request Early Access to Get Started</p>
                            <p className="text-xl">Register today & start exploring the endless possibilities.</p>
                        </div>

                        <div>
                            <button className="rounded-full px-5 py-2 bg-gray-900 text-white">Get Started</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Appss