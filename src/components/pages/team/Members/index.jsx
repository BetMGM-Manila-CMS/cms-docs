import memberList from "@site/config/members/index.json"

export default function Member() {
    const members = memberList.member



    return (
        <section className="container relative mt-40 mb-8 lg:mb-16">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
                <h2 className="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-primary ">Members</h2>
            </div>
            <div className="grid grid-cols-6 gap-6">
                {
                    members.map(({ name, position, image }, index) => {
                        return (
                            <div className="group">
                                <div className="aspect-square bg-white rounded-lg overflow-hidden mb-2">
                                    {image && (<img src={image} alt="" className="w-full h-full object-cover group-hover:scale-110 duration-500" />)}
                                </div>
                                <p className="text-md font-extrabold leading-none tracking-tight text-gray-900 md:text-lg lg:text-xl text-white mb-2">{name}</p>
                                <p className="text-sm leading-none tracking-tight text-gray-900 md:text-lg text-white">{position}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}