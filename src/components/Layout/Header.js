import { Fragment } from "react";
import mainImage from '../../assets/food.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>Hit & Eat</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
           <img src={mainImage} alt='main image'/> 
        </div>
    </Fragment>
        );
};

export default Header;