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
    title: "Family-Info",
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
        <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <ScrollView>
            <Text style={styles.textalign}> Page 1 </Text>
            <Text style={styles.textalign}>
            *ಶ್ರೀ ವೀರಭದ್ರಾಷ್ಟೋತ್ತರ ಶತನಾಮಾವಳೀ*
{"\n"}{"\n"}
ಓಂ ಶ್ರೀ ವೀರಭದ್ರಾಯ ನಮಃ
ಓಂ ಮಹಾಶೂರಾಯ ನಮಃ
ಓಂ ರೌದ್ರಾಯ ನಮಃ
ಓಂ ರುದ್ರಾವತಾರಾಯ ನಮಃ
ಓಂ ಶ್ಯಾಮಾಂಗಾಯ ನಮಃ
ಓಂ ಉಗ್ರದಂಷ್ಟಾಯ ನಮಃ
ಓಂ ಭೀಮನೇತ್ರಾಯ ನಮಃ
ಓಂ ಜಿತೇಂದ್ರಿಯಾಯ ನಮಃ
ಓಂ ಊರ್ಧ್ವಕೇಶಾಯ ನಮಃ
ಓಂ ಭೂತನಾಥಾಯ ನಮಃ                  [10]
ಓಂ ಖಡ್ಗಹಸ್ತಾಯ ನಮಃ
ಓಂ ತ್ರಿವಿಕ್ರಮಾಯ ನಮಃ
ಓಂ ವಿಶ್ವವ್ಯಾಪಿನೇ ನಮಃ
ಓಂ ವಿಶ್ವನಾಥಾಯ ನಮಃ
ಓಂ ವಿಷ್ಣುಚಕ್ರ ವಿಭಂಜನಾಯ ನಮಃ
ಓಂ ಭದ್ರಕಾಳಿಪತಯೇ ನಮಃ
ಓಂ ಭದ್ರಾಯ ನಮಃ
ಓಂ ಭದ್ರಾಕ್ಷಾಭರಣಾನ್ವಿತಾಯ ನಮಃ
ಓಂ ಭಾನುದಂತಭಿದೇ ನಮಃ
ಓಂ ಭಗವತೇ ನಮಃ                                [20]
ಓಂ ಭಾವಗೋಚರಾಯ ನಮಃ
ಓಂ ಚಂಡಮೂರ್ತಯೇ ನಮಃ
ಓಂ ಚತುರ್ಬಾಹುವೇ ನಮಃ
ಓಂ ಚತುರಾಯ ನಮಃ
ಓಂ ಚಂದ್ರಶೇಖರಾಯ ನಮಃ
ಓಂ ಸತ್ಯಪ್ರತಿಜ್ನಾಯ ನಮಃ
ಓಂ ಸರ್ವಾತ್ಮನೇ ನಮಃ
ಓಂ ಸರ್ವಸಾಕ್ಷಿಣೇ ನಮಃ
ಓಂ ನೀರಾಮಯಾಯ ನಮಃ
ಓಂ ನಿತ್ಯಾಯ ನಮಃ                                 [30]
ಓಂ ನಿರ್ಧೂತಪಾಪೌಘಾಯ ನಮಃ
ಓಂ ನಿರ್ವಿಕಲ್ಪಾಯ ನಮಃ
ಓಂ ನಿರಂಜನಾಯ ನಮಃ
ಓಂ ಭಾರತೀನಾಸಿಕಾಚ್ಛೇದಾಯ ನಮಃ
ಓಂ ಭವರೋಗಮಹಾಭಿಷಜೇ ನಮಃ
ಓಂ ಭಕ್ಷೈಕ ರಕ್ಷಾಯ ನಮಃ
ಓಂ ಬಲವತೇ ನಮಃ
ಓಂ ಭಸ್ಮೋದ್ಧೋಲಿತ ವಿಗ್ರಹಾಯ ನಮಃ
ಓಂ ದಕ್ಷಾರಯೇ ನಮಃ
ಓಂ ಧರ್ಮಮೂರ್ತಯೇ ನಮಃ                      [40]
ಓಂ ದೈತ್ಯಸಂಘಭಯಂಕರಾಯ ನಮಃ
ಓಂ ಪಾತ್ರಹಸ್ತಾಯ ನಮಃ
ಓಂ ಪಾವಕಾಕ್ಷಾಯ ನಮಃ
ಓಂ ಪದ್ಮಜಾಕ್ಷಾದಿವಂದಿತಾಯ ನಮಃ
ಓಂ ಮುಖಾಂತಕಾಯ ನಮಃ
ಓಂ ಮಹಾತೇಜಸೇ ನಮಃ
ಓಂ ಮಹಾಭಯನಿವಾರಣಾಯ ನಮಃ
ಓಂ ಮಹಾವೀರಗಣಾಧ್ಯಕ್ಷಾಯ ನಮಃ
ಓಂ ಮಹಾಘೋರನೃಸಿಂಹಜಿತೇ ನಮಃ
ಓಂ ನಿಶ್ವಾಸ ಮಾರುತೋದ್ಭೂತಕುಲಪರ್ವತಸಂಚಯಾಯ ನಮಃ  [50]
ಓಂ ದಂತನಿಷ್ಟೇಷಣಾರಾಮುಖರೀಕೃತದಿಕ್ತಟಾಯ ನಮಃ
ಓಂ ಪಾದಸಂಘಟ್ಟನೋದ್ಭ್ರಾಂತ ಶೇಷಶೀರ್ಷ ಸಹಸ್ರಕಾಯ ನಮಃ
ಓಂ ಭಾನುಕೋಟಿಪ್ರಭಾಯ ನಮಃ
ಓಂ ಭಾಸ್ವನ್ಮಣಿಕುಂಡಲಮಂಡಿತಾಯ ನಮಃ
ಓಂ ಶೇಷಭೂಷಾಯ ನಮಃ
ಓಂ ಚರ್ಮವಾಸಿನೇ ನಮಃ
ಓಂ ಚಾರುಹಸ್ತೋಜ್ವಲತ್ತನವೇ ನಮಃ
ಓಂ ಉಪೇಂದ್ರೇಂದ್ರಯಮಾದಿನಾಂದೇವಾನಾಮಂಗರಕ್ಷಕಾಯ ನಮಃ
ಓಂ ಪಟ್ಟಸಪ್ರಾಸಪರಶುಗದಾಧ್ಯಾಯುಧಶೋಭಿತಾಯ ನಮಃ
ಓಂ ಬ್ರಹ್ಮಾದಿದೇವ ದುಷ್ಪ್ರೇಕ್ಷ್ಯ ಪ್ರಭಾಶುಂಭ ತ್ಕಿರೀಟಧೃತೇ ನಮಃ     [60]
ಓಂ ಕೂಷ್ಮಾಂಡಗ್ರಹಬೇತಾಳ ಮಾರೀಗಣ ವಿಭಂಜನಾಯ ನಮಃ
ಓಂ ಕ್ರೀಡಾಕಂದು ಕಿತಾಜಾಂಡ ಭಾಂಡ ಕೋಟೀ ವಿರಾಜಿತಾಯ ನಮಃ
ಓಂ ಶರಣಾಗತ ವೈಕುಂಠ ಬ್ರಹ್ಮೇಂದ್ರಾಮರ ರಕ್ಷಕಾಯ ನಮಃ
ಓಂ ಯೋಗೀಂದ್ರ ಹೃತ್ಪಯೋಜಾತವೇ ನಮಃ
ಓಂ ಮಹಾಭಾಸ್ಕರ ಮಂಡಲಾಯ ನಮಃ
ಓಂ ಸರ್ವದೇವ ಶಿರೋರತ್ನ ಸಂಘೃಷ್ಟ ಮಣಿಪಾದುಕಾಯ ನಮಃ
ಓಂ ಗ್ರೈವೇಯಹಾರ ಕೇಯೂರ ಕಾಂಚಿಕಟಕಭೂಷಿತಾಯ ನಮಃ
ಓಂ ವಾಗತೀತಾಯ ನಮಃ
ಓಂ ದಕ್ಷಹರಾಯ ನಮಃ
ಓಂ ವಹ್ನಿಜಿಹ್ವಾನಿಕೃಂತನಾಯ ನಮಃ             [70]
ಓಂ ಸಹಸ್ರಬಾಹುವೇ ನಮಃ
ಓಂ ಸರ್ವಜ್ನಾಯ ನಮಃ
ಓಂ ಸಚ್ಚಿದಾನಂದವಿಗ್ರಹಾಯ ನಮಃ
ಓಂ ಭಯಾಪಹಾಯ ನಮಃ
ಓಂ ಭಕ್ತಲೋಕಾರಾತೀಕ್ಷ್ಣವಿಲೋಚನಾಯ ನಮಃ
ಓಂ ಕಾರುಣ್ಯಾಕ್ಷಾಯ ನಮಃ
ಓಂ ಗಣಾಧ್ಯಕ್ಷಾಯ ನಮಃ
ಓಂ ಗರ್ವಿತಾಸುರ ದರ್ಪಹೃತೇ ನಮಃ
ಓಂ ಸಂಪತ್ಕರಾಯ ನಮಃ
ಓಂ ಸದಾನಂದಾಯ ನಮಃ                        [80]
ಓಂ ಸರ್ವಾಭೀಷ್ಟ ಫಲಪ್ರದಾಯ ನಮಃ
ಓಂ ನೂಪುರಾಲಂಕೃತಪದಾಯ ನಮಃ
ಓಂ ವ್ಯಾಲವೇ ನಮಃ
ಓಂ ಯಜ್ನೋಪವೀತಿಕಾಯ ನಮಃ
ಓಂ ಭಗನೇತ್ರಹರಾಯ ನಮಃ
ಓಂ ದೀರ್ಘಬಾಹುವೇ ನಮಃ
ಓಂ ಬಂಧ ವಿಮೋಚಕಾಯ ನಮಃ
ಓಂ ತೇಜೋಮಯಾಯ ನಮಃ
ಓಂ ಸಕವಚಿನೇ ನಮಃ
ಓಂ ಭೃಗುಶ್ಮಶ್ರುವಿಲುಂಪಕಾಯ ನಮಃ           [90]
ಓಂ ಯಜ್ಞಪೂರುಷಶೀರ್ಷಘ್ನಾಯ ನಮಃ
ಓಂ ಯಜ್ಞಾರಣ್ಯ ದವಾನಲಾಯ ನಮಃ
ಓಂ ಭಕ್ತವತ್ಸಲಾಯ ನಮಃ
ಓಂ ದೇವಸುಲಭಾಯ ನಮಃ
ಓಂ ಶಾಶ್ವತಾಯ ನಮಃ
ಓಂ ನಿಧಯೇ ನಮಃ
ಓಂ ಸರ್ವಸಿದ್ಧಿಕರಾಯ ನಮಃ
ಓಂ ಸಕಲಾಗಮಶೋಭಿತಾಯ ನಮಃ
ಓಂ ಭುಕ್ತಿಮುಕ್ತಿಪ್ರದೋದೇವಾಯ ನಮಃ
ಓಂ ಸರ್ವವ್ಯಾಧಿನಿವಾರಕಾಯ ನಮಃ             [100]
ಓಂ ಅಕಾಲಮೃತ್ಯು ಸಂಹರ್ತ್ರೇ ನಮಃ
ಓಂ ಕಾಲಮೃತ್ಯುಭಯಂಕರಾಯ ನಮಃ
ಓಂ ಗ್ರಹಾಕರ್ಷಣ ನಿರ್ಬಂಧಾಯ ನಮಃ
ಓಂ ಮಾರಣೋಚ್ಛಾಟನ ಪ್ರಿಯಾಯ ನಮಃ
ಓಂ ಪರತಂತ್ರವಿನಿರ್ಬಂಧಾಯ ನಮಃ
ಓಂ ಪರಮಾತ್ಮನೇ ನಮಃ
ಓಂ ಪರಾತ್ಪರಾಯ ನಮಃ
ಓಂ ಸ್ವಮಂತ್ರ ಯಂತ್ರ ತಂತ್ರೌಘ ಪರಿಪಾಲನ ತತ್ಪರಾಯ ನಮಃ        (108)

