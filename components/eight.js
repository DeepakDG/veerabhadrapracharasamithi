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
             *ಶ್ರೀ ವೀರಭದ್ರ ಅಷ್ಟೋತ್ತರ ಶತನಾಮಾವಳಿ ಸ್ತೋತ್ರ*{"\n"}{"\n"}

ವೀರಭದ್ರೋ ಮಹಾಶೂರೋ ರೌದ್ರೋ ರುದ್ರಾವತಾರಕ: ಶ್ಯಾಮಾಂಗಶ್ಚ ಉಗ್ರದಂಷ್ಟ್ರಶ್ಚ ಭೀಮನತ್ರೋ ಜಿತೇಂದ್ರಿಯ: (1)

ಊರ್ಧ್ವಕೇಶೋ ಭೂತನಾಥ: ಖಡ್ಗಹಸ್ತ ತ್ರಿವಿಕ್ರಮಃ
ವಿಶ್ವವ್ಯಾಪಿ ವಿಶ್ವನಾಥೋ ವಿಷ್ಣುಚಕ್ರ ವಿಭಂಜನಃ (2)

ಭದ್ರಕಾಳಿಪತಿ ಭದ್ರೋ ಭದ್ರಾಕ್ಷಾಭರಣಾನ್ವಿತ: ಭಾನುದಂತ ಭಿದುಗ್ರಶ್ಚ ಭಗವಾನ್ ಭಾವಗೋಚರ: (3)

ಚಂಡಮೂರ್ತಿಶ್ಚತುರ್ಬಾಹುಶ್ಚತುರ್ಶ್ಚಂದ್ರಶೇಖರ:
ಸತ್ಯ ಪ್ರತಿಜ್ಞಂ ಸರ್ವಾತ್ಮಾ ಸರ್ವಸಾಕ್ಷೀ ನೀರಾಮಯ: (4 )

ನಿತ್ಯೋ ನಿರ್ಧೂತ ಪಾಪೌಘಾ ನಿರ್ವಿಕಲ್ಪೋ ನಿರಂಜನಃ ಭಾರತೀನಾಸಿಕಾಚ್ಛದೋ ಭವರೋಗ ಮಹಾಭಿಷಜೇ (5)

ಭಕ್ತೈಕ ರಕ್ಷೋ ಬಲವಾನ್ ಭಸ್ಮೋದ್ದೋಲಿತ ವಿಗ್ರಹ: ದಕ್ಷಾರೀರ್ಧರ್ಮಮೂರ್ತಿಶ್ಚ ದೈತ್ಯ ಸಂಘ ಭಯಂಕರ: (6)

ಪಾತ್ರ ಹಸ್ತಃ ಪಾವಕಾಕ್ಷಃ ಪದ್ಮಜಾಕ್ಷಾದಿ ವಂದಿತಃ ಮುಖಾಂತಕೋ ಮಹಾತೇಜಾ ಮಹಾಭಯ ನಿವಾರಣ: (7)

ಮಹಾವೀರ ಗಣಾಧ್ಯಕ್ಷೋ ಮಹಾಘೋರನೃಸಿಂಹಜಿತೇ ನಿಶ್ವಾಸ ಮಾರುತೋದ್ಭೂತ ಕುಲಪರ್ವತ ಸಂಚಯ: (8)

ದಂತನಿಷ್ಷೆಷಣಾರಾಮುಖರೀಕೃತದಿಕ್ತಟ: ಪಾದಸಂಘಟನೋದ್ಭ್ರಾಂತ: ಶೇಷ ಶೀರ್ಷ ಸಹಸ್ರಕ: (9)

ಭಾನುಕೋಟಿಪ್ರಭಾ ಭಾಸ್ವನ್ಮಣಿಕುಂಡಲ ಮಂಡಿತ: ಶೇಷಭೂಷಶ್ಚರ್ಮ ವಾಸಾಶ್ಚಾರು ಹಸ್ತೋಜ್ವಲತ್ತನು: (10)        

