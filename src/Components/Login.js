import React, { useState, useRef, useEffect } from "react";
import "./Login.css";
import Insta from "../Assets/insta.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InstaLogo from "../Assets/Instagram.JPG";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import "pure-react-carousel/dist/react-carousel.es.css";
import instaimg from "../Assets/instagram.png";
import Background from "../Assets/mockup2.png";
import { useAuth } from "../Context/AuthContext";
import { link, useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
export default function Login() {
  const useStyles = makeStyles({
    root:{
      paddingLeft:'4%',
      paddingRight:'4%',
      paddingBottom:'4%',
      paddingTop:'4%'
  },
  root2:{
      marginTop:'3%'
  },
    buton: {
      backgroundColor: "#0095f6",
      marginBottom: "3%",
      marginLeft: "4%",
      marginRight: "4%",
    },
    link: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2%",
    },
    link2: {
      display: "inline",
      marginLeft: "1%",
    },
    typo: {
      display: "flex",
      justifyContent: "center",
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // console.log(email,password)
      setError("");
      setLoading(true);
      await login(email, password);
      setLoading(false);
      history.push("/");
    } catch {
      setError("Failed to log in");
      setLoading(false);
    }
  }
  return (
    <div className="login-container">
      <div
        className="imgcar"
      >
        <div className="caro">
          <div className="insta-img">
            <img className="mockup-img" src={Background} />
          </div>
        </div>
      </div>
      <div className="login-form">
        <Card className={classes.root}>
          <CardContent>
            <div className="logo">
              <img src={instaimg} />
            </div>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              InputLabelProps={{ style: { width: "-webkit-fill-available" } }}
              className="email"
              margin="dense"
              onChange={(e) => {
                handleEmail(e);
              }}
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              fullWidth={true}
              size="small"
            />
            <TextField
              type="password"
              InputLabelProps={{ style: { width: "-webkit-fill-available" } }}
              className="email"
              margin="dense"
              onChange={(e) => {
                handlePassword(e);
              }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              size="small"
            />
            <Typography variant="subtitle1">
              {/* <Link className={classes.link} variant="inherit" underline='none' href="#" >
                Forget Password ?
              </Link> */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              disabled={loading}
              onClick={handleSubmit}
              className={classes.buton}
              fullWidth={true}
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root2} variant="outlined">
          <CardContent>
            <Typography className={classes.typo} variant="subtitle1">
              Don't have an account?{" "}
              <Link
                className={classes.link2}
                variant="inherit"
                underline="none"
                href="/signup"
              >
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
