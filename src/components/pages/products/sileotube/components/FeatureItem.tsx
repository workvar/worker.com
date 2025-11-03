const FeatureItem = (props: { title: string, description: string }) => {
    return (
      <div className="flex flex-col gap-2 bg-[#E5E5E5] rounded-2xl p-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{props.title}</h3>
        <p className="text-gray-600 text-base md:text-lg">{props.description}</p>
      </div>
    )
  }

export default FeatureItem;