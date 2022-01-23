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
    title: "ಗುಗ್ಗುಳದ ಬಗ್ಗೆ ಮಾಹಿತಿ",
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
            *ಶ್ರೀ ಗುಗ್ಗುಳದ ಬಗ್ಗೆ ಮಾಹಿತಿಯು* {"\n"}{"\n"}

ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಶ್ರೀ ವೀರಭದ್ರದೇವರನ್ನು ಪೂಜಿಸುವವರು ಮನೆಯಲ್ಲಿ ವಿವಾಹ ಕಾರ್ಯದಲ್ಲಿ ಮೊದಲು ಗುಗ್ಗುಳವನ್ನು ಮಾಡುತ್ತಾರೆ. ಮನೆತನದ ಏಳಿಗೆಯ ಸಲುವಾಗಿ ಮಕ್ಕಳ ಲಗ್ನದಲ್ಲಿ ಮೊದಲು ಗುಗ್ಗುಳವನ್ನು ಮಾಡುವ ಪದ್ಧತಿಯು ಹಿಂದಿನ ಹಿರಿಯರಿಂದ ನಡೆದು ಬಂದ ಸಾಂಪ್ರದಾಯಕವಾಗಿದೆ. ಆದ್ದರಿಂದ ಈಗಿನವರಿಗೆ ಗುಗ್ಗುಳ ಎಂದರೇನು ಎಂಬುದು ತಿಳಿಯದೇ ಅವರನ್ನು ಕೇಳು ಇವರನ್ನು ಕೇಳು ಅನ್ನುವಂಥ ಪ್ರಸಂಗವು ಬರಬಾರದೆಂದು ಮೊದಲಿಗೆ ಗುಗ್ಗುಳದ ಬಗ್ಗೆ ನಮಗೆ ತಿಳಿದಷ್ಟು ಬರೆಯಲಾಗಿದೆ.

ಗುಗ್ಗುಳ ಕೊಡಕ್ಕೆ ಒಂದು ಫೂಟು ಉದ್ದ ಹಾಗೂ ಮೂರು ಇಂಚು ದಪ್ಪವುಳ್ಳ ಎರಡು ಕಟ್ಟಿಗೆಗಳನ್ನು ತರಬೇಕು. ಕಟ್ಟಿಗೆಗಳು ಗಂಧದ್ದು ಇಲ್ಲವೆ ಇಂಗಳದವು ಇರಬೇಕು. ಗುಗ್ಗುಳ ಮಾಡುವ ದಿನಕ್ಕಿಂತ ಒಂದೆರಡು ದಿನ ಮೊದಲು ಕಟ್ಟಿಗೆ ತರಬೇಕು. ಕಟ್ಟಿಗೆಗಳು ಹಸಿ ಇರಬೇಕು. ಗುಗ್ಗಳದ ದಿನಕ್ಕಿಂತ ಒಂದು ದಿನಮೊದಲೇ ಬಡಿಗರವನಿಗೆ ಉಲಪಿಕೊಟ್ಟು ಕಟ್ಟಿಗೆಗಳನ್ನು ತಯಾರ ಮಾಡಲಿಕ್ಕೆ ಕೊಡಬೇಕು. ಉಲುಪೆ ಅಂದರೆ ೫೦೦ ಗ್ರಾಂ ಕಡ್ಲೆ ಬೇಳೆ (೨ ಚಟಾಕು), ೫೦೦ ಗ್ರಾಂ, ಅಕ್ಕಿ, ೫೦೦ ಗ್ರಾಂ. ಗೋದಿಹಿಟ್ಟು ೨೫೦ ಗ್ರಾಂ ಬೆಲ್ಲ, ೧೦೦ ಗ್ರಾಂ ಹುಣಸೇ ಹಣ್ಣು ಮತ್ತು ೫ ಆಣೆ ದಕ್ಷಿಣೆ ಈ ಪ್ರಕಾರ ಕೊಡುವುದಕ್ಕೆ ಉಲುಪೆ ಎನ್ನುತ್ತಾರೆ. ಅಲ್ಲದೆ ಗುಗ್ಗಳ ಕೊಡದ ಕಟ್ಟಿಗೆಗಳನ್ನು ತರುವಾಗ ಬಡಿಗರವನಿಗೆ ರೂ. ೨-೫೦ ಬಾಬು ಕೊಡಬೇಕು.

