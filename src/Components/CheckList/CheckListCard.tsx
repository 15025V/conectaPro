interface ChecklistCardProps {
  title?: string
  items: { label: string; completed: boolean }[]
  variant?: 'dark' | 'highlight'
}

export default function ChecklistCard({ title, items, variant = 'dark' }: ChecklistCardProps) {
  const bgClass = variant === 'highlight' ? 'bg-[#20C39D]' : 'bg-[#0F1E2D]'
  const textClass = variant === 'highlight' ? 'text-white' : 'text-[#C8D2D7]'

  return (
    <div className={`rounded-xl p-6 w-full max-w-xs  ${bgClass} ${textClass}`}>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className={`text-xl ${item.completed ? 'text-[#1EBE91]' : 'text-red-400'}`}>
              {item.completed ? '✔' : '✖'}
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
