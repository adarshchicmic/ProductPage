import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
    marginLeft: '2.5%',
  },
  Button: {
    height: '30%',
    width: '95%',
    borderWidth: 1,
    borderWidthColor: 'blue',
    borderRadius: 10,
  },
  ButtonText: {
    textAlign: 'center',
    paddingTop: '2%',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ProductImage: {
    height: '45%',
    width: '90%',
    alignItems: 'center',
  },
  CartContainer: {
    height: 500,
    borderWidth: 0.5,
    borderColor: 'red',
    width: 200,
    padding: 20,
  },
  ContainerCart: {
    width: 'auto',
    height: 'auto',
  },
  ProductTitleStyle: {
    fontSize: 20,
    fontWeight: 600,
  },
  ButtonCart: {
    backgroundColor: 'orange',
    borderWidth: 0.5,
    paddingBottom: 20,
    marginBottom: 20,
  },
});
