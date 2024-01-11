import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import Home from '../screen/Home.js'
import reviewDetails from '../screen/reviewDetails.js'


const screens = {
    Home : {
        screen: Home,
    },
    reviewDetails :{
        screen: reviewDetails
    },
};

const HomeStack = createStackNavigator (screens);

export default createAppContainer (HomeStack);