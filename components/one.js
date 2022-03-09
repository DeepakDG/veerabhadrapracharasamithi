import React, {Component, useState} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  ImageBackground,
  Animated,
  Button,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import PagerView from 'react-native-pager-view';
import AppIntroSlider from 'react-native-app-intro-slider';

class TypingText extends Component<{}> {
  constructor() {
    super();

    this.index = 0;

    this.typing_timer = -1;

    this.blinking_cursor_timer = -1;

    this.state = {text: '', blinking_cursor_color: 'transparent'};
  }

  componentDidMount() {
    this.typingAnimation();
    this.blinkingCursorAnimation();
  }

  componentWillUnmout() {
    clearTimeout(this.typing_timer);

    this.typing_timer = -1;

    clearInterval(this.blinking_cursor_timer);

    this.blinking_cursor_timer = -1;
  }

  typingAnimation = () => {
    clearTimeout(this.typing_timer);

    this.typing_timer = -1;

    if (this.index < this.props.text.length) {
      if (this.refs.animatedText) {
        this.setState(
          {text: this.state.text + this.props.text.charAt(this.index)},
          () => {
            this.index++;

            this.typing_timer = setTimeout(() => {
              this.typingAnimation();
            }, this.props.typingAnimationDuration);
          },
        );
      }
    }
  };

  blinkingCursorAnimation = () => {
    this.blinking_cursor_timer = setInterval(() => {
      if (this.refs.animatedText) {
        if (this.state.blinking_cursor_color == 'transparent')
          this.setState({blinking_cursor_color: this.props.color});
        else this.setState({blinking_cursor_color: 'transparent'});
      }
    }, this.props.blinkingCursorAnimationDuration);
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Text
          ref="animatedText"
          style={{
            color: this.props.color,
            fontSize: this.props.textSize,
            textAlign: 'center',
            marginTop: this.props.marginTop,
            marginHorizontal: this.props.marginHorizontal,
            fontFamily: this.props.fontFamily,
          }}>
          {this.state.text}

          <Text style={{color: this.state.blinking_cursor_color}}>|</Text>
        </Text>
      </View>
    );
  }
}

const one = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image
          source={require('../images/next.png')}
          style={styles.backgroungImage}></Image>
      </View>
    );
  };

  const RenderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image
          source={require('../images/back.png')}
          style={styles.backgroungImage}></Image>
      </View>
    );
  };

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          padding: 10,
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <ScrollView>
          <Text style={styles.introTitleStyle}>{item.title}</Text>
          <Text style={styles.introTextStyle}>{item.text}</Text>
        </ScrollView>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showPrevButton={true}
          onSkip={onSkip}
          renderNextButton={RenderNextButton}
          renderPrevButton={RenderPrevButton}
          // bottomButton
        />
      )}
    </>
  );
};

one.navigationOptions = screenProps => ({
  // header: null
  title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಹಸ್ರನಾಮವಳಿ',
  headerTintColor: '#FFC93c',
  headerStyle: {
    backgroundColor: '#FF6F3C',
    borderBottomColor: '#FFDF00',
    borderBottomWidth: 3,
  },
  headerTitleStyle: {
    fontSize: 18,
  },
  //Sets Header text of Status Bar
});

export default one;

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  buttonCircle: {
    width: 50,
    height: 50,
  },
  titleStyle: {
    padding: 4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 4,
    fontSize: 16,
    textAlign: 'center',
  },
  introTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  introTitleStyle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#fe724c',
    padding: 15,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textalign: {
    textAlign: 'justify',
    fontSize: 20,
    color: '#ffffff',
    padding: 15,
  },
});

TypingText.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  marginTop: PropTypes.number,
  marginHorizontal: PropTypes.number,
  textSize: PropTypes.number,
  fontFamily: PropTypes.fontFamily,
  typingAnimationDuration: PropTypes.number,
  blinkingCursorAnimationDuration: PropTypes.number,
};

TypingText.defaultProps = {
  text: 'Default Typing Animated Text.',
  color: 'rgb(255,223,0)',
  marginTop: 30,
  marginHorizontal: 30,
  textSize: 18,
  fontFamily: 'Courgette.Regular',
  typingAnimationDuration: 5,
  blinkingCursorAnimationDuration: 450,
};

