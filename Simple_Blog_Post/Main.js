import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Main = () => {
    const [posts, setPosts] = useState([]);

    const getPosts =  () => {
        try {
            let response = require('./Data/BlogPost.json');
            
            if (response) {
                setPosts(response);
            }

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.postContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>By {item.author}</Text>
            <Text style={styles.content}>{item.content}</Text>
        </View>
    );

    return (
        <View style={styles.container} >

            <Text style={styles.header} >Simple Blog Post Display</Text>
       
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
         </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    postContainer: {
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8
    },
    author: {
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 8
    },
    content: {
        fontSize: 16,
        color: '#333'
    },
    header:{
        fontSize:20,
        fontWeight:'700',
        textAlign:'center',
        paddingVertical:15,
        backgroundColor:'blue',
        color:'white'
    }
});

export default Main;
