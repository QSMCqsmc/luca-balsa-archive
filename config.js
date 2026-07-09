/*
  囚徒档案馆维护配置文件
  后续增删皮肤、关系角色、天赋方案、生日文案，优先修改本文件。
  注意：字段名不要随意改；图片路径必须与 assets 目录中的文件名一致。
*/
window.IDV_CONFIG = {
  site: {
    title: "囚徒档案馆",
    subtitle: "卢卡·巴尔萨生日纪念百科",
    theme: "未完成的回路",
    author: "青衫沫辰",
    letterSignature: "全体囚徒玩家",
    birthday: "07-10",
    archiveNo: "QSMC-0710"
  },
  media: {
    heroImage: "assets/images/official/prisoner-main.png",
    birthdayImage: "assets/images/official/prisoner-birthday.jpg",
    backgroundImage: "assets/images/official/prisoner-background.jpg",
    memoryVideo: "assets/video/official/prisoner-memory.mp4"
  },

  talentPlans: [
    { id:"stable", code:"PLAN 01 / STABLE", name:"稳健破译流", image:"assets/images/official/talents/talent-stable-decode.png", suitable:"适合大多数单排、普通排位和需要稳定修机节奏的对局。", talents:["回光返照","破窗理论","绝处逢生","不屈不挠","机械专精","寒意或其他自保类小天赋"], core:"这套方案以稳定破译和基础自保为核心。囚徒本身承担破译和节奏辅助任务，回光返照保证开门战容错，破窗理论提高被追击时的转点能力。", usage:"开局优先找相对安全的密码机，不要盲目高比例传输。根据队友状态和遗产机位置调整连接，保持自己能转点、能观察、能继续运营。", warning:"如果监管者开局直奔你的位置，不要恋机。天赋只能提高容错，真正的保命还是依靠地形、板窗和强电流释放时机。", playerNote:"适合不知道带什么时的默认方案，稳定、不极端，适合大多数玩家。" },
    { id:"warning", code:"PLAN 02 / WARNING", name:"开局预警流", image:"assets/images/official/talents/talent-early-warning.png", suitable:"适合新手、容易被首追，或者对监管者刷新方向判断不稳定的玩家。", talents:["回光返照","破窗理论","寒意","绝处逢生","不屈不挠","机械专精"], core:"囚徒因为外在特质影响，对监管者距离的感知会弱一些。因此这套方案强调提前发现危险、提前拉点，避免等监管者贴近后才反应。", usage:"开局先观察出生点和心跳变化，如果寒意提示风险，要尽早离开危险机。不要因为想多修几秒而被迫吃第一刀。", warning:"这套方案不是让你一直躲，而是帮助你更早做出判断。预警之后还要结合地形和队友状态安排转点路线。", playerNote:"适合新手和单排玩家，尤其适合不熟悉地图、容易开局被抓的人。" },
    { id:"kite", code:"PLAN 03 / KITE", name:"牵制自保流", image:"assets/images/official/talents/talent-kite-survive.png", suitable:"适合高风险出生点、监管者喜欢针对囚徒，或者队伍需要你承担一定牵制压力时。", talents:["回光返照","破窗理论","绝处逢生","不屈不挠","巨力","自保或板窗博弈类小天赋"], core:"这套方案把重心放在被追击后的转点、板窗博弈和延长牵制时间。囚徒虽然是破译辅助位，但实战中经常会被监管者优先针对，因此需要保留一定自保能力。", usage:"被追击时不要只依赖强电流。先利用板窗和地形消耗监管者，再在监管者贴近、过板窗或转点关键处使用强电流争取距离。", warning:"牵制自保流不代表主动求追。如果安全修机机会很好，仍然要以团队破译节奏为主。", playerNote:"适合有一定地图理解和牵制基础的玩家，比稳健破译流更强调个人操作。" },
    { id:"team", code:"PLAN 04 / TEAM", name:"队友配合流", image:"assets/images/official/talents/talent-team-support.png", suitable:"适合四排、双排，或者队伍中有前锋、击球手、勘探员等可以干扰牵气球的队友时。", talents:["回光返照","破窗理论","绝处逢生","不屈不挠","求生意志","巨力或辅助配合类天赋"], core:"这套方案适合队友有干扰能力时使用。通过挣扎加速、板窗干扰和队友配合，增加被挂上椅前的变量，给团队争取更多修机时间。", usage:"如果队友有能力干扰牵气球，你被击倒后仍可能通过挣扎、队友干扰和地形配合拖延时间。囚徒在这类阵容中不只是修机位，也承担一定团队运营价值。", warning:"单排慎用。没有队友配合时，这套方案的收益会下降。路人局如果沟通不足，建议优先选择稳健破译流或开局预警流。", playerNote:"适合有语音沟通和配合意识的队伍，不适合所有对局机械使用。" }
  ],

  relationProfiles: [
    { id:"alva", number:"RELATION FILE / 01", name:"阿尔瓦·洛伦兹（隐士）", role:"导师 / 发明道路上的关键人物", category:"官方剧情关联", type:"official", image:"assets/images/official/relations/alva-lorenz.jpg", keywords:["发明","导师","手稿","真相"], intro:"阿尔瓦·洛伦兹是卢卡人生中最重要的人物之一，也是与其发明道路直接相关的关键角色。", link:"卢卡曾拜入其门下，二人的关系围绕发明、知识、手稿和成果归属展开。", description:"随着真相逐渐浮现，这段师徒关系从信任逐渐走向冲突。", impact:"改变卢卡的人生方向，也是卢卡执着寻找真相的重要原因。", status:"高度关联" },
    { id:"orpheus", number:"RELATION FILE / 02", name:"小说家 · 奥尔菲斯", role:"庄园调查相关人物", category:"剧情关联", type:"story", image:"assets/images/official/relations/orpheus.jpg", keywords:["庄园","调查","记录","真相"], intro:"奥尔菲斯是庄园叙事中的重要观察者与调查者。", link:"现有整理更适合把二人的联系理解为庄园事件与调查线索层面的关联，而非已确认的直接私人关系。", description:"两人都被放置在由碎片记录、隐藏规则与不完整真相构成的庄园叙事中。", impact:"让卢卡的故事从个人经历延伸到庄园整体谜团。", status:"剧情关联" },
    { id:"tracy", number:"RELATION FILE / 03", name:"机械师 · 特蕾西·列兹尼克", role:"机械领域关联", category:"玩家解读", type:"player", image:"assets/images/official/relations/tracy-reznik.jpg", keywords:["机械","发明","技术"], intro:"特蕾西同样拥有鲜明的机械技术与创造者特征。", link:"官方未明确两人存在深层关系；二人的联系主要来自能力方向上的技术共鸣。", description:"玩家常从机械、发明与天才型角色的角度，对两人的理念差异进行并置解读。", impact:"体现庄园中不同天才型角色之间的创造理念碰撞。", status:"弱关联" },
    { id:"edgar", number:"RELATION FILE / 04", name:"画家 · 艾格·瓦尔登", role:"创造者之间的对照", category:"玩家解读", type:"player", image:"assets/images/official/relations/edgar-valden.jpg", keywords:["创造","执念","表达"], intro:"艾格以绘画观察与表达世界，卢卡则试图通过机械和实验寻找答案。", link:"两人没有被确认为直接剧情关系，此处属于创作者主题上的玩家解读。", description:"他们采用不同的创造方式，却都受到个人天赋、骄傲与执念影响。", impact:"形成科学与艺术、实验与表达之间的主题对照。", status:"主题关联" },
    { id:"others", number:"RELATION FILE / 05", name:"其他庄园角色", role:"持续扩展档案", category:"剧情关联 / 待补充", type:"story", image:"assets/images/official/relations/manor-others.jpg", keywords:["庄园","角色日","事件","待补充"], intro:"这是一份为后续剧情与角色资料预留的扩展档案。", link:"后续可根据官方剧情、角色日信件和庄园事件，补充与卢卡存在明确联系的角色。", description:"该档案不是固定名单，而是一条会随公开资料不断延伸的关系线路。", impact:"让关系网络保持开放，同时避免在资料不足时把推测写成官方事实。", status:"持续更新" }
  ],

  skins: [
    { id:"dazai-osamu", name:"太宰治", quality:"稀世", category:"联动", image:"assets/images/official/skins/dazai-osamu.jpg", obtain:"第五人格X文豪野犬联动期间商城购买", price:"2888回声", note:"文豪野犬联动限定稀世时装", description:"武装侦探社成员太宰治的服装，联动限定时装。", tags:["稀世","联动","限定","商城"], limited:true, collab:true },
    { id:"lingxi-detective", name:"灵犀妙探", quality:"稀世", category:"商城", image:"assets/images/official/skins/lingxi-detective.jpg", obtain:"商城限时购买", price:"2888回声 / 12888碎片", note:"水晶宫系列稀世时装", description:"幽灵社调查员风格时装，带有侦探与灵异调查氛围。", tags:["稀世","商城","系列","限时"], limited:false, collab:false },
    { id:"viper", name:"蝰", quality:"稀世", category:"精华", image:"assets/images/official/skins/viper.jpg", obtain:"第十一赛季·精华2抽取", price:"精华抽取", note:"第十一赛季·精华2限定稀世时装", description:"第十一赛季精华限定稀世时装，具体描述请根据游戏内图鉴补充。", tags:["稀世","限定","精华"], limited:true, collab:false },
    { id:"dawn-fugue", name:"黎明赋格", quality:"稀世", category:"精华", image:"assets/images/official/skins/dawn-fugue.jpg", obtain:"第四十赛季·精华1抽取", price:"精华抽取", note:"第四十赛季·精华1限定稀世时装", description:"第四十赛季精华限定稀世时装，带有腐朽、理性与黎明意象。", tags:["稀世","限定","精华"], limited:true, collab:false },
    { id:"l", name:"L", quality:"奇珍", category:"联动", image:"assets/images/official/skins/l.jpg", obtain:"死亡笔记联动精华抽取", price:"精华抽取", note:"死亡笔记联动精华限定奇珍时装", description:"死亡笔记联动时装。", tags:["奇珍","联动","限定","精华"], limited:true, collab:true },
    { id:"oph-luca", name:"OPH.LUCA", quality:"奇珍", category:"商城", image:"assets/images/official/skins/oph-luca.jpg", obtain:"商城限时购买", price:"1388回声", note:"电竞系列 OPH 现代时装", description:"电竞系列现代风格时装。", tags:["奇珍","商城","电竞系列","限时"], limited:false, collab:false },
    { id:"rice", name:"Rice", quality:"奇珍", category:"联动", image:"assets/images/official/skins/rice.jpg", obtain:"第五人格XB.Duck联动期间商城限时购买", price:"1388回声", note:"B.Duck联动限定奇珍时装", description:"B.Duck联动时装。", tags:["奇珍","联动","限定","商城"], limited:true, collab:true },
    { id:"winter-cicada", name:"冬蝉", quality:"奇珍", category:"精华", image:"assets/images/official/skins/winter-cicada.jpg", obtain:"第二十三赛季·精华3抽取；五周年庆期间商城购买；第24赛季起可通过记忆珍宝·旧赛季抽取或解锁卡解锁", price:"精华抽取 / 1388回声", note:"第二十三赛季·精华3", description:"具体描述请根据游戏内图鉴补充。", tags:["奇珍","精华","商城"], limited:false, collab:false },
    { id:"rantaro-amami", name:"天海兰太郎", quality:"奇珍", category:"联动", image:"assets/images/official/skins/rantaro-amami.jpg", obtain:"参与黑白熊的庄园游戏获得", price:"活动获取", note:"新枪弹辩驳V3联动限定奇珍时装", description:"新枪弹辩驳V3联动时装。", tags:["奇珍","联动","限定","活动"], limited:true, collab:true },
    { id:"ben-hur", name:"宾虚", quality:"奇珍", category:"商城", image:"assets/images/official/skins/ben-hur.jpg", obtain:"商城购买", price:"1388回声 / 4888碎片", note:"2021演绎之星活动", description:"演绎之星系列时装。", tags:["奇珍","商城","演绎之星"], limited:false, collab:false },
    { id:"projection-room", name:"放映厅", quality:"奇珍", category:"深渊", image:"assets/images/official/skins/projection-room.jpg", obtain:"深渊珍宝Ⅴ抽取", price:"珍宝抽取", note:"深渊珍宝Ⅴ限定奇珍时装", description:"深渊珍宝限定时装。", tags:["奇珍","深渊","限定","珍宝"], limited:true, collab:false },
    { id:"timeline-tremolo", name:"时轴颤音", quality:"奇珍", category:"商城", image:"assets/images/official/skins/timeline-tremolo.jpg", obtain:"商城限时购买；金苹果商店常驻购买", price:"1388回声 / 4888碎片 / 63800金苹果", note:"电竞系列 OPH 剪影时装", description:"电竞系列剪影时装。", tags:["奇珍","商城","电竞系列"], limited:false, collab:false },
    { id:"big-duck", name:"比格多栋", quality:"奇珍", category:"联动", image:"assets/images/official/skins/big-duck.jpg", obtain:"第五人格×暹罗厘普联动期间商城限时购买", price:"1388回声", note:"暹罗厘普联动限定奇珍时装", description:"暹罗厘普联动时装。", tags:["奇珍","联动","限定","商城"], limited:true, collab:true },
    { id:"graduation-day", name:"毕业日", quality:"奇珍", category:"商城", image:"assets/images/official/skins/graduation-day.jpg", obtain:"商城限时购买", price:"1388回声", note:"溯洄系列第十二款时装", description:"溯洄系列时装。", tags:["奇珍","商城","溯洄系列","限时"], limited:false, collab:false },
    { id:"electrolysis", name:"电解", quality:"奇珍", category:"精华", image:"assets/images/official/skins/electrolysis.jpg", obtain:"第十四赛季·精华1抽取；第15赛季起可通过记忆珍宝·旧赛季抽取或解锁卡解锁", price:"精华抽取", note:"第十四赛季·精华1", description:"科学与炼金术意象相关时装。", tags:["奇珍","精华"], limited:false, collab:false },
    { id:"ray", name:"雷", quality:"奇珍", category:"联动", image:"assets/images/official/skins/ray.jpg", obtain:"约定的梦幻岛联动精华抽取", price:"精华抽取", note:"约定的梦幻岛联动精华限定奇珍时装", description:"约定的梦幻岛联动时装。", tags:["奇珍","联动","限定","精华"], limited:true, collab:true },
    { id:"hermit-crab", name:"“寄居蟹”", quality:"独特", category:"精华", image:"assets/images/official/skins/hermit-crab.jpg", obtain:"第十八赛季·精华3抽取；第19赛季起可通过记忆珍宝·旧赛季或通用独特时装解锁卡获得", price:"精华抽取", note:"第十八赛季·精华3", description:"具体描述请根据游戏内图鉴补充。", tags:["独特","精华"], limited:false, collab:false },
    { id:"receptionist", name:"“接待员”", quality:"独特", category:"活动", image:"assets/images/official/skins/receptionist.jpg", obtain:"2025年夏汐拾影每日淘沙第7天获得；活动商城限时购买", price:"活动获取 / 100窥镜", note:"活动时装", description:"活动获取时装。", tags:["独特","活动","商城"], limited:false, collab:false },
    { id:"truffaldino", name:"半身人崔宾", quality:"独特", category:"精华", image:"assets/images/official/skins/truffaldino.jpg", obtain:"第二十八赛季·精华2抽取；第29赛季起可通过记忆珍宝·旧赛季或通用独特时装解锁卡获得", price:"精华抽取", note:"第二十八赛季·精华2，齐奈达堡系列独特时装", description:"齐奈达堡系列独特时装。", tags:["独特","精华","系列"], limited:false, collab:false },
    { id:"invention-workshop", name:"发明工坊", quality:"独特", category:"精华", image:"assets/images/official/skins/invention-workshop.jpg", obtain:"第四十三赛季·精华3抽取；第44赛季起可通过记忆珍宝·旧赛季或通用独特时装解锁卡获得", price:"精华抽取", note:"第四十三赛季·精华3", description:"具体描述请根据游戏内图鉴补充。", tags:["独特","精华"], limited:false, collab:false },
    { id:"saint-melcer", name:"圣梅尔塞", quality:"独特", category:"协会商店", image:"assets/images/official/skins/saint-melcer.jpg", obtain:"协会商店购买", price:"1000协会币", note:"协会商店时装", description:"协会商店独特品质时装。", tags:["独特","协会商店","商城"], limited:false, collab:false },
    { id:"sleepless", name:"废寝者", quality:"独特", category:"精华", image:"assets/images/official/skins/sleepless.jpg", obtain:"第二十六赛季·精华2抽取；第27赛季起可通过记忆珍宝·旧赛季或通用独特时装解锁卡获得", price:"精华抽取", note:"第二十六赛季·精华2", description:"具体描述请根据游戏内图鉴补充。", tags:["独特","精华"], limited:false, collab:false },
    { id:"geek", name:"怪咖", quality:"独特", category:"商城", image:"assets/images/official/skins/geek.jpg", obtain:"商城限时购买", price:"60回声", note:"象牙塔系列第九款6元时装", description:"象牙塔系列独特时装。", tags:["独特","商城","系列","限时"], limited:false, collab:false },
    { id:"moonbound", name:"月缚", quality:"独特", category:"活动", image:"assets/images/official/skins/moonbound.jpg", obtain:"2021中秋节活动获得；活动商城限时购买", price:"活动获取 / 100窥镜", note:"未包装前时装名称为“月下囚犯”", description:"中秋节活动独特时装。", tags:["独特","活动","商城"], limited:false, collab:false },
    { id:"perpetual-motion-island", name:"永动岛", quality:"独特", category:"精华", image:"assets/images/official/skins/perpetual-motion-island.jpg", obtain:"第三十六赛季·精华3抽取；第37赛季起可通过记忆珍宝·旧赛季或通用独特时装解锁卡获得", price:"精华抽取", note:"第三十六赛季·精华3", description:"具体描述请根据游戏内图鉴补充。", tags:["独特","精华"], limited:false, collab:false },
    { id:"python", name:"蚺", quality:"独特", category:"商城", image:"assets/images/official/skins/python.jpg", obtain:"商城购买；通用独特装扮解锁卡解锁", price:"318回声 / 1188碎片", note:"常驻商城时装", description:"常驻商城独特时装。", tags:["独特","商城"], limited:false, collab:false },
    { id:"racing-mechanic", name:"赛车机师", quality:"独特", category:"深渊", image:"assets/images/official/skins/racing-mechanic.jpg", obtain:"深渊珍宝Ⅳ抽取", price:"珍宝抽取", note:"深渊珍宝Ⅳ限定独特时装", description:"深渊珍宝限定独特时装。", tags:["独特","深渊","限定","珍宝"], limited:true, collab:false },
    { id:"ark-shell", name:"银蚶", quality:"独特", category:"精华", image:"assets/images/official/skins/ark-shell.jpg", obtain:"第十七赛季·精华3抽取；第18赛季起可通过记忆珍宝·旧赛季或通用独特时装解锁卡获得", price:"精华抽取", note:"第十七赛季·精华3", description:"具体描述请根据游戏内图鉴补充。", tags:["独特","精华"], limited:false, collab:false },
    { id:"default", name:"初始时装", quality:"罕见", category:"初始", image:"assets/images/official/skins/default.jpg", obtain:"初始获得", price:"免费", note:"初始时装", description:"角色初始外观。", tags:["罕见","初始"], limited:false, collab:false },
    { id:"worn-clothes", name:"旧装", quality:"罕见", category:"推演", image:"assets/images/official/skins/worn-clothes.jpg", obtain:"完成角色推演任务", price:"推演获取", note:"旧装时装", description:"角色旧装外观。", tags:["罕见","推演"], limited:false, collab:false },
    { id:"gray-paint", name:"灰涂料", quality:"罕见", category:"罕见", image:"assets/images/official/skins/gray-paint.jpg", obtain:"记忆珍宝或其他常规方式，具体以游戏内为准", price:"待核对", note:"罕见品质时装", description:"具体获取方式请根据游戏内图鉴补充。", tags:["罕见","待核对"], limited:false, collab:false },
    { id:"green-bread", name:"绿面包", quality:"罕见", category:"罕见", image:"assets/images/official/skins/green-bread.jpg", obtain:"记忆珍宝或其他常规方式，具体以游戏内为准", price:"待核对", note:"罕见品质时装", description:"具体获取方式请根据游戏内图鉴补充。", tags:["罕见","待核对"], limited:false, collab:false },
    { id:"loess-wall", name:"黄土墙", quality:"罕见", category:"罕见", image:"assets/images/official/skins/loess-wall.jpg", obtain:"记忆珍宝或其他常规方式，具体以游戏内为准", price:"待核对", note:"罕见品质时装", description:"具体获取方式请根据游戏内图鉴补充。", tags:["罕见","待核对"], limited:false, collab:false }
  ],

  wishes: [
    "生日快乐，卢卡·巴尔萨。愿你未完成的回路不再困于黑暗，终有一天越过高墙，抵达光。",
    "记忆也许会断裂，电流也终会沉寂；可在七月十日，仍有人认真记得你的名字。",
    "愿庄园今夜的回声不再诉说遗憾，只替我们把一句生日快乐，送到你经过的每一段时光。",
    "写给卢卡：愿你不必再独自校准世界，愿每一次闪烁都有回应，每一个理想都有温柔的归处。",
    "黑暗没有吞没那束电光，它只是让我们看得更清楚。生日快乐，愿自由比答案更早来到你身边。",
    "那些烧焦的图纸、散落的记忆和未完成的发明，终会在今天被轻轻收好。卢卡，生日快乐。",
    "如果过去是一条断开的线路，愿今天的祝福成为新的接点：从遗憾出发，一直通往明亮的未来。",
    "七月的钟声再次响起。愿卢卡·巴尔萨被世界温柔记住，也愿他执着追寻的光，终于为自己亮起。"
  ]
};
