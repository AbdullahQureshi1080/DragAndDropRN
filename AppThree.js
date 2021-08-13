import React, {useState} from 'react';
import {Alert, StyleSheet, View, Text} from 'react-native';

// import listItems from './assets/listItems.json';
import NestedList from '@natalia.li/react-native-nested-list';
import CheckBox from '@react-native-community/checkbox';
// import NestedListView, {NestedRow} from 'react-native-nested-listview';

function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}
export default function AppThree() {
  const [selectedConditions, setSelectedConditions] = useState([]);
  const getColor = level => {
    switch (level) {
      case 0:
        return '#272640';
      case 1:
        return '#1b3a4b';
      case 2:
        return '#0b525b';
      case 3:
        return '#00787A';
    }
    return '';
  };

  const openAlert = item =>
    Alert.alert(
      'This is the last node!',
      'You pressed ' + item.topic,
      [{text: 'OK', onPress: () => console.log('You pressed', item.topic)}],
      {cancelable: false},
    );

  const [listItems, setListItems] = useState([
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

  const forceUpdate = useForceUpdate();

  const onSelectionsChange = selectedConditions => {
    console.log('Selected Conditions : ', selectedConditions);
  };

  const setToggleCheckBox = updateData => {
    onSelectionsChange(updateData);
    // console.log('New Value and Item', updateData);
    const mainList = listItems;
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

  return (
    <View style={styles.container}>
      <NestedList
        listItems={listItems}
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
});
