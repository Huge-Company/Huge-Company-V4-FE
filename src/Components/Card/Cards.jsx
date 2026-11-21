import { useNavigate } from 'react-router-dom'

export default function Cards({ groups, classNames = {} }) {
  const navigate = useNavigate()
  const {
    container = 'cards-container', card = 'card', content = 'card-content',
    letters = 'letters', lettersButton = 'lettersB', text = 'card-text',
    range = 'range', goButton = 'GoB',
  } = classNames

  return (
    <div className={container}>
      {groups.map((group) => (
        <article className={card} key={group.label}>
          <div className={content}>
            <div className={letters} aria-label={`${group.label} document ranges`}>
              {group.letters.map((letter) => (
                <button className={lettersButton} type="button" key={letter} onClick={() => navigate(`/download/${group.label.toLowerCase()}/${letter.toLowerCase()}`)}>{letter}</button>
              ))}
            </div>
            <div className={text}>
              {group.text.map((line, index) => <p key={`${group.label}-${index}`}>{line}</p>)}
              <p className={range}>{group.label}</p>
            </div>
            <button className={goButton} type="button" onClick={() => navigate(`/download/${group.label.toLowerCase()}`)}>Browse range <span aria-hidden="true">→</span></button>
          </div>
        </article>
      ))}
    </div>
  )
}
