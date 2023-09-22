import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
type Props = {
  title: string;
  onPress: () => void;
  icon?: string;
  bgColorgradient: string[]|null;
  color: string;
  variant: 'PRIMARY' | 'SECONDARY' | 'OUTLINE';
};

const Button = ({
  title,
  onPress,
  icon,
  bgColorgradient,
  color,
  variant,
}: Props) => {
  const ButtonStyle: any = {
    PRIMARY: {
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color,
      },
      button: {
        width: '100%',
        borderRadius: 10,
        height: 50,
      },
    },
    SECONDARY: {
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color ?? 'white',
      },
      button: {
        width: 150,
        borderRadius: 50,
        height: 40,
      },
    },
    OUTLINE: {
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color,
      },
      button: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderColor: color,
        marginVertical:8
      },
    },
  };

  return (
    <TouchableOpacity onPress={onPress}
    style={[ButtonStyle[variant].button]}
    >
      <LinearGradient
        colors={
          variant === 'OUTLINE'
            ? ['#FFFFFF', '#FFFFFF']
            : bgColorgradient ?? ['#009387', '#009396']
        }
        style={[styles.flexRow, ButtonStyle[variant].button,(variant==="OUTLINE"?{borderWidth: 1,}:{})]}
        >
        <Text style={ButtonStyle[variant].text}>{title}</Text>
        {icon && <MaterialIcons name={icon} color={color} size={20} />}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  flexRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
});
