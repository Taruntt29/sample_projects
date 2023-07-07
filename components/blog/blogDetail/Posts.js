import React from "react";
const postdata = [
  {
    id: 1,
    img: "/assets/images/blog-post.png",
    date2: "Sept 05, 2022",
    title:
      "How to convince recruiters and get your dream job. Get behind the wheel!",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    src: "/assets/images/blog-person.png",
    name: "Sarah Harding",
    date: "14 Nov 2023",
  },
  {
    id: 2,
    img: "/assets/images/blog-post.png",
    date2: "Sept 05, 2022",
    title:
      "How to convince recruiters and get your dream job. Get behind the wheel!",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    src: "/assets/images/blog-person.png",
    name: "Sarah Harding",
    date: "14 Nov 2023",
  },
  {
    id: 3,
    img: "/assets/images/blog-post.png",
    date2: "Sept 05, 2022",
    title:
      "How to convince recruiters and get your dream job. Get behind the wheel!",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    src: "/assets/images/blog-person.png",
    name: "Sarah Harding",
    date: "14 Nov 2023",
  },

];
const Posts = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3   gap-10 md:px-12 px-5 pt-12 pb-20 container">
        {postdata.map((item, obj) => (
          <div className="shadow-md border border-primary bg-white rounded-md pb-6 p-2">
            <div>
              {" "}
              <img alt="images" src={item.img} />
            </div>
            <div className=" bg-primary text-white px-10 py-3 w-[60%] rounded-xl mt-6">
              {item.date2}
            </div>
            <div className="lg:pt-10 pt-20 ">
              <h4 className="font-s-bold text-lg">{item.title}</h4>
              <p className="pt-2 text-sm font-s-normal">{item.para}</p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center space-x-3">
                <div>
                  <img alt="" src={item.src} className="w-10" />
                </div>
                <div className="text-sm">{item.name}</div>
              </div>
              <div className="text-sm">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
