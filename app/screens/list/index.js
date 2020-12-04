import React, { Component } from 'react'
import { Text, View, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native'
import MusicCard from '../../components/card'
import { Images, Colors } from '../../themes';
import { Icon, } from 'native-base';
import { styles } from './styles'
import { connect } from 'react-redux';
import * as action from "./actions"
import { Loader } from '../../components/loader';

class Assignment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search:'',
      listView: false,
      loader: false
    };
  }

  componentDidMount() {
    this.searchApiCall()
  }

  renderItem = ({ item, index }) => {
    return (
      <MusicCard
        onPress={() => {}}
        image={item.artworkUrl60}
        title={item.artistName}
      />
    )
  }

  renderListItem = ({ item, index }) => {
    return (
      <View style={styles.listViewContainer}>
        <Image 
          style={styles.albumImage} 
          source={{uri:item.artworkUrl60}} 
          resizeMode={'cover'}
        />   
          <Text 
            style={styles.albumName} 
            numberOfLines={2}
          >{item.artistName}</Text>  
      </View>
    )
  }


  _onSearchTextChange(text) {
    this.setState({ search: text }
    )
  }

  searchApiCall(){
    this.setState({loader: true})
    this.props.list(this.state.search)
      .then((res) => {
        this.setState({loader: false})
        console.log('PRODUCTS RES ', res);
      })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.getList.length < this.props.getList.length) {
      // this.setState({musicArtistData: this.props.getList})
      return this.props.getList
    }
    return null;
  }

  

  getList() {
    let { getList } = this.props
    let data = this.props.getList
    if (getList) {
        return (
          <FlatList
            key={!this.state.listView ? '_' : '#'}
            numColumns={!this.state.listView ? 2 : 1}
            columnWrapperStyle={!this.state.listView && { flex: 1, justifyContent: "space-around" }}
            contentContainerStyle={{ paddingBottom: 22, }}
            data={data}
            extraData={this.state}
            renderItem={
              this.state.listView ?
                this.renderListItem 
                : this.renderItem
            }
            keyExtractor={(item, index) => !this.state.listView ? `_${index.toString()}` : `#${index.toString()}`}
          />
        )
      
    } else {
      return null
    }
  }
  onCloseMessage() {
    this.setState({ visible: false })
  }


  render() {
    return (
      <View style={styles.container}>
        <Loader color={'white'} show={this.state.loader} style={styles.loading}/>
        <View style={styles.commentView}>
          <TextInput placeholder="search…" placeholderTextColor={Colors.lightBlack} value={this.state.search} onChangeText={(text) => this._onSearchTextChange(text)} style={styles.commentInput}></TextInput>
          <TouchableOpacity onPress={()=>{this.searchApiCall()}}  >
            <Image style={styles.sendIcon} resizeMode={'contain'} source={Images.search} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{this.setState({listView: !this.state.listView})}} style={styles.listIconContainer}>
          <Image source={this.state.listView? Images.grid : Images.list} style={{height: 20, width: 20}}/>
        </TouchableOpacity>
        {this.getList()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  getList: state.lists.list
});

const mapDispatchToProps = (dispatch) => ({
  list: (text) => dispatch(action.list(text)),
});

const Conatiner = connect(mapStateToProps, mapDispatchToProps)(Assignment)

export default Conatiner;