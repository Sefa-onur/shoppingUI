import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const width = Dimensions.get('window').width

const TopTab1 = () => {

    const { email, setemail } = useState();
    const { country, setcountry } = useState();

    const getReguest = [
        [
            { itemUrl: 'https://productimages.hepsiburada.net/l/38/600-800/10614069559346.jpg', id: 1 },
            { itemUrl: 'https://www.azrabutik.com/945-thickbox_default/kisa-duz-sifon-elbise-bordo.jpg', id: 2 },
            { itemUrl: 'https://www.mispacoz.com/i/l/001/0010376_boyundan-baglamali-sirt-dekolteli-maxi-elbise-beyaz.jpeg', id: 3 },
            { itemUrl: 'https://resim.ozgeozgenc.com/20koz0782/kir/payetli-kadife-elbise-pynp-44769-1143.jpg', id: 4 }
        ],


        [
            {
                Modal: 'Avant Men Bolt Shoes',
                Brand: 'Adidas',
                Price: '250',
                discountedprice: '150',
                imageUrl: 'https://productimages.hepsiburada.net/l/39/600-800/10644980138034.jpg',
                id: 1
            },
            {
                Modal: 'Cotton t-shirt',
                Brand: 'Clobus',
                Price: '350',
                discountedprice: '250',
                imageUrl: 'https://i.pinimg.com/originals/0e/4b/b9/0e4bb9bc138a89c9d9d19f91a34326b0.jpg',
                id: 2
            },
            {
                Modal: 'T-shirt',
                Brand: 'Zara',
                Price: '254',
                discountedprice: '150',
                imageUrl: 'https://images.ruyandagor.com/2017/04/mavi-elbiseli-kadin-gormek-0017.jpg',
                id: 3
            },
            {
                Modal: 'Evening Dress',
                Brand: 'Loui Vuitton',
                Price: '850',
                discountedprice: '650',
                imageUrl: 'https://www.yenimoda.gen.tr/images/trendyol/Koton-Kadin-Yesil-Elbise-8YAK88619PW-Trendyol5401.jpg',
                id: 4
            }
        ],


        [
            {
                imageUrl: 'https://www.burcuaslan.com/loya-dress-everyday-dress-models-burcuaslan-1820-22-B.jpg',
                Modal: 'Woman T-shirt',
                Brand: 'BIBA',
                Price: '120',
                id: '1'
            },
            {
                imageUrl: 'https://cdn.e-tesettur.com.tr/UserFiles/Urun/L/20/07/03/14/53/c7f1bb06-fbfe-4b6c-b692-66f6e99c48cb.jpg',
                Modal: 'Woman Sleeve',
                Brand: 'Aurelia',
                Price: '150',
                id: '2'
            },
            {
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1agXkKpXXXXauXXXXq6xXFXXX0/Alibaba-quickly-send-hot-models-2018-prom-dress-high-grade-fine-lace-fabric-clothes-long-section.jpg',
                Modal: 'Dress',
                Brand: 'ZARA',
                Price: '850',
                id: '3'
            },
            {
                imageUrl: 'https://kadinev.com/wp-content/uploads/2019/04/transparent-wedding-dress-models-2019.jpg',
                Modal: 'Evening Dress',
                Brand: 'H&M',
                Price: '450',
                id: '4'
            },
        ]
    ]
    console.log(getReguest[0])
    const renderPic = ({ item }) => {
        return (
            <View style={{ elevation: 5 }} >
                <Image source={{ uri: item.itemUrl }} style={styles.Image} />
            </View>

        )
    }
    const renderItemPrice = ({ item }) => {
        return (
            <View style={styles.Card} >
                <Image source={{ uri: item.imageUrl }} style={{ height: 150, width: 170 }} />
                <Text style={{ fontWeight: 'bold' }} > {item.Modal} </Text>
                <Text style={{ color: '#ff2400' }} > {item.Brand} </Text>
                <View style={{ flexDirection: 'row', flex: 1 }} >
                    <View style={{ flex: 1 }} ><Text style={{ fontWeight: 'bold', }} > {'$' + item.Price} </Text></View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}><Text style={{ fontWeight: 'bold', color: 'gray' }} > {'$' + item.discountedprice} </Text></View>
                </View>
            </View>
        )
    }
    const rendersales = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }} >
                <Image source={{ uri: item.imageUrl }} style={{ height: 60, width: 60, borderRadius: 5 }} />
                <View style={{ flex: 1 }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 5 }} > {item.Modal} </Text>
                    <Text style={{ color: '#ff2400', margin: 5 }} > {item.Brand} </Text>
                </View>
                <View style={styles.PriceButton} >
                    <Text style={{ color: 'white' }} > {'$' + item.Price} </Text>
                </View>
            </View>
        )
    }
    const ItemPrice = ({ item }) => {
        return (
            <View style={styles.Card} >
                <Image source={{ uri: item.imageUrl }} style={{ height: 150, width: 170 }} />
                <Text style={{ fontWeight: 'bold' }} > {item.Modal} </Text>
                <Text style={{ color: '#ff2400' }} > {item.Brand} </Text>
                <View style={{ flexDirection: 'row', flex: 1 }} >
                    <View style={{ flex: 1 }} ><Text style={{ fontWeight: 'bold', }} > {'$' + item.Price} </Text></View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}><Text style={{ fontWeight: 'bold', color: 'gray' }} > {'$' + item.discountedprice} </Text></View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.Conteiner} >
            <ScrollView>
                <FlatList
                    data={getReguest[0]}
                    keyExtractor={item => item.id}
                    renderItem={renderPic}
                    horizontal={true}
                />
                <View style={{ flexDirection: 'row', marginVertical: 20 }} >
                    <View style={{ width: width / 2, flex: 1 }} >
                        <Text style={{ marginLeft: 5, fontWeight: 'bold' }} >New Arrival</Text>
                    </View>
                    <View style={{ width: width / 2, alignItems: 'flex-end' }} >
                        <Text style={{ marginRight: 5, fontWeight: 'bold', color: '#ff2400' }} >Show All</Text>
                    </View>
                </View>
                <FlatList
                    data={getReguest[1]}
                    keyExtractor={item => item.id}
                    renderItem={renderItemPrice}
                    numColumns={2}
                />
                <View style={{ flexDirection: 'row', marginVertical: 20 }} >
                    <View style={{ width: width / 2, flex: 1 }} >
                        <Text style={{ marginLeft: 5, fontWeight: 'bold' }} >What's Trending</Text>
                    </View>
                    <View style={{ width: width / 2, alignItems: 'flex-end' }}>
                        <Text style={{ marginRight: 5, color: '#ff2400', fontWeight: 'bold' }} >Show All</Text>
                    </View>
                </View>
                <FlatList
                    data={getReguest[2]}
                    keyExtractor={item => item.id}
                    renderItem={rendersales}
                />
                <View style={{ flexDirection: 'row', marginVertical: 20 }} >
                    <View style={{ width: width / 2, flex: 1 }} >
                        <Text style={{ marginLeft: 5, fontWeight: 'bold' }} >Brands</Text>
                    </View>
                    <View style={{ width: width / 2, alignItems: 'flex-end' }}>
                        <Text style={{ marginRight: 5, color: '#ff2400', fontWeight: 'bold' }} >Show All</Text>
                    </View>
                </View>
                <FlatList
                    data={getReguest[1]}
                    keyExtractor={item => item.id}
                    renderItem={ItemPrice}
                    horizontal={true}
                />
                <View style={{ margin: 5 }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }} >All</Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 15 }} >
                            Newsletter
                            </Text>
                        <Icon name='close' size={20} color='gray' />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <TextInput
                        placeholder='Email'
                        style={styles.TextInput}
                        value={email}
                        onChangeText={text => setemail(text)}
                    />
                    <TextInput
                        placeholder='Country'
                        style={styles.TextInput}
                        value={country}
                        onChangeText={text => setcountry(text)}
                    />
                </View>
                <View style={styles.Button} >
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }} >Subscribe</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{justifyContent:'center',alignItems:'center',marginVertical:10}} >
                        <Text style = {{color:'gray',fontSize:10}} >
                           By Clicking on subscribe button you agree to accept Privasy Policy
                        </Text>
                    </View>
            </ScrollView>
        </View>
    )
}

export default TopTab1;

const styles = StyleSheet.create({
    Conteiner: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    Image: {
        height: 230,
        width: 230,
        borderWidth: 1,
        borderRadius: 8,
        margin: 10
    },
    Card: {
        margin: 5,
        height: 220,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 5,
        width: 170,
    },
    PriceButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        borderRadius: 3,
        backgroundColor: '#ff2400'
    },
    TextInput: {
        flex: 1,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#d3d3d3'
    },
    Button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#ff2400'
    }
})