const slides = [
  {
    key: 's1',
    title: '*ಭದ್ರ ಕವಚ*',
    text: "*ಭದ್ರ ಕವಚ* (ವೀರಾಗಮ)                 ರೋಗಘ್ನಂ ರೋಗಿಣಾಂ ಲೋಕೇ ಯೋಗಿನಾಂ ಮೋಕ್ಷದಾಯಕಂ ಭಕ್ತಾನಾಂ ಭಕ್ತನಿಲಯಂ                ಚತುರ್ವರ್ಗ ಪ್ರದಾಯಕಂ |                 ವಿರಕ್ತಾನಾಂ ವಿರಾಮತ್ವಂ ನೃಪಾಣಾಂ ಜಯವರ್ಧನಂ |                ವ್ರತಿನಾಂ ವ್ರತದಂ ಶುದ್ಧಂ ಭೂತಪ್ರೇತ ವಿನಾಶನಂ ।... ಪ್ರಮಥಾನಾಂ ಸಮಾಜೇಷು                ಮಂತ್ರಬೀಜಾಕ್ಷರಾನ್ವಿತಂ |                ವೇದಾವಾಸಂ ಸ್ವರಮಯಂ ಜನ್ಮಸಂಸಾರ ವರ್ಜಿತಂ |                ವೀರಮಾಹೇಶ್ವರಾಣಾಂಚ ದೀಕ್ಷಾಕಾಲೇ ಮಮಪ್ರಿಯೇ |                 ಯೇ ಪಠಂತಿ ಮಮಪ್ರೀತ್ಯಾ ತೇ ಯಾಂತಿ ಮಮಮಂದಿರಂ |                 ಕವಚಂ ನ್ಯಾಸಯೇದ್ಯಸ್ತು ದೀಕ್ಷಾಕಾಲೇ ದಿನೇ ದಿನೇ ತಸ್ಯದೀಕ್ಷಾಫಲಂ ಪ್ರಾಪ್ತಂ                ಸರ್ವಾಗಮಸಮನ್ವಿತಂ |                 ಕವಚಂ ಮಂತ್ರರಾಜಾನಂ ಪಾಠಯೇತ್ತತ್ತ್ವ ಪಾರಗಃ |ಸ ಯಾತಿ ಮಮಸಾಯುಜ್ಯಂ                ಸತ್ಯಂ ವದಾಮ್ಯಹಂ ! ತಸ್ಯ ಪ್ರಭಾವಾತ್ಸರ್ವೇ ತೇ ತೃಣೀಕೃತ ಪುರಂದರಾ:                ವೀರಮಾಹೇಶ್ವರಾಃ ಸರ್ವೇ ವ್ರತಂ ದಧತಿ ಹೇ ಪ್ರಿಯೇ |                 ವೇದಶಾಸ್ತ್ರ ಪುರಾಣಾನಿ ತ್ಯಾಕ್ತ್ವಾ ತಂ ಮಂತ್ರನಾಯಕಂ ಯಃ ಪಠೇದಾಶು ಮೇ                ಪ್ರೀತ್ಯಾ ಸಾಯುಜ್ಯಂ ಲಭತೇಪ್ರೀಯೇ ಪ್ರಾಣಲಿಂಗಸ್ಯ ಸಾನ್ನಿಧ್ಯೇ                ಪಠಯೇತ್ತತ್ತ್ವ ಪಾರಗಃ ಸಯಾತಿ ಮಮ ಸಾಯುಜ್ಯಂ ರುದ್ರಗಂಧರ್ವ ಸೇವಿತಂ |                 ಪಾದೋದಕ ಕ್ರಿಯಾಕಾಲೇ ವೀರಾಗಮ ಸಮನ್ವಿತಂ ಕವಚಂ ವೇದ ವೇದಾಂಗ ವೇದಮೂರ್ಧ್ನಿ                ಪ್ರತಿಷ್ಠಿತಂ | ಯೇ ಸ್ಮರಂತಿ ಮಮ ಪ್ರೀತ್ಯಾ ತ ಏತೇ ಪ್ರಥಮೋತ್ತಮಾಃ ||                                - ವೀರಾಗಮ'",
    // image: {
    //   uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    // },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: '*ಭದ್ರ ಕವಚ*',
    text: ' *ದ್ವಾತ್ರಿಂಶದ್ಭುಜ ಅಘೋರವೀರಭದ್ರಧ್ಯಾನಂ ರಕ್ತವರ್ಣಃ*                                ಏಕವಕ್ರಂ ಮಹಾರೌದ್ರಂ ನಾಗಕುಂಡಲಶೋಭಿತಂ ಕಿರೀಟಹಾರಕೇಯೂರ ಕಟಕಾದಿ ವಿಭೂಷಿತಂ                                ರಕ್ತದಂಷ್ಟ್ರಂ ತ್ರಿಪುಂಡ್ರಾಢ್ಯಂ ರುಂಡಮಾಲಾವಿಭೂಷಿತಂ ರಕ್ತಮಾಲ್ಯಾಂಬರಧರಂ                ರಕ್ತಗಂಧಾನುಲೇಪನಂ                                ದಕ್ಷಾಧ್ವರಧ್ವಂಸಕರಂ ಸೋಮಸೂರ್ಯಾಗ್ನಿಲೋಚನಂ ಕಾರ್ಕೋಟಕೋಪವೀತಾಢ್ಯಂ                ಚಂದ್ರರೇಖಾವಿರಾಜಿತಂ                                ವಾತಾಶಕಟಿಸೂತ್ರಂ ಚ ದ್ವಾತ್ರಿಂಶದ್ಭುಜಮಂಡಿತಂ ಖಡ್ಗಂ ತ್ರಿಶೂಲಂ ಘಂಟಾಂ ಚ                ಚಂದ್ರಬಾಣಗದಾಂಕುಶಾನ್                                ಚಕ್ರಂ ವಜ್ರಂ ಚ ಡಮರುಂ ಶಕ್ತಿಂ ಸೀರಂ ಚ ಪಟ್ಟಸಂ ಭೃಶುಂಡೀಂ ಛುರಿಕಾಂ ಪ್ರಾಸಂ                ಪರಶುಂ ದಕ್ಷಿಣೈ: ಕರೈ:                                ಖೇಟಿಂ ಶಂಖಂ ಧನುಃ ಪಾಶಮುಂಡಖಟ್ವಾಂಗತೋಮರಾನ್ ಮುದ್ಗರಂ ಮುಸಲಂ ನಾಗಂ                ಭಿಂಡಿವಾಳಂ ಚ ಕರ್ತರೀಂ                                ಧ್ವಜಾಗ್ನಿ ಕುಂತಫಲಕಾನ್ ದಧಾನಂ ವಾಮಪಾಣಿಭಿ: ಸರ್ವಶತ್ರುಕ್ಷಯಕರಂ ಪಾದುಕೋಪರಿ                ಸಂಸ್ಥಿತಂ                                ತ್ರಿಭಂಗೀಪಾದಪಿಂಡಾಢ್ಯಂ ಕಾಲಾನಲಸಮಪ್ರಭಂ                ಮಹಾರುದ್ರಜಟೋದ್ಭೂತಮಗ್ನಿಜ್ವಾಲಾಸಮಾವೃತಂ                                ಮಹಾಪ್ರಳಯಕಾಲೀನಚಂಡರುದ್ರ ಭಯಂಕರಂ ಸರ್ವೈಶ್ವರ್ಯಪ್ರದಂ ನಿತ್ಯಂ ರಾಜರಾಷ್ಟ್ರ                ಸುಖಪ್ರದಂ                                ಭುಕ್ತಿಮುಕ್ತಿಪ್ರದಂ ದೇವಂ ಭದ್ರಕಾಳೀಸಮನ್ವಿತಂ ಅಘೋರವೀರಭದ್ರಂ ತಂ ವಂದೇ                ಸರ್ವಾರ್ಥಸಿದ್ದಿದಂ                                (ಮಂತ್ರಶಾಸ್ತ್ರ ಮಯಶಿಲ್ಪ ಚ-ಶ್ರೀತತ್ವನಿಧಿಃ)',
    // image: {
    //   uri:
    //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
    // },
    backgroundColor: '#f6437b',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    // image: {
    //   uri:
    //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    // },
    backgroundColor: '#f6437b',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    // image: {
    //   uri:
    //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
    // },
    backgroundColor: '#f6437b',
  },
  {
    key: 's5',
    title: 'Bus Booking',
    text: 'Enjoy Travelling on Bus with flat 100% off',
    // image: {
    //   uri:
    //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
    // },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Train Booking',
    text: ' 10% off on first Train booking',
    // image: {
    //   uri:
    //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
    // },
    backgroundColor: '#f6437b',
  },
];
