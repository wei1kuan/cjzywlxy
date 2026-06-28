import SectionTitle from "@/components/SectionTitle";

export default function HotelManagement() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="酒店管理与数字化运营" subtitle={<span className="font-bold">专业代码：<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>540106</span></span>} />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-6 text-gray-700 leading-loose text-base">
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />一、专业定位
                </h4>
                <p className="indent-8">本专业为校级重点建设专业，对接区域文旅产业链与酒店行业数字化转型发展需求，立足岗位能力要求实施"岗课赛证"综合育人模式。校内建有前厅数字化运营、中西餐服务、茶艺、咖啡调酒、形体礼仪、酒店信息化等标准化专业实训室，校外与万豪、万达、洲际等20余家国际知名五星级酒店建立长期稳定的校企合作关系，办学底蕴深厚，行业认可度高。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />二、培养目标
                </h4>
                <p className="indent-8">坚持立德树人根本任务，培养践行社会主义核心价值观、德智体美劳全面发展，具备良好职业素养、数字素养与精益求精工匠精神，系统掌握现代酒店服务与管理、数字化运营及文旅融合创新等理论与实操技能，能够从事前厅接待、餐饮管理、房务运营、酒店数字化营销、收益管理、宴会及会议统筹、文旅项目策划与运营等岗位工作的高素质技术技能人才。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />三、核心课程
                </h4>
                <p className="indent-8">开设专业基础课与技能方向课程，主要课程包括：酒店数字化营销、酒店英语、酒店前厅服务与数字化运营、酒店餐饮服务与数字化运营、酒店人力资源管理、酒店客户关系管理等专业核心课程；荆楚传统文化与非遗概论、文旅美学基础、文旅策划基础、智慧旅游技术概论、数字图文处理等文旅创意专业群平台课程；以及职业技能等级证书、前厅运营管理职业技能等级证书配套课程。教学以项目任务驱动为主，强化理实一体化教学模式。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />四、专业特色
                </h4>
                <p className="indent-8">教学团队由校内双师型教师与酒店资深职业经理人组成，硕士学历与副高职称占比均达93%，5名教师受聘为国家级、省级技能大赛裁判，骨干教师拥有国际品牌酒店从业经历，外聘行业高管授课，教学紧贴行业前沿。依托"三阶递进、四向对接"校企协同育人模式，开设万达启明星、万豪两大订单班，校企全程共建课程、联合开展人才培养。</p>
                <p className="indent-8 mt-3">专业建有前厅数字化运营、中西餐服务、茶艺、咖啡调酒、形体礼仪、酒店信息化等实训室，实训设备对标行业主流配置，构建理实创一体化教学体系。坚持以赛促学，近三年斩获多项省级以上竞赛荣誉，曾代表湖北省参加世界职业院校技能大赛酒店服务赛项荣获铜奖，并在2025年、2026年连续斩获省级技能大赛一等奖。落实1+X证书制度，引导学生积极取证，夯实职业从业资质。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />五、就业与升学方向
                </h4>
                <p className="indent-8">就业面向国际品牌五星级酒店前厅、客房、餐饮、市场营销、人力资源等运营管理岗位，同时可就职于高端餐饮、文旅行业、航空服务、豪华邮轮等领域，也可自主创业。就业辐射省内及周边城市群，合作优质企业资源丰富，职业发展平台广阔。</p>
                <p className="indent-8 mt-3">升学路径多元，学生可通过统招专升本、专本贯通升入本科院校深造，优秀学生可凭借技能竞赛成绩获得免试升学资格；历年专升本录取率稳定在80%以上，为有志升学的学生提供坚实保障。</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-[6px]">
            {[
              { img: '酒店-1.png', caption: '校内实训室教学' },
              { img: '酒店-2.png', caption: '光谷万豪酒店授牌仪式' },
              { img: '酒店-3.png', caption: '上海柏悦国际白金五星级酒店实习合影' },
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