ಉಪೇಂದ್ರೇಂದ್ರಯಮಾದಿದೇವಾನಾಮಂಗರಕ್ಷಕ: ಪಟ್ಟಸಪ್ರಾಸ ಪರಶು ಗದಾಧ್ಯಾಯುಧ ಶೋಭಿತಃ (11)

ಬ್ರಹ್ಮಾದಿ ದೇವ ದುಷ್ಟ್ರೇಕ್ಷ್ಯ ಪ್ರಭಾಶುಂಭತ್ಕಿರೀಟಧೃತೇ ಕೂಷ್ಮಾಂಡಗ್ರಹಬೇತಾಳ ಮಾರೀಗಣ ವಿಭಂಜನಃ (12)

ಕ್ರೀಡಾಕಂದು ಕಿತಾಜಾಂಡ ಭಾಂಡ ಕೋಟೀವಿರಾಜಿತಾ: ಶರಣಾಗತ ವೈಕುಂಠ ಬ್ರಹ್ಮಂದ್ರಾಮರ ರಕ್ಷಕ: (13)

ಯೋಗೀಂದ್ರ ಹೃತ್ಪಯೋಜಾತ ಮಹಾಭಾಸ್ಕರ ಮಂಡಲ: ಸರ್ವದೇವ ಶಿರೋರತ್ನ ಸಂಘೃಷ್ಟ ಮಣಿಪಾದುಕಾ: (14)

ಗ್ರೈವೇಯಹಾರ ಕೇಯೂರ ಕಾಂಚಿಕಟಕ ಭೂಷಿತಃ
ವಾಗತೀತೋ ದಕ್ಷ ಹರೋವಹ್ನಿ ಜಿಹ್ವಾ ನಿಕೃಂತನಃ (15)

ಸಹಸ್ರಬಾಹು: ಸರ್ವಜ್ಞ: ಸಚ್ಚಿದಾನಂದ ವಿಗ್ರಹಃ
ಭಯಾಪಹಾಯ ಭಕ್ತಲೋಕಾರಾತೀಕ್ಷ್ಣ ವಿಲೋಚನ: (16)

ಕಾರುಣ್ಯಾಕ್ಷೋ ಗಣಾಧ್ಯಕ್ಷೋ ಗರ್ವಿತಾಸುರ ದರ್ಪಹೃತೇ
ಸಂಪತ್ಕರಃ ಸದಾssನಂದೋ ಸರ್ವಾಭೀಷ್ಟ ಫಲಪ್ರದಃ (17) 

ನೂಪುರಾಲಂಕೃತ ಪದೋವ್ಯಾಲ ಯಜ್ಯೋಪವೀತಿಕ: ಭಗನೇತ್ರಹರೋ ದೀರ್ಘಬಾಹುರ್ಬಂಧ ವಿಮೋಚಕ: (18)

ತೇಜೋಮಯಃ ಸಕವಚೋಭೃಗುಶ್ಮಶ್ರು ವಿಲುಂಪಕ: ಯಜ್ಞಪೂರುಷ ಶೀರ್ಷಘ್ನ ಯಜ್ಞಾರಣ್ಯ ದವಾನಲಃ (19)

ಭಕ್ತೈಕ ವತ್ಸಲೋ ದೇವ ಸುಲಭಃ ಶಾಶ್ವತೋ ನಿಧಿ: ಸರ್ವಸಿದ್ಧಿ ಕರೋದಾಂತ: ಸಕಲಾಗಮ ಶೋಭಿತ: (20)

ಭುಕ್ತಿಮುಕ್ತಿಪ್ರದೋದೇವಃ ಸರ್ವವ್ಯಾಧಿ ನಿವಾರಕ:
ಅಕಾಲಮೃತ್ಯು ಸಂಹಾರ್ತಾ ಕಾಲಮೃತ್ಯು ಭಯಂಕರ: (21)

ಗ್ರಹಾಕರ್ಷಣ ನಿರ್ಬಂಧ ಮಾರಣೋಚ್ಚಾಟನ ಪ್ರಿಯ: ಪರತಂತ್ರ ವಿನಿರ್ಬಂಧಃ ಪರಮಾತ್ಮಾ ಪರಾತ್ಪರಃ (22)

