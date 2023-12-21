import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../pages/home/Home';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function Navigation () {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
        
    </NavigationContainer>
  )
}

export default Navigation