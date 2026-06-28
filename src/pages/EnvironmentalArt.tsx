import SectionTitle from "@/components/SectionTitle";

export default function EnvironmentalArt() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="环境艺术设计" subtitle={<span className="font-bold">专业代码：<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>550106</span></span>} />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-6 text-gray-700 leading-loose text-base">
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />一、专业定位
                </h4>
                <p className="indent-8">深耕湖北、辐射华中区域，面向数字创意、室内设计、商业展示、景观环境、空间交互设计五大产业集群，对接家装公司、商业工装、地产软装、展厅展陈、数字空间设计等中小微企业用人需求，助力人居环境提质升级，服务人居空间数字化改造及相关产业高质量发展。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />二、培养目标
                </h4>
                <p className="indent-8">践行社会主义核心价值观，立足湖北全域，面向室内设计、景观设计、空间交互设计三大核心领域，培养系统掌握专业理论与技能、秉承精益求精工匠精神、具备较强设计施工管理能力，能独立承担家装及小型工装项目，成长为"精设计、擅绘图、懂工艺、能施工"的创新型、复合型、发展型，且德智体美劳全面发展的高技能人才。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />三、核心课程
                </h4>
                <p className="indent-8">开设专业基础课与技能方向课程，主要包括：居住空间设计、商业空间设计、展示设计（课赛融通课程，对接装饰美工二级高级技师职业技能等级证书）、景观设计、公共空间综合技能实训（项目化课程）、SketchUp 空间建模、CAD 施工图设计（企业导师授课模块）。课程整体采用项目任务驱动教学法，全面推行理实一体化教学模式。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />四、专业特色
                </h4>
                <p className="indent-8">本专业为教育部国家级现代学徒制试点专业、全国党建样板支部、世界技能大赛商品展示技术项目湖北省集训基地、省级特色专业、省级现代学徒制试点专业、省级校企实习基地、校级重点专业。教学团队有国务院津贴专家、中国技术指导专家、世界技能大赛中国国家集训队教练、湖北省教学名师、湖北省技术能手、湖北省技术专家、国家级裁判多人。专业以"校企循动、实境育人"的人才培养模式，形成"产教融合、五项对接"的专业特色。</p>
                <p className="indent-8 mt-3">育人成果成效显著，先后有十余名学生凭借竞赛特长获批免试专升本。累计培育10余名学生荣获"全国技术能手""湖北省技术能手"称号。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />五、就业与升学方向
                </h4>
                <p className="indent-8">毕业生可从事室内设计、景观设计、展示陈列、空间交互设计等相关工作。本专业为国家级现代学徒制试点专业，与深圳杰恩设计旗下全资子公司深圳杰图数字设计有限公司共建订单班，企业导师承担部分教学任务，学生可在其武汉分公司跟岗实习，考核合格者可优先录用。</p>
                <p className="indent-8 mt-3">升学渠道多元，近三年已有十余名学生凭借技能竞赛成绩获得免试专升本资格，专升本整体录取率稳定在80%以上。</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-[6px]">
            {[
              { img: '环艺-1.png', caption: '世界大赛湖北省集训基地' },
              { img: '环艺-2.png', caption: '第二届全国职业技能大赛世赛商品展示技术赛项铜奖' },
              { img: '环艺-3.png', caption: '第三届全国职业技能大赛铜奖' },
            ].map((item, i) => (
              <div key={i}>
                <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" style={{ aspectRatio: '1134/788' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}${item.img}`}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-[20px] font-bold text-heritage-primary/70 font-body">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
