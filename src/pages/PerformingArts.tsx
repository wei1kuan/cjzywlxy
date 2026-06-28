import SectionTitle from "@/components/SectionTitle";

export default function PerformingArts() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="表演艺术" subtitle="演绎人生百态，绽放艺术光芒" />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-5 text-gray-700 leading-loose text-base">
              <p className="indent-8">表演艺术专业培养具有扎实表演功底和艺术创造力的表演人才。专业涵盖戏剧表演、舞蹈表演、声乐表演等多个方向，注重学生综合素质的培养。</p>
              <p className="indent-8">学生将系统学习表演基础训练、形体训练、声乐、台词、剧目排练等核心课程，通过舞台实践和演出项目积累表演经验。</p>
              <p className="indent-8">毕业生可在文艺团体、影视机构、文化馆、艺术培训机构、文旅演艺企业等单位从事表演、教学和艺术管理工作。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/20 via-heritage-secondary/20 to-heritage-gold/20 h-72 md:h-96 flex items-center justify-center border border-heritage-primary/10">
            <div className="text-center"><span className="text-7xl">🎭</span><p className="mt-3 text-heritage-primary/40 text-sm">表演艺术 · 专业风采</p></div>
          </div>
        </div>
      </main>
    </div>
  );
}
