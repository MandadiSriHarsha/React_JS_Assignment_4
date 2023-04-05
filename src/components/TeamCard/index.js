import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {data} = props
  return (
    <li className="team-card-item">
      <Link to={`/team-matches/${data.id}`} className="team-card-link-item">
        <img
          src={data.teamImageUrl}
          className="team-card-item-image"
          alt={data.name}
        />
        <p className="team-card-item-description">{data.name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
