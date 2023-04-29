export default function Badge({ text, color }: { text: string, color: 'blue' | 'red' }) {
  return (
    <div className={`${color === 'blue' ? 'bg-blue-500' : 'bg-red-500 '} p-1 rounded-md text-xs w-8 h-6 flex justify-center items-center`}>
      {text}
    </div>
  )
}