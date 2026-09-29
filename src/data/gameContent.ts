/** 游戏档案文案；此处只有用户提供的经历，不引用作品图片。 */
export const PLAYER_PREFERENCE = '我整体偏好低压力、强沉浸感的游戏体验，尤其喜欢轻社交、慢节奏经营与短流程解谜探索。最近主要在玩《王者荣耀》和《三角洲行动》；参与竞技类游戏时，我更看重社交和游玩体验，不以冲排名为主要目标。'

export const FOCUS_GAMES = [
  { name: '星露谷物语', investment: '累计约265小时' },
  { name: '王者荣耀', investment: '日常约30–40分钟' },
  { name: '三角洲行动', investment: '近期在玩' },
  { name: '潜水员戴夫', investment: '累计约50小时' },
  { name: '奥比岛', investment: '约2014年起接触' },
  { name: '文明 VI', investment: '策略类代表游戏' },
] as const

export const GAME_CATEGORIES = [
  {
    id: 'competitive', number: '01', title: '竞技对抗类', english: 'COMPETITIVE',
    intro: '涵盖 MOBA、射击和策略卡牌对战。我关注即时决策、团队协作与对局反馈；游玩目的带有较强社交属性，参与方式偏休闲。',
    games: [
      { name: '王者荣耀', tag: 'MOBA · 日常约30–40分钟', detail: '近期主要游玩的游戏之一。' },
      { name: '三角洲行动', tag: 'FPS · 近期在玩', detail: '新入坑的搜打撤游戏。' },
      { name: '和平精英', tag: '射击 · 累计约300小时', detail: '投入较多的手游之一，累计游玩约300小时。' },
      { name: '皇室战争', tag: '策略卡牌对战 · 累计约100小时', detail: '初高中时期投入较多，累计游玩约100小时。' },
    ],
  },
  {
    id: 'puzzle', number: '02', title: '经营养成与社交类', english: 'MANAGEMENT & SOCIAL',
    intro: '这是我总体投入时间最长、接触最早的类型。我偏好自主安排节奏、积累成长，以及游戏与玩家之间的情感联结。',
    games: [
      { name: '星露谷物语', tag: '模拟经营 · 累计约265小时', detail: '近年通过 Steam 游玩的代表游戏，累计投入约265小时。' },
      { name: '潜水员戴夫', tag: '探索与经营 · 累计约50小时', detail: '游玩约50小时，基本走完半周目。' },
      { name: '奥比岛', tag: '养成与社交 · 约2014年起接触', detail: '从约2014年开始接触，也熟悉游戏的拓展社交圈“奥比圈”。' },
      { name: 'QQ农场', tag: '早期经营游戏', detail: '早期接触的 QQ 游戏系列作品。' },
      { name: '洛克王国、摩尔庄园、小花仙', tag: '网页游戏经历', detail: '早期接触的养成与社交类网页游戏。' },
      { name: '光遇', tag: '轻社交冒险', detail: '我的轻社交冒险游戏经历之一。' },
    ],
  },
  {
    id: 'puzzlenarrative', number: '03', title: '解谜探索与叙事类', english: 'PUZZLE & NARRATIVE',
    intro: '这类游戏的游玩周期通常不长。我会关注成就收集，也有部分作品的多周目经历；最在意解谜、观察与选择，以及故事和氛围。',
    games: [
      { name: '纪念碑谷', tag: '解谜', detail: '我接触过的手游解谜作品。' },
      { name: 'Do Not Feed the Monkeys', tag: '观察与选择', detail: '近年通过 Steam 游玩过的作品。' },
      { name: 'GRIS', tag: '短流程探索', detail: '近年游玩过的短流程作品。' },
      { name: 'Journey', tag: '短流程冒险', detail: '近年游玩过的短流程作品。' },
      { name: '橙光作品', tag: '互动叙事', detail: '早期接触过的互动叙事作品。' },
    ],
  },
  {
    id: 'mutiplayer', number: '04', title: '多人合作与休闲小游戏类', english: 'MULTIPLAYER & CASUAL',
    intro: '我关注共同目标、分工配合、互动反馈，以及一起游玩的乐趣。',
    games: [
      { name: '双人成行', tag: '双人合作', detail: '近年游玩过的双人合作游戏。' },
      { name: '双影奇境', tag: '双人合作', detail: '近年游玩过的双人合作游戏。' },
      { name: '胡闹厨房', tag: '多人合作', detail: '近年游玩过的合作游戏。' },
      { name: '4399／7k7k 单双人小游戏', tag: '早期网页游戏', detail: '刚接触网络时玩过这两个平台上的许多单双人小游戏。' },
    ],
  },
] as const
