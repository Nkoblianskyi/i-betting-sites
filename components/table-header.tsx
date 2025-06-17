export function TableHeader() {
  return (
    <div className="hidden md:block bg-black text-white rounded-lg overflow-hidden mb-2">
      {/* Header Row - using the exact same grid as SiteCard for perfect alignment */}
      <div className="h-[40px] grid lg:grid-cols-[200px_2fr_180px_120px_180px] md:grid-cols-[100px_1fr_120px_80px_120px] gap-2 items-center px-4">
        {/* BOOKMAKER */}
        <div className="text-center">
          <span className="text-xs">BOOKMAKER</span>
        </div>

        {/* BONUS OFFER */}
        <div className="text-center">
          <span className="text-xs">BONUS OFFER</span>
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
