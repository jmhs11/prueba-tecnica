import { useMatches } from 'react-router-dom'

function Breadcrumbs () {
  const matches = useMatches()
  const crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle.crumb(match.data))

  return (
    <ul className='flex text-lg'>
      {crumbs.map((crumb, index) => (
        <li className="after:content-['_>_'] after:last-of-type:content-['']" key={index}>
          {crumb}
        </li>
      ))}
    </ul>
  )
}

export default Breadcrumbs
