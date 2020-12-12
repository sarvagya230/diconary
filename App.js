
import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button } from 'react-native';
import Constants from 'expo-constants';



export default class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      word:'',
      lastword:'',
      greeting:'',
      defination:'',
      hi:''
    }
  }
  render(){
    
    return (
    <View >
    <Text style={{backgroundColor:'#87ceeb',textAlign:'center',fontSize:32,color:'white',fontWeight:900}}>Diconary App </Text>
    <View style={{marginTop:100,marginLeft:30,backgroundColor:'#D3D3D3',alignItems:'center',width:200,height:30}}>
        <TextInput placeholder="word of dought"  onChangeText={(text) => {this.setState({word:text});console.log(this.state.word)}}/>
        
    </View>
    <Button title="search!"  onPress={this.functions}/>
   
        <Text style={{marginTop:50,textAlign:'center',color:'Yellow'}}>{this.state.greeting}{this.state.lastword}</Text>
        <Text style={{marginTop:50,textAlign:'center',color:'Yellow'}}>
        
        {this.state.hi }{this.state.defination}</Text>
   
    </View>

  );
  }
  functions=()=>
  {
    this.setState({greeting:'word ' ,lastword:this.state.word})

    var search=this.state.lastword.toLowerCase()
    var url="https://rupinwhitehatjr.github.io/dictionary/"+search+'.json'
    return fetch(url)
    .then((data)=>
    {
      if(data.status===200)
      {
        return data.json
      }
      else 
      {
        return null
      }
    })
    .then(
      (response)=>
      {var responseObject=response
      if(responseObject)
      {
        var worddata=response.defination[0]
        var defination =worddata.description
        this.setState({hi:'defination:',defination:defination})
      }
      else{
        this.setState({hi:'defination:',defination:'not found'})

      }
      }
    )


  }

}
