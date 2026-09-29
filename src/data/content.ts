/* 站点全部文案与作品数据 —— 与参考逐帧核对整理 */

export const SITE = {
  owner: 'YUHAN HE',
  tagline: "赫雨菡｜活动策划作品集",
  year: '2026',
}

/* ── 出处与源码 ───────────────────────────────────────
 * 本站是对小红书博主 momo 的 Locker 个人网站的复刻练习：视觉创意归原作者，
 * 这条出处要一直挂在页面上（左下角 Credit 组件），不是只写在 README 里。
 * repoUrl 是开源仓库地址，换仓库时只改这一处。 */
export const CREDIT = {
  author: 'momo',
  platform: '小红书',
  originUrl:
    'https://www.xiaohongshu.com/discovery/item/6a852ae7000000002500b24e?xsec_token=ABxWdb99F51QhPGOvNNuLGxYSbTeGIKFnMDujjIeP1Kr8=',
  repoUrl: 'https://github.com/qzz0518/locker-folio',
}

/* ── 顶部导航 ─────────────────────────────────────────── */
export const NAV = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'work', label: 'SELECTED WORK' },
  { id: 'contact', label: 'CONTACT' },
] as const

/* ── ABOUT：工牌 ─────────────────────────────────────── */
export const ABOUT = {
  cardNo: 'NO. xxx',
  title: ['BASIC', 'INFORMATION'],
  titleCn: '个人简介',
  sub: 'PERSONAL PORTFOLIO ID CARD',
  fields: [
    { k: 'NAME / 姓名', v: '赫雨菡' },
    { k: 'GENDER / 性别', v: '女' },
    { k: 'AGE / 年龄', v: '22' },
    { k: 'MAJOR / 专业', v: '国际政治' },
    { k: 'EDUCATION / 学历', v: '新疆大学' },
    { k: 'LOCATION / 所在地', v: '昆明' },
  ],
  email: 'heyuhan1830@163.com',
  phone: '13294921508',
  stampTop: 'CERTIFIED',
  stampMid: 'xxx',
  stampRing: 'PERSONAL PORTFOLIO · xxx ·',
  footL: 'IN MY CREATIVE ERA',
  footR: 'PERSONAL PORTFOLIO · 2026',
}

/* ── SKILLS：三张卡片 ─────────────────────────────────── */
export type SkillCard = {
  no: string
  kicker: string
  title: string
  desc: string
  rows: { k: string; v: string }[]
  bg: string
  fg: string
}

export const SKILLS: SkillCard[] = [
  {
  no: '01',
  kicker: '01 / USER INSIGHT',
  title: '洞察先行',
  desc: '关注用户需求与内容趋势，从用户反馈、社区生态和热点变化中发现传播机会。',
  rows: [
    { k: 'PLAYER', v: '玩家需求分析' },
    { k: 'TREND', v: '热点趋势追踪' },
    { k: 'CONTENT', v: '内容方向洞察' },
  ],
  bg: '#1b28d8',
  fg: '#ffffff', 
  },
  {
  no: '02',
  kicker: '02 / PLANNING & EXECUTION',
  title: '创意落地',
  desc: '围绕活动目标完成方案设计、构思和推进，将创意转化为现实。',
  rows: [
    { k: 'PLAN', v: '活动方案设计' },
    { k: 'EXECUTE', v: '现场执行统筹' },
    { k: 'REVIEW', v: '效果复盘优化' },
  ],
  bg: '#ff6b35',
  fg: '#ffffff',
  },
  {
  no: '03',
  kicker: '03 / COLLABORATION',
  title: '协同高效',
  desc: '积极协调不同角色需求，推进内容制作、资源沟通和项目流程落地。',
  rows: [
    { k: 'COMM', v: '沟通协调' },
    { k: 'TEAM', v: '团队协作' },
    { k: 'PROCESS', v: '项目推进' },
  ],
  bg: '#14a38b',
  fg: '#ffffff',
  },
]

/* ── CONTACT：软木板便签 ─────────────────────────────── */
export const NOTE_COLORS = ['#cfe0c3', '#f0e6a8', '#e8b7b7', '#a9c9dd', '#e5cfe0', '#d8cdb8']

export const SEED_NOTES = [
  { id: 's1', text: '', color: '#cfe0c3', x: 14, y: 42, rot: -2 },
  { id: 's2', text: '', color: '#f0e6a8', x: 70, y: 12, rot: 3 },
  { id: 's3', text: '', color: '#e8b7b7', x: 80, y: 33, rot: -3 },
]
