import Script from 'next/script'    

export default function GoogleAnalytics() {
    
        return(
            <>
                {/* <!-- Google tag (gtag.js) --> */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4T6X0GNZZT" />
                <Script>
                    {`window.dataLayer = window.dataLayer || []`};
                    {`function gtag(){dataLayer.push(arguments);}`}
                    {`gtag('js', new Date());`}

                    {`gtag('config', 'G-4T6X0GNZZT');`}
                </Script>
            </>
        );
    
}
