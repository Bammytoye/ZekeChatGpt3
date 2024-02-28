import rect1 from '/src/assets/img/Rectangle 22 (2).png'
import rect2 from '/src/assets/img/Rectangle 22 (3).png'
import rect3 from '/src/assets/img/Rectangle 22 (1).png'
import rect4 from '/src/assets/img/Rectangle 22 (4).png'
import rect5 from '/src/assets/img/Rectangle 22.png'

const Blogging = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 px-12 lg:px-24 pt-24 pb-10">
            <div className="flex flex-col space-y-12">
                <div>
                    <h2 className="md:text-[50px] text-[25px] sm:text-[38px] text-center bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-300 to-blue-400">
                        A lot is happening, We are blogging about it.
                    </h2>
                </div>

                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:space-x-10 space-y-8 gap-5 mb-7">
                    <div className="flex flex-col border border-black rounded-lg bg-[#14143a] cursor-pointer">
                        <img src={rect1} alt="" className="w-full" />
                        <p className="p-4 text-[10px] text-white">Feb 22, 2024</p>
                        <p className="px-4 text-white uppercase hover:underline ">
                            Language Generation
                        </p>

                        <span className="text-sm p-4 text-white">
                            ChatGPT-3 is an advanced language model capable of generating human-like text based on the input it receives....
                        </span>

                        <a href="#" className="px-4 text-red-800">Read Full Article</a>
                    </div>

                    <div className="flex flex-col border border-black rounded-lg bg-[#14143a] cursor-pointer">
                        <img src={rect2} alt="" className="w-full"/>
                        <p className="p-4 text-[10px] text-white">Feb 22, 2024</p>
                        <p className="px-4 text-white uppercase hover:underline ">
                            Massive Scale 
                        </p>
                        <span className="text-sm p-4 text-white">
                            It&rsquo;s one of the largest language models developed by OpenAI, with 175 billion parameters, surpassing its predecessor GPT-2 by a significant margin... 
                        </span>

                        <a href="#" className="px-4 text-red-800">Read Full Article</a>
                    </div>

                    <div className="flex flex-col border border-black rounded-lg bg-[#14143a] cursor-pointer">
                        <img src={rect3} alt="" />
                        <p className="p-4 text-[10px] text-white">Feb 22, 2024</p>
                        <p className="px-4 text-white uppercase hover:underline ">
                            Zero-shot and Few-shot Learning
                        </p>    

                        <span className="text-sm p-4 text-white">
                            One notable feature of ChatGPT-3 is its capability for zero-shot and few-shot learning. This means it can perform tasks or generate...
                        </span>

                        <a href="#" className="px-4 text-red-800">Read Full Article</a>
                    </div>

                    <div className="flex flex-col border border-black rounded-lg bg-[#14143a] cursor-pointer">
                        <img src={rect4} alt="" className="h-full"/>
                        <p className="p-4 text-[10px] text-white">Feb 22, 2024</p>
                        <p className="px-4 text-white uppercase hover:underline ">
                            Versatility
                        </p>

                        <span className="text-sm p-4 text-white">
                            ChatGPT-3 demonstrates versatility in various language-related tasks, including translation, summarization, question-answering, text completion...
                        </span>

                        <a href="#" className="px-4 text-red-800">Read Full Article</a>
                    </div>

                    <div className="flex flex-col border border-black rounded-lg bg-[#14143a] cursor-pointer">
                        <img src={rect5} alt="" />
                        <p className="p-4 text-[10px] text-white">Feb 22, 2024</p>
                        <p className="px-4 text-white uppercase hover:underline ">
                            Contextual Understanding 
                        </p>
                        <span className="text-sm p-4 text-white">
                            It excels in understanding context and maintaining coherence in conversations. This is achieved through its attention mechanism...
                        </span>

                        <a href="#" className="px-4 text-red-800">Read Full Article</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogging