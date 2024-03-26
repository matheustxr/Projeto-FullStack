import './Banner.css'

interface BannerProps {
    url: string;
    alt?: string;
}

function Banner( { url, alt } :BannerProps) {
    return(
        <div className="banner">
            <img src={url} alt={alt} />
        </div>
    )
}

export default Banner