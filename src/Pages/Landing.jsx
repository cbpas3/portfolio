import ProfilePic from "../Assets/ProfilePic.jpg"

function Landing() {

    return (
        <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between">
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <h1 className="text-8xl mb-6 font-bold">Hey there</h1>
                    <p className="text-xl">{"I'm Cy. I'm a freelancer who has worked on a lot of things from Geospatial Data Science Projects to Web3 Applications."}</p>
                    <a href="https://www.linkedin.com/in/cyanpascual/" className="mt-4 underline underline-offset-1">See my LinkedIn</a>
                </div>
                <div className={"container p-4 flex mx-auto flex justify-center items-center md:w-1/2" }>
                    <img src={ProfilePic} className="w-full"/>
                </div>
            </div>
        </div>
    )
}

export default Landing