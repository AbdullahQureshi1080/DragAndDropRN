/* eslint-disable react-native/no-inline-styles */
//  Native Imports
import React, {
  useRef,
  useState,
  useEffect,
  // useFocusEffect,
  useCallback,
} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import NestedList from '@natalia.li/react-native-nested-list';
import CheckBox from '@react-native-community/checkbox';

function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

const {width, height} = Dimensions.get('screen');

export default function AppFour() {
  const [listViews, setListViews] = useState([]);
  const [listIndex, setListIndex] = useState(0);
  const [levelIndexes, setLevelIndexes] = useState([]);
  const flatlistRef = useRef();
  // Error States
  const [error, setError] = useState('');
  const [errorVisibile, setErrorVisible] = useState(false);

  //  Loading States
  const [loading, setLoading] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const progressBarIndex = [
    {index: false},
    {index: false},
    {index: false},
    {index: true},
  ];

  // Modal States
  const [isVisible, setIsVisible] = useState(false);
  //   const image = require('../../assets/home/visit.png');
  const [buttons, setButtons] = useState([
    {
      id: '1',
      name: 'Start',
      function: () => onPressStartVisit(),
    },
    {
      id: '2',
      name: 'Cancel',
      function: () => onPressCancelVisit(),
    },
  ]);
  const onPressStartVisit = () => {
    setStartLoading(true);
    setTimeout(() => {
      setIsVisible(false);
      console.log('On Press Start Pressed');
      setStartLoading(false);
      navigateToHome();
    }, 2000);
  };
  const onPressCancelVisit = () => {
    setLoading(true);
    setTimeout(() => {
      setIsVisible(false);
      console.log('On Press Cancel Pressed');
      setLoading(false);
      navigateToHome();
    }, 2000);
  };

  // Data tabs
  const [dataTabs, setDataTabs] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setDataLoading(true);
    setTimeout(() => {
      setDataTabs([
        {
          name: 'General',
          index: 0,
          data: [
            {
              name: 'fevers',
              value: 'fevers',
              checked: false,
            },
            {
              name: 'Chills',
              value: 'Chills',
              checked: false,
            },
            {
              name: 'Fatigue',
              value: 'Fatigue',
              checked: false,
            },
            {
              name: 'Weight gain',
              value: 'Weight gain',
              checked: false,
            },
            {
              name: 'fevers',
              value: 'fevers',
              checked: false,
            },
            {
              name: 'Chills',
              value: 'Chills',
              checked: false,
            },
            {
              name: 'Fatigue',
              value: 'Fatigue',
              checked: false,
            },
            {
              name: 'Weight gain',
              value: 'Weight gain',
              checked: false,
            },
            {
              name: 'fevers',
              value: 'fevers',
              checked: false,
            },
            {
              name: 'Chills',
              value: 'Chills',
              checked: false,
            },
            {
              name: 'Fatigue',
              value: 'Fatigue',
              checked: false,
            },
            {
              name: 'Weight gain',
              value: 'Weight gain',
              checked: false,
            },
            {
              name: 'fevers',
              value: 'fevers',
              checked: false,
            },
            {
              name: 'Chills',
              value: 'Chills',
              checked: false,
            },
            {
              name: 'Fatigue',
              value: 'Fatigue',
              checked: false,
            },
            {
              name: 'Weight gain',
              value: 'Weight gain',
              checked: false,
            },
          ],
        },
        {
          name: 'Lung',
          index: 1,
          data: [
            {
              name: 'Shortness of breath with exertion',
              value: 'Shortness of breath with exertion',
              checked: false,
            },
            {
              name: 'Shortness of breath with rest',
              value: 'Shortness of breath with rest',
              checked: false,
            },
            {
              name: 'Cough',
              value: 'Cough',
              checked: false,
            },
            {
              name: 'Coughing up blood ',
              value: 'Coughing up blood ',
              checked: false,
            },
            {
              name: 'Wheezing ',
              value: 'Wheezing ',
              checked: false,
            },
          ],
        },
        {
          name: 'Lung2',
          index: 2,
          data: [
            {
              name: 'Shortness of breath with exertion',
              value: 'Shortness of breath with exertion',
              checked: false,
            },
            {
              name: 'Shortness of breath with rest',
              value: 'Shortness of breath with rest',
              checked: false,
            },
            {
              name: 'Cough',
              value: 'Cough',
              checked: false,
            },
            {
              name: 'Coughing up blood ',
              value: 'Coughing up blood ',
              checked: false,
            },
            {
              name: 'Wheezing ',
              value: 'Wheezing ',
              checked: false,
            },
          ],
        },
        {
          name: 'Lung3',
          index: 3,
          data: [
            {
              name: 'Shortness of breath with exertion',
              value: 'Shortness of breath with exertion',
              checked: false,
            },
            {
              name: 'Shortness of breath with rest',
              value: 'Shortness of breath with rest',
              checked: false,
            },
            {
              name: 'Cough',
              value: 'Cough',
              checked: false,
            },
            {
              name: 'Coughing up blood ',
              value: 'Coughing up blood ',
              checked: false,
            },
            {
              name: 'Wheezing ',
              value: 'Wheezing ',
              checked: false,
            },
          ],
        },
        {
          name: 'Lung4',
          index: 4,
          data: [
            {
              name: 'Shortness of breath with exertion',
              value: 'Shortness of breath with exertion',
              checked: false,
            },
            {
              name: 'Shortness of breath with rest',
              value: 'Shortness of breath with rest',
              checked: false,
            },
            {
              name: 'Cough',
              value: 'Cough',
              checked: false,
            },
            {
              name: 'Coughing up blood ',
              value: 'Coughing up blood ',
              checked: false,
            },
            {
              name: 'Wheezing ',
              value: 'Wheezing ',
              checked: false,
            },
          ],
        },
        {
          name: 'Lung5',
          index: 5,
          data: [
            {
              name: 'Shortness of breath with exertion',
              value: 'Shortness of breath with exertion',
              checked: false,
            },
            {
              name: 'Shortness of breath with rest',
              value: 'Shortness of breath with rest',
              checked: false,
            },
            {
              name: 'Cough',
              value: 'Cough',
              checked: false,
            },
            {
              name: 'Coughing up blood ',
              value: 'Coughing up blood ',
              checked: false,
            },
            {
              name: 'Wheezing ',
              value: 'Wheezing ',
              checked: false,
            },
          ],
        },
        {
          name: 'Heart',
          index: 6,
          data: [
            {
              name: 'Chest Pain',
              value: 'Chest Pain',
              data: [
                {
                  name: 'Pressure sensation',
                  value: 'Pressure sensation',
                  checked: false,
                },
                {
                  name: 'Sharp pain',
                  value: 'Sharp pain',
                  checked: false,
                },
                {
                  name: 'Burning pain',
                  value: 'Burning pain',
                  checked: false,
                },
                {
                  name: 'Right side chest pain',
                  value: 'Right side chest pain',
                  checked: false,
                },
                {
                  name: 'Left side chest pain',
                  value: 'Left side chest pain',
                  checked: false,
                },
              ],
            },
            {
              name: 'Shortness of breath at rest',
              value: 'Shortness of breath at rest',
              checked: false,
            },
            {
              name: 'Cough',
              value: 'Cough',
              checked: false,
            },
            {
              name: 'Coughing up blood ',
              value: 'Coughing up blood ',
              checked: false,
            },
            {
              name: 'Wheezing ',
              value: 'Wheezing ',
              checked: false,
            },
          ],
        },
      ]);
      setDataLoading(false);
    }, 3000);
  }, []);

  const forceUpdate = useForceUpdate();

  const onSelectionsChange = selectedConditions => {
    console.log('Selected Conditions : ', selectedConditions);
  };

  const setToggleCheckBox = updateData => {
    onSelectionsChange(updateData);
    // console.log('New Value and Item', updateData);
    const mainList = listData;
    for (var i = 0; i < mainList.length; i++) {
      if (mainList[i].name == updateData.name) {
        mainList[i].checked = !updateData.checked;
        forceUpdate();
      }
      // console.log('The Item data: level one', mainList[i].data);
      for (var j = i; j < mainList[i].data.length; j++) {
        // console.log('The data item to update', updateData);
        // console.log('The Sub Item data', mainList[i].data[j]);
        if (mainList[i].data[j].name == updateData.name) {
          // console.log('The thired level, ', mainList[i].data[j].data);
          mainList[i].data[j].checked = !updateData.checked;
          forceUpdate();
          return;
        }
        if (mainList[i].data[j].data) {
          for (var k = j; k < mainList[i].data[j].data.length; k++) {
            console.log('The Fourth level, ', mainList[i].data[j]);
            if (mainList[i].data[j].data[k].name == updateData.name) {
              mainList[i].data[j].data[k].checked = !updateData.checked;
              forceUpdate();
              return;
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    if (dataTabs.length == 0) {
      return;
    }
    setListData(dataTabs[0].data);
  }, [dataTabs]);

  const handleConfirm = () => {
    if (selectedConditions.length > 0) {
      setIsVisible(true);
    }
  };

  //   const onSelectionsChange = selectedConditions => {
  //     console.log('Selected Conditions : ', selectedConditions);
  //     setSelectedConditions(selectedConditions);
  //     if (selectedConditions.length == 0) {
  //       // setNextDisabled(true);
  //       return;
  //     }
  //     // setNextDisabled(false);
  //   };

  const onPress = item => {
    console.log('The Item', item);
    console.log('Item Data 2nd Level', item.data);
    setListData(item);
    scrollToIndex(item.index);
  };

  const scrollToIndex = dex => {
    console.log('scroll to index called !');
    let index = dex;
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: index,
      viewPosition: 0.5,
    });
  };

  return (
    <>
      {dataLoading ? (
        <Text>Loading...</Text>
      ) : dataTabs.length === 0 ? (
        <View></View>
      ) : (
        <>
          <View style={styles.mainTabContainer}>
            {/* {dataTabs.length > 3 ? (
              <Entypo name="chevron-left" size={22} color={'red'} />
            ) : null} */}
            <FlatList
              horizontal={true}
              ref={flatlistRef}
              initialScrollIndex={0}
              showsHorizontalScrollIndicator={false}
              // initialNumToRender={3}
              data={dataTabs}
              // getItemLayout={getItemLayout}
              snapToAlignment={'center'}
              // snapToInterval={Dimensions.get('window').width / 5}
              renderItem={({item, index}) => {
                // console.log('Index', index);
                const isFocused = item.index === listData.index;

                return (
                  <TouchableOpacity
                    key={index}
                    accessibilityRole="button"
                    onPress={() => onPress(item)}
                    style={{
                      paddingHorizontal: 10,
                      marginHorizontal: 20,
                    }}>
                    <Text
                      style={[
                        styles.tabLabelStyle,
                        {color: isFocused ? 'red' : 'blue'},
                      ]}>
                      {item.name}
                    </Text>
                    {/* <Entypo
                      name="dot-single"
                      size={35}
                      style={{alignSelf: 'center'}}
                      color={isFocused ? 'red' : 'blue'}
                    /> */}
                  </TouchableOpacity>
                );
              }}
            />

            {/* {dataTabs.length > 3 ? (
              <Entypo name="chevron-right" size={22} color={'red'} />
            ) : null} */}
          </View>
          <View style={styles.container}>
            <NestedList
              listItems={listData.data}
              listWrapperStyle={styles.listWrapper}
              childrenPath={'data'}
              itemKey={item => item.name}
              itemContent={item => {
                // console.log('The Item Level', item);
                return (
                  <View
                    style={{
                      ...styles.itemWrapper,
                      // backgroundColor: getColor(item.itemLevel),
                    }}>
                    <Text style={{...styles.itemText, paddingLeft: 16}}>
                      {item.name}
                    </Text>
                    <CheckBox
                      disabled={false}
                      value={item.checked}
                      // style={{alignSelf: 'flex-end'}}
                      // onValueChange={() => setToggleCheckBox(item)}
                    />
                  </View>
                );
              }}
              onItemPressed={item => setToggleCheckBox(item)}
              // onLastItemPressed={item => openAlert(item)}
              opacity={0.8}
            />
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    flexDirection: 'row',
    height: 48,
    justifyContent: 'space-between',
    marginVertical: 1,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    // width: '100%',
  },
  listWrapper: {
    flex: 1,
    marginVertical: 48,
    width: '100%',
  },
  itemText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
    // width: '100%',
  },
  screen: {
    marginHorizontal: 20,
    paddingHorizontal: 15,
    // paddingBottom: (40),
    marginBottom: 100,
    backgroundColor: 'white',
  },
  mainContainer: {
    marginHorizontal: 20,
  },
  buttonContainer: {
    position: 'absolute',
    left: 30,
    bottom: 25,
  },

  cardContainer: {
    marginTop: 10,
    height: 45,
  },
  name: {
    paddingHorizontal: 10,
  },
  tabLabelStyle: {
    // fontFamily: font.one.regular,
    fontSize: 14,
    textAlign: 'center',
  },
  tabStyle: {
    width: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  containerTab: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginVertical: 10,
    // backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // width: (1000),
    // flexDirection: 'row',
  },
  tabView: {
    // backgroundColor: 'red',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    width: 100,
  },
  text: {
    // fontFamily: font.one.regular,
    // color: color.text,
    // fontSize: (14),
    // textAlign: 'center',
  },
  progressTabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  progressTab: {
    width: Dimensions.get('screen').width / 14,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  contentContainerStyle: {
    marginVertical: 5,
    alignItems: 'center',
    // height: (33),
  },
  rowStyle: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginVertical: 3,
    borderRadius: 5,
    // borderColor: color.icon,
    borderWidth: 1,
    // backgroundColor: color.white,
    height: 40,
  },
  labelStyle: {
    // color: color.basic,
    fontSize: 14,
    // fontFamily: font.one.regular,
    height: 20,
    alignSelf: 'center',
  },
  checkboxStyle: {
    width: 21,
    height: 21,
    marginRight: -3,
    // borderColor: color.icon,
    // tintColor: color.icon,
  },
  mainTabContainer: {
    backgroundColor: 'white',
    height: 80,
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabListContainer: {
    // flex: 0.8,
    backgroundColor: 'red',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: (2),
  },
  dataListContainer: {
    marginHorizontal: 20,
    marginBottom: 100,
  },
  checkBoxCard: {
    // color: color.basic,
  },
});
