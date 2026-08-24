import { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PlayerScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function PlayerScreen( { navigation }: any ){
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");

  return (
    <View style={styles.container}>

      <Text style = {styles.title}> Welcome to Tic-Tac-Toe! </Text>
     
     <TextInput
     placeholder="Player 1 Name"
     value={player1}
     onChangeText={setPlayer1}
     style={styles.input} />

    <TextInput
     placeholder="Player 2 Name"
     value={player2}
     onChangeText={setPlayer2}
     style={styles.input} />

     <Button 
        title= "Start Game"
        onPress={() =>
          navigation.navigate('Game', { player1: player1, player2: player2 })
        }
        />
    </View>
  );
}

function GameScreen( { navigation, route }: any ){
  const {player1, player2} = route.params;
  const [player1Turn, setPlayer1Turn] = useState<boolean>(true);

// block = each block is each button on the game board
//  0 = not yet played | 1 = Player 1 played here | 2 = Player 2 played here

  const [block1, setBlock1] = useState<number>(0);
  const [block2, setBlock2] = useState<number>(0);
  const [block3, setBlock3] = useState<number>(0);
  const [block4, setBlock4] = useState<number>(0);
  const [block5, setBlock5] = useState<number>(0);
  const [block6, setBlock6] = useState<number>(0);
  const [block7, setBlock7] = useState<number>(0);
  const [block8, setBlock8] = useState<number>(0);
  const [block9, setBlock9] = useState<number>(0);

  let block1Content: string;
  if(block1 === 0){
    block1Content = '';
  } else if (block1 === 1){
    block1Content = 'X';
  } else {
    block1Content = 'O';
  }

  const handlePress = (index: number) => {
    // index = 0 - that is block
    if (player1Turn){
      setBlock1(1);
    }  else {
      setBlock1(2);
    }
    setPlayer1Turn(!player1Turn); // changed to the next person's turn
  }; 


return (
    <View style={styles.container}>
       <Text style={styles.title} > {player1} vs. {player2} </Text>

      <Text style={player1Turn ? styles.red : styles.blue}>
        {player1Turn ? `${player1}'s Turn` : `${player2}'s Turn`}
      </Text>

        <View style={styles.row}>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(0)}>
            <Text style={styles.cellText}>{block1Content}</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.cell} onPress={() => handlePress(1)}>
            <Text style={styles.cellText}></Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.cell} onPress={() => handlePress(2)}>
            <Text style={styles.cellText}></Text>
          </TouchableHighlight>
        </View>

        <View style={styles.row}>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(3)}>
            <Text style={styles.cellText}></Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.cell} onPress={() => handlePress(4)}>
            <Text style={styles.cellText}></Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.cell} onPress={() => handlePress(5)}>
            <Text style={styles.cellText}></Text>
          </TouchableHighlight>
      </View>

        <View style={styles.row}>
          <TouchableHighlight style={styles.cell} onPress={() => handlePress(6)}>
            <Text style={styles.cellText}></Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.cell} onPress={() => handlePress(7)}>
            <Text style={styles.cellText}></Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.cell} onPress={() => handlePress(8)}>
            <Text style={styles.cellText}></Text>
          </TouchableHighlight>
      </View>

    </View>
);
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
      fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  cellText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
    red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
  },
  blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
  },
});
