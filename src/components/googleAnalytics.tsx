import Script from 'next/script'

export default function GoogleAnalytics() {

    return (
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-4T6X0GNZZT`} />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-4T6X0GNZZT', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            {/* <!-- Google tag (gtag.js) -->
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4T6X0GNZZT" />
                <Script>
                    {`window.dataLayer = window.dataLayer || []`};
                    {`function gtag(){dataLayer.push(arguments);}`}
                    {`gtag('js', new Date());`}

                    {`gtag('config', 'G-4T6X0GNZZT');`}
                </Script> */}
        </>
    );
}
