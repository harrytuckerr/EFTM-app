import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const WidgetsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer>
      <View style={styles.Viewcj} pointerEvents={'auto'}>
        <Text style={[styles.TextGb, { color: theme.colors.strong }]}>
          {'Coming Soon :)'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextGb: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 22,
  },
  Viewcj: {
    marginTop: 16,
    height: 350,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
});

export default withTheme(WidgetsScreen);
