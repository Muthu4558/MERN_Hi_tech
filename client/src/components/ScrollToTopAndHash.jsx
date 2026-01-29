import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTopAndHash = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // Always scroll to top on page change
        if (!hash) {
            window.scrollTo({ top: 0, behavior: "instant" })
            return
        }

        // Scroll to section if hash exists
        const element = document.getElementById(hash.replace("#", ""))
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" })
            }, 100) // wait for page render
        }
    }, [pathname, hash])

    return null
}

export default ScrollToTopAndHash