export default function CardDataStats({
  title,
  icon,
  total,
  // levelUp,
  // levelDown,
  rate,
  level,
}) {
  return (
    <div className="rounded-sm border border-[#E2E8F0] bg-white px-7 py-6 shadow-default dark:border-[#2E3A47] dark:bg-[#24303F] text-black dark:text-white">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFF2F7] dark:bg-[#313D4A]">
        {icon}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold ">{total}</h4>
          <span className="text-sm font-medium text-[#64748B]">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            level === "up" ? "text-[#10B981]" : "text-[#259AE6]"
          }`}
        >
          {rate}

          {}

          {level === "up" ? (
            <svg
              className="fill-[#10B981]"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          ) : (
            <svg
              className="fill-[#259AE6]"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
}