ಇತಿ ಶ್ರೀ ವೀರಭದ್ರಾಷ್ಟೋತ್ತರ ಶತನಾಮಾವಳೀ ಸಂಪೂರ್ಣಂ

            </Text>
          </ScrollView>
        </View>
        <View style={styles.page} key="2">
          <ScrollView>
            <Text style={styles.textalign}> Page 2 </Text>
            <Text style={styles.textalign}>
              *ಯಡೂರು ವೀರಭದ್ರಾಷ್ಟಕಂ* 
              {"\n"}{"\n"}
              ಶ್ರೀ ವೀರಭದ್ರಗೆ ನಮಿಸುವೆ ನಾನು ಕಾಳಿಕಾ ಮಾತೆಗೆ
              ಕರವನು ಮುಗಿದು | ಜಗವೆ ಪೂಜಿಸುವ ಶಿವರೂಪಿ ನೀನು ಭಕ್ತರ ಪಾಲಿಗೆ ವರ ಕಾಮಧೇನು
              //೧// ಶಿವನ ಜಡೆಯಲೀ ಉದಿಸಿದೆ ನೀನು ಹರನ ಕೋಪಾಗ್ನಿಯ ಜ್ವಾಲೆಯು ನೀನು ||
              ರುದ್ರಾವತಾರದಿ ಖಡೆ ಖಡೆ ಎನುತಲಿ ದಕ್ಷನ ಯಜ್ಞದ ಕಡೆಗೇ ನಡೆದೆ //೨// ಶಿವ
              ನಿಂದೆಯನು ಸಹಿಸದೆ ಸತಿಯು ಯಜ್ಞ ಕುಂಡದೀ ದಹಿಸುತ್ತಿರಲು || ತಾಯಿಯ ದಹನದ
              ದೃಶ್ಯವ ಕಂಡು ವೀರಗೆ ಹರಿದವು ಕಣ್ಣೀರ ಹೊಳೆಯು ||೩// ಶಿವನ ಆಜ್ಞೆಯನು ಪಾಲಿಸಲು
              ನೀ ದಕ್ಷನ ಸೈನ್ಯದ ದರ್ಪವ ಮುರಿದು || ದಕ್ಷ ಬ್ರಹ್ಮನಾ ಶಿರವನು ಹರಿದು ದಹಿಸದೆ
              ಅವನಾ ತಲೆಯನು ನೀನು //೪// ಭದ್ರನ ಕಾಯಕ ಭಕ್ತಿಗೆ ಮೆಚ್ಚಿ ಪರ ಶಿವ ತಾನು ವರವನು
              ನೀಡಿ || ಕೃಷ್ಣಾ ನದಿಯ ಎಡ ದಂಡೆಯ ಮೇಲೆ ನೆಲೆಸೀಗ ನೀನು ವಿರೂಪಾಕ್ಷ ನಾಗಿ
              //೫// ಶಿವನ ಆಜ್ಞೆಯಂತೆ ಯಡೂರ ಕ್ಷೇತ್ರದಿ ಲಿಂಗ ರೂಪದಿ ಕಂಗೊಳಿಸುತಲೀ ||
              ಕಾಡಸಿದ್ಧರಾ ಕರುಣೆಯ ಕಣ್ಣಿಗೆ ಕಾಣುವೆ ನೀನು ಬೂದಿಯ ಒಳಗೆ //೬// ಕಾಡ ಸಿದ್ಧರೂ
              ಯಡೂರ ಜನರು ಅಗಿದರು ಅಲ್ಲಿಯ ಬೂದಿಯ ನೆಲ್ಲವ || ಅಲ್ಲಿ ಕಾಣುವನು ವಿರೂಪಾಕ್ಷ
              ಲಿಂಗಾ ಕಂಡ ಭಕ್ತರಿಗೆ ಅತಿ ಆನಂದ //೭// ವೀರಭದ್ರಗೆ ಒಡಪನು ಹೇಳಲು ಭದ್ರಕಾಳಿಗೆ
              ಭಕ್ತಿಯಿಂದ ನಮಿಸಲು || ವಿಶಾಳಿ ಜಾತ್ರೆಗೆ ತೇರನು ಎಳಯಲು ಸಾವಿರ ಸಾವಿರ ಭಕ್ತರು
              ಬರುವರು //೮// ಲಿಂಗರೂಪದಲಿ ವೀರಭದ್ರನಾ ಮಹಾ ದರುಶಣಾಂ || ಯಡೂರ ವೀರಭದ್ರೇಶ ತವ
              ಪಾದ ಶರಣು || *ರಚನೆ*:- ಶ್ರೀಶೈಲ ಶಾಸ್ತ್ರಿಗಳು, ಯಡೂರು ಪಾಠಶಾಲೆ. *ಶ್ರೀ
              ವೀರಭದ್ರೇಶ್ವರ ಪ್ರಚಾರ ಸಮಿತಿ*
            </Text>
          </ScrollView>
        </View>
        <View style={styles.page} key="3">
          <Text style={styles.textalign}> Page 3 </Text>
          <Text style={styles.textalign}>
            *ಶ್ರೀವೀರಭದ್ರೇಶ್ವರ ವಡಪು* 
            {"\n"}{"\n"}
            ಆಹಾ ರುದ್ರಾ l ಆಹಾ ವೀರಾ l ನಿಲ್ಲಿಸಬಹುದಯ್ಯಾ ಒಂದೇ
            ಮಂತ್ರದಿಂದ ಕಾಳೋರಗನ | ನಿಲ್ಲಿಸ ಬಹುದಯ್ಯಾ ಒಂದೇ ಮಂತ್ರದಿಂದ ಹಾರುವ ಪಕ್ಷಿಯ |
            ನಿಲ್ಲಿಸಬಹುದಯ್ಯಾ ಒಂದೇ ಮಂತ್ರದಿಂದ ಹೆಬ್ಬುಲಿಯ | ನಿಲ್ಲಿಸಬಹುದಯ್ಯಾ ಒಂದೇ
            ಮಂತ್ರದಿಂದ ಈ ಹೆಮ್ಮಾರಿಯ ಲೋಭವೆಂಬ ಗ್ರಹಣಹಿಡಿದವರನ್ನು ಯಾತರಿಂದಲೂ ಬಿಡಿಸುಲಾಗದು
            l ಈ ಲೋಭಕ್ಕೆ ದರಿದ್ರವೇ ಔಷಧ | ಹೇಳಿದರೆ ಕೇಳರು | ತಾವೂ ತಿಳಿಯರು | ಶಾಸ್ತ್ರವ
            ಭಕ್ತಿಯ ಹಿಡಿಯರು l ಇಂಥ ಗೊಡ್ಡ ಮೂಳ ಹೊಲೆಯರಿಗೆ | ಕರ್ಮವೆಂಬ ಶರಧಿಯಲ್ಲಿ ಬಿದ್ದು
            | ಉರುಳಾಡುವುದೇ ಸತ್ಯವೇದಾಂತ ನಮ್ಮ ಅಂಬಿಗರ ಚೌಡಯ್ಯ ಕಡೆ ಕಡೆ....... *ಶ್ರೀ
            ವೀರಭದ್ರೇಶ್ವರ ಪ್ರಚಾರ ಸಮಿತಿ*
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