import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  ImageBackground,
  Button,
  ScrollView,
  BackHandler,
  Dimensions,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import {Picker, Icon} from 'native-base';
import PropTypes from 'prop-types';
import {FloatingAction} from 'react-native-floating-action';
import Printer from './Printer';
import Ticket from './Ticket';
let {width, height} = Dimensions.get('window');
const actions = [
  {
    text: 'ದೇವಾಲಯಗಳು',
    icon: require('./images/temples.png'),
    name: 'btn_familyInfo',
    position: 1,
  },
  {
    text: 'ಅಧಿಸೂಚನೆಗಳು',
    icon: require('./images/bell.png'),
    name: 'btn_location',
    position: 3,
  },
  // {
  //   text: "Video",
  //   icon: require("./images/location.png"),
  //   name: "bt_videocam",
  //   position: 4,
  // },
];

class TypingText extends Component<{}> {}

const DATA = [
  {
    id: '0',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸುಪ್ರಭಾತ',
  },
  {
    id: '1',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಕವಚಂ',
  },
  {
    id: '2',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ದಂಡಕಂ',
  },
  {
    id: '3',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ತಾರಾವಳಿ',
  },
  {
    id: '4',
    title: 'ಶ್ರೀ ವೀರಭದ್ರಾಷ್ಟಕಂ',
  },
  {
    id: '5',
    title: 'ಶ್ರೀ ಭದ್ರ ಕವಚಂ',
  },
  {
    id: '6',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಹಸ್ರನಾಮಸ್ತೋತ್ರ',
  },
  {
    id: '7',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಹಸ್ರನಾಮವಳಿ',
  },
  {
    id: '8',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಅಷ್ಟೋತ್ತರ ಶತನಾಮಾವಳಿ ಸ್ತೋತ್ರ',
  },
  {
    id: '9',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಅಷ್ಟೋತ್ತರ ಶತನಾಮಾವಳಿ',
  },
  {
    id: '10',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ವಡಪುಗಳು',
  },
  {
    id: '11',
    title: 'ಗುಗ್ಗುಳದ ಬಗ್ಗೆ ಮಾಹಿತಿ',
  },
  {
    id: '12',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಂಕ್ಷಿಪ್ತ ಪರಿಚಯ',
  },
  {
    id: '13',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಆಚರಣೆಗಳು',
  },
  {
    id: '14',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಪ್ರಾರ್ಥನೆ',
  },
  {
    id: '15',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಮಂಗಳ ಶ್ಲೋಕ',
  },
  {
    id: '16',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಶತಕ',
  },
  {
    id: '17',
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಮಂಗಳ',
  },
  {
    id: '18',
    title: 'ದ್ವಾತ್ರಿಂಶದ್ಭುಜ ಶ್ರೀ ವೀರಭದ್ರ ಧ್ಯಾನಂ',
  },
  {
    id: '19',
    title: 'ಶ್ರೀ ಶರಭ ಹೃದಯ ಸ್ತೋತ್ರ',
  },
  {
    id: '20',
    title: 'ಶ್ರೀ ಶರಭೋಪನಿಷತ್ತು',
  },
];

const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
};

const renderItem = ({item}) => <Item title={item.title} />;

