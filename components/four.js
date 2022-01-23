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
    title: "ಶ್ರೀ ವೀರಭದ್ರಾಷ್ಟಕಂ",
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
             *ಶ್ರೀ ವೀರಭದ್ರಾಷ್ಟಕ* {"\n"}{"\n"}

ದಕ್ಷಯಜ್ಞಾಪದಂಚೈವ ಸರ್ವದೇವ ಮುದಾವಹಂ | 
ವೀರಚೂಡಾಮಣಿಂ ವೀರಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ।। 
{"\n"}
ಭೈರವಂ ಭೈರವಾಕಾರಂ ಭದ್ರಂ ಭದ್ರೇಶ್ವರಂ ಪ್ರಭುಂ । 
ರುದ್ರಂ ರುದ್ರಗಣಾಧೀಶಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ।।
{"\n"}
ವೀರೇಶ್ವರಂ ವಿರೂಪಾಕ್ಷಂ ನಾರಸಿಂಹ ಮಘಾಂತಕಂ |
ಅಹಿ ಭೂಷಂ ಶುಭಾಕಾರಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ।l
{"\n"}
ಸರ್ವಜ್ಞಂ ಜಗದಾಧಾರಂ ಶೂಲ ಹಸ್ತಂ ನಟೇಶ್ವರಂ | 
ಮುಕ್ತಿಪ್ರದಂ ಮಹಾದೇವಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ।l
{"\n"}
ಭೂತೇಶಂ ಸರ್ವಭೂತೇಶಂ ನಾಯಕಂ ಸರ್ವನಾಯಕಂ । 
ದೇವದೇವಂ ಮಹಾದೇವಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ||
{"\n"}
ಬ್ರಹ್ಮವಿಷ್ಣು ಸುರಾಧೀಶಂ ಸೇವ್ಯಪಾದ ಸರೊರುಹಂ । 
ಭದ್ರಕಾಳೀ ಪತಿಂದೇವಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ |l
{"\n"}
ಖಟ್ವಾಂಗ ಧಾರಿಣಂ ಶೂರಂ ಚಂದ್ರ ಸೂರಾಗ್ನಿಲೋಚನಂ । 
ವಿಷ್ಣುಚಕ್ರ ವಿಖಂಡಂಚ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ || 
{"\n"}
ವೀರೋತ್ತಮಂ ಮಹಾವೀರಂ ವೀರಭಾಷಣ ತತ್ಪರಂ | 
ವೀರ ಸಿಂಹಾಸನಾರೂಢಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ||
{"\n"}
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
              ಕರವನು ಮುಗಿದು | 
              ಜಗವೆ ಪೂಜಿಸುವ ಶಿವರೂಪಿ ನೀನು ಭಕ್ತರ ಪಾಲಿಗೆ 
              ವರ ಕಾಮಧೇನು
              {"\n"}
              //೧// ಶಿವನ ಜಡೆಯಲೀ ಉದಿಸಿದೆ ನೀನು ಹರನ 
              ಕೋಪಾಗ್ನಿಯ ಜ್ವಾಲೆಯು ನೀನು ||
              ರುದ್ರಾವತಾರದಿ ಖಡೆ ಖಡೆ ಎನುತಲಿ ದಕ್ಷನ 
              ಯಜ್ಞದ ಕಡೆಗೇ ನಡೆದೆ 
              {"\n"}
              //೨// ಶಿವ
              ನಿಂದೆಯನು ಸಹಿಸದೆ ಸತಿಯು ಯಜ್ಞ ಕುಂಡದೀ ದಹಿಸುತ್ತಿರಲು || 
              ತಾಯಿಯ ದಹನದ
              ದೃಶ್ಯವ ಕಂಡು ವೀರಗೆ ಹರಿದವು ಕಣ್ಣೀರ ಹೊಳೆಯು ||
              {"\n"}
              ೩// ಶಿವನ ಆಜ್ಞೆಯನು ಪಾಲಿಸಲು
              ನೀ ದಕ್ಷನ ಸೈನ್ಯದ ದರ್ಪವ ಮುರಿದು || 
              ದಕ್ಷ ಬ್ರಹ್ಮನಾ ಶಿರವನು ಹರಿದು ದಹಿಸದೆ
              ಅವನಾ ತಲೆಯನು ನೀನು 
              {"\n"}
              //೪// ಭದ್ರನ ಕಾಯಕ ಭಕ್ತಿಗೆ ಮೆಚ್ಚಿ 
              ಪರ ಶಿವ ತಾನು ವರವನು
              ನೀಡಿ || ಕೃಷ್ಣಾ ನದಿಯ ಎಡ ದಂಡೆಯ ಮೇಲೆ 
              ನೆಲೆಸೀಗ ನೀನು ವಿರೂಪಾಕ್ಷ ನಾಗಿ
              {"\n"}
              //೫// ಶಿವನ ಆಜ್ಞೆಯಂತೆ 
              ಯಡೂರ ಕ್ಷೇತ್ರದಿ ಲಿಂಗ ರೂಪದಿ ಕಂಗೊಳಿಸುತಲೀ ||
              ಕಾಡಸಿದ್ಧರಾ ಕರುಣೆಯ ಕಣ್ಣಿಗೆ 
              ಕಾಣುವೆ ನೀನು ಬೂದಿಯ ಒಳಗೆ 
              {"\n"}
              //೬// 
              ಕಾಡ ಸಿದ್ಧರೂ
              ಯಡೂರ ಜನರು ಅಗಿದರು ಅಲ್ಲಿಯ 
              ಬೂದಿಯ ನೆಲ್ಲವ || 
              ಅಲ್ಲಿ ಕಾಣುವನು ವಿರೂಪಾಕ್ಷ
              ಲಿಂಗಾ ಕಂಡ ಭಕ್ತರಿಗೆ ಅತಿ ಆನಂದ 
              {"\n"}
              //೭// 
              ವೀರಭದ್ರಗೆ ಒಡಪನು ಹೇಳಲು ಭದ್ರಕಾಳಿಗೆ
              ಭಕ್ತಿಯಿಂದ ನಮಿಸಲು || 
              ವಿಶಾಳಿ ಜಾತ್ರೆಗೆ ತೇರನು ಎಳಯಲು ಸಾವಿರ ಸಾವಿರ ಭಕ್ತರು
              ಬರುವರು 
              {"\n"}//೮// 
              ಲಿಂಗರೂಪದಲಿ ವೀರಭದ್ರನಾ ಮಹಾ ದರುಶಣಾಂ ||
               ಯಡೂರ ವೀರಭದ್ರೇಶ ತವ
              ಪಾದ ಶರಣು || *ರಚನೆ*:- ಶ್ರೀಶೈಲ ಶಾಸ್ತ್ರಿಗಳು, 
              ಯಡೂರು ಪಾಠಶಾಲೆ.
              {"\n"} *ಶ್ರೀ
              ವೀರಭದ್ರೇಶ್ವರ ಪ್ರಚಾರ ಸಮಿತಿ*
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