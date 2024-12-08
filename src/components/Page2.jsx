import {Link} from 'react-router-dom'

const Page2 = () => {
    return(
        <div>
            <h1>This is Page 2!</h1>
            <Link to='/page1'>Link to Page 1</Link>
        </div>
    )
}

export default Page2;