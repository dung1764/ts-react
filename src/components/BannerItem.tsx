interface props {
    alt: string,
    index: number
}
const BannerItem: React.FC<props> = ({ alt, index }) => (
    <img
        src={`https://picsum.photos/500/500?random=${index}`}
        className="img-thumbnail"
        alt={alt}>
    </img>
)

export default BannerItem;