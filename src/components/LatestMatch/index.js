import './index.css'

const LatestMatch = props => {
  const {data} = props
  const {
    date,
    venue,
    firstInnings,
    secondInnings,
    umpires,
    manOfTheMatch,
    competingTeam,
    competingTeamLogo,
    result,
  } = data
  return (
    <div className="latest-match-bg-container">
      <div className="card-1">
        <div className="card-1-content-card">
          <p className="competing-team-heading">{competingTeam}</p>
          <p className="competing-team-date">{date}</p>
          <p className="competing-team-venue">{venue}</p>
          <p className="competing-team-result">{result}</p>
        </div>
        <div className="card-1-image-card">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-image"
          />
        </div>
      </div>
      <hr className="card-separator" />
      <div className="card-2">
        <p className="competing-team-first-innings-heading">First Innings</p>
        <p className="competing-team-first-innings-description">
          {firstInnings}
        </p>
        <p className="competing-team-second-innings-heading">Second Innings</p>
        <p className="competing-team-second-innings-description">
          {secondInnings}
        </p>
        <p className="competing-team-man-of-the-match-heading">
          Man Of The Match
        </p>
        <p className="competing-team-man-of-the-match-description">
          {manOfTheMatch}
        </p>
        <p className="competing-team-umpires-heading">Umpires</p>
        <p className="competing-team-umpires-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
