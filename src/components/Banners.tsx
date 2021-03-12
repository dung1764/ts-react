
import BannerItem from '../components/BannerItem'

const Banners: React.FC = () => (
    <>
        <div className="alert alert-success" role="alert">
            <h4>Banner</h4>
        </div>
        <BannerItem alt="ts react" />
        <BannerItem alt="next" />
        <BannerItem alt="axios" />
        <BannerItem alt="bootstrap" />
        <BannerItem alt="dotenv" />
    </>
)

export default Banners;