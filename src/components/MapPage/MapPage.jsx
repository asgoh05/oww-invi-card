import React from "react";
import style from "./MapPage.module.css";
import navermap_icon from "../../images/navermap_icon.png";
import kakaomap_icon from "../../images/kakaomap_icon.png";

export default function MapPage() {
  return (
    <div className={style.container}>
      <h1 data-aos="fade-up" ata-aos-duration="3000" className={style.title}>
        | 오시는 길 |
      </h1>
      <embed
        className={style.map}
        data-aos="fade-up"
        ata-aos-duration="3000"
        loading={"lazy"}
        referrerpolicy={"no-referrer-when-downgrade"}
        src={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.29922445904!2d127.08977855068387!3d37.382755342290835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b585c9382c72b%3A0xcb2a2b6905978d03!2z7ZWY64iE7IaM642U7Z6Q!5e0!3m2!1sko!2skr!4v1672471415955!5m2!1sko!2skr"
        }
      ></embed>
      <h3 className={style.location_name}>하누소 The Hill</h3>
      <div className={style.mapinfo}>
        <p className={style.address}>
          경기 성남시 분당구 판교백현로 65 <br />
          (우)13539 지번백현동 500-9
        </p>
        <img
          className={style.navermap_icon}
          onClick={() => window.open("https://naver.me/5HSEtAfp", "_blank")}
          src={navermap_icon}
          alt="naver map"
        />
        <img
          className={style.kakaomap_icon}
          onClick={() => window.open("http://kko.to/lkN3Lfsnhp", "_blank")}
          src={kakaomap_icon}
          alt="kakao map"
        />
      </div>
    </div>
  );
}