export default class FirstPage extends Component<{}> {
  constructor() {
    super();
    this.springValue = new Animated.Value(100);
    this.state = {
      isVisible: true,
      ticketIndex: 1,
      startValue: new Animated.Value(0),
      endValue: 1,
      duration: 10000,
      backClickCount: 0,

      // AsyncStorage.setItem('languageSelected', 'en');
      // languageSelected :"en",
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#ffffff',
        }}
      />
    );
  };

  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentDidMount() {
    var that = this;

    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 10000);

    Animated.timing(this.state.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
  }

  _spring() {
    this.setState({backClickCount: 1}, () => {
      Animated.sequence([
        Animated.spring(this.springValue, {
          toValue: -0.0 * height,
          friction: 5,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.springValue, {
          toValue: 100,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        this.setState({backClickCount: 0});
      });
    });
  }

  handleBackButton = () => {
    this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

    return true;
  };

  static navigationOptions = {
    // header: null,
    title: 'ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸ್ವಾಮಿ ಮಂತ್ರಗಳು',
    headerTintColor: '#FFDF00',
    headerStyle: {
      backgroundColor: '#ff8000',
      borderBottomColor: '#2F95D6',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    // title: 'Second Page',
    //Sets Header text of Status Bar
  };

  render() {
    const ticketHeight = 280;
    const {navigate} = this.props.navigation;

    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <ImageBackground
            source={require('./images/veerabhadra_splash.jpg')}
            style={styles.splashContent}>
            <View style={styles.bottombanner}>
              {/* <View> */}
              <Animated.View style={[{opacity: this.state.startValue}]}>
                <ImageBackground
                  style={styles.theImage}
                  source={require('./games/poster_bg_new.jpg')}>
                  <Text style={styles.topHeadingInvite}>
                    ಶ್ರೀ ವೀರಭದ್ರಸ್ವಾಮಿ ಮಂತ್ರಗಳು
                  </Text>
                </ImageBackground>
                {/* </View> */}
              </Animated.View>
               {/* <ConfettiCannon count={200} origin={{x: -10, y: 0}} /> */}
            </View>
          </ImageBackground>
        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            if (name === 'btn_location') {
              navigate('SecondPage');
              this.explosion && this.explosion.start();
            } else if (name === 'btn_familyInfo') {
              navigate('FamilyInfo');
            } else if (name === 'btn_muhurtha') {
            }
            console.log(`selected button: ${name}`);
          }}
        />
        {this.state.isVisible === true ? Splash_Screen : null}
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: this.springValue}]},
          ]}>
          <Text style={styles.exitTitleText}>
            press back again to exit the app
          </Text>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => BackHandler.exitApp()}>
            <Text style={styles.exitText}>Exit</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

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
    marginTop: 40,
    backgroundColor: '#fe724c',
  },
  bottombanner: {
    height: 40,
    width: '100%',
    position: 'absolute',
    bottom: 1,
  },
  topHeadingInvite: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    color: '#FFD700',
    fontFamily: 'BalooTamma2-Regular',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContent: {
    width: '100%',
    height: '100%',
    flex: 1,
    // alignItems: 'flex-end',
    // alignSelf: 'flex-end',
  },
  theImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#ff8000',
    padding: 12,
    marginVertical: 8,
    fontSize: 28,
    marginHorizontal: 16,
    color: "#ffffff",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topbutton: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: '10%',
    height: 150,
  },
  buttonstyle: {
    alignSelf: 'flex-end',
    right: 5,
    top: 5,
    width: '10%',
    height: 50,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    backgroundColor: '#272d2f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    color: "#ffffff",
  },

  SplashScreen_RootView: {
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  fontFamilyDeepak: {
    fontFamily: 'Courgette.Regular',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 25,
  },

  fontFamilySumalatha: {
    fontFamily: 'Courgette.Regular',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  SplashScreen_ChildView: {
    backgroundColor: '#bb1471',
    flex: 1,
  },
  image: {
    flex: 1,
  },
  tinyKnot: {
    width: 250,
    height: 150,
    marginBottom: 85,
  },
  animatedView: {
    width,
    backgroundColor: '#0a5386',
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  exitTitleText: {
    textAlign: 'center',
    color: '#ffffff',
    marginRight: 10,
  },
  exitText: {
    color: '#e5933a',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  topHeadingInvite: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'Courgette.Regular',
    color: '#ffffff',
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
  color: 'rgb(255,223,0)',
  marginTop: 100,
  marginHorizontal: 30,
  textSize: 22,
  fontFamily: 'Courgette.Regular',
  typingAnimationDuration: 50,
  blinkingCursorAnimationDuration: 650,
};
