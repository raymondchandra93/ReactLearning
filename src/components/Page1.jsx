import {Link} from 'react-router-dom'

const Page1 = () => {
    return(
        <div>
            <h1>This is Page 1!</h1>
            <Link to='/page2'>Link to Page 2</Link>
        </div>
    )
}

export default Page1;