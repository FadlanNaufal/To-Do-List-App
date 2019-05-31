/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {StyleSheet , Text , View , ScrollView ,TextInput  ,TouchableOpacity} from 'react-native';
import Note from './note';

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {

      noteArray : [],
      noteText : '',
    }
  }

  render() {
    let notes = this.state.noteArray && this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} 
      deleteMethod={ () => this.deleteNote(key)}/>
    });
    return (

       <View style={styles.container}>
		    <View style={styles.header}>
     		 <Text style={styles.textHeader}> - To Do List - </Text>
      	</View>     	

      	<ScrollView style={styles.scrollContainer}>
            {notes}
      	</ScrollView>

		    <View style={styles.footer}>
       		 <TextInput
           onChangeText = {(noteText) => this.setState({noteText})}
           style={styles.textInput}
           placeholder="Buat Note !" 
           placeholderTextColor="white"/>
      	</View> 

    		<TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
    			<Text style={styles.addButtonText}> + </Text>
    		</TouchableOpacity>
      </View>

    );
  }

  addNote(){
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({
        'date' : d.getFullYear() + 
        '/' + (d.getMonth() + 1) + 
        '/' + d.getDate() ,
          'note' : this.state.noteText
      });
      this.setState({noteArray : this.state.noteArray})
      this.setState({noteText : ''})
    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key ,1);
    this.setState({ noteArray : this.setState.noteArray })
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  header : {
    backgroundColor : '#1290B9',
    alignItems : 'center',
    justifyContent : 'center',
    borderBottomWidth :  2,
    borderBottomColor :  '#ddd',
  },

  textHeader : {
    color : 'white',
    fontSize : 18,
    paddingTop : 20,
    paddingBottom : 15,
  },

  scrollContainer : {
    flex : 1,
    marginBottom : 100
  },

  footer : {
    position : 'absolute',
    bottom : 0,
    color : '#fff',
    left : 0,
    right : 0,
    zIndex : 10,
  },

  textInput : {
    alignSelf : 'stretch',
    color : '#fff',
    padding : 15,
    backgroundColor : '#5FC8DE',
    borderTopWidth : 2,
    borderTopColor : '#ededed',
  },

  addButton : {
    position : 'absolute',
    zIndex : 11,
    right : 10,
    bottom : 90,
    backgroundColor: '#5FC8DE',
    width : 40,
    height : 40,
    borderRadius : 50,
    alignItems : 'center',
    justifyContent : 'center',
  },

  addButtonText : {
    color : 'white',
    fontSize : 20,
  },

});
