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
    title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ತಾರಾವಳಿ",
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
        <View style={{flex: 1}}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <ScrollView>
            <Text style={styles.textalign}> Page 1 </Text>
            <Text style={styles.textalign}>
              *ಶ್ರೀ ವೀರಭದ್ರ ತಾರಾವಳಿ* {'\n'}
              {'\n'}
              (ಶಾರ್ದೂಲವಿಕ್ರೀಡಿತ) ಶ್ರೀ ವೀರಾಗ್ರಣಿ ವೀರಭದ್ರನತೆ 
              ದಾರಿದ್ರಘವಿಚ್ಛೇದನಂ | {'\n'}
              ಶ್ರೀ ವಿಶ್ವೇಶಮನಶ್ಚ ಕೋರಶಶಿನಂ ದಕ್ಷಧ್ವರ ಧ್ವಂಸನಂ ||  {'\n'}
              ಶ್ರೀ ವಾಸ್ತೋವ್ಯತಿ
              ವಂದಿತಾಂಘ್ರಯುಗನಂ ಮೋಹಾಂಧಕಾರಘ್ನೆನಂ | 
              ಶ್ರೀ ವೀರೇಶನ ಸೇವಿಪೇಂ ಸಲಹುಗೇ ಶ್ರೀ
              ಭದ್ರಕಾಳೀ ಪ್ರಿಯಂ  {'\n'}
              || ೧ || ಕಂದ || ಶ್ರೀಗಜವದನಾನುಜನೆ | ಆಗಮವಂದಿತನೆ
              ಅಖಿಳಸುರಸೇವಿತನೇ || 
              ಈಗೆಮಗಿಷ್ಟಾರ್ಥಂಗಳ | ಬೇಗದಿ ಶ್ರೀವೀರಭದ್ರಕರುಣ ಸಮುದ್ರಾ {'\n'}
              || ೨ || ದಾಕ್ಷಾಯಣಿ ವರಪುತ್ರನೆ l ದಕ್ಷಧ್ವರಹರನೆ ಉರಗಧರಶು ಭಕರನೇ |
              ದಕ್ಷೀಂದ್ರ ಗಮನವಿನುತನೆ | ರಕ್ಷಿಸು ಶ್ರೀವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೩ ||
              ಹರನುರಿಗಣ್ಣಿನಜ್ವಾಲೆಯೊ | ಳುರೆ ನೀನುದ್ಭವಿಸಿ ದುರಿತತರುಹರನೆನಿಸೀ || ಹರಿ
              ಅಜಸುರರೀಸೇವಿಸಿ | ಮೆರೆವೈ ಶ್ರೀ ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೪ ||
              ದಕ್ಷನದಕ್ಷತೆಯನು ನೀಂ | ಸೀಕ್ಷಿಸಿರಕ್ಷಿಸಿದ ಮೋಕ್ಷದೀಕ್ಷಾಕರನೇ || ಇಕ್ಷುವರ
              ಹರನಪುತ್ರನೆ ಈಕ್ಷಿಸು ಶ್ರೀ ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              ll ೫ ll ಭದ್ರಕರರುದ್ರ
              ಸಂಭವ | ಕ್ಷುದ್ರೌಘವಿಚಿದ್ರದೂರಿಕೃತದಾರಿದ್ರಾ || ಭದ್ರಾಂ ಗನತಸುರದ್ರುಮ |
              ಚಿದ್ರೂಪನೇ ವೀರಭದ್ರ ಕರುಣಸಮುದ್ರಾ  {'\n'}
              || ೬ || ಸುರರಂಪಾಲಿಸೆಮೋದದಿ |
              ಪುರಹರನಾಜ್ಞೆಯಲಿ ರಿಸಿಕರಭಾಕೃತಿಯಂ | ನರಹರಿಯತರಿದುಲೋಕವ ಪೊರೆದೈ ಶ್ರೀ
              ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ {'\n'}
              || ೭ || ವೀರನೆ ಭಕ್ತಮನಸ್ಸಂ | ಚಾರನೆಭವಹರನೆಸಾರತ
              ರಸುಖಕರನೇ || ಧೀರಗುಣ ಪೂರನತಮಂ | ಧಾರನ ಶ್ರೀ ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ || ೮
              || ದಿನಕರದಂತವಿಭಗ್ನನೆ | ಅನಿಮಿಷವಂದಿತನೆ ಭಕ್ತರಘಸಂಹರನೆ l ಅನುದಿನತವದವದೈವ |
              ನೆನವನು ಶ್ರೀ ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೯ || ಹುಂಕಾರದಿ ದಕ್ಷನವರ |
              ಬಿಂಕವನಪಹರಿಸಿ ಶಿರವನುಪಸಂಹರಿಸೀ | ಅಂಕಿತಕಜಶಿರವಿನಿರಿಸಿದ | ಶಂಕರ ಶ್ರೀ
              ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೧೦ || ಕಂಕಾಳಧರನೆತವದದ | ಪಂಕಜಸ್ಮರಣೆಯಲ್ಲಿ
              ಭೂತಭೇತಾಳಗ್ರಹ || ಸಂಕುಲ ನಿಲುವವೆಭಕ್ತನು ಖಂಕರ 
              ಶ್ರೀ ವೀರಭದ್ರ ಕರುಣಾ ಸಮುದ್ರ  {'\n'}
              ll ೧೧ ll ನರಭದ್ರಕಾಳಿವದನಾಂ | ಬುರುಹಾರಡಿದೀನಜನಕೆ ನೀಂದಯಮಾಡೀ |
              ಕರುಣಿಸುಯಿಷ್ಟಾರ್ಥವ ಶುಭ | ಕರವರಶ್ರೀ ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೧೨ ||
              ಅಡಿಗಡಿಗೆನಿನ್ನ ಸ್ಮರಣೆಯ | ಬಿಡದಾಂನುತಿಗೈವತೆರದಿ ಕೊಡುಸನ್ಮತಿಯಂ || ಜಡಮತಿಯ
              ಬಿಡಿಸಿನಂತತ | ಮೃಡಸುತಶ್ರೀ ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೧೩ ||
              ಮೃಡನಕಿಡಿಗಣ್ಣಿನೊಳು | ಘುಡಿಘುಡಿಸುತವೊರಮ ಡುತೆಜಡಿದುಖಡುಗನಪಿಡಿದಾ
              |ರ್ಭೇವಿಸಿಸದೆಬರಿದೆದಕ್ಷನ | ಕಡುಗರಿ ಶ್ರೀ ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೧೪ ||
              ಇಂದುಮುಖಿ ಭದ್ರಕಾಳಿಯ | ಕಂದುಟಿಯಂ ಸವಿವಸುಖದಿಮರೆಯದಿರನ್ನಂ ||
              ಕಂದನತೆರದಿಂದಲಿಪೊರೆ | ಚಂದದಿ ಶ್ರೀ ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ {'\n'}
              || ೧೫ ||
              ಚಂದಿರಮುಖಸುಂದರನಿ | ನ್ನೆಂದೆಂದಿಗು ಮರೆಯದಂತೆ ಸಂಧಿಸುಮತಿಯಂ ।।
              ಬಂಧುರರೂಪನೆಸದ್ಗುಣ | ಬೃಂದನೆ ಶ್ರೀ ವೀರಭದ್ರಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೧೬ ||
              ಚಲದಂಕಫಲಕರಶ್ರೀ | ಲಲನಾಮಣಿಭದ್ರಕಾಳಿ ಪ್ರಿಯಕೃಪೆತಾಳೀ | ಸಲಹೆಮ್ಮ ಸುಗುಣಪಾಳೀ
              | ಸುಲಲಿತಶ್ರೀ ವೀರಭದ್ರಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೧೭ || ರುಂಡಾವಳಿಧಾರಣಭವ |
              ಖಂಡನಮಂಡಿತಸುರಾಳಿ ಮಕುಟಸುಚರಣಾ | ಖಂಡೆಂದುಧರನಸುತಗುಣ |
               ಮಂಡನ ಶ್ರೀ ವೀರಭದ್ರ
              ಕರುಣಸಮುದ್ರಾ  {'\n'}
              || ೧೮ || ಶಾಕಿನಿಢಾಕಿನಿಮುಖನರ | ಭೀಕರಗ್ರಹವಿತಿಯ
              ಮೈಸೋಕದತೆರದಿಂ || ನೀಕೃಪೆಗೈಯುತವೊರೆನತ || ಶ್ರೀ ಕರಶ್ರೀವೀರಭದ್ರ ಕರುಣ
              ಸಮುದ್ರಾ  {'\n'}
              || ೧೯ || ಅಂಬುಜಮುಖಿತನಪ್ರೀಯಳ | ಬಿಂಬಾದರವನ್ನು
              ಸವಿದುಚುಂಬಿಪನೆವದಿಂ ನಂಬಿದರನುರೆವರೇಪಿ | ವ್ಯಾಂಬರಶ್ರೀವೀರಭದ್ರ ಕರುಣ
              ಸಮುದ್ರಾ {'\n'}
              || ೨೦ || ಅಂಗಜಮದಂಗನನುತ | ಸಂಘಟಿಸೈಸುಖವತುಂ ಗಬಲನೀನೆನ್ನೋಳ ||
               ಮಂಗಳ
              ಮೂರುತಿವೃಷಭತು | ರಂಗನ ಶ್ರೀ ವೀರಭದ್ರ ಕರುಣಸಮುದ್ರಾ  {'\n'}
              || ೨೧ ||
              ತ್ರಿಣಯನಪ್ರಣುತಾಂಗನೆಸುರ | ಗಣವಂದಿತಚರ ಣಅಣುಗನನ್ನಂಸಲಹೈ
              ಮಣಿಮಣಿದುನುತಿವೆನ್ನಿನು | ಗುಣನಿಧಿಶ್ರೀ ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರಾ  {'\n'}
              || ೨೨ ||
              ಅರುಣಕಿರಣಾಂಬರಾವೃತೆ | ತರುಣೀಮಣಿಭದ್ರ ಕೌಳಿಕರವಿಡಿದುದರಿಂ ||
              ಧರಣಿಯಲಿಪೂರ್ಣನಾದೈ | ವರ ಗುಣಶ್ರೀ ವೀರಭದ್ರ ಕರುಣಸಮುದ್ರಾ {'\n'}
              || ೨೩ ||
              ರಶಿವದನಿವಿರುಮರ್ಲೋಚನ | ಬಸಜಾನನೆಭದ್ರಕಾಳಿಮಖಬಂಟರನೀಂ || ಝಸವೆತ್ತು
              ವಾಲಿಸಮ್ಮನು | ಕುಶಲದಿಶ್ರೀ ವೀರಭದ್ರ ಕರುಣಸಮುದ್ರಾ  {'\n'}
              || ೨೪ || ನೂತನವಲ್ಲಿ
              ನಿವಾಸನೆ | ಕಾತೋದರಿಭದ್ರಕಾಳಿಸು ಖದಾಯಕನೆ | ಭೂತಗಣ ನಾಥಸದ್ಗುಣ | ವೊತನೆ ಶ್ರೀ
              ವೀರಭದ್ರ ಕರುಣ ಸಮುದ್ರ  {'\n'}
              ll ೨೫ ll ಮಂಗಳವಾಗಲಿನಿನಗೆಕು | ರಂಗಾಂಬಕಿ ಭದ್ರಕಾಳಿ
              ಪ್ರೀಯನವೃಪಭತು ರಂಗನೆನರಶಿಂಗನಭವ || ಭಂಗನೆ ಶ್ರೀ ವೀರಭದ್ರಕರುಣ ಸಮುದ್ರ|| ೨೬
              || ಮಂಗಳದೀನದಯಾಳುವೆ ಮಂಗಳಣಭಜಕಾಳಿಗನಿಶವರಸುರತರುವೆ || ಮಂಗಳಜಯಮಂಗಳ ಶುಭಮಂಗಳ
              ಶ್ರೀ ವೀರಭದ್ರಕರುಣಸಮುದ್ರ  {'\n'}
              || ೨೭ || ಶ್ರೀ ವೀರಭದ್ರವರದಾ | ಜೀವಸ್ತುತಿಯನ್ನ
              ಮತಿಗೆ ಮಂಗಳವೀಯಲೆ ಈವರತಾರಾವಳಿಯಂ | ಕೋವಿದರಾಮೋದಿನಲ್ಕೆರಚಿಸಿದೆನೊಲವಿಂ || ೨೮
              || ಮಂಜುಳ ಹೊಸಹಳ್ಳಿಯೊಳಿಹ | ಕಂಜಾನನವೀರ ಭದ್ರ ಭಕ್ತಾಗ್ರಣಿತಾಂ |
              ರಂಜಿಪಮಳೂರುವಾಸಿಪ | ನಂಜಪ್ಪಾಚಾರ್ಯರಿದನುರಚಿಸೆಂದೊರೆಯಲೇ {'\n'}
               || ೨೯ ||
              ಭುವಿಯೊಳಿದಪರಿವಭಕ್ತರಿ | ಗವಿರಳಮೋದವನು ಭದ್ರಕಾಳೀಧವತಾಂ ||
              ನವಿನಯದೊಳೀಯಲೆನ್ನುತೆ | ತವೆಹರುಷದಿರಚಿಸಿಹಂ ಪ್ರಸನ್ನಾಚಾರಂ  {'\n'}
              || ೩೦ || ಗದ್ಯ
              || ಇದುವರಸುಧಾಂಶುಧನ ಪ್ರಮುಖಾ ಮರಾರ್ಚಿತ ವದಾಂಭೋಜಾತ 
              ನಿಖಿಲಲೋಕವ್ರಣೀತ
              ಲೋಕೈಕನಾಥ ಶ್ರೀಗುರು ವಿಶ್ವಕರ್ಮ ನಿಜವದನಾಬ್ಜ 
              ಸಂಜಾತಮ ಸುವರ್ನಸಗೋತ್ರ ವೊತರಸಿಕ
              ಜನನಿಚಯ ಮಾನಿತ ಶ್ರೀ ಪ್ರಸನ್ನಾಚಾರ್ಯ 
              ವಿರಚಿತ ಶ್ರೀ ವೀರಭದ್ರ ತಾರಾವಳಿ ಸಮಾಪಂ
              || ೩೧ ||
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