
import BannerItem from '../components/BannerItem'

const Banners: React.FC = () => (
    <>
        <div className="alert alert-success" role="alert">
            <h4>Banner</h4>
        </div>
        <BannerItem alt="ts react" index={1} />
        <BannerItem alt="next" index={2} />
        <BannerItem alt="axios" index={3} />
        <BannerItem alt="bootstrap" index={4} />
        <BannerItem alt="dotenv" index={4} />
    </>
)

export default Banners;