import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const MyTouchableOpacity = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            <View style={styles.radioBg}></View>
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}></View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 30,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    margin: 4,
    borderRadius: 20,
  },
});

export default MyTouchableOpacity;
