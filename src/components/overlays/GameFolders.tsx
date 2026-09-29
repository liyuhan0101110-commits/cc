import { FOCUS_GAMES, GAME_CATEGORIES, PLAYER_PREFERENCE } from '../../data/gameContent'
import { useStore } from '../../store'
import PixelPeople from './PixelPeople'
import './gameFolders.css'

export default function GameFolders() {
  const workView = useStore((s) => s.workView)
  const setWorkView = useStore((s) => s.setWorkView)
  const closeOverlay = useStore((s) => s.closeOverlay)
  const category = GAME_CATEGORIES.find((item) => item.id === workView)
  return (
    <section className="game-folders" aria-label={category?.title ?? '游戏档案'}>
      <header className="game-folders__bar">
        <button type="button" onClick={() => category ? setWorkView(null) : closeOverlay()}>{category ? '← 返回四个文件夹' : '← 返回收藏柜'}</button>
        <span>YUHAN HE / GAME ARCHIVE</span>
        {category && <button type="button" onClick={closeOverlay}>关闭</button>}
      </header>
      <div className="game-folders__body" key={category?.id ?? 'index'}>
        <p className="game-folders__eyebrow">{category ? `${category.number} / ${category.english}` : 'PLAYER NOTES / 玩家档案'}</p>
        <h1>{category?.title ?? '我的游戏文件夹'}</h1>
        <p className="game-folders__intro">{category?.intro ?? '从竞技对抗到经营、探索与合作，用文字记录我的游戏经历。'}</p>
        <PixelPeople />
        {!category && <div className="game-folders__summary">
          <section><h2>个人游戏偏好</h2><p>{PLAYER_PREFERENCE}</p></section>
          <section><h2>重点游戏投入</h2><dl>{FOCUS_GAMES.map((game) => <div key={game.name}><dt>{game.name}</dt><dd>{game.investment}</dd></div>)}</dl></section>
        </div>}
        {category ? (
          <div className="game-folders__entries">
            {category.games.map((game, i) => (
              <article className="game-folders__entry" key={game.name}>
                <span className="game-folders__number">{String(i + 1).padStart(2, '0')}</span>
                <div><p className="game-folders__tag">{game.tag}</p><h2>{game.name}</h2><p>{game.detail}</p></div>
              </article>
            ))}
          </div>
        ) : (
          <div className="game-folders__grid">
            {GAME_CATEGORIES.map((item) => (
              <button type="button" className="game-folders__folder" key={item.id} onClick={() => setWorkView(item.id)}>
                <span className="game-folders__eyebrow">FOLDER {item.number}</span><h2>{item.title}</h2>
                <p>{item.games.map((game) => game.name).join(' / ')}</p><span className="game-folders__open">打开文字档案 →</span>
              </button>
            ))}
          </div>
        )}
        <footer className="game-folders__footer">游戏时长为个人记录的约数。</footer>
      </div>
    </section>
  )
}
