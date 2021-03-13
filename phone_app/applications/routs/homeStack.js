import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ProductsPage from '../screens/productsPage';
import HomePage from '../screens/home';
const screens = {
    Home:{
        screen: HomePage
    },

    ProductsPage: {
        screen: ProductsPage
    }

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);