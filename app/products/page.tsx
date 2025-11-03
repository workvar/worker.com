import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "SileoTube",
    description: "A powerful browser extension that helps you stay focused and productive while browsing YouTube.",
    image: "/images/sileotube.png",
    link: "/products/sileotube",
  },
  {
    title: "ProjeX",
    description: "Advanced project management solution for modern teams.",
    image: "/images/projex.png",
    link: "/products/projex",
  }
]

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {data.map((item) => (
            <Link href={item.link} key={item.title} className="border border-gray-200 rounded-lg p-6">
              {/* <Image src={item.image} alt={item.title} width={100} height={100} /> */}
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
}

