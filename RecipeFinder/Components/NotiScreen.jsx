import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const NotificationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  
  useEffect(() => {
    // Fetch notifications from API
    const fetchNotifications = async () => {
      try {
        
        await new Promise(resolve => setTimeout(resolve, 2000));
       
        const mockNotifications = [
          { id: 1, title: 'New message', content: 'You have a new message.' },
          { id: 2, title: 'New like', content: 'Your post has been liked.' },
          { id: 3, title: 'New follower', content: 'You have a new follower.' },
          // Add more mock notifications as needed
        ];
        setNotifications(mockNotifications);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // Render each notification item
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  // Render loading indicator while fetching notifications
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<Text>No notifications</Text>}
      />
    </View>
  );
};

export default NotificationScreen;
