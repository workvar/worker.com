interface OurEnablementFrameProps {
  ref: React.RefObject<HTMLDivElement>;
}

const OurEnablementFrame = ({ ref }: OurEnablementFrameProps) => {
  return (
    <div ref={ref} className="w-screen h-screen flex items-center justify-center">      
      {/* Diagonal light rays effect */}
      {/* <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent transform rotate-[-25deg] translate-x-[-15%] translate-y-[-5%]" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-[-25deg] translate-x-[15%] translate-y-[5%]" />
      </div> */}

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
          We enable, you achieve
        </h1>
        <p className="text-base md:text-lg text-white font-light leading-relaxed">
          Built on science and simplicity, our tools reduce digital noise and help you stay in control. So you can spend less time reacting, and more time creating what truly matters.
        </p>
      </div>
    </div>
  );
};

export default OurEnablementFrame;