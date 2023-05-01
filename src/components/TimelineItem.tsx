type Props = {
  year: string;
  title: string;
  duration: string;
  details: string;
};

export default function TimelineItem({
  year,
  title,
  duration,
  details,
}: Props) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-purple-300 dark:border-purple-600">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-purple-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-purple-900 dark:bg-purple-400" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
}
