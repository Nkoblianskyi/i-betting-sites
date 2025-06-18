export function TableHeader() {
  return (
    <div className="hidden md:block bg-black text-white rounded-lg overflow-hidden mb-2">
      {/* Header Row - FLEXBOX З РІВНИМИ ПРОМІЖКАМИ */}
      <div className="h-[40px] flex items-center px-6">
        {/* BOOKMAKER - 25% */}
        <div className="flex-[0_0_25%] text-center pr-4">
          <span className="text-xs font-bold">BOOKMAKER</span>
        </div>

        {/* BONUS OFFER - 20% */}
        <div className="flex-[0_0_20%] text-center px-4">
          <span className="text-xs font-bold">BONUS OFFER</span>
        </div>

        {/* USER RATING - 20% */}
        <div className="flex-[0_0_20%] text-center px-4">
          <span className="text-xs font-bold">USER RATING</span>
        </div>

        {/* SCORE - 15% */}
        <div className="flex-[0_0_15%] text-center px-4">
          <span className="text-xs font-bold">SCORE</span>
        </div>

        {/* VISIT SITE - 20% */}
        <div className="flex-[0_0_20%] text-center pl-4">
          <span className="text-xs font-bold">VISIT SITE</span>
        </div>
      </div>
    </div>
  )
}
