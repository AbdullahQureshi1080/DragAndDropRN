import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import Board, {Repository} from 'react-native-dnd-board';
import style from 'react-native-dnd-board/src/style';

const mockData = [
  // {
  //   id: '1',
  //   name: 'Column 1',
  //   rows: [
  //     {
  //       id: '11',
  //       title: 'Row 1 (Column 1)',
  //       image:
  //         'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
  //     },
  //     {
  //       id: '12',
  //       name: 'Row 2 (Column 1)',
  //     },
  //     {
  //       id: '13',
  //       name: 'Row 3 (Column 1)',
  //     },
  //     {
  //       id: '14',
  //       name: 'Row 4 (Column 1)',
  //     },
  //   ],
  // },
  // {
  //   id: '2',
  //   name: 'Column 2',
  //   rows: [
  //     {
  //       id: '21',
  //       name: 'Row 1 (Column 2)',
  //     },
  //     {
  //       id: '22',
  //       name: 'Row 2 (Column 2)',
  //     },
  //     {
  //       id: '23',
  //       name: 'Row 3 (Column 2)',
  //     },
  //   ],
  // },
  {
    id: '1',
    // name: "TO DO",
    rows: [
      {
        id: '1',
        title: 'The Shawshank',
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
    id: '2',
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

let mockDataLength = mockData.length;
let mockDataRowLength = {};
mockData.forEach(column => {
  mockDataRowLength[column.id] = column.rows.length;
});

const COLUMN_WIDTH = Dimensions.get('window').width * 0.6;

const App = () => {
  const [repository] = useState(new Repository(mockData));
  const [repostList, setRepostList] = useState([]);

  useEffect(() => {
    console.log('The repost list', repostList);
  }, [repostList]);

  const addCard = columnId => {
    const data = {
      id: `${columnId}${++mockDataRowLength[columnId]}`,
      name: `Row ${mockDataRowLength[columnId]} (Column ${columnId})`,
    };

    // Call api add row here
    // Add row to the board
    repository.addRow(columnId, data);
  };

  const updateCard = (cardId, data) => {
    const dummy = data || {name: 'Row updated'};

    // Call api update row here
    // Update row on the board
    repository.updateRow(cardId, dummy);
  };

  const deleteCard = cardId => {
    console.log('Card Id', cardId);
    // Call api delete row here
    // Delete row on the board
    repository.deleteRow(cardId);
    const addRowToColumnOne = mockData[0].rows.filter(
      item => item.id == cardId,
    );
    console.log('The data from addRowColunm', addRowToColumnOne);
    repository.addRow('1', addRowToColumnOne[0]);
    const newList = [...repostList];
    const filteredData = newList.filter(item => item.id !== cardId);
    console.log('filteredData', filteredData);
    setRepostList(filteredData);
  };

  const renderCard = ({item, index}) => {
    // console.log('The data in render card', item);
    if (item.columnId == '1') {
      return (
        <View style={styles.card}>
          <Text style={styles.listIndex}>{index + 1}</Text>
          <View style={styles.listItemContainer}>
            <Image style={styles.image} source={{uri: item.data.image_url}} />
            <Text style={styles.listText}>{item.data.title}</Text>
          </View>
          {/* <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          onPress={() => deleteCard(item.id)}>
          <Text>✕</Text>
        </TouchableOpacity> */}
        </View>
      );
    }
    if (item.columnId == '2') {
      return (
        <View style={styles.cardRepost}>
          <Text style={styles.listIndex}>{index + 1}</Text>
          <View style={styles.listItemContainer}>
            {/* <Image style={styles.image} source={{uri: item.data.image_url}} /> */}
            <Text style={styles.listTextRepost} numberOfLines={1}>
              {item.data.title}
            </Text>
          </View>
          <TouchableOpacity
            // style={{marginRight: 50, backgroundColor: 'red'}}
            // hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            onPress={() => deleteCard(item.id)}>
            <Text>✕</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const addColumn = () => {
    mockDataRowLength[++mockDataLength] = 0;
    const column = {
      id: mockDataLength,
      name: `Column ${mockDataLength}`,
      rows: [],
    };

    // Call api add column here
    mockData.push(column);

    // Add column to the board
    repository.addColumn(column);
  };

  const updateColumn = (columnId, data) => {
    const dummy = data || {name: 'Column name updated'};

    // Call api update column here
    const columnIndex = mockData.findIndex(column => column.id === columnId);
    if (columnIndex > -1) {
      mockData[columnIndex].name = dummy.name;
    }

    // Update column on the board
    repository.updateColumn(columnId, dummy);
  };

  const deleteColumn = columnId => {
    // Call api delete column here
    const columnIndex = mockData.findIndex(column => column.id === columnId);
    if (columnIndex > -1) {
      mockData.splice(columnIndex, 1);
    }

    // Delete column on the board
    repository.deleteColumn(columnId);
  };

  const renderColumn = ({item, columnComponent, layoutProps, index}) => {
    // console.log('Index in renderColumn', index, item.rows);
    // console.log('The layout props');
    // console.log('Column Component in renderColumn', columnComponent);
    if (index == '0') {
      return (
        <View style={styles.column} {...layoutProps}>
          {/* <View style={styles.columnHeader}>
          <Text style={styles.columnName}>{item.name}</Text>
          <TouchableOpacity
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            onPress={() => deleteColumn(item.id)}>
            <Text>✕</Text>
          </TouchableOpacity>
        </View> */}
          {columnComponent}
        </View>
      );
    }
    if (index == '1') {
      return (
        <View
          style={[
            styles.columnRepost,
            {
              backgroundColor: 'blue',
              flex: 1,
              // flexDirection: 'column',
              // justifyContent: 'flex-end',
              // alignItems: 'flex-end',
              // justifyContent: 'center',
              // alignItems: 'center',
              // alignContent: 'center',
            },
          ]}
          {...layoutProps}>
          {/* <View style={styles.columnHeader}>
          <Text style={styles.columnName}>{item.name}</Text>
          <TouchableOpacity
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            onPress={() => deleteColumn(item.id)}>
            <Text>✕</Text>
          </TouchableOpacity>
        </View> */}
          {repostList.length == 0 ? (
            <>
              <View style={styles.emptyView}>
                <Text>DRAG ITEMS HERE</Text>
              </View>
            </>
          ) : null}
          {columnComponent}

          {repostList.length > 0 ? (
            <>
              <View
                style={{
                  // flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'green',
                  // alignContent: 'center',
                }}>
                <Text>Submit</Text>
              </View>
            </>
          ) : null}
        </View>
      );
    }
  };

  const onCardPress = card => {
    // console.log('Card ID: ', card);
  };

  const onDragEnd = (fromColumnId, toColumnId, card) => {
    //
    console.log('Item that has moved', fromColumnId, toColumnId, card.data);
    if (fromColumnId === undefined) {
      return;
    }
    repostList.push(card.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#014A81" />
      <View style={styles.header}>
        <Text style={styles.hederName}>React Native DnD Board</Text>
      </View>

      <Board
        style={styles.board}
        repository={repository}
        renderRow={renderCard}
        renderColumnWrapper={renderColumn}
        onRowPress={onCardPress}
        onDragEnd={onDragEnd}
        columnWidth={COLUMN_WIDTH}
        // accessoryRight={
        //   <View style={[styles.column, styles.addColumn]}>
        //     <TouchableOpacity onPress={addColumn}>
        //       <Text>+ Add Column</Text>
        //     </TouchableOpacity>
        //   </View>
        // }
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
    // backgroundColor: '#F8FAFB',
    marginLeft: 12,
    // paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    width: Dimensions.get('screen').width / 1.9,
  },
  columnRepost: {
    backgroundColor: '#F3F4F6',
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    width: Dimensions.get('screen').width / 2.6,
  },
  columnHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  columnName: {
    fontWeight: 'bold',
  },
  addColumn: {
    marginRight: 12,
    padding: 12,
    minWidth: COLUMN_WIDTH,
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F6F7FB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: Dimensions.get('screen').width / 2,
  },
  cardRepost: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F6F7FB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: Dimensions.get('screen').width / 3.2,
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
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  listIndex: {
    paddingHorizontal: 5,
    flexWrap: 'wrap',
  },
  listText: {
    // flex: 1,
    paddingHorizontal: 5,
    flexWrap: 'wrap',
    width: 120,
  },
  listTextRepost: {
    // flex: 1,
    paddingHorizontal: 5,
    flexWrap: 'wrap',
    width: 80,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: Dimensions.get('screen').height / 5,
    // alignContent: 'center',
  },
});

export default App;
