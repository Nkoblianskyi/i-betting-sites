export function TableHeader() {
  return (
    <div className="hidden md:block bg-black text-white rounded-lg overflow-hidden mb-2">
      {/* Header Row - значно зміщую USER RATING і SCORE лівіше */}
      <div className="h-[35px] grid grid-cols-[200px_2fr_180px_120px_180px] gap-2 items-center px-4">
        {/* BOOKMAKER */}
        <div className="text-center">
          <span className="text-sm font-bold">BOOKMAKER</span>
        </div>

        {/* BONUS OFFER */}
        <div className="text-center">
          <span className="text-sm font-bold">BONUS OFFER</span>
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
