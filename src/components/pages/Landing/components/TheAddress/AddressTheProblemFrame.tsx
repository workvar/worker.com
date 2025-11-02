interface AddressTheProblemFrameProps {
  ref: React.RefObject<HTMLDivElement>;
}

const AddressTheProblemFrame = ({ ref }: AddressTheProblemFrameProps) => {
  return (
    <div ref={ref} className="w-screen h-screen flex items-center justify-center" id="address-the-problem">
      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
          Address the problem
        </h1>
        <p className="text-base md:text-lg text-white font-light leading-relaxed">
          It is our firm belief that making a person aware of what they are doing wrong is a much more effective way than making them do the wrong in the right way.
        </p>
      </div>
    </div>
  );
};

export default AddressTheProblemFrame;