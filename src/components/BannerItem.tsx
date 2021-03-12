interface props {
    alt: string
}
const BannerItem: React.FC<props> = ({ alt }) => (
    <img
        src={`https://picsum.photos/500/500?random=${Math.floor(Math.random() * 100)}`}
        className="img-thumbnail"
        alt={alt}>
    </img>
)

export default BannerItem;