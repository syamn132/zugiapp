import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native'
import HomeLogo from '../components/HomeLogo'
import ItemsCarousel from '../components/ItemsCarousel'
import Searchbar from '../components/Searchbar'
import HomeBanner from '../components/HomeBanner'
import GroceryBanner from '../components/GroceryBanner'
import ProductsHeading from '../components/ProductsHeading'
import { groceries, products } from '../utils/ElectronicsData'

function HomeScreen() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    marginTop: 15,
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style={{ gap: 10, paddingBottom: 20 }}
                >
                    <HomeLogo />
                    <Searchbar />
                    <HomeBanner />
                    <ProductsHeading title="Electronics" />
                    <ItemsCarousel data={products} />
                    <GroceryBanner />
                    <ProductsHeading title="Groceries" />
                    <ItemsCarousel data={groceries} />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;