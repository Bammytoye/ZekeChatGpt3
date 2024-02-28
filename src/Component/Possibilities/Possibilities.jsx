
const Possibilities = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 h-80vh px-12 lg:px-24 pt-28 pb-12">
            <div className="border border-blue-600 bg-blue-600 rounded-md">
                <div className="flex flex-col p-14">
                    <div className="md:flex justify-between w-full space-y-5 md:space-x-48 text-justify">
                        <div className="lg:w-1/4">
                            <img src="/src/assets/img/Rectangle 17.png" alt="" className="mb-2" />
                            <h3 className="text-white">What is GPT-3</h3>
                        </div>

                        <div className="lg:w-3/4">
                            <p className="text-justify text-white text-[12px] lg:text-[17px]">
                                ChatGPT-3&rsquo;s training data cutoff is September 2021, so it may not have access to the most up-to-date information or events beyond that date. While ChatGPT-3 is impressive, it still has limitations. It can sometimes produce factually incorrect or biased responses, and it may occasionally generate repetitive or nonsensical text.
                            </p>

                            <p className="text-end text-red-900 pt-4 text-[12px] md:text-[16px]">
                                <a href="#" className="underline">Explore The Library</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col pt-2">
                        <div className="md:w-1/4">
                            <h2 className="md:w-[450px] mb-3 text-red-900 text-[15px] md:text-[36px]">
                                The possibilities are beyond your imagination  
                            </h2>
                        </div>

                        <div className="md:flex space-y-5 md:space-x-10 md:justify-between md:items-center">
                            <div>
                                <img src="/src/assets/img/Rectangle 17.png" alt="" className="mb-3"/>
                                <h2 className="text-white text-md">
                                    Chat Bots
                                </h2>
                            </div>

                            <div>
                                <img src="/src/assets/img/Rectangle 17.png" alt="" className="mb-3" />
                                <h2 className="text-white text-md">
                                    Knowledge Base
                                </h2>
                            </div>

                            <div>
                                <img src="/src/assets/img/Rectangle 17.png" alt="" className="mb-3" />
                                <h2 className="text-white text-md">
                                    Education
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>    
        </div>
    )
}

export default Possibilities