/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>aplikasi sudah berjalan</Text>
        <Text>ubah di sublime, disini bakal berubah</Text>
        <Text>kocok HP anda.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

/*
import React, { Component } from 'react';
import{
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      alas:0,
      tinggi:0,
      luas:0
    };
  }

  render(){
    return(
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>

       <View style={{backgroundColor:'#2196f3'}}>
          <Text style = {{padding:10, fontSize:20, color:'white', textAlign:'center'}}>
            Menghitung luas Segitiga 
          </Text>
        </View>

        <View style={{margin:20,padding:10,backgroundColor:'#e3f2fd'}}>
          <TextInput style={{height:40}}
            placeholder="Masukkan Alas"
            onChangeText={(alas)=>this.setState({alas})}
            keyboardType= 'numeric'
          />
          <TextInput style= {{height:40}}
            placeholder="Masukkan Tinggi"
            onChangeText={(tinggi)=>this.setState({tinggi})}
            keyboardType= 'numeric'
          />

          <Button
            onPress={()=>this.setState({
              luas: (this.state.alas*this.state.tinggi/2)
            })}
            title="Hitung"
            accessibilityLabel="Klik untuk menghitung"
          />
          </View>

          <View style={{margin:20, backgroundColor:'#90caf9'}}>
            <Text style= {{padding:10, fontSize:20}}>
              Alas= {this.state.alas} {"\n"}
              Tinggi= {this.state.tinggi} {"\n"}
              Luas= {this.state.luas}
            </Text>
          </View>
        </View>
    );
  }
}
AppRegistry.registerComponent('AppFormz', ()=> HitungLuasSegitiga);
*/
/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';
 
export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      tinggi:0,
      lebar:0,
      volume:0,
      lsegitiga:0
    };
  }
 
  render() {
    return (  
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
 
        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            /> 
            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.tinggi*this.state.lebar)
              })}
              title="Hitung Volume Balok"
              accessibilityLabel="Klik untuk menghitung"
            />
            <Button
              onPress={()=>this.setState({
                lsegitiga: (this.state.panjang*this.state.tinggi/2)
              })}
              title="Hitung Luas Segitiga"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
 
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Panjang =  {this.state.panjang} {"\n"}
              Tinggi =  {this.state.tinggi} {"\n"}
              Lebar = {this.state.lebar} {"\n"}
              Volume Balok = {this.state.volume} {"\n"}
              Luas Segitiga = {this.state.lsegitiga}
          </Text>
         </View>
   </View> 
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok); */

/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';
 
