import Footer from '../components/Footer'
import Header from '../components/Header'
import Cities from '../components/Cities'
import NewCity from '../components/NewCity'

function WebsiteLayout(props) {
    return (
        <div>
            <Header />
            { props.children }
            {/* <Cities /> */}
            {/* <NewCity /> */}
            <Footer />
        </div>
    )
}

export default WebsiteLayout