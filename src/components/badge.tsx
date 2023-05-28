export default function Badge({ text, color }: { text: string, color: string }) {
  return (
    <div className={`${color} p-1 rounded text-xs font-semibold w-fit h-6 flex justify-center items-center uppercase`}>
      {text}
    </div>
  )
}