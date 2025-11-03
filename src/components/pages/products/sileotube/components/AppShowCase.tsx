import Image from "next/image";

const AppShowcaseIt = (props: { photo: string, alt: string, title: string, description: string[], photoDesktopPosition: "left" | "right" }) => {
    return (
      <div className={`flex flex-col-reverse md:flex-row md:mb-15 pb-12 gap-4 ${props.photoDesktopPosition === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className={`w-full ${props.photoDesktopPosition === "left" ? "md:w-1/2" : "md:w-1/2"}`}>
          <Image src={props.photo} alt={props.alt} width={1000} height={1000} className="w-full h-auto" />
        </div>
        <div className={`w-full md:w-1/2 my-auto ${props.photoDesktopPosition === "left" ? "md:pl-10" : "md:pr-10"}`}>
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-900">{props.title}</h3>
          <span className="text-gray-600 text-base md:text-lg">
            {props.description.map((desc) => (
              <p key={desc} className="mt-3">{desc}</p>
            ))}
          </span>
        </div>
      </div>
    )
  }

export default AppShowcaseIt;