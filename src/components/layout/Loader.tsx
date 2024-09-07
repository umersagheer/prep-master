const Loader = () => {
  return (
    <div className="h-screen w-screen bg-slate-100 flex items-center justify-center">
        <div className="absolute w-32 h-32 border-t-2 border-green-400 rounded-full animate-spin"></div>
        <div className="absolute w-28 h-28 border-b-2 border-green-400 rounded-full animate-spin"></div>
        <div className="absolute w-24 h-24 border-r-2 border-green-400 rounded-full animate-spin"></div>
        <div className="absolute w-20 h-20 border-l-2 border-green-400 rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 border-t-2 border-green-400 rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 border-b-2 border-green-400 rounded-full animate-spin"></div>
        <div className="absolute w-6 h-6 border-l-2 border-green-400 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader