import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingLists from './components/ShoppingLists';
import Welcome from './components/Welcome';
// ---- Create Navigator --- //
const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCwnW2bcIYYkk2WnUZO5ZHO2fSh-1vb9-8",
    authDomain: "shopping-list-demo-fa6b8.firebaseapp.com",
    projectId: "shopping-list-demo-fa6b8",
    storageBucket: "shopping-list-demo-fa6b8.appspot.com",
    messagingSenderId: "109222484356",
    appId: "1:109222484356:web:587a024ff8fba9af7d65d1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app); // database referenced with db variable. Can be passed to other components 


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