ಸ್ವಮಂತ್ರ ಯಂತ್ರ ತಂತ್ರೌಘ ಪರಿಪಾಲನ ತತ್ಪರಃ (23)

ಇತಿ ಶ್ರೀ ವೀರಭದ್ರಾಷ್ಟೋತ್ತರ ಸ್ತೋತ್ರಂ ಸಂಪೂರ್ಣಂ

            </Text>
          </ScrollView>
        </View>
        <View style={styles.page} key="2">
          <ScrollView>
            <Text style={styles.textalign}> Page 2 </Text>
            <Text style={styles.textalign}>
             || *ಶ್ರೀವೀರಭದ್ರಸ್ವಾಮಿ ಸ್ತೋತ್ರಂ* || {"\n"}{"\n"}
(ಬೆಲಗೂರು ಶ್ರೀ ಬಿಂದುಮಾಧವ ಶರ್ಮ ವಿರಚಿತಂ)

ಶತಕೋಟಿ ಸೂರ್ಯ ಪ್ರಕಾಶಾಯ | 
ಶಿವಮಾನಸ ಪುತ್ರಾಯ | 
ಧೀರಾಯ | ಶಿವಗಣಾಧ್ಯಕ್ಷಾಯ
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ ।೧।

ಗಣೇಶ ಪ್ರಿಯ ಮಿತ್ರಾಯ |
ಪವಿತ್ರ ಅವತಾರಾಯ | 
ಸತ್ಯಾಯ ಶಿವಧ್ಯಾನ ನಿರತಾಯ | 
ನಿತ್ಯಶುದ್ಧಾಯ ದೇವಾಯ 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೨|

ಲಿಂಗರೂಪಾಯ | ಮಹಿಮಾಯ|
ಮಹಾಪರ್ವತ ವಾಸನೇ | 
ಸಮಸ್ತ ಜೀವಾಧಾರಾಯ | 
ಜಗದೇಕ ಮೂರ್ತಯೇ |
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೩|

ಪರಮಶಿವ ವಾಕ್ಯ ಪರಿಪಾಲನಾಯ 
ದಕ್ಷ ಕ್ಷಮಾಗುಣ ಶೀಲ ಸಂಪನ್ನಾಯ | 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೪|

ರುದ್ರಾಕ್ಷಿಧರಾಯ | 
ಭಸ್ಮವಿಭೂಷಿತ ದೇಹಾಯ ।
ಭವ್ಯ ಮಂಗಳ ಮೂರ್ತಯೇ |
ಭದ್ರಕಾಳೀ ಪ್ರಿಯಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೫|

ನವರತ್ನ ಪಾದುಕಾಧರಾಯ | 
ಸರ್ವಾಭರಣ ಧಾರಿಣೀ | 
ನಾಗಶೇಷಕಿ ನಾಗಾಭಾರಣಾಲಂಕೃತಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೬|

ಶ್ರೀಗಂಧ ಚಂದನ ಲೇಪಿತ 
ದಿವ್ಯದೇಹಾಯ ವೀರಭದ್ರಾಯ ನಮಃ |
ವೀರಾಧಿ ವೀರಾಯ |
ವೀರಶೈವ ಪ್ರಿಯಾಯ |
ಮಹಾರುದ್ರಾಯ ನಮೋ ನಮಃ |೭|

ಕರಾಳವದನಾಯ |
ಕಾಶಿಕಾಪುರ ನಿವಾಸಾಯ |
ಭೈರವಾಯ ನಮೋ | 
ನಮಸ್ತೇ ಗಂಗಾತಟ ನಿವಾಸಾಯ |
ಭಕ್ತಪ್ರಿಯಾಯ ದೇವಾಯ | 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೮|

ಶಿವರುದ್ರಾಯ ಶಾಂತಾಯ | 
ಸಮಸ್ತ ಭಾಗ್ಯಪ್ರದಾತಾಯ |
ಸದಾಶ್ರೀ ಪ್ರಸನ್ನ
ರಾಮೇಶ್ವರ ಹೃದಯ ನಿವಾಸಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೯|

