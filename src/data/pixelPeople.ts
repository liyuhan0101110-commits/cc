/** 游戏档案页的小人。由方格直接绘制，不需要额外图片文件。 */
export const PIXEL_PALETTE: Record<string, string> = {
  K: '#253328', H: '#563c32', S: '#f4c7a3', W: '#fffaf0',
  G: '#6fa95b', B: '#5688bb', Y: '#f0c955', P: '#9a78bc', R: '#d77665',
}

export const PIXEL_PEOPLE = [
  {
    id: 'arena', name: '竞技搭子', color: '#d77665',
    lines: ['王者荣耀是我近期常玩的 MOBA。', '三角洲行动是我新入坑的搜打撤游戏。'],
    sprite: [
      '...KKKKKK...', '..KHHHHHHK..', '.KHHHHHHHHK.', '.KSSSSSSSSK.',
      '.KSWSKKSWSK.', '.KSSSSSSSSK.', '..KSSSSSSK..', '...KKSSKK...',
      '..KKRRRRKK..', '.KRRRRRRRRK.', '.KRRRRRRRRK.', '..KRRRRRRK..',
      '..KBB..BBK..', '..KKK..KKK..',
    ],
  },
  {
    id: 'farm', name: '农场伙伴', color: '#6fa95b',
    lines: ['星露谷物语已经陪伴我约 265 小时。', '奥比岛是我很早开始接触的社交游戏。'],
    sprite: [
      '...KKKKKK...', '..KGGGGGGK..', '.KGGGGGGGGK.', '..KHHHHHHK..',
      '..KSSSSSSK..', '..KSKKSKSK..', '..KSSSSSSK..', '...KSSSSK...',
      '..KKGGGGKK..', '.KGGGGGGGGK.', '.KGGGGGGGGK.', '..KGGGGGGK..',
      '..KHH..HHK..', '..KKK..KKK..',
    ],
  },
  {
    id: 'story', name: '探索伙伴', color: '#9a78bc',
    lines: ['我喜欢短流程的解谜与探索。', 'GRIS 和 Journey 都在我的游玩清单里。'],
    sprite: [
      '...KKKKKK...', '..KPPPPPPK..', '.KPPPPPPPPK.', '.KPSSSSSSPK.',
      '..KSSSSSSK..', '..KSKKSKSK..', '..KSSSSSSK..', '...KSSSSK...',
      '..KKPPPPKK..', '.KPPPPPPPPK.', '.KPPPPPPPPK.', '..KPPPPPPK..',
      '..KBB..BBK..', '..KKK..KKK..',
    ],
  },
] as const
