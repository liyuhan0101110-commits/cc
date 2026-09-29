import { useRef, useState } from 'react'
import { PIXEL_PALETTE, PIXEL_PEOPLE } from '../../data/pixelPeople'
import './pixelPeople.css'

export default function PixelPeople() {
  const turns = useRef<number[]>(PIXEL_PEOPLE.map(() => 0))
  const [speech, setSpeech] = useState('点按一位伙伴，听听我的游戏经历。')
  const [active, setActive] = useState<string | null>(null)
  const [step, setStep] = useState(0)

  const talk = (index: number) => {
    const person = PIXEL_PEOPLE[index]
    const turn = turns.current[index]++
    setSpeech(person.lines[turn % person.lines.length])
    setActive(person.id)
    setStep((value) => value + 1)
  }

  return (
    <section className="pixel-people" aria-label="互动像素伙伴">
      <div className="pixel-people__copy">
        <p className="pixel-people__kicker">MEET THE PARTY / 点击互动</p>
        <p className="pixel-people__speech" role="status" aria-live="polite">{speech}</p>
      </div>
      <div className="pixel-people__party">
        {PIXEL_PEOPLE.map((person, index) => (
          <button
            type="button"
            className="pixel-people__person"
            data-active={active === person.id || undefined}
            style={{ ['--person-color' as string]: person.color }}
            key={person.id}
            onClick={() => talk(index)}
            aria-label={`与${person.name}互动`}
          >
            <svg
              key={active === person.id ? step : 0}
              className={`pixel-people__sprite${active === person.id ? ' pixel-people__sprite--hop' : ''}`}
              viewBox="0 0 12 14"
              shapeRendering="crispEdges"
              aria-hidden="true"
            >
              {person.sprite.flatMap((row, y) => [...row].map((pixel, x) => {
                const fill = PIXEL_PALETTE[pixel]
                return fill ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} /> : null
              }))}
            </svg>
            <span>{person.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
