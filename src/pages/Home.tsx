import { Link } from 'react-router-dom';
import Carousel from '@/components/Carousel';
import InfoColumns from '@/components/InfoColumns';
import { teachingResearchHomeData, partyBuildingHomeData } from '@/data/mockData';

/** 漆器橱窗：红色全宽背景 + 轮播图 */
function LacquerShowcase({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-heritage-primary">
      <div className="relative overflow-hidden"
        style={{
          boxShadow: 'inset 0 3px 14px rgba(0,0,0,0.7)',
        }}
      >
        {children}
      </div>

      {/* 燕尾纹装饰 */}
      <img
        src={`${import.meta.env.BASE_URL}background-1.png`}
        alt=""
        className="w-full block"
        style={{ marginTop: '0px' }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <LacquerShowcase>
          <Carousel />
        </LacquerShowcase>
      </div>

      <InfoColumns />

      {/* 教学科研 + 党建工作 双栏 */}
      <section className="py-6 bg-heritage-cream">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* 教学科研 */}
            <div className="bg-white rounded-lg p-6 h-full flex flex-col border border-heritage-primary/10 shadow-sm">
              <div className="flex items-center justify-between border-b-2 border-heritage-primary/40 pb-2 mb-3">
                <h3 className="flex items-center gap-2 text-xl font-display font-bold text-heritage-primary">
                  <span className="text-xl">📖</span>
                  教学科研
                </h3>
                <Link to="/teaching/achievements" className="text-sm text-heritage-primary hover:text-heritage-primary/70 transition-colors shrink-0">
                  更多 &gt;
                </Link>
              </div>
              <ul className="space-y-0 flex-1">
                {teachingResearchHomeData.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-2.5 border-b border-heritage-primary/10 last:border-b-0 hover:bg-heritage-cream/60 transition-colors rounded px-1 group">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 min-w-0 flex-1 group-hover:text-heritage-primary transition-colors">
                      <span className="w-2 h-2 rounded-full bg-heritage-primary/60 shrink-0 group-hover:bg-heritage-primary transition-colors" />
                      <span className="text-base text-gray-700 truncate group-hover:text-heritage-primary transition-colors">{item.title}</span>
                    </a>
                    <span className="text-sm text-gray-400 shrink-0 ml-2">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 党建工作 */}
            <div className="bg-white rounded-lg p-6 h-full flex flex-col border border-heritage-primary/10 shadow-sm">
              <div className="flex items-center justify-between border-b-2 border-heritage-primary/40 pb-2 mb-3">
                <h3 className="flex items-center gap-2 text-xl font-display font-bold text-heritage-primary">
                  <span className="text-xl">🏛️</span>
                  党建工作
                </h3>
                <Link to="/party/dynamics" className="text-sm text-heritage-primary hover:text-heritage-primary/70 transition-colors shrink-0">
                  更多 &gt;
                </Link>
              </div>
              <ul className="space-y-0 flex-1">
                {partyBuildingHomeData.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-2.5 border-b border-heritage-primary/10 last:border-b-0 hover:bg-heritage-cream/60 transition-colors rounded px-1 group">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 min-w-0 flex-1 group-hover:text-heritage-primary transition-colors">
                      <span className="w-2 h-2 rounded-full bg-heritage-primary/60 shrink-0 group-hover:bg-heritage-primary transition-colors" />
                      <span className="text-base text-gray-700 truncate group-hover:text-heritage-primary transition-colors">{item.title}</span>
                    </a>
                    <span className="text-sm text-gray-400 shrink-0 ml-2">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
