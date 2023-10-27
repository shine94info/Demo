import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../misc/colors';
const RoundIconBtn = ({iconame, color, size, style, onpress}) => {
  return (
    <TouchableOpacity>
      <Icon
        name={iconame}
        size={size || 24}
        color={color || colors.LIGHT}
        style={[styles.icon1, {...style}]}
        onPress={onpress}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  icon1: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});
export default RoundIconBtn;