ಗುಗ್ಗಳ ಕೊಡಗಳನ್ನು ತಯಾರಿಸಲು ಕುಂಬಾರನಿಗೆ ಮುಂಚಿತವಾಗಿ ಹೇಳಿರಬೇಕು. ಗುಗ್ಗುಳ ಮಾಡುವ ದಿನಕ್ಕಿಂತ ಒಂದು ದಿನ ಮೊದಲೇ ಸಾಯಂಕಾಲ ಗುಗ್ಗುಳ ಕೊಡಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಸಮೀಪದ ದೇವಸ್ಥಾನದಲ್ಲಾಗಲಿ, ಮಠದಲ್ಲಾಗಲಿ ಬರಲು ತಿಳಿಸಬೇಕು. ಒಟ್ಟು ಮೂರು ಕೊಡಗಳು, ೨ ಮಗಿ ೧೧ ಮುಚ್ಚಳ (ಪರಡಿ) ತೆಗೆದುಕೊಂಡು ಬರಲು ತಿಳಿಸಿರಬೇಕು. ಎರಡು ಕೊಡಗಳನ್ನು ತರಿಸಬಾರದು. ಏಕೆಂದರೆ ಕೊಡವನ್ನು ಕಟೆಯುವಾಗ ಕೊಡಕ್ಕೆ ಏನಾದರೂ ಧಕ್ಕೆ ಆದರೆ ಮತ್ತೊಂದು ಕೊಡವನ್ನು ಉಪಯೋಗಿಸಲು ಬರುತ್ತದೆ. ಆದ್ದರಿಂದ ಮೂರು ಕೊಡಗಳನ್ನು ತರಿಸಬೇಕು. ಕುಂಬಾರನು ಕೊಡಗಳನ್ನು ತಂದ ಮೇಲೆ ದೇವಸ್ಥಾನದಲ್ಲಿ ಕರೇ ಕಂಬಳಿಯನ್ನು ಹಾಸಿ, ಅದರ ಮೇಲೆ ಮೂರು ಕೊಡಗಳನ್ನು, ಮಗಿಗಳನ್ನು, ಮುಚ್ಚಳಗಳನ್ನು ಇಟ್ಟು ಪೂಜೆಮಾಡಿ ಮೇಲೆ ಹೇಳಿದ ಪ್ರಕಾರ ಉಲುಪೆ ಕೊಟ್ಟು ಕೊಡಗಳನ್ನು ಲಗ್ನದ ಮನೆಗೆ ತರಬೇಕು. ನಂತರ ಐದು ಜನ ಪುರುವಂತರ ಮನೆಗೆ ಹೋಗಿ ಉಲುಪೆ ಕೊಟ್ಟು ಹೇಳಿ ಬರಬೇಕು. ಐದು ಜನ ಪುರುವಂತರಿಗೆ ಹೇಳುವ ದಾಗದಿದ್ದರೂ ಇಬ್ಬರು ಪುರುವಂತರಿಗಾದರೂ ಹೇಳಬೇಕು.

