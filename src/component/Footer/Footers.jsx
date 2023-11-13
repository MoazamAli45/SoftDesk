import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import softdeskLogo from "./softdesk.png";
import { Phone, WhatsApp } from "@mui/icons-material";
import PrintIcon from "@mui/icons-material/Print";
export default function Footers() {
  return (
    <div className={classes["Footer"]}>
      <div className={classes["container"]}>
        <div className={classes["upper"]}>
          <Image
            src={softdeskLogo}
            className={classes["logo"]}
            alt="softdesk"
          />
          <div className={classes["info-sec"]}>
            <div className={classes["location"]}>
              <LocationOnIcon
                sx={{
                  color: "#F8983B",
                  marginRight: "10px",
                  fontSize: "2.5rem",
                }}
              />
              <span className={classes["para"]}>
                University of Engineering and Technology, Taxila
              </span>
            </div>
            <div className={classes["info"]}>
              <div className={classes["phone"]}>
                <Phone
                  sx={{
                    color: "#F8983B",
                    marginRight: "10px",
                    fontSize: "2.5rem",
                  }}
                />
                <span className={classes["para"]}>051-123-4567</span>
              </div>
              <div className={classes["fax"]}>
                <PrintIcon
                  sx={{
                    color: "#F8983B",
                    marginRight: "10px",
                    fontSize: "2.5rem",
                  }}
                />
                <span className={classes["para"]}>051-123-4567</span>
              </div>
            </div>
            <div className={classes["Social-icons"]}>
              <a href="https://www.facebook.com/SoftDesk">
                <FacebookIcon
                  className={classes["icon"]}
                  sx={{
                    color: "#F8983B",
                    cursor: "pointer",
                    fontSize: "3.5rem",
                  }}
                />
              </a>
              <a href="https://www.instagram.com/softdesk_uett/">
                <InstagramIcon
                  className={classes["icon"]}
                  sx={{
                    color: "#F8983B",
                    cursor: "pointer",
                    fontSize: "3.5rem",
                  }}
                />
              </a>
              <a href="mailto:softdeskuettaxila.pk@gmail.com">
                <EmailIcon
                  className={classes["icon"]}
                  sx={{
                    color: "#F8983B",
                    cursor: "pointer",
                    fontSize: "3.5rem",
                  }}
                />
              </a>
              <a href="https://www.linkedin.com/company/softdeskuett">
                <LinkedInIcon
                  className={classes["icon"]}
                  sx={{
                    color: "#F8983B",
                    cursor: "pointer",
                    fontSize: "3.5rem",
                  }}
                />
              </a>
              <a href="https://whatsapp.com/channel/0029VaDCcFD1t90VytImBU2e">
                <WhatsApp
                  className={classes["icon"]}
                  sx={{
                    color: "#F8983B",
                    cursor: "pointer",
                    fontSize: "3.5rem",
                  }}
                />
              </a>
              {/* <a href='#'><PinterestIcon className={classes['icon']} sx={{color:'#F8983B', cursor:'pointer', fontSize:'35px'}} /></a> */}
              {/* <a href='#'><RssFeedIcon className={classes['icon']} sx={{color:'#F8983B', cursor:'pointer', fontSize:'35px'}} /></a> */}
            </div>
          </div>
        </div>
        <div className={classes["line"]}>
          <div className={classes["seperator"]} />
        </div>
        <p className={classes["copyrights"]}>
          Copyrights &copy; 2023 by Softdesk. All rights reserved.
        </p>
      </div>
    </div>
  );
}
