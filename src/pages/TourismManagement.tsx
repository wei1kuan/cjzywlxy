import SectionTitle from "@/components/SectionTitle";

export default function TourismManagement() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="旅游管理" subtitle="以文塑旅，以旅彰文" />

          <div className="mt-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/20 via-heritage-secondary/20 to-heritage-gold/20 h-72 md:h-96 flex items-center justify-center border border-heritage-gold/10">
            <div className="text-center">
              <span className="text-7xl">✈️</span>
              <p className="mt-3 text-heritage-primary/40 text-sm">旅游管理 · 专业风采</p>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-xl shadow-sm border border-heritage-gold/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />
              专业简介
            </h3>
            <div className="space-y-5 text-gray-700 leading-loose text-base">
              <p className="indent-8">
                旅游管理专业培养具备现代旅游管理理论和实践能力的专业人才，涵盖旅游规划、景区管理、旅游营销等核心领域。
              </p>
              <p className="indent-8">
                学生将学习旅游学概论、旅游规划与开发、景区服务与管理等课程，通过实地考察和项目实践提升综合管理能力。
              </p>
              <p className="indent-8">
                毕业生可在旅游行政管理部门、旅行社、旅游景区、文旅集团、在线旅游平台等单位从事管理与运营工作。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