ಶಿವನಾಟ್ಯ ಪ್ರೀತಾಯ |
ತಾಂಡವ ನಾಟ್ಯಲೋಲಾಯ |
ಮಹಾಜಟಾಧರಾಯ |
ಶಿವಪಾರ್ವತಿ ಮಾನಸ ಪುತ್ರಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ ।೧೦।

ಅಭಯ ಹಸ್ತಾಯ |
ಅಮೃತಾಯ |
ಶಿವವಿರೋಧ ಜನ ಸಂಹರಣಾಯ |
ವೇದೋದ್ಧಾರಕಾಯ | 
ವೇದಮಂತ್ರ ಪ್ರಿಯಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ ।೧೧ l

ಪ್ರಳಯ ಕಾಲಾಗ್ನಿ ರುದ್ರಾಯ
ಮಹಾಭಯಂಕರ ದೇಹಾಯ | 
ಕೋಪಾಗ್ನಿನೇತ್ರಾಯ l 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೧೨|

ಶುದ್ಧ ಸ್ಪಟಿಕಮಣಿ ಸ್ವರೂಪಾಯ 
ಶುದ್ಧ ಜ್ಞಾನಮೂರ್ತಯೇ | 
ಶಿವಗುರು ವಂದಿತಾಯ | 
ಅಭಯ ಹಸ್ತಾಯ | ದೇವಾಯ 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ l೧೩l

ಬಿಲ್ವಮಾಲಾಧರಾಯ | 
ಶಿವಾಯ ಶೂಲಧರಾಯ |
ದೇವಾಯ ಕರುಣಾಂತರಂಗಾಯ |
ಸತ್ಯಧರ್ಮ ರತಾಯಚ ನಮಸ್ತೇ | 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ ।೧೪l

ನಂದೀಶ್ವರ ಪ್ರಿಯಸಖಾಯ | 
ಪ್ರಣವನಾದ ಸಾಧಕಾಯ | 
ಗಿರಿಗುಹ ವಾಸಾಯ | 
ಯೋಗಮೂರ್ತಯೇ |
ಶಿವಪಂಚಾಕ್ಷರೀ ಧ್ಯಾನ ತೃಪಾಯ | 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೧೫|

ಸರ್ವಾಂಗ ಸುಂದರಾಯ | 
ಸಾಮವೇದ ಸಾಧಕಾಯ | 
ಚತುರ್ವೇದ ಪ್ರಿಯಾಯ | 
ಶಿವರುದ್ರಾಯತೇ ನಮೋ ನಮಃ |೧೬|

ಹರಿಹರ ಬ್ರಹ್ಮರೂಪಾಯ | 
ಸರ್ವ ಬ್ರಹ್ಮಾಂಡ ಸ್ವರೂಪ | 
ಸತ್ಚಿತ್ ಆನಂದ ಸ್ವರೂಪಾಯ | 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ ।೧೭।

ಪಂಚ ಭೂತಾಧ್ಯಕ್ಷಾಯ | 
ಪರಬ್ರಹ್ಮ ಸಾಕ್ಷಿಣೀ |
ಶಿವಪಂಚಾಕ್ಷರೀ ಜಪ ಸುಪ್ರೀತಾಯ | 
ಶಿವರುದ್ರಾಯ
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ ।೧೮ l

ಪರಮ ವೈರಾಗ್ಯ ಪುರುಷಾಯ | 
ಮಹಾತಪಸ್ವಿನೇ | 
ವ್ಯಾಘ್ರಾಸನ ಪ್ರಿಯಾಯ | 
ಶರಭರೂಪಾಯ | 
ರುದ್ರಾಯ ರವಿಕೋಟಿ ತೇಜಾಯ | 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೧೯|

ಶಿವೋಹಂ ಶಿವೋಹಂ |
ಶಿವನಾಮ ಪ್ರಿಯಾಯ | 
ಶಿವಸ್ವರೂಪ ತೃಪ್ತಾಯ 
ಶಶಿಕೋಟಿ ಸಮಪ್ರಭಾಯ | 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೨೦|

