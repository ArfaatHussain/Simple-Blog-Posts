import { useState } from 'react';
import {View,Text,StyleSheet,StatusBar,TouchableOpacity, Alert} from 'react-native';

export default Counter = ()=>{

    const [count,setCount] = useState(0);

    function handleDecrement(){
        if(count == 0){
            Alert.alert('Cannot Decrement below 0');
            return;
        }

        setCount(count - 1);
    }

    return(
        <View style={styles.container} >
            <StatusBar />
            <Text style={styles.header}>Counter App</Text>

            <Text style={styles.countMsg} >Counts: {count}</Text>

            <View style={styles.btnWrapper} >
                <TouchableOpacity
                style={[styles.btn,{marginRight:10}]}
                onPress={()=>{setCount(count+1)}}
                activeOpacity={0.6}
                >
                    <Text style={styles.btnTxt}>Increase</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.btn}
                onPress={handleDecrement}
                activeOpacity={0.6}
                >
                    <Text style={styles.btnTxt}>Decrease</Text>
                </TouchableOpacity>
                
            </View>

            <TouchableOpacity
                style={styles.resetBtn}
                onPress={()=>setCount(0)}
                activeOpacity={0.6}
                >
                    <Text style={styles.btnTxt}>Reset</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    flex:1,
    paddingHorizontal:15
 }  , 
header:{
    fontSize:22,
    textAlign:'center',
    color:'blue',
    marginVertical:10
},
countMsg:{
    fontSize:18,
},
btn:{
    backgroundColor:'#eb9268',
    paddingVertical:12,
    flex:1,
    borderRadius:12,
},
btnTxt:{
    textAlign:'center',
    fontWeight:'700',
    color:'white',
    fontSize:16
},
btnWrapper:{
    flexDirection:'row',
    marginVertical:15,
    flexWrap:'wrap',
},
resetBtn:{
    backgroundColor:'#eb9268',
    paddingVertical:12,
    borderRadius:12,
}

})