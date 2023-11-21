import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ScrollTo from '../../utils/scrollTo'
import Search from './Search'
import Footer from './Footer'
import Header from './Header'



const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | Traverler Youtube"
                defaultTitle="Traverler Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main