ಪ್ರಳಯ ರುದ್ರಾಯ 
ದೇವಾಯ ಮಹಾಪ್ರತಾಪಿನೇ | 
ಚಂಡಕೋಪಾಯ | ರುದ್ರಾಯ | 
ಮಹಾಶೂಲಧರಾಯ ದೇವಾಯ 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೨೧|

ಸಾಧುಪ್ರಿಯಾಯ | ಸರ್ವಜ್ಞಾಯ | 
ಶಿವಕಾರ್ಯ ಸಾಧಕಾಯಚ |
ಶರಣ್ಯಾಯ ವರೇಣ್ಯಾಯ, 
ವಿಪ್ರ ಪ್ರಿಯಾಯ ರುದ್ರಾಯ 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೨೨|

ಸಂಸಾರ ಸಾಗರ ಭಯ ನಿವಾರಣಾ | 
ದಿವ್ಯ ಔಷಧಾಯ ಮಹಾಘೋರ 
ಪಾಪ ನಿವಾರಣಾಯ | 
ಮಹಾಮಂತ್ರ ರೂಪಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೨೩|

ಮಹಾಕಾಳಿ ಹೃದಯ ಸಂಚಾರಾಯ | 
ಮದಹರಾಯ ರುದ್ರಾಯ |
ಅಭಯಹಸ್ತಾಯ ದೇವಾಯ
ದೇವಿಪ್ಯಮಾನಾಯ | 
ದಿವ್ಯದೇಹಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೨೪|

ಗರುಡ ಯಕ್ಷ ಕಿನ್ನರ ನಾಗ ಗಂಧರ್ವ
ಸಂಪೂಜಿತಾಯ ಸಿದ್ದಾಯ | 
ಅಷ್ಟಸಿದ್ಧಿ ಪ್ರದಾತಾಯ ರುದ್ರಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೨೫|

ನವರತ್ನಖಚಿತ ರುದ್ರಾಕ್ಷಮಾಲಾಧರಾಯ | 
ನಮಃ ಶಿವಾಯ | 
ನಾನಾ ವಿಚಿತ್ರ ಪುಷ್ಪಾಲಂಕಾರ ದಿವ್ಯದೇಹಾಯ | ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೨೬|

ಯೋಗಾಯ ಯೋಗಮಾರ್ಗಾಯ
ಯೋಗ ಸಾಧಕಾಯ ಮಹಾಯೋಗಿನೇ
ಯೋಗ ಬೀಜಾಯ ಶಿವಯೋಗ 
ಸಾಧಕಾಯ ಸರ್ವಸಾಕ್ಷಿಣೀ | 
ಶ್ರೀವೀರಭದ್ರಾಯ ದೇವಾಯ ನಮೋ ನಮಃ l ೨೭l

ಜಗದಾದಿ ರೂಪಾಯ ಸ್ಥಾವರ 
ಜಂಗಮರೂಪಿಣಿ
ಪರಮಶಿವ ಪ್ರಿಯಾಯ |
ಪ್ರಿಯಪುತ್ರಾಯ ಸುಂದರ ಮುಖಾಯ |
ಸುರನರ ಗರ್ವಹರಾಯ | 
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೨೮l

ಶಾಂತಿ ಶಮದಮನಾದಿ
ಷಡ್ಗುಣೈಶ್ವರ್ಯ ಪ್ರದಾತಾಯ ಸಕಲ 
ಲೋಕೋಪದ್ರವ ನಿವಾರಣಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೨೯|

ಸೂರ್ಯಗ್ರಹ, ಚಂದ್ರಗ್ರಹ, 
ಮಂಗಳಗ್ರಹ, ಬುಧಗ್ರಹ, 
ಗುರುಗ್ರಹ, ಶುಕ್ರಗ್ರಹ, 
ಶನಿಗ್ರಹ, ರಾಹುಗ್ರಹ, 
ಕೇತುಗ್ರಹ ಸಮಸ್ತ ದೋಷ ನಿವಾರಣಾಯ ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೩೦|

