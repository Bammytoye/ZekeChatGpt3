
const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 px-12 lg:px-24 pt-24 border-t-2 border-gray-600">
            <div className="flex flex-col justify-between items-center space-y-10">
                <div>
                    <p className="text-[16px] sm:text-[20px] lg:text-5xl text-center lg:w-[700px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-300 to-blue-400">
                        Do you want to step in to the future before others
                    </p>
                </div>

                <div>
                    <button className="border px-6 py-2 text-white font-medium hover:rounded-lg">Request Early Access</button>
                </div>

                <div>
                    <div className="px-12 md:grid md:grid-cols-4 text-center justify-between items-center space-y-12 lg:space-x-10 md:space-x-5 text-white">
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <img src="/src/assets/img/GPT-3.svg" alt="" className="w-[90px]"/>
                            <p className="text-sm">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <a href="#">Links</a>
                            <a href="#">Overons</a>
                            <a href="#">Social Media</a>
                            <a href="#">Counters</a>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <a href="#">Company</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Contact</a>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <a href="#">Get in touch</a>
                            <a href="#">Bamigbalatoyese@gmail.com</a>
                            <a href="#">+234 816 988 5711</a>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-white">© 2024 GPT-3. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer