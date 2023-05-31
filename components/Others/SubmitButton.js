import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Extrapolate, interpolate, interpolateColor, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';

import colors from '../../app/config/colors';

const buttonWidth = 281; 
const buttonHeight =  68;
const buttonPadding = 10;
const swipeableDimensions = buttonHeight -(2 * buttonPadding);
const h_swipe_range = buttonWidth - 2 * buttonPadding - swipeableDimensions;
const h_wave_range = swipeableDimensions + 2 * buttonPadding;

const AnimatedLinearGradient= Animated.createAnimatedComponent(LinearGradient)
const AnimatedIcon= Animated.createAnimatedComponent(FontAwesome5)

const SubmitButtonAndroid = ({text, style}) => {
  return (
    <View style={style}>
      <Pressable style={styles.androidButton} onPress={() => Alert.alert('Submitted!', 'Attendance has been submitted!')}>
        <Text style={styles.androidText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const SubmitButtoniOS = ({onToggle, text, style}) => {
  const [toggled, setToggled] = useState(false)
  const X= useSharedValue(0);

  const handleComplete = (isToggled) => {
    if (isToggled !== toggled){
      setToggled(isToggled);
      onToggle(isToggled);
    }
  }

  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },

    onActive: (e, ctx) => {
      let newValue;

      if (ctx.completed){
        newValue = h_swipe_range + e.translationX;
      }

      else {
        newValue = e.translationX;
      }

      if (newValue >=0 && newValue <= h_swipe_range)
      X.value= e.translationX;
    },

    onEnd: (e) => {
      if (X.value < buttonWidth/2 - swipeableDimensions/2) { 
        X.value = withSpring(0);
        runOnJS(setToggled)(false);
      }
      else {
        X.value = withSpring(h_swipe_range);
        runOnJS(setToggled)(true);

      }
    },
  });

  const InterpolateXInput= [0, h_swipe_range]

  const animatedStyles = {
    swipeable:  useAnimatedStyle(() => { 
      return {
        transform: [{translateX: X.value}],
        backgroundColor: interpolateColor(X.value, [0, buttonWidth - swipeableDimensions - buttonPadding], [colors.green, colors.white])
      };
    }),

    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(X.value, InterpolateXInput, [0.8, 0], Extrapolate.CLAMP),
        transform: [{translateX : interpolate(X.value, InterpolateXInput, [0, buttonWidth/3 -swipeableDimensions, Extrapolate.CLAMP])}],

      }
    }),

    swipeArrow: useAnimatedStyle(() => {
      return {
          color: interpolateColor(X.value, [0, buttonWidth - swipeableDimensions - buttonPadding], ['#ffffff', '#32A431'])
      };
    }),

    colorWave: useAnimatedStyle(() => {
      return {
        width: h_wave_range + X.value,
        opacity: interpolate(X.value, InterpolateXInput, [0, 1])
      }
    }),
  }

  return (
    <View style= {[styles.swipeContainer, style]}>
      <Animated.View style= {[styles.colorWave, animatedStyles.colorWave]}/>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, animatedStyles.swipeable]}>
          <AnimatedIcon name="arrow-right" size={24} style={animatedStyles.swipeArrow}/>
        </Animated.View>
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, animatedStyles.swipeText]}>Swipe To</Animated.Text>
      <Animated.Text style={[styles.swipeText, animatedStyles.swipeText]}>{text}</Animated.Text>
    </View>
  )
}

export { SubmitButtonAndroid, SubmitButtoniOS } 

const styles = StyleSheet.create({
  androidButton: {
    borderRadius: 68,
    width: 281,
    height: 68,
    padding: 10,
    backgroundColor: '#32A431',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  androidText: {
    fontSize: 20,
    fontWeight: 400,
    color: 'white'
  },

  colorWave: {
    height: buttonHeight,
    position: 'absolute',
    left: 0,
    borderRadius: buttonHeight,
    backgroundColor: colors.green,
  },
  
  swipeable: {
    height: swipeableDimensions,
    width: swipeableDimensions,
    borderRadius: swipeableDimensions,
    display: 'flex',
    position: 'absolute',
    left: buttonPadding,
    alignItems: 'center',
    padding: 10,
    paddingLeft: 11,
    zIndex: 3,
  },

  swipeContainer: {
    height: buttonHeight,
    width: buttonWidth,
    padding: buttonPadding,
    backgroundColor: colors.grey,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: buttonHeight,
    alignSelf: 'center',
  },

  swipeText: {
    width: 150,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    zIndex: 2,
    textAlign: 'center',
    marginLeft: 30,
  }
})