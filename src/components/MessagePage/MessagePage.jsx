import React from "react";
import style from "./MessagePage.module.css";

export default function MessagePage() {
  return (
    <div className={style.message_page}>
      <h1 className={style.title} data-aos="fade-up" ata-aos-duration="3000">
        | 초대합니다 |
      </h1>
      <div
        className={style.messagebox}
        data-aos="fade-up"
        ata-aos-duration="3000"
      >
        <p className={style.message}>
          세상에서 가장 큰 선물로 <br />
          저희에게 온 원우가 건강하게 자라서 <br />
          첫돌을 맞이하게 되었습니다. <br />
          더욱 건강하고 예쁘게 자랄 수 있도록 <br />
          함께 축하해 주세요 ❤︎
        </p>
      </div>
      <div className={style.family} data-aos="fade-up" ata-aos-duration="3000">
        <h2 className={style.name} data-aos="fade-up" ata-aos-duration="3000">
          오 원 우
        </h2>
        <div className={style.parents}>
          <div className={style.parents_name}>
            <span className={style.role}>아빠</span>오상건
          </div>
          <div className={style.dot}>❤︎</div>
          <div className={style.parents_name}>
            <span className={style.role}>엄마</span>원소희
          </div>
        </div>
      </div>
    </div>
  );
}
