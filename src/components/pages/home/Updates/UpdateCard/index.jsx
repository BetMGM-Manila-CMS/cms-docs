export const UpdateCard = () => {
    return (
        <a href="#" className="flex flex-col items-center rounded-lg bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition md:flex-row">
            <img className="object-cover w-full rounded-t-lg h-64 md:h-full md:w-48 md:rounded-none md:rounded-s-lg mb-0" src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
    )
}