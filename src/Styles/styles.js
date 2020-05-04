import {StyleSheet} from 'react-native';
import {AppColours} from './colour';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: AppColours.secondaryColour,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: AppColours.secondaryColour,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: AppColours.primaryTextColour,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: AppColours.primaryTextColour,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: AppColours.primaryColour,
  },
});
