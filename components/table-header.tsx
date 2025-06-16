export function TableHeader() {
  return (
    <div className="hidden md:block bg-black text-white rounded-lg overflow-hidden mb-2">
      {/* Header Row */}
      <div className="h-[34px] grid grid-cols-[150px_1fr_150px_100px_150px] gap-4 items-center px-4">
        {/* BOOKMAKER */}
        <div className="text-center">
          <span className="text-xs font-bold">BOOKMAKER</span>
        </div>

        {/* BONUS OFFER */}
        <div className="text-center">
          <span className="text-xs font-bold">BONUS</span>
        </div>

        {/* USER RATING */}
        <div className="text-center">
          <span className="text-xs font-bold">USER RATING</span>
        </div>

        {/* SCORE */}
        <div className="text-center">
          <span className="text-xs font-bold">SCORE</span>
        </div>

        {/* VISIT SITE */}
        <div className="text-center">
          <span className="text-xs font-bold">VISIT SITE</span>
        </div>
      </div>
    </div>
  )
}
