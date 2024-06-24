export default function QA() {
    return (
        <section className="container relative mt-40 mb-8 lg:mb-16 relative">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6 flex flex-col items-center relative z-10">
                <h2 className="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-primary ">Our QA For This Month</h2>
                <div className="inline-flex items-center justify-between px-4 py-1 text-sm text-gray-700 bg-gray-100 rounded-full mb-3 dark:bg-gray-800 dark:text-white whitespace-nowrap self-start mx-auto">
                    June
            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="daisy-radial-progress text-primary" style={{ "--value": 100, "--size": "12rem" }} role="progressbar">
                    100%
                </div>
            </div>
            {/* <img src="https://res.cloudinary.com/dlfu36fiw/image/upload/v1719214596/team/1CAEF6DE-EA33-42F3-B83F-90DFABE0B9EE_xujjk2.jpg" alt="" className="absolute left-0 top-2/3 -translate-x-[15%] max h-auto rotate-6" />
            <img src="https://res.cloudinary.com/dlfu36fiw/image/upload/v1719215046/team/D12F9807-1D90-4A65-BBB7-369C4AE94924_skyndf.jpg" alt="" className="absolute right-0 -top-1/4 translate-x-[20%] w-96 h-auto -rotate-12" /> */}
        </section>
    )
}