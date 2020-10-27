import React, { Component } from 'react';
import { View, Text, Image, TextInput, FlatList, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'

export default class ActivityFollowingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleFlag: true
        };
    }

    componentDidMount(){
        this.setState({toggleFlag: this.props.navigation.getParam("ddd")})
    }

    render() {
        return (
            <View style={{ ...styles.container, backgroundColor: 'black' }}>
                <ScrollView style={{ flex: 1, width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.ImageBackground}>
                            <View style={styles.header}>
                                <TouchableOpacity style={{ ...styles.BackBtn, marginLeft: 20 }} onPress={() => this.props.navigation.goBack()}>
                                    <Image source={require('../../Assets/Images/BackBtn.png')} resizeMode='stretch' />
                                </TouchableOpacity>
                                <View style={styles.dropDown}>
                                    <Text style={styles.headerTxt}>CONNECTIONS</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center' }}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={this.state.toggleFlag?styles.createBtn:styles.createBtn1} onPress={() => { this.setState({ toggleFlag: true }) }}>
                                <Text style={this.state.toggleFlag?styles.CreateTxt:styles.CreateTxt1}>Following</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={this.state.toggleFlag?styles.createBtn1:styles.createBtn} onPress={() => { this.setState({ toggleFlag: false }) }}>
                                <Text style={this.state.toggleFlag?styles.CreateTxt1:styles.CreateTxt}>Followers</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '100%' }}>
                        {this.state.toggleFlag ?
                            <View style={styles.mainContent}>
                                <Text style={styles.numberTxt}>22</Text>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Boon-mee Yao-</Text></Text>
                                        <Text style={styles.desTxt1}>Hamilton</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Unfollow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Anton</Text></Text>
                                        <Text style={styles.desTxt1}>Lincoln</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Unfollow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                        <Text style={styles.desTxt1}>Sacramento</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Unfollow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                        <Text style={styles.desTxt1}>Sacramento</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Unfollow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Boon-mee Yao-</Text></Text>
                                        <Text style={styles.desTxt1}>Hamilton</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Unfollow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Anton</Text></Text>
                                        <Text style={styles.desTxt1}>Lincoln</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Unfollow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                        <Text style={styles.desTxt1}>Sacramento</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Unfollow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> :
                            <View style={styles.mainContent}>
                                <Text style={styles.numberTxt}>326</Text>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Anton</Text></Text>
                                        <Text style={styles.desTxt1}>Lincoln</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Boon-mee Yao-</Text></Text>
                                        <Text style={styles.desTxt1}>Hamilton</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                        <Text style={styles.desTxt1}>Sacramento</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Boon-mee Yao-</Text></Text>
                                        <Text style={styles.desTxt1}>Hamilton</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/PersonProfileImage.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Anton</Text></Text>
                                        <Text style={styles.desTxt1}>Lincoln</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ListContent2}>
                                    <Image source={require('../../Assets/Images/person1.png')} resizeMode='stretch' style={styles.activityImage} />
                                    <View>
                                        <Text style={styles.desTxt1}><Text style={{ color: 'white' }}>Lia Castro</Text></Text>
                                        <Text style={styles.desTxt1}>Sacramento</Text>
                                    </View>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={styles.btnTxt}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                </ScrollView>
            </View >
        );
    }
}
