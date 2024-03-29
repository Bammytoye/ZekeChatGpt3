import signup1 from '/src/assets/img/Signup (1).png'
import header from '/src/assets/img/Header Illustration.png'
import ComapanyLogo from '/src/assets/img/Comapnies Logo.png'

const About = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 h-80vh px-12 pt-24 sm:pt-24 md:px-24">
            <div className="lg:flex lg:justify-between lg:items-center">
                <div className="lg:w-[450px] space-y-7">
                    <p className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-300 to-blue-400">
                        Let&rsquo;s Build Something Amazing With Gpt-3 Open AI   
                    </p>

                    <span className="text-white text-justify">
                        ChatGPT-3 is a state-of-the-art language model that has been trained on a massive dataset of text and code. This allows it to generate human-like text, understand natural language inputs, and engage in conversations with impressive fluency and coherence.
                    </span>
                
                    <div className="flex flex-col justify-start space-y-2">
                        <input type="search" name="search" id="search" placeholder="Enter your email address" className="outline-none p-4 rounded-md"/>
                        <button className="px-6 py-2 rounded-md bg-red-700 text-white">
                            Get Started
                        </button>
                    </div>

                    <img src={signup1} alt="" />
                </div>
            
                <div className="lg:mt-10 flex justify-center items-center">
                    <img src={header} alt=""  className="w-[600px]"/>
                </div>
            </div>

            <div className="flex justify-center items-center pt-10">
                <img src={ComapanyLogo} alt="" className="w-[800px]" />
            </div>
        </div>
    )
}

export default About