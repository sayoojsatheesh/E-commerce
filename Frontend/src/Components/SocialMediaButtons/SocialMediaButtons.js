// CSS //
import classes from "./SocialMediaButtons.module.css";
// MUI //
import {  useTheme, useMediaQuery } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialMediaButtons = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={classes.IconContainerMain}>
      <div className={classes.IconContainer}>
        <TwitterIcon className={classes.Icon} sx={{fontSize:mdDown?'24px':'30px'}} />
      </div>
      <div className={classes.IconContainer}>
        <FacebookIcon className={classes.Icon} sx={{fontSize:mdDown?'24px':'30px'}} />
      </div>
      <div className={classes.IconContainer}>
        <YouTubeIcon className={classes.Icon} sx={{fontSize:mdDown?'24px':'30px'}} />
      </div>
      <div className={classes.IconContainer}>
        <InstagramIcon className={classes.Icon} sx={{fontSize:mdDown?'24px':'30px'}} />
      </div>
    </div>
  );
};

export default SocialMediaButtons;
