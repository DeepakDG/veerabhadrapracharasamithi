import React, { Component } from "react";
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
} from "react-native";
import PropTypes from "prop-types";
import PagerView from "react-native-pager-view";

class TypingText extends Component<{}> {
  constructor() {
    super();

    this.index = 0;

    this.typing_timer = -1;

    this.blinking_cursor_timer = -1;

    this.state = { text: "", blinking_cursor_color: "transparent" };
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
          { text: this.state.text + this.props.text.charAt(this.index) },
          () => {
            this.index++;

            this.typing_timer = setTimeout(() => {
              this.typingAnimation();
            }, this.props.typingAnimationDuration);
          }
        );
      }
    }
  };

  blinkingCursorAnimation = () => {
    this.blinking_cursor_timer = setInterval(() => {
      if (this.refs.animatedText) {
        if (this.state.blinking_cursor_color == "transparent")
          this.setState({ blinking_cursor_color: this.props.color });
        else this.setState({ blinking_cursor_color: "transparent" });
      }
    }, this.props.blinkingCursorAnimationDuration);
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Text
          ref="animatedText"
          style={{
            color: this.props.color,
            fontSize: this.props.textSize,
            textAlign: "center",
            marginTop: this.props.marginTop,
            marginHorizontal: this.props.marginHorizontal,
            fontFamily: this.props.fontFamily,
          }}
        >
          {this.state.text}

          <Text style={{ color: this.state.blinking_cursor_color }}>|</Text>
        </Text>
      </View>
    );
  }
}