ಗುಗ್ಗುಳ ಕಟ್ಟಿಗೆಗೆ ಸಿಂಬಿ ಮಾಡಲಿಕ್ಕೆ ೧ ಕಟಗಿ ತೆಳುವಾದ ಅರಿವೆಯನ್ನು ತಂದು ಮಡಿ ನೀರಿನಲ್ಲಿ ಒಗೆದು ಹಿಂಡಿ ಒಣಗಿಸಬೇಕು. ನಂತರ ೬ ಸಿಂಬಿಗಳನ್ನು ಮಾಡಿ ಒಂದು ಗುಗ್ಗಳ ಕಟ್ಟಿಗೆಗೆ ಮೂರಂತೆ ಹಾಕಬೇಕು. ಗುಗ್ಗುಳವನ್ನು ಸಮೀಪದ ದೇವಸ್ಥಾನಕ್ಕೆ ಇಳುವದಿದ್ದರೆ, ಕಟಿಗೆ ಅರಿವೆ ತಂದು ನಾಲ್ಕು ಸಿಂಬಿ ಮಾಡಬೇಕು. ಆ ಸಿಂಬಿಗಳನ್ನು ಒಳ್ಳೇ ಎಣ್ಣೆಯಲ್ಲಿ ನೆನೆಹಾಕಿ, ಗುಗ್ಗಳ ಕಟ್ಟಿಗೆಗೆ ಎರಡರಂತೆ ಹಾಕಬೇಕು. ಗುಗ್ಗಳ ಕೊಡವನ್ನು ಕಟಿಯುವ ಮುಂಚೆ ಮನೆಯನ್ನು ಸಾರಿಸಿ, ಒಳ್ಳೇ ಮಡಿಯಿಂದ ಕೊಡವನ್ನು ಕಟಿಯಲಿಕ್ಕೆ ಪ್ರಾರಂಭ ಮಾಡಬೇಕು. ಅದೇ ಕಾಲಕ್ಕೆ ಹೆಣ್ಣು ಮಕ್ಕಳು ಮಡಿಯಿಂದ ಗುಳಿಗೆಯನ್ನು ಮಾಡಬೇಕು. ಮುಂಜಾನೆ ಗುಳಗಿ ಹುಗ್ಗಿಯನ್ನು ತಯಾರಿಸಿ ಗುಗ್ಗುಳ ಕೊಡಕ್ಕೆ ಎಡೆಮಾಡಬೇಕು. ೧೧ ಪರಡಿ (ಮುಚ್ಚಳ)ಗಳಲ್ಲಿ ಗುಳಗಿ ಹುಗ್ಗಿ, ೨ ಎಣ್ಣೆ ಹೋಳಿಗಿ (ಹುರಿಯಕ್ಕಿ ಹೋಳಿಗಿ), ೧ ಲಿಂಬೆಹಣ್ಣು, ಎಲೆ ಅಡಿಕೆ ಮತ್ತು ೫ ಪೈಸಾ ಇಡಬೇಕು.

ಗುಗ್ಗುಳ ಕೊಡಕ್ಕಾಗಿ ಮೊದಲೇ ಕಾಕುಳ್ಳುಗಳನ್ನು (ಬಿದ್ದು ಒಣಗಿದ ಆಕಳ ಸೆಗಣಿ) ತಂದಿಟ್ಟುಕೊಂಡಿರಬೇಕು. ಕಾಕುಳ್ಳುಗಳನ್ನು ಸುಟ್ಟು ಬೂದಿಯನ್ನು ಮತ್ತು ಕಣಕ (ನೀರು ಹಾಕಿ ಕಲಿಸಿದ ಗೋಧಿಹಿಟ್ಟು), ೨ ಕೆ.ಜಿ. ಜವಾರಿ ಹತ್ತಿಕಾಳು ೨೫ ಗ್ರಾಂ. ಗುಗ್ಗುಳ (ಧೂಪ) ಇವುಗಳಿಂದ ಗುಗ್ಗುಳ ಕಟ್ಟಿಗೆಯನ್ನು ಕೊಡದಲ್ಲಿ ಇಟ್ಟು, ಕಟ್ಟಿಗೆ ಗಟ್ಟಿಯಾಗಿ ನಿಲ್ಲುವಂತೆ ಸರಿಯಾದ ಪ್ರಮಾಣದಲ್ಲಿ ತುಂಬಬೇಕು. ಇಷ್ಟು ಆದ ಮೇಲೆ ಮಜಲಿನೊಂದಿಗೆ ಪುರವಂತರನ್ನು ಕರೆಯಲು ಹೋಗಬೇಕು, ಪುರುವಂತರು ಬಂದ ಮೇಲೆ ಅವರಲ್ಲಿ ಹಿರೇ ಪುರುವಂತರು ವಡಪುಗಳು ಹೇಳುತ್ತ ಉತ್ತಮವಾದ ಕರ್ಪೂರದಿಂದ ಗುಗ್ಗುಳ ಪುಟ ಮಾಡಬೇಕು, ೨ ಮಗಿಗಳಲ್ಲಿ ಪಾದೋದಕ ಹಾಕಿ ಎಲ್ಲ ಕಡೆಗೂ ಪಾದೋದಕ ಸಿಂಪಡಿಸಬೇಕು. 

