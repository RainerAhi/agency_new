
export const SectionFooter = () => {

    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };

    return (
        <section className="footer" >
            <div className="footer-content" >
                <div className="footer-column footer-column-other" >
                    <h1 className="smallest-headline footer-title white" >YTFIN</h1>
                    <img src="/ytfin.png" className="footer-logo" />
                    <h1 className="small-text grey" >© 2024 YTFIN, Inc. <br/>All rights reserved.</h1>
                </div>
                <div className="footer-column footer-column-main" >
                    <h1 className="smallest-headline footer-title white" >Quick Links</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/roadmap.pdf")} >Roadmap</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/litepaper.pdf")} >Litepaper</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/toke.pdf")} >Tokenomics</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/tech.pdf")} >Technical Whitepaper</h1>
                </div>
                <div className="footer-column footer-column-main" >
                    <h1 className="smallest-headline footer-title white" >Connect With Us</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick('https://twitter.com/home')} >Twitter</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick('https://www.linkedin.com/feed/')} >LinkedIn</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick('https://www.instagram.com/')} >Instagram</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick('https://discord.com/')} >Discord</h1>
                </div>
            </div>
        </section>
    )
}