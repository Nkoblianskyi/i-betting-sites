export function TableHeader() {
  return (
    <div className="hidden md:block bg-black text-white rounded-lg overflow-hidden mb-2">
      {/* Header Row - значно зміщую USER RATING і SCORE лівіше */}
      <div className="h-[32px] grid grid-cols-[200px_2fr_180px_120px_180px] gap-2 items-center px-4">
        {/* BOOKMAKER */}
        <div className="text-center">
          <span className="text-xs">BOOKMAKER</span>
        </div>

        {/* BONUS OFFER */}
        <div className="text-center">
          <span className="text-xs ">BONUS OFFER</span>
        </div>

        {/* USER RATING */}
        <div className="text-center">
          <span className="text-xs">USER RATING</span>
        </div>

        {/* SCORE */}
        <div className="text-center">
          <span className="text-xs">SCORE</span>
        </div>

        {/* VISIT SITE */}
        <div className="text-center">
          <span className="text-xs">VISIT SITE</span>
        </div>
      </div>
    </div>
  )
}
