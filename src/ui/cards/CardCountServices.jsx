export default function CardCountServices({ title, count, percentage, isActive = false }) {
  return (
    <div 
      className={`
        relative rounded-xl p-4 transition-all duration-500 ease-in-out cursor-pointer group shadow-lg
        ${isActive 
          ? 'bg-gradient-to-br from-purple-600 to-purple-500 text-white shadow-lg scale-[1.02]' 
          : 'bg-white text-gray-900 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-500 hover:text-white hover:shadow-xl hover:scale-[1.02]'
        }
      `}
    >
      {/* Header with title and edit icon */}
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-900 group-hover:text-white'} transition-colors duration-500`}>
          {title}
        </h3>
        <button 
          className={`
            p-1.5 rounded-full transition-all duration-500
            ${isActive 
              ? 'bg-white/20 hover:bg-white/30' 
              : 'bg-gray-100 hover:bg-gray-200 group-hover:bg-white/20 group-hover:hover:bg-white/30'
            }
          `}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-white'} transition-colors duration-500`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </button>
      </div>

      {/* Count */}
      <div className={`text-4xl font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-900 group-hover:text-white'} transition-colors duration-500`}>
        {count}
      </div>

      {/* Percentage increase */}
      <div className="flex items-center gap-1">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-purple-600 group-hover:text-white'} transition-colors duration-500`}
        >
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
        <span className={`text-xs font-medium ${isActive ? 'text-white' : 'text-purple-600 group-hover:text-white'} transition-colors duration-500`}>
          {percentage} Increase From Last Month
        </span>
      </div>
    </div>
  );
}