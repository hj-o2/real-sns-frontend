import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./Share.css";

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={`${PF}/person/noAvatar.png`}
            alt="プロフィール画像"
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="今、何してるの？"
          />
        </div>
        <hr className="shareHr" />

        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <Image className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">PICTURE</span>
            </div>
            <div className="shareOption">
              <Gif className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <Face className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">FEELING</span>
            </div>
            <div className="shareOption">
              <Analytics className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">VOTE</span>
            </div>
          </div>
          <Button variant="contained" className="shareButton" color="primary">
            post
          </Button>
          {/* <button className="shareButton">post</button> */}
        </div>
      </div>
    </div>
  );
}
