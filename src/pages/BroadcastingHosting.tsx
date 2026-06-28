import SectionTitle from "@/components/SectionTitle";

export default function BroadcastingHosting() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="播音与主持" subtitle={<span className="font-bold">专业代码：<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>560201</span></span>} />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-6 text-gray-700 leading-loose text-base">
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />一、专业定位
                </h4>
                <p className="indent-8">本专业为校级优质建设专业，紧扣湖北文化传媒、文旅演艺、融媒体、少儿美育等重点产业链需求，2023年获评GDI高职专业评估A档，全国排名第五。面向新媒体主播、基层融媒、礼仪主持、曲艺非遗传播等岗位需求，构建"岗课赛证"一体化育人体系。校内配备标准化播音演播实训场地，校外与十余家融媒体中心、传媒及文艺机构建立稳定合作，行业实践资源充沛。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />二、培养目标
                </h4>
                <p className="indent-8">坚守立德树人根本任务，培养践行社会主义核心价值观，德智体美劳全面发展，具备良好的职业素养、精益求精的工匠精神与数字传播素养，系统掌握播音语音、节目演播、音视频剪辑、活动策划等必备基础理论与实操技能，能够从事融媒体采编播、商业礼仪主持、少儿语言美育、文旅讲解、曲艺非遗传承与演绎等相关工作的高技能人才。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />三、核心课程
                </h4>
                <p className="indent-8">开设专业基础课与技能方向课程，主要课程包括：普通话语音与应用、节目主持艺术、新媒体技术、少儿语言教学、融媒体采编制作、曲艺表演基础、活动策划执行、婚礼主持实务、婚礼策划职业技能等级证书配套课程等。教学以舞台展演、项目采编、活动实战任务驱动为主，强化理实一体化教学模式，依托十年品牌实训展演落实沉浸式实践教学。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />四、专业特色
                </h4>
                <p className="indent-8">师资队伍结构优良，专任教师全员为硕士学历、双师资质齐备，涵盖副教授、国家级普通话测试员、省级文艺协会专业委员；聘请湖北省曲艺家协会理事、湖北省侠笑社文化有限公司主理人刘雄担任驻校产业教授，领航非遗曲艺教学，教研成果突出，教师斩获省级教学成果二等奖、校级教学能力大赛多项奖项。</p>
                <p className="indent-8 mt-3">推行校媒校企协同育人模式，开设曲艺现代学徒制班，采用行业专家"师带徒"的育人模式，邀请行业从业者入校授课并指导实战；校内建有播音实训室，配套专业录音、灯光设备，校外联动武汉电视台、地市融媒体中心、头部传媒公司、少儿美育机构搭建全场景实训平台。专业依托世赛、省级技能大赛、大广赛等赛事搭建训赛演培养体系，以赛促学，同时设立婚礼策划职业技能等级证书考核站点，常态化开展考评，夯实学生专业技能与上岗资质。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />五、就业与升学方向
                </h4>
                <p className="indent-8">就业岗位覆盖面广、发展维度多元。毕业生可从事基层融媒体采编、文旅讲解、商业主持、少儿美育教学、新媒体主播、礼仪婚庆主持、曲艺演艺、企业宣传策划等相关工作，就业辐射武汉全域、全省各地市及周边城市群。依托丰富优质的传媒、国企、融媒体合作资源，学生就业稳定性强，优秀学子可与地方融媒体中心直接签约，担任特约主持人。</p>
                <p className="indent-8 mt-3">升学渠道畅通、培养成效突出。学生可通过统招专升本实现学历提升，专升本整体录取率稳定在80%以上，学子先后考入长江大学、武汉传媒学院、武昌理工学院等省内优质本科院校。</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-[6px]">
            {[
              { img: '播音-1.png', caption: '优秀学生主持晚会' },
              { img: '播音-2.png', caption: '校内实训基地' },
              { img: '播音-3.png', caption: '2025年获得国赛银奖' },
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
