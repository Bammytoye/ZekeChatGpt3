import rectangle from '/src/assets/img/Rectangle 17 (1).png'

const Possible = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 h-80vh px-12 lg:px-24 pt-12">
            <div className="pt-20">
                <div className="md:flex md:justify-center md:items-center md:space-x-36 space-y-8">
                    <div className="flex flex-col md:space-y-5 md:w-[500px]">
                        <div>
                            <h2 className="w-full text-[18px] md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-300 to-blue-400 font-bold">
                                The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                            </h2>
                        </div>

                        <p className="text-pink-300 mt-4">Request Early Access to Get Started</p>
                    </div>

                    <div className="space-y-8 text-white">
                        <div>
                            <img src={rectangle} alt="" className="mb-2" />
                            <p>
                                Maintain a conversational tone
                            </p>
                        </div>

                        <div>
                            <img src={rectangle} alt="" className="mb-2" />
                            <p>
                                Provide accurate and helpful information
                            </p>
                        </div>

                        <div>
                            <img src={rectangle} alt="" className="mb-2" />
                            <p>
                                Acknowledge user inputs
                            </p>
                        </div>

                        <div>
                            <img src={rectangle} alt="" className="mb-2" />
                            <p>
                                Avoid technical glitches
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8 text-sm text-white">
                        <div>
                            <img src={rectangle} alt="" className="mb-2" />
                            <p>
                                Foster a friendly and approachable atmosphere in interactions, making users feel comfortable and encouraged to engage further. 
                            </p>
                        </div>
                        
                        <div>
                            <img src={rectangle} alt="" className="mb-2" />
                            <p>
                                Ensure that the response are relevant and reliable, offering valuables insights or assistance to the user&rsquo;s queries. 
                            </p>
                        </div>

                        <div>
                            <img src={rectangle} alt="" className="mb-2" />
                            <p>
                                Demonstrative active listening by acknowledging and addressing the user&rsquo;s concerns or questions promptly.
                            </p>
                        </div>
                            
                        <div>
                            <img src={rectangle} alt="" className="mb-2" />
                            <p>
                                Minimize errors or technical issues to enhance the user experience and prevent frustration or distrust.
                            </p>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Possible