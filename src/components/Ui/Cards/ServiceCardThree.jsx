import Link from "next/link";
import Image from "next/image";

const ServiceCardThree = ({ item }) => {
    return (
        <div className="tekup-service-wrap service-card-three">
            <div className="tekup-service-thumb">
                <Image
                    src={item?.image}
                    alt={item?.title || "Service image"}
                    width={612}
                    height={760}
                    quality={95}
                    unoptimized
                    className="service-card-three-image"
                    sizes="(max-width: 767px) 92vw, (max-width: 991px) 46vw, 31vw"
                />
                <div className="tekup-service-data">
                    <img src={item?.icon} alt="" className="service-card-three-icon" />
                    <Link href="single-service">
                        <h5>{item?.title}</h5>
                    </Link>
                    <p>{item?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardThree;
