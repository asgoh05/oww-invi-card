import React from "react";
import style from "./GalleryPage.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate } from "react-router-dom";

export default function GalleryPage({ images }) {
  const navigate = useNavigate();
  const popUpImage = (idx) => {
    navigate(`/gallery/${idx ? idx : 0}`);
  };
  return (
    <div className={style.gallery_page}>
      <h1 className={style.title} data-aos="fade-up" ata-aos-duration="3000">
        | 갤러리 |
      </h1>
      <div className={style.image_frame}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 4, 900: 5 }}>
          <Masonry>
            {images.map((image, i) => (
              <img
                data-aos="fade-up"
                ata-aos-duration="3000"
                key={i}
                src={image}
                onClick={() => popUpImage(i)}
                style={{
                  width: "99%",
                  display: "block",
                  border: "1px solid var(--color-mint)",
                }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