ಗುಗ್ಗುಳ ಹೊರಟ ನಂತರ ಎಲ್ಲಿ ದೇವರ ಗುಡಿಗಳೂ ಬರುವವೋ ಅಲ್ಲಿ ಪಾದೋದಕ ಹಾಕಿ, ಕರೆ ಕಂಬಳಿ ಹಾಸಿ, ಕೊಡಗಳನ್ನು ಇಳುವಿ ವಚನ ಹೇಳಬೇಕು. ಮುಗಿದ ನಂತರ ಕಾಯಿ ಒಡೆದು, ಗುಗ್ಗುಳ ಕೊಡವನ್ನು ಸಾಗಮಾಡಬೇಕು. ನೀವು ಗುಗ್ಗುಳವನ್ನು ಯಾವ ದೇವರಿಗೆ ಇಳುವ ಬೇಕೆಂದು ನಿಶ್ಚಯಿಸಿರುವಿರೋ ಆ ಗುಡಿಯು ಬಂದ ಮೇಲೆ ಅಲ್ಲಿ ಗುಗ್ಗುಳ ಕೊಡವನ್ನು ಹಿಡಿದು ಮದುಮಕ್ಕಳನ್ನು ಮುತ್ತೈದೆಯರನ್ನು ಕೊಡದ ಬುಡಕ್ಕೆ ೫ ಸುತ್ತು ಹಾಯಿಸಬೇಕು. ನಂತರ ದೇವರ ಗುಡಿಯ ಒಳಗೆ ಪ್ರವೇಶ ಮಾಡಿಸಿ, ಮದುಮಗನಿಗೆ ಎಲೆ ಬಾಸಿಂಗ ಕಟ್ಟಬೇಕು. ನಂತರ ದೇವರಿಗೆ ನಮಸ್ಕರಿಸಿ ಮಂಗಳಾರುತಿ ಮಾಡಬೇಕು ಗುಗ್ಗುಳ ಕೊಡಗಳಿಗೆ ಆಕಳ ಹಾಲನ್ನು ಹಾಕಿ ಶಾಂತಗೊಳಿಸಬೇಕು. ತಿರುಗಿ ಬರುವಾಗ ಮದುಮಗನ ಕೈಯಲ್ಲಿ ಕೈಕೋಲ ದೀವಟಿಗೆಯನ್ನು ಕೊಡಬೇಕು. ಮದುಮಗಳ ಕೈಯಲ್ಲಿ ಆರತಿಯನ್ನು ಕೊಡಬೇಕು. ಲಗ್ನದ ಮನೆಗೆ ಬಂದ ನಂತರ ೧೧ ಪರಡಿಗಳನ್ನು ಹಂಚಬೇಕು. ಐದು ಜನ ಪುರವಂತರಿಗೆ ಒಬ್ಬೊಬ್ಬರಿಗೆ ಒಂದೊಂದು ೫, ದೈವದವರಿಗೆ ೨, ಕರಿಡಿಮಜಲಿನವರಿಗೆ ೨, ಅಯ್ಯನವರಿಗೆ ೧, ಪರಸ್ಥಳದ ಅಯ್ಯನವರಿಗೆ೧ ಈ ಪ್ರಕಾರ ಪರಡಿ ಯನ್ನು ಕೊಟ್ಟು ಕಳಿಸಬೇಕು. ಇಲ್ಲಿಗೆ ಗುಗ್ಗುಳ ಕಾರ್ಯವು ಮುಗಿಯುವದು.

            </Text>
          </ScrollView>
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