ನಯನ ಮನೋಹರಾಯ, 
ನಯನ ಮಧುರ ವಾಕ್ಯಾಯ | 
ಶಾಂತಿಗುಣ ಸಂಪನ್ನಾಯ | 
ದೇವೇಂದ್ರಾದಿ ದೇವಗಣ ಗರ್ವಭಂಗಾಯ ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ l೩೧l

ಶಾಕ್ತೇಯ ಮಾರ್ಗವರ್ಜಿತಾಯ | 
ಸತ್ಯಮಾರ್ಗ ಪ್ರವರ್ತಕ | 
ಸೋಹಂ ಧ್ಯಾನನಿರತಾಯ 
ಮಹಾರುದ್ರಾಯತೇ ನಮೋ ನಮಃ | ೩೨l

ಹಂಸಮಾರ್ಗ ಸಾಧಕಾಯ 
ಪರಮಹಂಸ ಸ್ವರೂಪಿಣೀ | 
ಜೀವಶಿವ ಭೇದ ವರ್ಜಿತಾಯ
ಅಖಂಡ ಶಿವಲೀಲಾಮೃತ ಪಾನಾಯ | ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೩೩|

ಸಪ್ತಕೋಟಿ ಮಹಾಮಂತ್ರ ಸಾಧಕಾಯ | ಶಿವಶಕ್ತಿ ಸಂಪನ್ನಾಯ | 
ರುದ್ರಾಯ | 
ಸದಾಶಿವ ಪೂಜಾನಿರತಾಯ | 
ನಿತ್ಯತೃಪ್ತಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೩೪|

ದಕ್ಷಯಜ್ಞಮಂಟಪೇ 
ವಿಜೃಂಭಿತಾ ಕೋಪಾಯ । 
ಸುರಗಣ ಋಷಿಗಣ ಗರ್ವಹರಾಯ | 
ದಕ್ಷಬ್ರಹ್ಮ ಶಿರಭೇದಕಾಯ ಮಹಾರುದ್ರಾಯ
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೩೫|

ಶಿವದ್ರೋಹ ಪರಋಷಿ ದೇವತಾ. 
ಮುಖಭಂಗಾಯ | 
ಮಹಾಅಟ್ಟಹಾಸಾಯ, 
ವೀರೋಚಿತ ವಸ್ತ್ರಧರಾಯ | 
ಶೂಲ ಖಡ್ಗ ಢಮರು ಗಧಧರಾಯ 
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೩೬|

ಭೂತ ಪ್ರೇತ ಪಿಶಾಚ ಸಮೇತ 
ಯುದ್ಧರಂಗ ಪ್ರವೇಶಕಾಯ ನಮಃ | 
ಭಯಂಕರ ಸಿಂಹಘರ್ಜನಾ | 
ಭೀಕರಾಟ್ಟಹಾಸಾಯ |
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೩೭|

ಉರಿನೇತ್ರ ಕಿರುಮೀಸಾಧರಾಯ 
ಭಯಂಕರ ಸಿಂಹರೂಪಾಯ 
ದೇವಾಯ | ಸತ್ಯಲೋಕೇಶಿರಾಯ 
ಭೂವರಲೋಕೇ ಉದರಾಯ 
ಪಾತಾಳಲೋಕೇ ದಿವ್ಯಪಾದಾಯ 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೩೮|

ಸೂರ್ಯಮಂಡಲ, ಚಂದ್ರಮಂಡಲ, 
ನಕ್ಷತ್ರಮಂಡಲ | ತೇಜೋಮಂಡಲ | 
ರಣೋತ್ಸಾಹ ಸಂಚರಾಯ | 
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೩೯|

ಕಲಿಮಲಹರಾಯ, ಶಿವರುದ್ರಾಯ, ಕರುಣಾಂತರಂಗಾಯ ಕಪರ್ದಿ 
ಪ್ರಿಯಾಭಕ್ತಾಯ, ಕೋಲಾಹಲ 
ಭೈರವರೂಪಾಯ,
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೪೦|

