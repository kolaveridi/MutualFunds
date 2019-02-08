import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import TopBarNav from 'top-bar-nav';

import EquityFunds from './Components/EquityFunds';
import DebtFunds from  './Components/DebtFunds';
import HybridFunds from './Components/HybridFunds';
import CommodityFunds from './Components/CommodityFunds';


const ROUTES = {
	EquityFunds,
    DebtFunds,
    HybridFunds,
	CommodityFunds,

};
const ROUTESTACK = [
	{ text: 'Equity',   Component: 'EquityFunds' },
	{ text: 'Debt',     Component: 'DebtFunds' },
	{ text: 'Hybrid',   Component: 'HybridFunds' },
	{ text:'Commodity', Component: 'CommodityFunds'},

];

export default class TopBarNaviagtion extends React.Component {

	render() {
		return (

			<View style={{ flex: 1 }}>


                    <TopBarNav

    					routeStack={ROUTESTACK}
    					renderScene={(route, i) => {
    						let Component = ROUTES[route.Component];
							return <Component
									  index={i}
									   data={this.props.data}
									   equity={this.props.equity}
									   debt={this.props.debt}
									   hybrid={this.props.hybrid}
									   commodities={this.props.commodities}

									   />;
    					}}
    					headerStyle={[styles.headerStyle, { paddingTop: 40 }]}
    					labelStyle={styles.labelStyle}
    					underlineStyle={styles.underlineStyle}

    					sidePadding={5}
    					inactiveOpacity={1}
    					fadeLabels={true}
    				/>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	headerStyle: {
		borderBottomWidth: 1,
		borderColor: '#e6faff',
		backgroundColor: 'white',

	},
	labelStyle: {
		fontSize: 5,
		fontWeight: 'normal',
		color: 'blue'
	},

	underlineStyle: {
		height: 3.6,
		backgroundColor: 'black',

	}
});