export default class FamilyInfo extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isVisible: true,
      ticketIndex: 1,
      startValue: new Animated.Value(0),
      endValue: 1,
      duration: 10000,
    };
  }

  componentDidMount() {
    var that = this;
  }
  static navigationOptions = {
    // header: null
    title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಕವಚಂ",
    headerTintColor: '#FFDF00',
    headerStyle: {
      backgroundColor: '#bb1471',
      borderBottomColor: '#FFDF00',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    //Sets Header text of Status Bar
  };

  render() {
    const ticketHeight = 400;
    const { navigate } = this.props.navigation;
    return (
        <View style={{flex: 1}}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <ScrollView>
            <Text style={styles.textalign}> Page 1 </Text>
            <Text style={styles.textalign}>
              *ಭದ್ರ ಕವಚ* (ವೀರಾಗಮ){'\n'}
              {'\n'}
              ರೋಗಘ್ನಂ ರೋಗಿಣಾಂ ಲೋಕೇ ಯೋಗಿನಾಂ 
              ಮೋಕ್ಷದಾಯಕಂ ಭಕ್ತಾನಾಂ ಭಕ್ತನಿಲಯಂ
              ಚತುರ್ವರ್ಗ ಪ್ರದಾಯಕಂ | {'\n'}
              ವಿರಕ್ತಾನಾಂ ವಿರಾಮತ್ವಂ ನೃಪಾಣಾಂ ಜಯವರ್ಧನಂ |{'\n'}
              ವ್ರತಿನಾಂ ವ್ರತದಂ ಶುದ್ಧಂ ಭೂತಪ್ರೇತ ವಿನಾಶನಂ ।... 
              ಪ್ರಮಥಾನಾಂ ಸಮಾಜೇಷು
              ಮಂತ್ರಬೀಜಾಕ್ಷರಾನ್ವಿತಂ |{'\n'}
               ವೇದಾವಾಸಂ ಸ್ವರಮಯಂ ಜನ್ಮಸಂಸಾರ ವರ್ಜಿತಂ |{'\n'}
              ವೀರಮಾಹೇಶ್ವರಾಣಾಂಚ ದೀಕ್ಷಾಕಾಲೇ ಮಮಪ್ರಿಯೇ | {'\n'}
              ಯೇ ಪಠಂತಿ ಮಮಪ್ರೀತ್ಯಾ ತೇ
              ಯಾಂತಿ ಮಮಮಂದಿರಂ | {'\n'}
              ಕವಚಂ ನ್ಯಾಸಯೇದ್ಯಸ್ತು ದೀಕ್ಷಾಕಾಲೇ ದಿನೇ ದಿನೇ
              ತಸ್ಯದೀಕ್ಷಾಫಲಂ ಪ್ರಾಪ್ತಂ ಸರ್ವಾಗಮಸಮನ್ವಿತಂ | {'\n'}
              ಕವಚಂ ಮಂತ್ರರಾಜಾನಂ
              ಪಾಠಯೇತ್ತತ್ತ್ವ ಪಾರಗಃ |{'\n'}
               ಸ ಯಾತಿ ಮಮಸಾಯುಜ್ಯಂ ಸತ್ಯಂ ವದಾಮ್ಯಹಂ ! 
               ತಸ್ಯ
              ಪ್ರಭಾವಾತ್ಸರ್ವೇ ತೇ ತೃಣೀಕೃತ ಪುರಂದರಾ: 
              ವೀರಮಾಹೇಶ್ವರಾಃ ಸರ್ವೇ ವ್ರತಂ ದಧತಿ
              ಹೇ ಪ್ರಿಯೇ | {'\n'}
              ವೇದಶಾಸ್ತ್ರ ಪುರಾಣಾನಿ ತ್ಯಾಕ್ತ್ವಾ ತಂ ಮಂತ್ರನಾಯಕಂ ಯಃ
              ಪಠೇದಾಶು ಮೇ ಪ್ರೀತ್ಯಾ ಸಾಯುಜ್ಯಂ ಲಭತೇಪ್ರೀಯೇ ಪ್ರಾಣಲಿಂಗಸ್ಯ ಸಾನ್ನಿಧ್ಯೇ
              ಪಠಯೇತ್ತತ್ತ್ವ ಪಾರಗಃ ಸಯಾತಿ ಮಮ ಸಾಯುಜ್ಯಂ ರುದ್ರಗಂಧರ್ವ ಸೇವಿತಂ | {'\n'}
              ಪಾದೋದಕ
              ಕ್ರಿಯಾಕಾಲೇ ವೀರಾಗಮ ಸಮನ್ವಿತಂ ಕವಚಂ 
              ವೇದ ವೇದಾಂಗ ವೇದಮೂರ್ಧ್ನಿ ಪ್ರತಿಷ್ಠಿತಂ {'\n'}
              | ಯೇ ಸ್ಮರಂತಿ ಮಮ ಪ್ರೀತ್ಯಾ ತ ಏತೇ ಪ್ರಥಮೋತ್ತಮಾಃ || 
              {"\n"}{"\n"}- ವೀರಾಗಮ
            </Text>
          </ScrollView>
        </View>
        <View style={styles.page} key="2">
          <ScrollView>
            <Text style={styles.textalign}> Page 2 </Text>
            <Text style={styles.textalign}>
              *ದ್ವಾತ್ರಿಂಶದ್ಭುಜ ಅಘೋರವೀರಭದ್ರಧ್ಯಾನಂ ರಕ್ತವರ್ಣಃ*{'\n'}
              {'\n'}

ಏಕವಕ್ರಂ ಮಹಾರೌದ್ರಂ ನಾಗಕುಂಡಲಶೋಭಿತಂ 
ಕಿರೀಟಹಾರಕೇಯೂರ ಕಟಕಾದಿ ವಿಭೂಷಿತಂ
{'\n'}
ರಕ್ತದಂಷ್ಟ್ರಂ ತ್ರಿಪುಂಡ್ರಾಢ್ಯಂ ರುಂಡಮಾಲಾವಿಭೂಷಿತಂ
ರಕ್ತಮಾಲ್ಯಾಂಬರಧರಂ ರಕ್ತಗಂಧಾನುಲೇಪನಂ
{'\n'}
ದಕ್ಷಾಧ್ವರಧ್ವಂಸಕರಂ ಸೋಮಸೂರ್ಯಾಗ್ನಿಲೋಚನಂ 
ಕಾರ್ಕೋಟಕೋಪವೀತಾಢ್ಯಂ ಚಂದ್ರರೇಖಾವಿರಾಜಿತಂ
{'\n'}
ವಾತಾಶಕಟಿಸೂತ್ರಂ ಚ ದ್ವಾತ್ರಿಂಶದ್ಭುಜಮಂಡಿತಂ 
ಖಡ್ಗಂ ತ್ರಿಶೂಲಂ ಘಂಟಾಂ ಚ ಚಂದ್ರಬಾಣಗದಾಂಕುಶಾನ್
{'\n'}
ಚಕ್ರಂ ವಜ್ರಂ ಚ ಡಮರುಂ ಶಕ್ತಿಂ ಸೀರಂ ಚ ಪಟ್ಟಸಂ
ಭೃಶುಂಡೀಂ ಛುರಿಕಾಂ ಪ್ರಾಸಂ ಪರಶುಂ ದಕ್ಷಿಣೈ: ಕರೈ:
{'\n'}
ಖೇಟಿಂ ಶಂಖಂ ಧನುಃ ಪಾಶಮುಂಡಖಟ್ವಾಂಗತೋಮರಾನ್ 
ಮುದ್ಗರಂ ಮುಸಲಂ ನಾಗಂ ಭಿಂಡಿವಾಳಂ ಚ ಕರ್ತರೀಂ 
{'\n'}
ಧ್ವಜಾಗ್ನಿ ಕುಂತಫಲಕಾನ್ ದಧಾನಂ ವಾಮಪಾಣಿಭಿ: 
ಸರ್ವಶತ್ರುಕ್ಷಯಕರಂ ಪಾದುಕೋಪರಿ ಸಂಸ್ಥಿತಂ
{'\n'}
ತ್ರಿಭಂಗೀಪಾದಪಿಂಡಾಢ್ಯಂ ಕಾಲಾನಲಸಮಪ್ರಭಂ
ಮಹಾರುದ್ರಜಟೋದ್ಭೂತಮಗ್ನಿಜ್ವಾಲಾಸಮಾವೃತಂ
{'\n'}
ಮಹಾಪ್ರಳಯಕಾಲೀನಚಂಡರುದ್ರ ಭಯಂಕರಂ 
ಸರ್ವೈಶ್ವರ್ಯಪ್ರದಂ ನಿತ್ಯಂ ರಾಜರಾಷ್ಟ್ರ ಸುಖಪ್ರದಂ
{'\n'}
ಭುಕ್ತಿಮುಕ್ತಿಪ್ರದಂ ದೇವಂ ಭದ್ರಕಾಳೀಸಮನ್ವಿತಂ 
ಅಘೋರವೀರಭದ್ರಂ ತಂ ವಂದೇ ಸರ್ವಾರ್ಥಸಿದ್ದಿದಂ
{'\n'}
(ಮಂತ್ರಶಾಸ್ತ್ರ ಮಯಶಿಲ್ಪ ಚ-ಶ್ರೀತತ್ವನಿಧಿಃ)

            </Text>
          </ScrollView>
        </View>
        <View style={styles.page} key="3">
          <Text style={styles.textalign}> Page 3 </Text>
          <Text style={styles.textalign}>
            
          </Text>
        </View>
      </PagerView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
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
  text: "Default Typing Animated Text.",
  color: "rgb(255,223,0)",
  marginTop: 30,
  marginHorizontal: 30,
  textSize: 18,
  fontFamily: "Courgette.Regular",
  typingAnimationDuration: 5,
  blinkingCursorAnimationDuration: 450,
};