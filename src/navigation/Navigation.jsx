import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/home/Home';
import ProductDetail from "../pages/product/ProductDetail";
import Basket from "../pages/basket/Basket";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Navigation() {
  function HomeStack(){
    return(
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail}/>
      </Stack.Navigator>
    )
  }
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false, 
        tabBarStyle: { 
          backgroundColor:'#fff',
          position:'absolute',
          bottom: 0
          
        },
        tabBarActiveTintColor: '#FF3D00',
        }}>
      <Tab.Screen
        name="ProductList"
        component={HomeStack}
      />
      <Tab.Screen name="Basket" component={Basket} options={{tabBarBadge:9}} />
    </Tab.Navigator>
  )
}

export default Navigation