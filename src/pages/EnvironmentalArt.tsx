import SectionTitle from "@/components/SectionTitle";

export default function EnvironmentalArt() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="环境艺术设计" subtitle="营造美好空间，设计宜居环境" />

          <div className="mt-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/20 via-heritage-secondary/20 to-heritage-gold/20 h-72 md:h-96 flex items-center justify-center border border-heritage-gold/10">
            <div className="text-center">
              <span className="text-7xl">🏛️</span>
              <p className="mt-3 text-heritage-primary/40 text-sm">环境艺术设计 · 专业风采</p>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-xl shadow-sm border border-heritage-gold/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />
              专业简介
            </h3>
            <div className="space-y-5 text-gray-700 leading-loose text-base">
              <p className="indent-8">
                环境艺术设计专业培养具有艺术素养和设计创新能力的环境艺术设计人才。专业涵盖室内设计、景观设计、展示设计等多个方向，注重理论与实践相结合。
              </p>
              <p className="indent-8">
                学生将系统学习空间设计原理、装饰材料与构造、计算机辅助设计等核心课程，掌握从方案构思到施工落地的完整设计流程。
              </p>
              <p className="indent-8">
                毕业生可在建筑设计院、室内设计公司、景观规划设计机构、展览展示公司等单位从事环境空间的设计与规划工作。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
