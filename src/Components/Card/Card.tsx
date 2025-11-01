interface CardProps {
  name: string
  specialty: string
  description: string
  imageUrl: string
}

export default function Card({ name, specialty, description, imageUrl }: CardProps) {
  return (
    <div className="bg-[#C8D2D7] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={imageUrl}
        alt={`Foto de ${name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-800">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{specialty}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  )
}
