import SectionTitle from "@/components/SectionTitle";

export default function PerformingArts() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="表演艺术" subtitle={<span className="font-bold">专业代码：<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>550204</span></span>} />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-6 text-gray-700 leading-loose text-base">
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />一、专业定位
                </h4>
                <p className="indent-8">专业精准对接区域文化艺术产业链发展需求，紧扣行业"表演+科技+直播"复合型高技能人才需求缺口，创新构建"学、播、演（创）、赛"四维融合育人模式，搭建全方位、立体化人才培养体系。专业办学底蕴深厚，校内实训设施齐全，校外校企合作资源稳定，具备较高的行业口碑与社会认可度。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />二、培养目标
                </h4>
                <p className="indent-8">坚守立德树人根本任务，培养践行社会主义核心价值观，德智体美劳全面发展的高技能人才。学生兼具良好的职业素养、精益求精的工匠精神与数字应用能力，筑牢文化基础与表演编创功底，系统掌握声乐、舞蹈、话剧与音乐剧表演技艺，同时具备短视频摄制、新媒体运营传播等综合能力，能够从事戏剧影视表演、歌舞演艺、综艺主持、群众性文化活动策划与服务等相关工作。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />三、核心课程
                </h4>
                <p className="indent-8">开设专业基础课与技能方向课程，主要包括：表演、声乐、舞蹈、钢琴、形体训练、台词、舞台表演、录音混音、合唱指挥、古典舞、民族民间舞、新媒体技术、MCN综合实训、演出经纪实务、舞蹈剧目创编等课程。依托项目任务驱动开展理实一体化教学，着力培育学生专业核心能力。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />四、专业特色
                </h4>
                <p className="indent-8">专业办学特色鲜明、优势突出。师资力量雄厚，由教育部"国培计划"专家、全国职业院校技能大赛裁判长等资深专家领衔执教，团队专业功底扎实，教学经验丰富。实训条件优越，校内配备多功能小剧场、舞蹈房、琴房、数字录音棚、黑匣子戏剧实训室等专业场地，搭载AVID、RME等国际高端数字教学设备。</p>
                <p className="indent-8 mt-3">校外联动湖北青之舞文旅、湖北广电、长江人艺等12家知名企事业单位共建实训基地，深化产教融合与订单培养模式，企业深度参与实践教学全过程。竞赛成果丰硕，学生专业竞技水平优异，2025年斩获全国职业院校技能大赛银奖，2026年在省级选拔赛中两次斩获全省第一名，成功晋级国赛，充分彰显了专业扎实的育人成效。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />五、就业与升学方向
                </h4>
                <p className="indent-8">就业与升学路径双向畅通。毕业后可入职演艺公司、文化传媒平台、艺术培训机构及各类企事业单位，从事舞台表演、艺术培训、文艺活动策划、新媒体直播运营等工作，就业辐射湖北及周边城市群，对口就业资源丰富，职业发展空间广阔。</p>
                <p className="indent-8 mt-3">升学渠道多元，学生可通过统招专升本提升学历。2023级12名学生成功升本，其中3人凭借国赛奖项免试升入江汉大学；2025届8名学生获得专升本免试资格，为学生搭建起优质学历提升通道。</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-[6px]">
            {[
              { img: '表演-1.png', caption: '学生音乐剧表演' },
              { img: '表演-2.png', caption: '黑匣子实训室' },
              { img: '表演-3.png', caption: '数字音频实训室' },
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
