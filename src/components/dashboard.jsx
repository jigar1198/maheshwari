import React, { Component } from "react";
import UserProfile from "./userProfile";

class Dashboard extends Component {
  render() {
    return <UserProfile />;
  }
<<<<<<< HEAD
=======



});

export default function SimpleCard() {
  const classes = useStyles();
  

  return (
    <div>
      {/* <Navbar /> */}
    <Grid container>
       <Grid item xs={12} lg={6} >
        <Typography className={classes.business} variant="h5" align="left" gutterBottom > 
          Business Card: 
        </Typography>
           <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}  /*color="textSecondary"*/ align="center" gutterBottom >
                      Company Name 
                    </Typography>
                    <Typography className={classes.subTitle} variant="subtitle1" align="center" gutterBottom>
                      www.helloworld.com 
                    </Typography>
                </CardContent>
            </Card>
       </Grid>
       <Grid item xs={12} lg={6} >
            <Card className={classes.card2}>
                <CardContent> 
                 <Grid container>
                  <Grid item xs={12} lg={7}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <ProprietorIcon />
                      </Avatar>
                  </ListItemAvatar>
  <ListItemText primary={<Typography variant="overline" className={classes.primaryText}>Proprietor</Typography>} secondary={<Typography display="block" className={classes.seondaryText}>Full Name</Typography>} />
                 </ListItem>
                 </Grid>
                 <Grid item xs={12} lg={5}>
                   {/* </Grid><Grid> */}
                 <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <AddressIcon />
                      </Avatar>
                  </ListItemAvatar>
  <ListItemText primary={<Typography variant="overline" className={classes.primaryText}>Address</Typography>} secondary={ <div> <div className={classes.seondaryText}>Line 1</div> <div className={classes.seondaryText}>Line2</div> </div> } />
                </ListItem>
                </Grid>
                </Grid>
                <Grid container>
                <Grid item xs={12} lg={7}>  
                <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <ContactIcon />
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={<Typography variant="overline" className={classes.primaryText}>Contact</Typography>} secondary={<Typography display="block" className={classes.seondaryText}>Landline, Mobile Number</Typography>} />
                </ListItem>
                </Grid>
                <Grid item xs={12} lg={5}>
                <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <EmailIcon />
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={<Typography variant="overline" className={classes.primaryText}>Email</Typography>} secondary={<Typography display="block" className={classes.seondaryText}>EmailID</Typography>} />
                </ListItem>
                </Grid>
                </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Container>
        <Typography variant="h5" className={classes.headings}>
           Services Offered:
        </Typography>
        <Typography variant="body1">
          Abc, XyZ, IT
        </Typography><br /><br />
          <Typography variant="h5" className={classes.headings}>
           Social Media Connect:
          </Typography>
          <Grid container>
            <Grid item xs={12} lg={7}>
              <ListItem>
                <ListItemAvatar>
                  <FacebookIcon />  
                </ListItemAvatar>
                <ListItemText primary="Account Name" secondary={<a href="#">Link</a>} />
              </ListItem>
            </Grid>
            <Grid item xs={12} lg={5}>
              <ListItem>
                <ListItemAvatar>
                  <InstagramIcon />  
                </ListItemAvatar>
                <ListItemText primary="Account Name" secondary={<a href="#">Link</a>}  />
              </ListItem>
            </Grid>       
          </Grid>
          <Grid container>
            {/* <Grid Container> */}
             <Grid item xs={12} lg={7}>
              <ListItem>
                <ListItemAvatar>
                  <LinkedInIcon />  
                </ListItemAvatar>
                <ListItemText primary="Account Name" secondary={<a href="#">Link</a>} />
              </ListItem> 
            </Grid>
            <Grid item xs={12} lg={5}>
              <ListItem>
                <ListItemAvatar>
                  <TwitterIcon />  
                </ListItemAvatar>
                <ListItemText primary="Account Name" secondary={<a href="#">Link</a>}  />
              </ListItem>
            </Grid>       
          </Grid>     
        </Container>
    </Grid> 
    </div>
 );
>>>>>>> updated dashboard
}

export default Dashboard;
