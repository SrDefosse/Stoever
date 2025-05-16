import { Timeline } from "./TimelineLeather"; 

export default function TimelineDemo() {
  const data = [
    {
      title: "Foundation",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Founded with a pioneering spirit, Stoever began its journey dedicated to exceptional craftsmanship and innovative design from day one.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline1.webp"
              alt="Stoever's early days"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Growth and Innovation",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Through years of dedication, Stoever expanded its horizons, continuously refining its techniques and setting new standards in the industry.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline2.webp"
              alt="Stoever's growth period"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "A Legacy of Excellence",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
            Today, Stoever stands as a symbol of enduring quality and timeless style, committed to a future built on a rich heritage of distinction.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/timeline/timeline3.webp"
              alt="Stoever's legacy"
              className="rounded-lg object-cover w-56 h-32 md:w-96 md:h-56 lg:w-[512px] lg:h-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}

