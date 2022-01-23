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
             *ಶ್ರೀವೀರಭದ್ರ ದಂಡಕಂ*
 {"\n"}{"\n"}
ಶ್ರೀ ಭದ್ರ, ಭದ್ರಾಂಬಿಕಾಪ್ರಾಣನಾಥಾ. ಸುರಾರಾತಿಭಂಗಾ ಪ್ರಭೋ,

ರುದ್ರ ರೌದ್ರಾವತಾರಾ, ಸುನಾಸೀರ ಮುಖ್ಯಾಮರಾನೇಕ
ಸಂಭಾವಿತಾನಲೃ

ಸುಶ್ಲೋಕಚಾರಿತ್ರ. ಕೋಟ್ಯರ್ಕಸಂಕಾಶ ದೇದೀಪ್ಯಮಾನಪಭಾ . ದಿವ್ಯಗಾತ್ರಾ.

ಶಿವಾ, ಪಾಲಿತಾಶೇಷಬ್ರಹ್ಮಾಂಡಭಾಂಡೋದರಾ ಮೇರುಧೀರಾ, ವಿರಾಡ್ರೂಪ ..

ವಾರಾಶಿಗಂಭೀರ, ಸೌಜನ್ಯರತ್ನಾಕರಾ ವಾರಿದಶ್ಯಾಮ .
ನಾರಾಯಣಧೈಯ

ಮೌನೀಂದ್ರಚಿತ್ತಾಬ್ದಬೃಂಗಾ ಸುರಾರಾತಿಭಂಗಾ ಮಹೋದಾರ ಭಕ್ತೌಘಕಲ್ಪದ್ರುಮಾ. ಶಿಷ್ಟರಕ್ಷಾ ಪ್ರಶಸ್ತಪ್ರತಾಪೋಜ್ವಲಾ. ಶ್ರೀಕರಾ.ಭೀಕರಾ .ಭೀಕರಾಲೋಕ ಚೂರ್ಣೀಕೃತಾರ್ಯೇಷು
ದೋರ್ದಂಡ ಪಾಂಡಿತ

ಸಂರಂಭಣೋಲ್ಲಾಸ ರಾಜತ್ಕರಾಂಭೋಜ ವಿನ್ಯಸ್ತ ಖಡ್ಗ ತ್ರಿಶೂಲಾದಿನಾನಾಯುಧಾ.

ಭಂಡನಾಚಾರ್ಯ, ರುದ್ರಾಕ್ಷಮಾಲಾಲಸದ್ಯೇಹ. ರತ್ನಾಂಚಿತಾನರ್ಘ ಸೌವರ್ಣ

ಕೇಯೂರ ಭಾಸ್ಕತ್ ಕಿರೀಟೋತ್ತಮಾಂಗಾ, ತ್ರಿಪುಂಡ್ರಾಂಕ ಸರ್ವಾಂಗಸಂಶೋಭಿತಾ 

ಚಂದ್ರಕೋಟೀರ ಹೇಮಾಂಬರಾಡಂಬರಾ, ದೈವಚೂಡಾಮಣೀ, ಸಂತತಾಖಂಡ.

ದೀರ್ಘಾಯುರಾರೋಗ್ಯ ಸೌಭಾಗ್ಯ ಸಿದ್ಧಿಪ್ರದಾ . ದೇವ. ತಾಪತ್ರಯಧ್ವಾಂತಭಾನೂ.

ವಿಯತ್ಕೇಶ . ಮೃತ್ಯುಂಜಯಾ ದೀನಚಿಂತಾಮಣೀ ಸರ್ವಲೋಕೇಶ . ಲೋಕಾತ್ಮ .

ಲೋಕಸ್ಟರೂಪಾ ಮಹಾಯಜ್ಞವಿಧ್ವಂಸನಾಧ್ಯಕ್ಷ ದಾಕ್ಷಾಯಣೀಪುತ್ರ .

ಅಕ್ಷೀಣಪುಣ್ಯಾ, ವಿಭೋ, ವೀರಭದ್ರಾ, ಮಹಾಕಾಲರುದ್ರಾ. ಕೃಪಾಮುದ್ರ .

ಮಾಂ ಪಾಹಿ ದೀನಬಂಧೋ ದಯಾವಾರಿರಾಶೀ ಲಸಚ್ಚತ್ರಭೂಷಾ

ಮಹಾದಿವ್ಯವೇಷಾ. ಹರಾ , ಭಕ್ತಪೋಷಾ ದಯಾವಾರ್ಥಿ, ವೀರೇಶ್ವರಾ .

ನಿತ್ಯಕಲ್ಯಾಣಸಂಧಾನಧೌರೇಯ ಪಾಪಾಟವೀ ಕೀಲ ದಾವಾನಲಾ. ಪುಣ್ಯಮೂರ್ತೇ, ನಮಸ್ತೇ ನಮಸ್ತೇ ನಮಸ್ತೇ ನಮಃ .

ಇತಿ ವೀರಭದ್ರ ದಂಡಕಂ ಸಂಪೂರ್ಣಂ

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