import React, { Component } from 'react'
import Style from './Product.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default class Product extends Component {
    
    render() {
        return (
            <div className={Style.body}>
                <h1>Our Product</h1>
                <div className={Style.crl_arrng}>
                    <Card className={Style.root}>
                        <CardActionArea>
                            <div className={Style.crosual_div}>
                                <Carousel autoPlay showThumbs={false} infiniteLoop={true} className={Style.crousal}>
                                <div>
                                    <img src="./sattu.jpg"  className={Style.crousal_img}/>
                                </div>
                                <div>
                                    <img src="./sattu1.jpg"  className={Style.crousal_img} />
                                </div>
                                </Carousel>
                            </div>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">Masaledar sattu</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This Sattu is ready to use In this sattu, all pices an salt pepper, black sall, chilly and lemon extract ete are mixed in a balanced quantity.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="https://www.amazon.in/Athak-Tasty-Masaledar-Chana-Sattu/dp/B08QW96XFS/ref=sr_1_1?crid=21YW2FJ8CFMTA&dchild=1&keywords=athak&qid=1612184552&sprefix=athak%2Caps%2C288&sr=8-1">
                                <Button size="small" color="primary">
                                    Purchase
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                    <Card className={Style.root}>
                        <CardActionArea>
                            <div className={Style.crosual_div}>
                                <Carousel autoPlay showThumbs={false} infiniteLoop={true} className={Style.crousal}>
                                <div>
                                    <img src="./besan.jpg"  className={Style.crousal_img}/>
                                </div>
                                <div>
                                    <img src="./besan1.jpg"  className={Style.crousal_img} />
                                </div>
                                </Carousel>
                            </div>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">Besan</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This Sattu is ready to use In this sattu, all pices an salt pepper, black sall, chilly and lemon extract ete are mixed in a balanced quantity.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="https://www.amazon.in/ATHAK-Fine-Besan-100-Chana/dp/B08TTQ9R8H/ref=sr_1_4?crid=21YW2FJ8CFMTA&dchild=1&keywords=athak&qid=1612184552&sprefix=athak%2Caps%2C288&sr=8-4">
                                <Button size="small" color="primary">
                                    Purchase
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                    <Card className={Style.root}>
                        <CardActionArea>
                            <div className={Style.crosual_div}>
                                <Carousel autoPlay showThumbs={false} infiniteLoop={true} className={Style.crousal}>
                                <div>
                                    <img src="./giloipowder.jpg"  className={Style.crousal_img}/>
                                </div>
                                <div>
                                    <img src="./giloi.jpg"  className={Style.crousal_img} />
                                </div>
                                </Carousel>
                            </div>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">Giloi Powder</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This Sattu is ready to use In this sattu, all pices an salt pepper, black sall, chilly and lemon extract ete are mixed in a balanced quantity.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="https://www.amazon.in/ATHAK-Powder-Natural-Immunity-Booster/dp/B08R3HKKZS/ref=sr_1_2?crid=21YW2FJ8CFMTA&dchild=1&keywords=athak&qid=1612184552&sprefix=athak%2Caps%2C288&sr=8-2">
                                <Button size="small" color="primary">
                                    Purchase
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}
