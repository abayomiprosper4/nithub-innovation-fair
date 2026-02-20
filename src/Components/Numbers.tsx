import { FiArrowUpRight } from "react-icons/fi";

export default function Numbers() {
  const emptyBoxClass = "bg-[#EAEAEA] w-full h-44 md:h-60";

  return (
    <section className="w-full bg-[#F3F4F6] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="maindiv text-4xl md:text-5xl font-bold mb-8 text-black">
          Nithub In Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className={emptyBoxClass}></div>
          <div className={emptyBoxClass}></div>
          <div className={emptyBoxClass}></div>
          <div className={emptyBoxClass}></div>
          <div className={emptyBoxClass}></div>
          
          <div className="bg-[#62CF3A] w-full h-44 md:h-60 flex items-center justify-center text-white text-5xl lg:text-6xl font-bold cursor-pointer hover:brightness-85 transition-all">
            Register <FiArrowUpRight className="ml-1" />
          </div>

        </div>
      </div>
    </section>
  );
}