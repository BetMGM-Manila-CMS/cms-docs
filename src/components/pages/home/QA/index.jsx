import Marquee from "react-fast-marquee";
import teamData from "@site/config/team"

const images = [
    {
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719805919/lions-awards/june/media_20240628_171228_2149623393448567948_pxknmy.jpg"
    },
    {
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719805924/lions-awards/june/Pride_Wall_2_kjn603.jpg"
    },
    {
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719805938/lions-awards/june/Free_pins_vyl6n1.jpg"
    },
    {
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719805929/lions-awards/june/bts_1_q8axso.jpg"
    },
    {
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719805919/lions-awards/june/media_20240628_171228_2149623393448567948_pxknmy.jpg"
    },
    {
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719805933/lions-awards/june/Final_Poster_Portrait_1_qcsfp0.jpg"
    }
]

export default function QA() {
    const currentQA = teamData.qa.sort((a, b) => new Date(b.month) - new Date(a.month))[0]

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    return (
        <div className=" pb-10">
            <div className="h-56 bg-primary flex flex-col justify-center relative">
                <div
                    className="w-[300px] md:w-[500px] pt-4 pb-6 px-4 mx-auto lg:px-6 text-center relative z-10 h-full flex flex-col justify-center"
                    style={{ background: "linear-gradient(270deg, rgba(183, 162, 109, 0) 0%, rgba(183, 162, 109, 0.7) 30%, rgba(183, 162, 109, 0.7) 70%, rgba(183, 162, 109, 0) 100%)" }}
                >
                    <h3 className="text-lg font-normal dark:text-white mb-2">{months[new Date(currentQA.month).getMonth()]} QA Score</h3>
                    <h2 className="text-6xl font-extrabold leading-none tracking-tight dark:text-white mb-0">{currentQA.score}%</h2>
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <Marquee>
                        {
                            currentQA.images.map(({ image }, index) => (<img className="h-56 opacity-50 hover:opacity-100 transition-opacity duration-500" key={index} src={image} />))
                        }
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
