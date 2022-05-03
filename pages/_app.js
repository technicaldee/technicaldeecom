// pages/_app.js
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../components/Navbar'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NQV9XGS');
        `,
        }}
      />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <meta name="keywords" content="website developer, software developer, programmer, open source, developer, Nigeria, Edidiong, Technicaldee" />
        <meta name="description" content="Information about TechnicalDee, software developer." />
        <meta name="subject" content="Software developer" />
        <meta name="copyright"content="TechnicalDee" />
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <meta name="revised" content="Thursday, March 17th, 2022, 2:30 pm" />
        <meta name="abstract" content="Software Developer" />
        <meta name="topic" content="Tech" />
        <meta name="summary" content="Information about TechnicalDee" />
        <meta name="Classification" content="Technology" />
        <meta name="author" content="name, technical@technicaldee.com" />
        <meta name="designer" content="Edidiong Udoh" />
        <meta name="copyright" content="2022 TechnicalDee" />
        <meta name="reply-to" content="gisthive@gmail.com" />
        <meta name="owner" content="Edidiong Udoh" />
        <meta name="url" content="http://www.technicaldee.com"/>
        <meta name="identifier-URL" content="http://www.technicaldee.com"/>
        <meta name="directory" content="submission"/>
        <meta name="category" content="Technology"/>
        <meta name="coverage" content="Worldwide"/>
        <meta name="distribution" content="Global"/>
        <meta name="rating" content="General"/>
        <meta name="revisit-after" content="7 days"/>
        <meta http-equiv="Expires" content="0"/>
        <meta http-equiv="Pragma" content="no-cache"/>
        <meta http-equiv="Cache-Control" content="no-cache"></meta>
        
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://technicaldee.com/"/>
        <meta property="og:title" content="🛠️ Dee - Programming and web development"/>
        <meta property="og:description" content="Programming and web development"/>
        <meta property="og:image" content="/seo.png"/>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://technicaldee.com/"/>
        <meta property="twitter:title" content="🛠️ Dee - Programming and web development"/>
        <meta property="twitter:description" content="Programming and web development"/>
        <meta property="twitter:image" content="/seo.png"></meta>
      </Head>

      <div className='p-6 space-y-12 md:px-20 lg:px-20 px-8 '>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}