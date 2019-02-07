import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBarNav from 'top-bar-nav';

import EquityFunds from './Components/EquityFunds';
import DebtFunds from  './Components/DebtFunds';
import HybridFunds from './Components/HybridFunds';
import CommodityFunds from './Components/CommodityFunds';

const ROUTES = {
	EquityFunds,
    DebtFunds,
    HybridFunds,
    CommodityFunds



};
const ROUTESTACK = [
	{ text: 'Equity', title: 'EquityFunds' },
	{ text: 'Debt', title: 'DebtFunds' },
	{ text: 'Hybrid', title: 'HybridFunds' },
    { text:'Commodity',title: 'CommodityFunds'},

];

export default class TopBarNaviagtion extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>


                    <TopBarNav

    					routeStack={ROUTESTACK}
    					renderScene={(route, i) => {
    						let Component = ROUTES[route.title];
    						return <Component index={i} />;
    					}}
    					headerStyle={[styles.headerStyle, { paddingTop: 40 }]}
    					labelStyle={styles.labelStyle}
    					underlineStyle={styles.underlineStyle}
    					imageStyle={styles.imageStyle}
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
	imageStyle: {
		height: 20,
		width: 20,
		tintColor: '#e6faff'
	},
	underlineStyle: {
		height: 3.6,
		backgroundColor: 'black',
		width: 20
	}
});
