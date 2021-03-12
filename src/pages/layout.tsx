import Banners from '../components/Banners'
import Nav from '../components/Nav'
import Head from 'next/head'

interface head {
    title: string
}

const Layout: React.FC<head> = ({ children, title }) =>
(
    <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="container">
            <Nav />
            <div className="row">
                <div className="col-8 pt-3">
                    {children}
                </div>
                <div className="col-4 pt-3">
                    <Banners />
                </div>
            </div>
        </div>
    </>
)


export default Layout