ಸದಾಶಿವಭಕ್ತ ಜನಹೃದಯ ನಿವಾಸಾಯ |
ಕೈಲಾಸ ಶಿಖರವಾಸಿತ 
ಭಕ್ತವೃಂದ ಪಂಚ ಮಹಾಪಾಪ 
ಘೋರಪಾಪ ನಿವಾರಣಾಯ | ದೇವಾಯ
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ l೪೧l

ಹೇ ಮಹಾರುದ್ರ ಪಾಹಿಮಾಂ ಪಾಹಿಮಾಂ, ದೇವದೇವೇಶ, ಕಲಿಯುಗೇ ಭೀಕರ 
ದಾರಿದ್ರ್ಯ ಸಂಕಟ ನಿವಾರಣಾಯ, 
ಶೀತಜ್ವರ, ತಾಪಜ್ವರ ಸಮಸ್ತ 
ತಾಪತ್ರಯ ನಿವಾರಣಾಯ, ಆರ್ಥಿಕ, 
ಮಾನಸಿಕ, ವ್ಯಾವಹಾರಿಕ ದೋಷ 
ನಾಶಂಕುರು ದೇವಾಯ 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮೋ ನಮಃ |೪೨|

ದಿವ್ಯವೀಕ್ಷಣ ಕರುಣಾ ಕಟಾಕ್ಷಾಯ
ಸದಾಮಾಧವ ಹೃದಯ ನಿವಾಸಾಯ | 
ಬ್ರಹ್ಮತೇಜಃ ಪುಂಜಾಯ,ದೇವಾಯ ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೪೩l

ಶಾಕಿನೀ ಡಾಕಿನೀ ದುಷ್ಟಗ್ರಹ
ನಿವಾರಣಾಯ,ಪರಯಂತ್ರ ಮಂತ್ರ 
ತಂತ್ರ ಶೀಘ್ರಂ ನಿವಾರಣಾಯ, ದೇವಾಯ ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೪೪|

ಸಕಲ ಕಾರ್ಯೇಶು ಶುಭಫಲ 
ಪ್ರದಾಯ, ಸಕಲದೇಶೇ ಸಕಲ 
ಸಂಪತ್ಪದಾಯಕಾಯ, ಸ್ವರಾಜ್ಯೇ 
ಸರ್ವಗ್ರಾಮ ಸಮಸ್ತ ಮಹಾಜನೇ 
ಆಯುರಾರೋಗ್ಯ ಭಾಗ್ಯ ಧನಕನಕ 
ವಸ್ತು ವಾಹನ ಸಕಲ ಸಂಪತ್ ಪ್ರದಾಯ
ಶ್ರೀವೀರಭದ್ರಾಯತೇ ನಮೋ ನಮಃ |೪೫|

ಗೋವು ಬ್ರಾಹ್ಮಣ ಶರಣ ಭಕ್ತರಿಗೆ | 
ನಿತ್ಯವೂ ಒಲಿದು ಕಾಯುವ 
ಕರುಣಾಮೂರ್ತಿ ನೀನೆಂದು ನಂಬಿ 
ಭಜಿಸುವ ಭಕ್ತರ ಕಾಯೋ 
ಶ್ರೀವೀರಭದ್ರಾಯ ನಮಸ್ತೇ ನಮೋ ನಮಃ |೪೬l

ಮಂಗಳವು ನಿನ್ನ ಪಾದಕೆ |
ಮಂಗಳವು ಶ್ರೀರುದ್ರಮೂರ್ತಿಗೆ
ಮಂಗಳವು ಮಂಗಳಕೆ |
ಮಂಗಳವು ಶ್ರೀವೀರಭದ್ರನಿಗೆ l
ಬೆಲಗೂರು ವಾಸನಿಗೆ ಮಂಗಳವು
ಶ್ರೀ ಪ್ರಸನ್ನ ವೀರಭದ್ರನಿಗೆ ನಿತ್ಯವೂ
ಶುಭ ಮಂಗಳವು ||೪೭ ll

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