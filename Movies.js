import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';


const movie = {title: 'Doctor Sleep', year: '2019'};

//const MOVIES_DATA = ['Doctor Sleep', 'Midway'];

const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const MovieList = () => {
  return MOVIES_DATA.map((props) => (
    <Movie props={props.title} year={props.year} poster={props.poster} />
  ));
};

class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image source={this.props.poster} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  appTitle: {
    backgroundColor: Colors.black,
    color: '#778899',
  },
});
export {MovieList};
