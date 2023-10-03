import React from "react";
import styles from "./Profile.module.css"; 
import profilePicture from "../../assets/profilepicture.png";
import logo from '../../assets/B&R.png'
import { NavBar } from "../NavBar/NavBar";

const Profile = () => {
    return (
      <>
        <a href="/home">
          <img src={logo} alt="Logo" className={styles['logo']} />
        </a>

        <div>
          <NavBar />
        </div>

        <div className={styles["profile-dashboard"]}>

          <div className={styles["left-menu"]}>
            <div className={styles["profile-picture"]}>
              <img src={profilePicture} alt="Profile Picture" />
            </div>
            <ul>
              <li>
                <a href="/edit-profile">Configuración de perfil</a>
              </li>
              <li>
                <a href="/reporte">Crear reporte</a>
              </li>
              <li>
                <a href="/tabla/user">Mis donaciones</a>
              </li>
              <li>
                <a href="/notifications">Notificaciones</a>
              </li>
            </ul>
          </div>
          <div className={styles["main-content"]}></div>
        </div>
      </>
    );
  };
  
  export default Profile;