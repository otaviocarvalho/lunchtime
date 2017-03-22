import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = state;

        this.sort = this.sort.bind(this);
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.text }>
                    { this.state.restaurant }
                </Text>
                <Button
                  title="E hoje?"
                  onPress={this.sort}
                  accessibilityLabel="Choose a restaurant for today's lunch"
                />
            </View>
        );
    }

    sort(event) {
        var getRandomRestaurant = (restaurants) => {
            return restaurants[ Math.floor( Math.random() * restaurants.length) ];
        };

        this.setState(prevState => ({
            'restaurant': getRandomRestaurant(prevState.restaurants)
        }));
    }

}

const state = {
    'restaurants': [
        'Silvão',
        '40inha',
        'Bingo do 50',
        'Onze',
        'Tiozinho', //deprecated
        'Sabor Família',
        'Palatu\'s',
        '32'
    ]
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 60,
        padding: 20,
        fontWeight: 'bold',
    }
});
