import SectionTitle from "@/components/SectionTitle";

export default function DigitalHeritage() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="数字非遗设计与制作" subtitle="传承千年技艺，创新数字未来" />

          {/* 专业简介 */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />
              专业简介
            </h3>
            <div className="space-y-5 text-gray-700 leading-loose text-base">
              <p className="indent-8">数字非遗设计与制作专业是学院重点特色专业，致力于将传统非遗技艺与现代数字技术相融合。专业依托荆楚地区丰富的非遗资源，开设叶画、缠花、西兰卡普、雕花剪纸、汉绣、书法、漆扇、茶艺等特色课程。</p>
              <p className="indent-8">培养既懂传统工艺又掌握现代设计理念的复合型人才。学生将系统学习非遗传统技艺的核心技法与工艺流程，同时掌握数字化设计工具与制作技术。</p>
              <p className="indent-8">毕业生可从事非遗传承人、文创产品设计师、博物馆文化馆策展、文化旅游策划、非遗教育培训等方向工作，就业前景广阔。</p>
            </div>
          </div>

          {/* 图片占位 */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-[6px]">
            {['图片占位 ①', '图片占位 ②', '图片占位 ③'].map((label, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/20 via-heritage-secondary/20 to-heritage-gold/20 border border-heritage-primary/10 flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                <div className="text-center">
                  <span className="text-4xl">🎨</span>
                  <p className="mt-2 text-heritage-primary/40 text-xs">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
