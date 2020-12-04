import { createStackNavigator, createAppContainer } from "react-navigation";
import List from  '../screens/list'


const AppNavigator = createStackNavigator({

    List: {
        screen: List
    },
    

},
    {
        initialRouteName: 'List',
        headerMode: 'none'
    }
);

export default createAppContainer(AppNavigator);