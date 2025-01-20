import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="clip" />
  </div>
);

// Updated teamMembers array with positions
const teamMembers = [
  { name: "Preksha", phone: "+1 234 567 890", position: "Secretary", image: "/img/john-doe.jpg" },
  { name: "Neerja", phone: "+1 234 567 891", position: "PR Lead", image: "/img/jane-smith.jpg" },
  { name: "Armaan", phone: "+1 234 567 892", position: "Tech Lead", image: "/img/samuel-green.jpg" },
  { name: "Darpin", phone: "+1 234 567 893", position: "Marketing Head", image: "/img/alex-johnson.jpg" },
];

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">Join Mint Money</p>

          <AnimatedTitle
            title="Meet The Members"
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
    </div>
  );
};

export default Contact;
