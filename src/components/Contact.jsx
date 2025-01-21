import AnimatedTitle from "./AnimatedTitle";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="clip" />
  </div>
);

// Updated teamMembers array with positions
const teamMembers = [
  { name: "Armaan Grover", phone: "+91 98116 34813", position: "Secretary", image: "/img/john-doe.jpg" },
  { name: "Darpin Mevcha", phone: "+91 98116 48881", position: "Freshman coordinator", image: "/img/jane-smith.jpg" },
  { name: "Samarth Verma", phone: "+91 74284 10831", position: "Associate Secretary", image: "/img/samuel-green.jpg" },
  { name: "Piyush Mahajan", phone: "+91 99719 96149", position: "Associate Secretary", image: "/img/alex-johnson.jpg" },
];

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">Join Mint Money</p>

          <AnimatedTitle
            title="Meet Fin<b>v<b>est Family"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
        </div>
      </div>

      

      {/* Meet the Members Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-white">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-center">{member.name}</h3>
            <p className="text-xl mt-2 text-center">{member.phone}</p>
            <p className="text-lg mt-2 text-center text-gray-400">{member.position}</p>
          </div>
        ))}
        
      </div>
      {/* New Paragraph Section */}
      <div className="text-center text-lg text-slate-800 mt-10">
        <p>
          At Finvest, we’re a family bound by our shared interest in all things finance. With students across different years and majors, we’re a team that thrives on diversity, blending different perspectives, ideas, and skills to compound our strengths and balance our ambitions. Whether we're diving into market trends or brainstorming the next big idea, we know that great things happen when we invest in each other’s potential. Now, as we gear up to host you at Mint Money 2025, we’re ready to cash in on months of hard work, creativity, and relentless dedication. Get ready – this isn’t just an event, it’s the moment we’ve all been waiting for, and we can’t wait to have you join us for the ultimate showcase of innovation, passion, and finance!
        </p>
      </div>
    </div>
  );
};

export default Contact;
