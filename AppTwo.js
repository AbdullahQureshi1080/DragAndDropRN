import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {BoardRepository, Board} from 'react-native-draganddrop-board';

const data = [
  //   {
  //     id: 1,
  //     name: 'TO DO',
  //     rows: [
  //       {
  //         id: '1',
  //         name: 'Analyze your audience',
  //         description:
  //           'Learn more about the audience to whom you will be speaking',
  //       },
  //       {
  //         id: '2',
  //         name: 'Select a topic',
  //         description:
  //           'Select a topic that is of interest to the audience and to you',
  //       },
  //       {
  //         id: '3',
  //         name: 'Define the objective',
  //         description:
  //           'Write the objective of the presentation in a single concise statement',
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: 'IN PROGRESS',
  //     rows: [
  //       {
  //         id: '4',
  //         name: 'Look at drawings',
  //         description: 'How did they use line and shape? How did they shade?',
  //       },
  //       {
  //         id: '5',
  //         name: 'Draw from drawings',
  //         description: 'Learn from the masters by copying them',
  //       },
  //       {
  //         id: '6',
  //         name: 'Draw from photographs',
  //         description:
  //           'For most people, it’s easier to reproduce an image that’s already two-dimensional',
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: 'DONE',
  //     rows: [
  //       {
  //         id: '7',
  //         name: 'Draw from life',
  //         description: 'Do you enjoy coffee? Draw your coffee cup',
  //       },
  //       {
  //         id: '8',
  //         name: 'Take a class',
  //         description: 'Check your local university extension',
  //       },
  //     ],
  //   },
  {
    id: 1,
    // name: "TO DO",
    rows: [
      {
        id: '1',
        name: 'The Shawshank',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '2',
        title: 'The Godfather',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg',
      },
      {
        id: '3',
        title: 'The Godfather: Part II ',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg',
      },
      {
        id: '4',
        title: 'The Dark Knight ',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '5',
        title: '12 Angry Men',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '6',
        title: "Schindler's List",
        image_url:
          'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '7',
        title: 'Lord of the Rings',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '8',
        title: 'Pulp Fiction',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '9',
        title: 'The Good',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '10',
        title: 'The Fellowship of the Ring',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX45_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '11',
        title: 'Fight Club',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '13',
        title: 'Forrest Gump ',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg',
      },
      {
        id: '14',
        title: 'Inception',
        image_url:
          'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg',
      },
      //   {
      //     id: 114,
      //     title: 'Inception',
      //     image_url:
      //       'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg',
      //   },
      //   {
      //     id: 114,
      //     title: 'Inception',
      //     image_url:
      //       'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg',
      //   },
    ],
  },
  {
    id: 2,
    // name: "IN PROGRESS",
    rows: [
      // {
      //   id: 114,
      //   title: "Inception",
      //   image_url:
      //     "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
      // },
    ],
  },
];

const AppTwo = () => {
  const boardRepository = new BoardRepository(data);
  //   const [repository] = useState(new Repository(mockData));
  const renderItem = (item, index, columData) => {
    console.log('The Index', item);
    if (columData == 1) {
      // console.log("====================================");
      // console.log(item);
      // console.log("====================================");
      return (
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            backgroundColor: 'red',
          }}>
          <Text style={{fontSize: 13, marginRight: 5}}>{index + 1}</Text>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              //   backgroundColor: '#f0f0f0',
              marginRight: 5,
            }}>
            <Image
              style={{
                flex: 1,
                // height: 50,
                // width: 50,
                borderRadius: 25,
                // backgroundColor: "red",
              }}
              // resizeMode="contain"
              source={{
                uri: item.image_url,
              }}
              // source={{
              //   uri:
              //     "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
              // }}
            />
          </View>

          <Text style={{fontSize: 13}}>{item.title}</Text>
        </View>
      );
    }
    if (columData == 2) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 10, marginRight: 5}}>{index + 1}</Text>
          <Text style={{fontSize: 10, marginRight: 5}}>{item.title}</Text>
        </View>
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#014A81" />
      <View style={styles.header}>
        <Text style={styles.hederName}>React Native Drag and Drop Board</Text>
      </View>

      <Board
        boardRepository={boardRepository}
        open={() => {}}
        onDragEnd={() => {}}
        // cardContent={(item, index, columData) => {
        //   //   renderItem(item, index, columData)
        //   if (columData) {
        //     <View>
        //       <Text>{item.title}</Text>
        //     </View>;
        //   }
        // }}
        // cardContent={item => (
        //   <View style={{backgroundColor: 'red'}}>
        //     <Text>{item.name}</Text>
        //   </View>
        // )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  hederName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  board: {
    paddingVertical: 16,
    backgroundColor: '#E0E8EF',
  },
  column: {
    backgroundColor: '#F8FAFB',
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
  },
  columnName: {
    marginBottom: 16,
    fontWeight: 'bold',
  },
  addColumn: {
    marginRight: 12,
    padding: 12,
    // minWidth: COLUMN_WIDTH,
  },
  card: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F6F7FB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 12,
  },
  addCard: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(233, 233, 233)',
    borderRadius: 4,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#F5F6F8',
  },
});

export default AppTwo;
