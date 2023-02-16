import React from "react";
import MainPage from "../MainPage/MainPage";
import GalleryPage from "../GalleryPage/GalleryPage";
import MessagePage from "../MessagePage/MessagePage";
import MapPage from "../MapPage/MapPage";
import CalendarPage from "../CalendarPage/CalendarPage";
import { Link } from "react-scroll";
import style from "./InvitationCard.module.css";
import { BiHome, BiPhotoAlbum, BiMapAlt } from "react-icons/bi";

export default function InvitationCard({ images }) {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="main">
              <BiHome className={style.icons} />
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="gallery">
              <BiPhotoAlbum className={style.icons} />
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="map">
              <BiMapAlt className={style.icons} />
            </Link>
          </li>
        </ul>
      </nav>
      <section id="main">
        <MainPage />
        <MessagePage />
      </section>
      <section id="gallery">
        <GalleryPage images={images} />
      </section>
      <section id="calendar">
        <CalendarPage />
      </section>
      <section id="map">
        <MapPage />
      </section>
    </>
  );
}
