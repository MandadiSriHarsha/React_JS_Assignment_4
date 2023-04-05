import './index.css'

const MatchCard = props => {
  const {data} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = data
  const matchStatusClassName =
    matchStatus === 'Lost' ? 'lost-class' : 'won-class'
  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-item-image"
      />
      <p className="match-card-item-heading">{competingTeam}</p>
      <p className="match-card-item-description">{result}</p>
      <p className={`match-card-item-status ${matchStatusClassName}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
