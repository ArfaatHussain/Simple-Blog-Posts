import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Main = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
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
            <Text style={styles.author}>By {item.author} | {item.published_date}</Text>
            <Text style={styles.category}>Category: {item.category}</Text>
            <Text style={styles.tags}>Tags: {item.tags.join(', ')}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <Text style={styles.comments}>Comments: {item.comments_count}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Simple Blog Post Display</Text>
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
    container: {
        flex: 1,
        backgroundColor: '#424242'
    },
    postContainer: {
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#229799',
        textAlign:'center'
    },
    author: {
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 8,
        color: '#424242'
    },
    category: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#555'
    },
    tags: {
        fontSize: 14,
        marginBottom: 8,
        color: '#777'
    },
    content: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8
    },
    comments: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#424242'
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: '#229799',
        color: '#F5F5F5',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        shadowColor:'white',
        elevation:15
    }
});

export default Main;
