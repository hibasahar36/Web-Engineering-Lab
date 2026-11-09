import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} BrandLogo Inc. All rights reserved.</p>
            <div className="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/contact">Contact</a>
            </div>
        </footer>
    )
}

export default Footer