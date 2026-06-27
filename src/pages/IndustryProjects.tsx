import SectionTitle from "@/components/SectionTitle";

export default function IndustryProjects() {
  const items = [
    { title: "荆楚非遗数字化保护与传播平台建设", progress: "进行中", desc: "运用VR/AR技术对荆楚非遗项目进行数字化采集、建模与展示。" },
    { title: "武汉东湖文旅研学课程开发", progress: "已完成", desc: "联合东湖风景区开发面向中小学生的文旅研学实践课程体系。" },
    { title: "酒店数字化运营管理系统优化", progress: "进行中", desc: "校企联合开发酒店智能前台与客房管理系统，提升运营效率。" },
    { title: "非遗文创产品设计与推广", progress: "进行中", desc: "开展叶画、缠花、西兰卡普等非遗元素的文创产品设计转化。" },
    { title: "文旅直播与新媒体运营实训", progress: "已完成", desc: "联合传媒机构搭建文旅直播实训平台，培养新媒体运营人才。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="合作项目" subtitle="产教融合，项目驱动" />
          <div className="mt-8 space-y-4">
            {items.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-6 hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-body font-bold text-heritage-primary mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <span className={`shrink-0 text-xs px-3 py-1 rounded-full font-medium ${item.progress === '已完成' ? 'bg-green-100 text-green-700' : 'bg-heritage-primary/10 text-heritage-primary'}`}>
                    {item.progress}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
