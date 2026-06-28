import SectionTitle from "@/components/SectionTitle";

export default function HotelManagement() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="酒店管理与数字化运营" subtitle="品质服务，智慧管理" />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-5 text-gray-700 leading-loose text-base">
              <p className="indent-8">酒店管理与数字化运营专业培养掌握现代酒店管理理论和数字化运营技能的专业人才，紧跟行业数字化转型趋势。</p>
              <p className="indent-8">学生将学习酒店管理概论、前厅与客房管理、餐饮服务与管理、数字化运营等核心课程，通过校内实训和校外实习积累经验。</p>
              <p className="indent-8">毕业生可在星级酒店、度假村、连锁酒店集团、高端餐饮企业、在线旅游平台等单位从事管理运营工作。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/20 via-heritage-secondary/20 to-heritage-gold/20 h-72 md:h-96 flex items-center justify-center border border-heritage-primary/10">
            <div className="text-center"><span className="text-7xl">🏨</span><p className="mt-3 text-heritage-primary/40 text-sm">酒店管理与数字化运营 · 专业风采</p></div>
          </div>
        </div>
      </main>
    </div>
  );
}
