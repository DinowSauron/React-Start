import Document, {Html, Head, Main, NextScript} from 'next/document';


export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    
                    
                    {/*Algumas fontes:  Bree Serif | Kelly Slab | Rajdhani */}
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Kelly+Slab&family=Rajdhani:wght@300;500;700&display=swap" rel="stylesheet"/>

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
