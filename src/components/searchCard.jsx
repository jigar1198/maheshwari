import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card, Grid, CardMedia} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 295,
    margin: "15px",
    width: "220px",
    height: "210px",
    marginTop: "55px",
    background: '#abbaab', 
    background: '-webkit-linear-gradient(to top ,  #abbaab, #ffffff)',
    background: 'linear-gradient(to bottom,  #abbaab, #ffffff)', 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1.0)',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Oleo Script',
    fontWeight: '500',    
    color: 'rgb(255, 81, 0)'
  },

  subtitle: {

    fontFamily: 'Jura',
    fontSize: 16,
    fontWeight: '500',
    color: "black"

  },

  pos: {
    marginBottom: 12,
  },

  media: {

    height: 220,
    paddingTop: '5px'    
  },
};

class SearchCard extends Component {
        
  state= {}

  render() {
    const {classes} = this.props;
    const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card} >
                <CardContent>
                     <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                         Accounting
                     </Typography>
                     <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 4
                     </Typography>
                 </CardContent>
                <CardActions>
                    <Button size="small" color="inherit" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Apparel & Fashion
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull} User Count: 1
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Banking
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 5
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Chemicals
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 2
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Computer Hardware
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 8
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Cosmetics
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 3
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Engineering
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 11
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Entertainment
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 2
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Finance
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 7
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Food & Beverages
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 4
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Health Care
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 2
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Human Resources 
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 8
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Import & Export 
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 16
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Ivestment Banking
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 6
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Legal Services 
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 3
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Leisure, Travel & Tourism
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 10
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Marketing & Advertising
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 14
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Pharmaceuticals
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 3
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Photography
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 6
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Printing
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 12
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "16px"}} gutterBottom >
                        Professional Training & Coaching 
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 8
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Real Estate 
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 13
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Textiles
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 5
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Wholesale 
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 18
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2" style={{textAlign: "center", marginTop: "50px"}} gutterBottom >
                        Others
                    </Typography>
                    <Typography className={classes.subtitle} style={{textAlign: "center", marginTop: "20px"}} color="textSecondary" gutterBottom>
                        {bull}User Count: 26
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="inherit" size="small" variant="outlined">Open</Button>
                </CardActions>
                <br />
            </Card>
        </Grid>    
    </Grid>
  )

}

}   



export default withStyles(styles)(SearchCard);