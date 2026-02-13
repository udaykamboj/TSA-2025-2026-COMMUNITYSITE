import { Lightbulb } from "lucide-react"

interface InfoBoxProps {
  title: string
  children: React.ReactNode
}

export default function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <div
      className="rounded-lg border border-amber-200 bg-amber-50 p-4 md:p-5"
      role="note"
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <Lightbulb className="h-6 w-6 text-amber-600" aria-hidden />
        </div>
        <div>
          <h3 className="font-bold text-amber-800 mb-1">{title}</h3>
          <div className="text-slate-700 text-[15px] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
