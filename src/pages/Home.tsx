import Carousel from '@/components/Carousel';
import InfoColumns from '@/components/InfoColumns';
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
    </>
  );
}
