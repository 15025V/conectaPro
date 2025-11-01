interface MainCardProps {
  name: string
  specialty: string
  tags: string[]
  description: string
  contactEmail?: string
  contactPhone?: string
  imageUrl: string
}

export default function MainCard({
  name,
  specialty,
  tags,
  description,
  contactEmail,
  contactPhone,
  imageUrl
}: MainCardProps) {
  return (
    <div className="bg-[#1E2A38] text-white rounded-xl p-6 shadow-md flex gap-4 items-start">
      <img src={imageUrl} alt={name} className="w-20 h-20 rounded-full object-cover border-2 border-[#1EBE91]" />

      <div className="flex-1">
        <h3 className="text-lg font-bold">{name}</h3>
        <span className="text-sm text-[#1EBE91] font-medium">{specialty}</span>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="bg-[#1EBE91] text-white text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {description && (
          <p className="text-sm mt-3 opacity-80">{description}</p>
        )}

        <div className="flex gap-4 mt-4 text-sm">
          {contactEmail && (
            <a href={`mailto:${contactEmail}`} className="underline hover:text-[#1EBE91]">📧 Email</a>
          )}
          {contactPhone && (
            <a href={`tel:${contactPhone}`} className="underline hover:text-[#1EBE91]">📞 Teléfono</a>
          )}
        </div>
      </div>
    </div>
  )
}
