import {Link} from 'react-router-dom'

const Code = ({code}) => {
    return (
        <div>
            <p><Link to={`/users/${code._id}`}> {code.code}</Link></p>
        </div>
    )
}
export default Code

//<p><Link to={'/data/${code.id}'}>{code.id} {code.code}</Link></p>