export function TableHeader() {
  return (
    <div className="bg-black text-white rounded-lg overflow-hidden mb-2">
      {/* Header Row */}
      <div className="h-[50px] grid grid-cols-[150px_1fr_150px_100px_150px] gap-4 items-center px-4">
        {/* BOOKMAKER */}
        <div className="text-center">
          <span className="text-sm font-bold">BOOKMAKER</span>
        </div>

        {/* BONUS OFFER */}
        <div className="text-center">
          <span className="text-sm font-bold">BONUS</span>
        </div>

        {/* USER RATING */}
        <div className="text-center">
          <span className="text-sm font-bold">USER RATING</span>
        </div>

        {/* SCORE */}
        <div className="text-center">
          <span className="text-sm font-bold">SCORE</span>
        </div>

        {/* VISIT SITE */}
        <div className="text-center">
          <span className="text-sm font-bold">VISIT SITE</span>
        </div>
      </div>
    </div>
  )
}
