interface SidebarCardProps {
  name: string
  specialty: string
  tags: string[]
  imageUrl: string
  description: string
  contactEmail?: string
  contactPhone?: string
}

export default function SidebarCard({ name, specialty, tags, imageUrl,  contactEmail, contactPhone }: SidebarCardProps) {
  return (
    <div className="flex gap-3 items-start">
      <img src={imageUrl} alt={`Foto de ${name}`} className="w-16 h-16 object-cover rounded-lg" />
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold text-[#1EBE91]">{name}</div>
        <div className="text-xs text-[#0F2D3C]">{specialty}</div>
        <div className="flex gap-2 mt-1 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="bg-emerald-400 text-white text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}

        </div>
        <div className="flex  text-sm">
          {contactEmail && (
            <a href={`mailto:${contactEmail}`} className=" hover:text-[#1EBE91]">📧 Email </a>
          )}
          {contactPhone && (
            <a href={`tel:${contactPhone}`} className=" hover:text-[#1EBE91]">    📞 Teléfono</a>
          )}
      </div>
      </div>
    </div>
  )
}
