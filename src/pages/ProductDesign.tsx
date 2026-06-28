import SectionTitle from "@/components/SectionTitle";

export default function ProductDesign() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="产品艺术设计" subtitle="创意赋能产品，设计改变生活" />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-5 text-gray-700 leading-loose text-base">
              <p className="indent-8">产品艺术设计专业培养具有创新设计思维和实践能力的产品设计人才。专业注重艺术与技术的融合，培养能够进行产品外观设计、结构设计和包装设计的复合型人才。</p>
              <p className="indent-8">学生将学习产品造型设计、人机工程学、材料与工艺等核心知识，掌握从市场调研、概念设计到产品落地的完整设计流程。</p>
              <p className="indent-8">毕业生可在工业设计公司、文创产品企业、家居用品企业、消费电子企业等领域从事产品设计与开发工作。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/20 via-heritage-secondary/20 to-heritage-gold/20 h-72 md:h-96 flex items-center justify-center border border-heritage-primary/10">
            <div className="text-center"><span className="text-7xl">💡</span><p className="mt-3 text-heritage-primary/40 text-sm">产品艺术设计 · 专业风采</p></div>
          </div>
        </div>
      </main>
    </div>
  );
}
