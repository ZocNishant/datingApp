import "./header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <IconButton>
          <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
        <img src={logo} alt="header" className="header_logo" />

        <IconButton>
          <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
      </div>
    </>
  );
};

export default Header;
