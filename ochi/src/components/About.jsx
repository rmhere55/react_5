// import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div className="W-full py-20 px-[4.5vw] text-black bg-[#CDEA68] rounded-t-3xl ">
    <h1 className="text-[3.5vw] leading-[4vw] tracking-tight pb-[3vw]">
      Ochi is a strategic partner for fast-grow­ing tech <br /> businesses
      that need to <u>raise funds</u>, <u>sell prod­ucts</u>,
      <br /> <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.
    </h1>

<div className="textpart flex justify-between mt[3vw] border-y border-black  pt-[1.5vw] pb-[4vw]">
<p>What you can expect:</p>
        <p>
          We create tailored presentations to help
          <br /> you persuade your colleagues, clients, or
          <br /> investors. Whether it’s live or digital,
          <br /> delivered for one or a hundred people.
          <br />
          <br />
          We believe the mix of strategy and <br />
          design (with a bit of coffee) is what
          <br /> makes your message clear, convincing,
          <br /> and captivating.
        </p>
        <p>
          <br />
          <br />
          <br />
          S:
          <br />
          <br />
          Instagram
          <br />
          Behance
          <br />
          Facebook
          <br />
          Linkedin
          <br />
        </p>


</div>
{/* <div className="w-full flex gap-10 pt-[1.9vw] pb-[1.8vw]">
  <div className="w-1/2">
  <h1 className="text-[4vw]">Our approch:</h1>
  <button className=" group flex hover:bg-black  gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-900 rounded-full text-white">
  READ MORE
<div className=" group-hover:scale-150  rounded-full bg-white w-[1.8vw] h-[1.8vw] flex items-center justify-center">
<span className=" group-hover:text-black rotate-[45deg]  ">
              <FaArrowUpLong />
            </span>
</div>
</button>
</div>


<div className=" w-1/2 h[60vh]">
<img className="rounded-lg group-hover:scale-150 transform transition duration-300 " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="img"></img>

    
  </div>
</div> */}


{/* <div className="w-full flex gap-10 pt-[1.9vw] pb-[1.8vw]">
      <div className="w-1/2">
        <h1 className="text-[4vw]">Our approach:</h1>
        {/* This is the group that will apply the hover effect to both button and image 
        <div className="group">
          <button className="flex hover:bg-black gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-900 rounded-full text-white">
            READ MORE
            <div className="group-hover:scale-150 rounded-full bg-white w-[1.8vw] h-[1.8vw] flex items-center justify-center">
              <span className="group-hover:text-black rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </button>

          {/* Image now responds to group hover 
          <img
            className="rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110 mt-[1vw]" // Adjusted scale and added transition
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="img"
          />
        </div>
      </div>
    </div> */}


    <div className="w-full flex  justify-between items-center gap-10 pt-[2.9vw] pb-[2.8vw]">
      {/* <div className="w-1/2"> */}
        <h1 className="text-[4vw]">Our approach:</h1>

        {/* This div will use flexbox and justify-between to align button and image */}
        <div className="flex justify-between items-center mt-[0.5vw] group">
          {/* Button */}
          <button className="flex hover:bg-black gap-[2vw] items-center px-[2vw] py-[1.2vw] bg-zinc-900 rounded-full text-white">
            READ MORE
            <div className="group-hover:scale-150 rounded-full bg-white w-[1.8vw] h-[1.8vw] flex items-center justify-center">
              <span className="group-hover:text-black rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </button>

          {/* Image */}
          <div className=" w-1/2 flex ml-60 justify-end  ">

          <img
            className="h-[27vw] w-[30vw]  rounded-lg transform scale-110 transition-transform duration-300 ease-in-out group-hover:scale-100 w-[30%]" // Adjusted scale and added transition
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="img"
          />
          {/* </div> */}
        </div>
      </div>
    </div>


    </div>
  )
}

export default About