export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      cm:0,
      inch:0,
      // luas:0
    };
  }
 
  render() {
    return (  
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
 
        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Konversi CM ke Inchi
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Satuan CM"
              onChangeText={(cm)=>this.setState({cm})}
              keyboardType = 'numeric'
            />
             <TextInput style = {{height: 40}}
               placeholder="Satuan  Inchi"
               onChangeText={(inch)=>this.setState({inch})}
               keyboardType = 'numeric'
             />
 
            <Button
              onPress={()=>this.setState({
                inch: (this.state.cm*0.394)
              })}
              title="Konversi CM"
              accessibilityLabel="Klik untuk mengkonversi"
            />
                   <Button
              onPress={()=>this.setState({
                cm: (this.state.inch*2.54)
              })}
              title="Konversi Inchi"
              accessibilityLabel="Klik untuk mengkonversi"
            />
       </View>
 
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              cm =  {this.state.cm} {"\n"}
              inch =  {this.state.inch} {"\n"}
          </Text>
         </View>
   </View> 
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga); */

/*import React, { Component } from 'react';
import {Style, Text, View, TextInput} from 'react-native';

export default class PrakiraanCuaca extends Component{

  constructor(props){
    super(props);
    this.state={
      kota: ''
    };
  };
  render(){
    return(
      <View>
      <Text>Masukkan Nama Kota lalu tekan enter</Text>
      <TextInput
      onSubmitEditting={
        (event)=>this.setState({kota:event.nativeEvent.text})
        getWeather= () => {
          let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=09a28dad552f1d7f254b2ec3ef7ff1e3&units=metric';
          fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              forecast: {
                main:responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp
                }
              });
            }
          )
        };
      }
      />
      <Text>Kota : {this.state.kota}</Text>

      </View>
    );
  }
} */

/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.text2}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.boxbox1}>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>1</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>2</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>3</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>4</Text>
            </View>
          </View>

          <View style={styles.boxbox1}>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>5</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>6</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>7</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>8</Text>
            </View>
          </View>
        </View>


        <View style={styles.box4}>
          <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'column'
  },

  box1: {
    flex: 2,
    backgroundColor: '#673AB7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  box2: {
    flex: 4,
    backgroundColor: '#D1C4E9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box3: {
    flex: 4,
    backgroundColor: '#673AB7',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box4: {
    flex: 2,
    backgroundColor: '#9575CD',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  boxbox1: {
    flex: 4,
    backgroundColor: '#673AB7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  boxbox2: {
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  text1: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 30,
  },

  text3: {
    fontSize: 30,
  },
});
*/
/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 25}} >HEADER </Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}>Slider </Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text>1</Text></View>
        <View style={styles.button}><Text>2</Text></View>
        <View style={styles.button}><Text>3</Text></View>
        <View style={styles.button}><Text>4</Text></View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}><Text>5</Text></View>
        <View style={styles.button}><Text>6</Text></View>
        <View style={styles.button}><Text>7</Text></View>
        <View style={styles.button}><Text>8</Text></View>
      </View>
      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 , color: '#E8F5E9'}}>WOWOK LUCU</Text>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#C8E6C9',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.7,
    backgroundColor: '#4CAF50',
  },
  box2: {
    flex: 1,
    backgroundColor: '#A5D6A7',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: '#81C784',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: '#81C784',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#4CAF50',
    margin: 10
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50'
  }
});
*/
/*
import React from 'react';
import BelajarLayout from './src/BelajarLayout';


export default class App extends React.Component {
  render() {
    return (
      <BelajarLayout />
    );
  }
}
*/

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, Button, TextInput, View
} from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kota: '',
      forecast:{
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }

getWeather= () => {
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.kota +'&appid=98707e458770e5131b4b16c0089d099b&units=metric';
fetch (url)
.then ((response) => response.json())
.then((responseJson) => {
            //console.log(responseJson);
            this.setState({
              forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp
              }
            });
          });
        }

  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.boxHeader}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: '#E8F5E9'}} >App Weather</Text>
      </View>

      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 3, fontSize: 20 , color: '#E8F5E9'}}>Nama Kota</Text>
          
          <View style={styles.textBoxStyle}>
          <TextInput style = {{height: 50}}
              placeholder="Masukkan Nama Kota"
              onChangeText={(kota)=>this.setState({kota})}
          />
          </View>

          <View style={styles.buttonStyle}>
          <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#2E7D32"
              accessibilityLabel="Klik untuk melihat"
            />
          </View>
      </View>

      
      <View style={styles.isiTengah}>
        <Text style = {{padding: 10, fontSize: 20}} >
          Kota = {this.state.kota} {"\n"}
          Cuaca = {this.state.forecast.main} {"\n"}
          Description = {this.state.forecast.description} {"\n"}
          Temp = {this.state.forecast.temp} {"'Celcius"}
        </Text>
      </View>
      
      <View style={styles.boxFotter}>
          <Text style={{ textAlign: 'right', padding: 18, fontSize: 14 }} >1515051073_Pebri Santosa</Text>
      </View>

</View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#C8E6C9',
    flex: 1,
    flexDirection: 'column'
  },
  boxFotter: {
    height: 60,
    backgroundColor: 'white',
  },
  boxHeader: {
    height: 80,
    backgroundColor: 'white',
  },
  box2: {
    flex: 1,
    backgroundColor: '#A5D6A7',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: '#81C784',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: '#81C784',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#4CAF50',
    margin: 10
  },
  isiTengah: {
    flex: 1,
    backgroundColor: '#81C784',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    //justifyContent: 'space-around',
    //alignItems: 'center',
    flexDirection: 'row'
  },
  info: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50'
  },
  infoRight: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50'
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center'
  },
  textBoxStyle: {
    //flex: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#C8E6C9'
  }

});
