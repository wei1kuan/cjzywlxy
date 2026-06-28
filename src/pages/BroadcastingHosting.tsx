import SectionTitle from "@/components/SectionTitle";

export default function BroadcastingHosting() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="播音与主持" subtitle="声动人心，传递力量" />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-5 text-gray-700 leading-loose text-base">
              <p className="indent-8">播音与主持专业培养具有良好文化素养、播音主持专业能力和创新精神的应用型人才。专业涵盖广播电视播音、节目主持、新媒体主播、活动主持等方向。</p>
              <p className="indent-8">学生将学习播音发声、播音创作基础、即兴口语表达等核心课程，通过演播室实训和舞台实践提升专业能力。</p>
              <p className="indent-8">毕业生可在广播电视台、新媒体平台、文化传媒公司、企事业单位从事播音员、主持人、新媒体主播等工作。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/20 via-heritage-secondary/20 to-heritage-gold/20 h-72 md:h-96 flex items-center justify-center border border-heritage-primary/10">
            <div className="text-center"><span className="text-7xl">🎙️</span><p className="mt-3 text-heritage-primary/40 text-sm">播音与主持 · 专业风采</p></div>
          </div>
        </div>
      </main>
    </div>
  );
}
