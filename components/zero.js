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
    title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸುಪ್ರಭಾತ",
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
  };

  render() {
    const ticketHeight = 400;
    const { navigate } = this.props.navigation;
    return (
         <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <ScrollView>
            <Text style={styles.textalign}> Page 1 </Text>
            <Text style={styles.textalign}>
              *ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸುಪ್ರಭಾತ* {"\n"}{"\n"}

ರುದ್ರಸ್ಯ ತನಯೋ ವೀರ ಶೂಲಾಸಕ್ತ ಮಹಾಕರ: 
ಭದ್ರಂತ ನೋತುವೋ ಭದ್ರೋ ಹಿಮಕುಂದೇಂದು ಸನ್ನಿಭ: | ಪ | 
{"\n"}
ಉತ್ತಿಷ್ಠೋತ್ತಿಷ್ಠ ವೀರೇಶ ಉತ್ತಿಷ್ಠ ಕರುಣಾನಿಧೆ
ಉತ್ತಿಷ್ಠ ಶಿವತೇಜಸ್ಯ ಉತ್ತಿಷ್ಠ ಭವನಾಶಕ 
ಉತ್ತಿಷ್ಠ ಭದ್ರಕಾಳೀಶ ಉತ್ತಿಷ್ಠಾದಿ ವಿಮರ್ಧನ
ಉತ್ತಿಷ್ಠ ಲೋಕ ರಕ್ಷಾರ್ಥ ತ್ರಿವಿಕ್ರಮ ನಮೋಸ್ತುತೇ 1
{"\n"}
ಪರಿಮಳವನೊತ್ತ ಮಂದಾನಿಲನಲ್ಲಿ ನಿಂದಿಹನು
ಮೂಡಣದ ರವಿರಶ್ಮಿ ನಿಶೆಯ ಮೂಡುತ್ತಿರಲು 
ಶುಕ ಪಿಕಾದಿ ಪಕ್ಷಿ ಸಂಕುಲವೆದ್ದು ಸಂಭ್ರಮದಿ
ತವ ಸುಪ್ರಭಾತವ ಪಾಡುತಿಹ ವೇಳು ಶ್ರೀ ವೀರಭದ್ರ 2
{"\n"}
ಪರಮ ಪರತರ ಪರಂಜ್ಯೋತಿ ಪ್ರತಿಭಾನ್ವಿತನೆ
ಇಳೆಯ ಭಕ್ತರ ವರಕಲ್ಪ ತರುವೆ
ಧರೆಯೊಳೆಲ್ಲೆಲ್ಲ ನಶಿಸಿರ್ಪ ಶಿವಧರ್ಮವಂ 
ಮರಳಿ ಚೇತನಗೊಳಿಸಲೇಳು ಶ್ರೀವೀರಭದ್ರ  3 
{"\n"}
ದುಷ್ಟ ಶಿಕ್ಷಕ ನೀನು ಶಿಷ್ಟ ಜನ ಪರಿಪಾಲಕನು
ಧರ್ಮೋದ್ಧಾರ ಸತ್ಯ ಪ್ರಕಾಶಕ ತವಕೃತಿಯೂ ಭವರೋಗ ವೈದ್ಯ ಚೈತನ್ಯ ರೂಪನೆ
ಶಾಂತಿಧೂತನೇ ನೀನೇಳು ಸದ್ಗುರು ಶ್ರೀವೀರೇಶ  4 
{"\n"}
ಧರ್ಮ ಪ್ರವರ್ತಕನೆ ಪರತತ್ವ ಬೋಧಕನೆ
ಶಿವಾದ್ವೈತ ಪ್ರಸಾರದಲ್ಲಿ ಶಿವನ ನೆಚ್ಚಿನ ದೂತ 
ಆರ್ಯ ದ್ರಾವಿಡ ಸಂಸ್ಕೃತಿಯ ಭಾವೈಕ್ಯ ಸಾಧಕನೆ
ಧರೆಯನ್ನುದ್ಧರಿಸಲೇಳಯ್ಯ ಶ್ರೀ ವೀರಭದ್ರ  5 
{"\n"}
ಅಂಗದೋಳು ಲಿಂಗಮಂ ಭಸಿತ ರುದ್ರಾಕ್ಷಿ ಮಾಲೆಗಳಂ
ಕಟೆಯೊಳು ನೃಸಿಂಹಾದಿಗಳ ರುಂಡ ಮಾಲೆಗಳಂ ಹಸ್ತದೊಳು 
ವೀರ ಖಡ್ಗಮಂ ಫಾಲದೊಳಗ್ನಿ ನೇತ್ರಮಂ ಧರಿಸಿರ್ಪ 
ಶಿವರೂಪಿನಿ ಬೇಗೇಳು ಶ್ರೀ ವೀರಭದ್ರೇಶ  6 
{"\n"}
ಸಕಲವರ ಮುನಿ ಸ್ತೋಮ ದೇವ ದೈತ್ಯ ಸಂತತಿಯ 
ಭುವಿಯ ಭಕ್ತ ಜನರ ಸಮುದಾಯ
ಹಗಲಿರುಳು ನಿನ್ನ ನಿಷ್ಠೆಯಿಂದಾರಾಧಿಸುತಿಹುದು 
ತಪದರುಶನವ ನೀಡಿ ಸಲುಹಲೇಳು ಶ್ರೀವೀರಭದ್ರ  7
{"\n"}
 

ಭಕ್ತಜನ ಕೋಟಿ ನಿನಗಾಗಿ ಭವ್ಯದೇಗುಲಗಳ ನಿರ್ಮಿಸಿ
ಸತತ ನಿನ್ನ ಲೀಲಾವಳಿಗಳಂ ನಿಷ್ಠೆಯಿಂದಾಲಿಸುತ | 
ಭಕ್ತ ಪರಪರತೆಯಿಂ ಮೈಮರೆತು ನಿಂದಿಹುದು
ಕೃಪೆಗೈದು ಸಲಹಲೇಳು ಶ್ರೀ ವೀರಭದ್ರ 8 
{"\n"}
ಶಿವನ ಪಂಚ ಮುಖೋದ್ಭವ ಶ್ರೀಪಂಚಾಚಾರ್ಯರು ನಂದಿ  
ಸ್ಕಂದ ಭೃಂಗಿ ಇಂದ್ರ - ಯಮ-ದಧೀಚಿ-ಗೌತಮ
ದೂರ್ವಾಸ – ವಶಿಷ್ಟ ಮೊದಲಪ್ಪ ಭಕ್ತ ಸಮುದಾಯ 
ತವದರುಶನವ ಬಯಿಸಿ ಬಂದಿಹುದೇಳಯ್ಯಾ ಶ್ರೀವೀರಭದ್ರ 9 
{"\n"}
ನೀ ವೀರಶ್ರೀಯಾಗಿ ವಿಶ್ವಕ್ಕೆ ಗುರುವಾಗಿ 
ಸತ್ಯ ಸಂಕಲ್ಪನಾಗಿ ಭಕ್ತ ವತ್ಸಲನಾಗಿ ಶಿವನ
ನೆಚ್ಚಿನ ಕಡುಗಲಿಯಾಗಿ ವೀರ ಮಣಿಯಾಗಿ
ಜಗವಶೂರ್ಯರದಿಂ ಸಲುಹಲೇಳು ಶ್ರೀ ವೀರಭದ್ರ 10
{"\n"}
ಮಾಯಾ ಪರವಶತೆಯಿಂ ಇಂದ್ರಿಯಗಳಿಗೆ ಆಳಾಗಿ
ಕ್ಷಣಿಕವಹಕಾಯ ಸುಖಂಗಳಲಿ ಮೈ ಮರೆತು
ಜನನ ಮರಣಗಳಿಗೆ ತುತ್ತಾಗಿ ಬಳಲು ತೀರ್ಪ 
ಭಕ್ತರಂ ಕರುಣೆಯಿಂ ಸಲುಹಲೇಳು ಶ್ರೀ ವೀರಭದ್ರ 11
{"\n"}
ವೀರಾಧಿವೀರನೆ ವೀರ ಮಾಹೇಶ್ವರನೇ
ಆದಿಶೈವ ಸಿದ್ಧಾಂತ ಪ್ರತಿ ಪಾದಕನೆ
ನಂಬಿರ್ಪ ಮುನಿಜನಂಗಳಿಗೆ ಅಭಯ ಪ್ರಾದಾತಾನೆ
ಧರೆಯ ಪಾವನಗೊಳಿಸಲೇಳಯ್ಯ ಶ್ರೀವೀರಭದ್ರ 12
{"\n"}
ಶಿವದ್ರೋಹಿ ದಕ್ಷನಾಚರಿಸಿದ ಧ್ವರಕೆ ಕರೆಯದಲೇ
ಸತಿಪೋಗೆ ಗರ್ವದಿ ಶಿವನಿಂದೆ ಗೈದ ದಕ್ಷನಂಶಪಿಸಿ
ಸತಿಯಗ್ನಿಯೋಳ ತನುವಿಗೆ ಶಿವನ ಫಲನೇತ್ರದಿಂ 
ದವತರಿಸಿದಾ ಶಿವನ ಮಾನಸ ಪುತ್ರ ತವ ಸುಪ್ರಭಾತಂ 13
{"\n"}
ಶಿವ ತೇಜೋ ವಿಲಾಸದಿಂ ರುದ್ರಗಣರು ಸೃಜಿಸಿ
ಹರನಾಣತಿಯಂತೆ ಭದ್ರಕಾಳಿಯ ಕೈ ಹಿಡಿದು 
ಗಣ ಸೇನೆಯೋಡನೆ ದಕ್ಷನ ದ್ವಾರವ ಮುತ್ತಿದಾ
ಕಡುಗಲಿ ಶ್ರೀ ವೀರೇಶ ತವ ಸುಪ್ರಭಾತಂ 14 
{"\n"}
ದಕ್ಷ ನಿನ್ನಂ ತೆಗಳಿ ಶಿವನಿಂದೆಗೈಯಲಾಕ್ಷಣದಿಂ
ಸಿಡಿಲಿನಾರ್ಭಟ ದೊಳನಲ್ಲಿರ್ಧ ಹರಿ ವಿಧೇಂದ್ರಂ
ನಿಗ್ರಹಿಸಿ ಶಿವದ್ರೋಹಿ ದಕ್ಷನ ಶಿರವ ತೆಗೆದು 
ಯೋಗಾಗ್ನಿಗಾಹುತಿಯಿತ್ತಾ ಕಡುಗಲಿ ವೀರೇಶ ತವಸುಪ್ರಭಾತಂ 15 
{"\n"}
ಶರಣಾದವರೆಲ್ಲರಂ ಮನ್ನಿಸುತ ಪೊರೆದು 
ದಕ್ಷನಿಗೆ ಕುರಿತಲೆಯಿಟ್ಟು ಸಲುಹಲ್ ಮೊಳಗ್ದ
ವಿಜಯೋದ್ದಾರ ಪುಷ್ವವೃಷ್ಠಿ ವೇದ ಘೋಷಾಗಳಿಂ 
ಮುದವಾಂತ ಶಾಂತಮೂರ್ತಿ ಶ್ರೀ ವೀರೇಶ ತವ ಸುಪ್ರಭಾತಂ 16 
{"\n"}
ಹರಿ ನರಸಿಂಹ ಮೌರದಿಂ ಹಿರಣ್ಯಕಶ್ಯಪನ ಕೊಂದು ಲೋಕಂಗಳು 
ಪೀಡಿಸುತಿರೆ ಶೂಲಪಾಣಿಯ ಆಜ್ಞೆಯಂತೆ 
ಶರಭಾವತಾರದಿಂ ನರಹರಿಯ ಶಿರತೆಗೆದು ಲೋಕಂಗಳಂ 
ಪೊರೆದ ಕರುಣಾಳು ಕಲಿ ವೀರೇಶ ತವ ಸುಪ್ರಭಾತಂ  17 
{"\n"}
ರುದ್ರಾಂಶ ಪವನಸುತ ಹೇಮಕೂಟಾದ್ರಿಯೊಳು ಗೈದ ವರ 
ತಪಕೊಲಿದು ನೀ ಮೈದೋರಿ ಗುರುರೂಪದಿಂ
ಶಿವಾದ್ವೈತದುಪದೇಶ ಪೂರ್ವಕವಾಗಿ ಶಿವ 
ದೀಕ್ಷೆಯಂ ಕರುಣಿಸಿದಾ ಗುರು ವೀರೇಶ ತವ ಸುಪಭಾತಂ 18 
{"\n"}
ಮಾರುತಿಯ ಲಿಂಗ ಶಿವಮಾಯಿಯಿಂದ ನಿರ್ಗಮಿಸಲು 
ವಿಧಿ ನಿಯಮದಂತೆ ಅಸುನೀಗಲೆಗಳ ಮಾರುತಿಗೆ ಮೈದೋರಿ 
ಲಿಂಗ ರೊಂಮಾಂಗ ನಂದನಿಸಿ
ಗುರುವೀರ ಮೂರುತಿಯ ಪೊರೆವ ವೀರೇಶ ತವ ಸುಪ್ರಭಾತಂ  19 
{"\n"}
ವರಬಲದಿ ಗರ್ಜಿಸಿ ಲೋಕಂಗಳಂ
ಪೀಡಿಸುತ್ತಿರ್ದ ಕದಂಬಾಸುರ ನಂದೇವರ್ಕಳ
ಪ್ರಾರ್ಥನೆಯಂತೆ ನೀ ಘೋರ ರೂಪವಂ ಧರಿಸಿ
ಭವನಂಗಳಂ ಸಲಹಿದಾ ವೀರೇಶ ತವ ಸುಪ್ರಭಾತಂ 20
{"\n"}
ಪಾರಿ ಚಾತಾದ್ರಿಯಲಿ ಯೋಗ ಸಮಾಧಿಯೊಳಿದ್ದ 
ನಿನ್ನ ದರುಶನಕ್ಕೆ ಬರುತಿರ್ದ ಜಮದಗ್ನಿ ದಧೀಚಿಗಳಂ
ಜ್ವಾಲಾಳಾಸುರ ಭಕ್ತಿಸಲವರ ಮೊರೆ ಕೇಳ್ದು 
ಅಸುರನಂ ಮರ್ದಿಸಿ ಮುನಿಗಳಂ ಸಲುಹಿದಾ ವೀರೇಶ ತವ ಸುಪ್ರಭಾತಂ 21 
{"\n"}
ಶಿವದರ್ಶನಕ್ಕಾಗಿ ನಡೆದಿರ್ದವ್ಯಾಸ ದೂರ್ವಾಸರಂ ಪಂಚ 
ಮೇಡ್ರಾಸುರನು ಭಕ್ಷಿಸಲವರ ಮೊರೆ ಕೇಳ್ದು
ನೀ ಘೋರ ರೂಪಾಂತಂ ದೈತ್ಯನಂ ಸಂಹರಿಸಿ
ಮುನಿ ಕುಲವ ಸಲಹಿದಾ ವೀರೇಶ ತವ ಸುಪ್ರಭಾತಂ 22 
{"\n"}
ಶರಣು ವರ ಕಲಿ ವೀರೇಶ ಶರಣು ಶತರವಿತೇಜ
ಶರಣು ಹರಿ ವಿಧಿ ವಂಧ್ಯ ಶರಣು ವಿಶ್ವಾಧಿಕ 
ಶರಣು ಶಿವಗಣಾಧ್ಯಕ್ಷ ಶರಣು ಮಂಗಳಾಂಗ
ಶರಣು ಶಿವಧೂತ ಶ್ರೀ ವೀರೇಶ ತವ ಸುಪ್ರಭಾತಂ 23
{"\n"}
ನಮಸ್ತೆ ಶಿವರೂಪಯ ತ್ರಿಲೋಕ ವಂದ್ಯನೆ
ನಮಸ್ತೆ ವೀರಮಣಿ ವೀರಗೋತ್ರಾಧಿಪನೆ
ನಮಸ್ತ ಸರ್ವ ಸಮನ್ವಯಾಚಾರ್ಯನೆ 
ನಮಸ್ತೆ ಜ್ಞಾನಗಮ್ಯಾಯ ಶ್ರೀಗುರು ವೀರೇಶನೆ 24
{"\n"}
ನಮಸ್ತೆ ವೀರ ಕಾಸಿಯನುಟ್ಟ ವೀರಖಣೀಯೇ 
ನಮಸ್ತೆ ಮಹಾ ಮಾಯಾ ತಿಮಿರಭಾಸ್ಕರನೇ
ನಮಸ್ತೆ ಶಿವನಿಂದಕರ ಮೃತ್ಯು ದೇವತೆಯೇ 
ನಮಸ್ತೆ ಭವ-ಭಯ ವಿದೂರ ಶ್ರೀ ವೀರ ನಿಧಿಯೇ 25
{"\n"}
ವೀರೇಶ ಎಲ್ಲೆಡೆಯು ನಾಸ್ತಿಕತೆ ಹಬ್ಬಿದುದು
ಮತ್ತೆ ನೀನವತರಿಸಿ ವೀರ ಕಹಳೆಯನೂದಿ 
ನುತಿಸಿರ್ಪ ಶಿವಾದ್ವೈತ ಸಿದ್ಧಾಂತವನ್ನುದ್ಧರಿಸಿ
ಮಾನವ ಕೋಟಿಯ ಸಲುಹಲೇಳು ಶ್ರೀವೀರೇಶ ಪ್ರಭುವೇ 26
{"\n"}
ರವಿ ಕೋಟಿ ತೇಜನೆ ಶಿವ ಲಾಂಛನ ಭೂಷಣನೇ
ಸಚ್ಚಿದಾನಂದ ಸ್ವರೂಪನೆ ವರದೋಕ್ಷದಾಯಕನೆ 
ಶಿವತತ್ವ ಚಿಂತಾಮಣಿಯೇ ತ್ರಿಜಗಪೂಜ್ಯನೆ
ಮುನಿ ಕುಲ ವಂದ್ಯ ಭವನಾಶ ವೀರೇಶನೆ 27
{"\n"}
ಸದ್ಗುರು ಶ್ರೀ ವೀರೇಶನಂಘ್ರಯಂ ಭಜಿಸುತ್ತ
ಕುಂದ ಗೊರಳನ ಭಕ್ತ ಕಡು ನಿಷ್ಠೆಯಂ ರಚಿಸಿ 
ಭಕ್ತಿ ಜ್ಞಾನ-ವಿರತಿಗಳ ಬಯಸಿ ಅರ್ಪಿಸಿಹರು 
ಸುಪ್ರಭಾತವನಿದನು ಚಂದ್ರಶೇಖರನು 28
{"\n"}
ಮಂಗಲವು ರೇಣುಕಗೆ ಮಂಗಲವುದಾರುಕಗೆ 
ಮಂಗಲವು ಏಕೋರಾಮಗೆ ಮಂಗಲವು ಪಂಡಿತರಾಧ್ಯಗೆ
ಮಂಗಲವು ವಿಶ್ವಾರಾಧ್ಯನಿಗೆ ಮಂಗಲವು
ಶ್ರೀ ವೀರೇಶನಿಗೆ ಶುಭ ಮಂಗಲವು – 29
{"\n"}
ಉದಯಾಸ್ತ ಕಾಲದೊಳು ಸುಪ್ರಭಾತವನಿದನು 
ದೃಢ ಭಕ್ತಿ ಭಾವದಿಂ ಬಿಡದೆ ಪಠಿಸಲ್ಕೆ
ಭಕ್ತಿ-ಮುಕ್ತಿಗಳನ್ನು ಸಂತಸದಿ ಕರುಣಿಪನು
ಭಕ್ತವತ್ಸಲ ಗುರು ಶ್ರೀಗುರು ವೀರೇಶನು 30 
{"\n"}
ಮಂಗಲವು ನಿನಗೆ ಮಂಗಲವು ಗುರುವಿಗೆ
ಮಂಗಲವು ವೀರನಿಗೆ ಮಂಗಲವು ಭದ್ರನಿಗೆ
ಮಂಗಲವು ಭದ್ರಾಣೆ ಭದ್ರ ಕಾಳೀಶಗೆ 
ಮಂಗಲವು ಮಾಯಾತಿಮಿರ ಭಾಸ್ಕರ ಶ್ರೀ ವೀರೇಶನಿಗೆ ॥ 31 | 
{"\n"}
ಮಂಗಲ ಲೋಕಪೂಜ್ಯಾಯ ಮೇದ ಸ್ತುತ್ಯಾಯ ಮಂಗಳಂ 
ಮಂಗಲಂ ರೌದ್ರರೂಪಾಯ ಶೈವ್ಯ ತೇಜಾಯ ಮಂಗಳಂ
ಶುಭವರದ ಹಸ್ತಾಯ ಸತ್ಯ ರೂಪಾಯ ಮಂಗಳಂ
ಮಂಗಳಂ ನಿರ್ವಿಕಲ್ಪಾಯ ಭವ್ಯರೂಪಾಯ ಮಂಗಳಂ 32
{"\n"}
ಮಂಗಲಂ ಗುರು ರೂಪಾಯ ಸರ್ವವಂದ್ಯಾಯ ಮಂಗಲಂ
ಮಂಗಲಂ ಅಗ್ನಿನೇತ್ರಾಯ ಜ್ಞಾನಗಮ್ಯಾಯ ಮಂಗಲಂ
ಮಂಗಲಂ ತತ್ವವೇತ್ತಾಯ ವೈರಾಗ್ಯ ನಿಧಿಯೇತಥಾ:
ಮಂಗಲಂ ದೇವ ದೇವಾಯ ಶ್ರೀ ವೀರೇಶಾಯ ಮಂಗಲಂ ॥33
            </Text>
          </ScrollView>
        </View>
        <View style={styles.page} key="2">
          <ScrollView>
            <Text style={styles.textalign}> Page 2 </Text>
            <Text style={styles.textalign}>
              
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