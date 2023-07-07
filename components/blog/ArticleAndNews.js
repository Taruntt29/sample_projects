
import React from "react"
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const data = [
    {
        id: 1,
        img: "/assets/images/blog-news2.png",
        title: "11 Tips to Help You Get New Clients",
        src: "/assets/images/blog-person.png",
        name: "Sarah Harding",
        date: "14 Nov 2023",
    },
    {
        id: 2,
        img: "/assets/images/blog-news1.png",
        title: "11 Tips to Help You Get New Clients",
        src: "/assets/images/blog-person.png",
        name: "Sarah Harding",
        date: "14 Nov 2023",
    },
    {
        id: 3,
        img: "/assets/images/blog-news3.png",
        title: "11 Tips to Help You Get New Clients",
        src: "/assets/images/blog-person.png",
        name: "Sarah Harding",
        date: "14 Nov 2023",
    },

];

const ArticleAndNews = () => {
    return (
        <div className="md:px-0 px-5">
            <div className=" text-3xl text-center font-s-bold pt-16 "> Article & News </div>
            <div className="text-2xl text-center font-s-normal pt-3">Get the Latest News, Updates and Tips</div>
            <div className="grid md:grid-cols-3 md:gap-2 container">

                {data.map((e, obj) => (
                    <div key={obj} className="relative rounded m-4 pt-4 hover:-translate-y-2 duration-500 hover:scale-105 transition-all hover:drop-shadow-xl mx-auto justify-center cardFlex">
                        <img src={e.img} className="shadow mx-auto md:h-96 w-80 rounded" alt="" />
                        <div className="absolute  rounded-b-2xl bottom-0  px-4 pb-5 pt-20 text-white text-left space-y-1 w-80 bg-gradient-to-b from-[#FFFFFF00] via-[#0C18537A] to-[#0C1853] ">
                         <Link to="/blog-detail">   <h2 className="text-lg font-s-bold" style={{ textShadow: '1px 1px 1px black' }}>{e.title}</h2> </Link>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <img alt="" src={e.src} className="w-10" />
                                    </div>
                                    <div className="text-sm font-s-regular">
                                        {e.name}
                                    </div>
                                </div>
                                <div className="text-sm font-s-regular">
                                    {e.date}
                                </div>
     
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ArticleAndNews