import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const NewsItem = ({item}) =>{
    
    const healthLabels = item.recipe.healthLabels.map((healthLabel, i)=>{
        return(
            <p key={i} style={{flexBasis:'50%'}}>
                {healthLabel}
            </p>
        )
    });
    
    const indgridents = item.recipe.ingredientLines.map((indgrident, i)=>{
        return(
            <li key={i}>
                {indgrident}
            </li>
        )
    });
    
    function directions(e) {
        e.preventDefault();
        window.location = `${item.recipe.url}`;
    }

    return(
        <div className="result_item">
            <Card style={{height:'max-content', fontFamily: 'Overpass'}}>
              <CardActionArea>
                <CardMedia
                  component="div"
                  alt="Contemplative Reptile"
                  height="140"
                  style={{height:'10em', background:`url(${item.recipe.image})`}}
                  title="Dish Image"
                  src="img"
                />
                <CardContent>
                  <h2 style={{fontFamily:'Overpass', fontSize: '1.3em'}}>
                    {item.recipe.label}
                  </h2>
                  <h4 style={{fontFamily:'Overpass'}}>Health Labels</h4>
                  <hr className="style4"></hr>
                  <div style={{display:'flex', flexWrap:'wrap'}}>
                    {healthLabels}
                  </div>
                  <hr className="style4"></hr>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<i className="fas fa-angle-down"></i>}>
                      <p style={{fontFamily:'Overpass', fontSize: '1em'}}>
                        Ingredients 
                      </p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography component="div">
                        <div style={{fontFamily:'Overpass'}}>
                            <ul style={{padding:'0'}}>
                                {indgridents}
                            </ul>
                        </div>
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <hr className="style4"></hr>
                  <Typography component="div">
                    <div style={{fontFamily:'Overpass'}}>
                        <div>Servings:&nbsp;{item.recipe.yield}</div>
                        <div>Calories:&nbsp;{Math.round((Math.round(item.recipe.calories)/Math.round(item.recipe.yield)))}&nbsp;per serving</div>
                        <div>Source:&nbsp;{item.recipe.source}</div>
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{background: '#3B478C'}}>
                <Button style={{color:'white'}} onClick={directions} size="small" color="primary">
                  Cooking Directions
                </Button>
              </CardActions>
            </Card>
        </div> 
    )
}

export default NewsItem;

