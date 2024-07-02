// LatestItemWidget.js

import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const LatestItemWidget = () => {
  const [latestItem, setLatestItem] = useState(null);

  // Fetch the latest item data from your API
  useEffect(() => {
    fetch('https://eftm.com/wp-json/wp/v2/posts/')
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response contains an array of items
        const latest = data[0]; // Get the latest item
        setLatestItem(latest);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!latestItem) {
    return null; // Handle loading state or error
  }

  const handleItemClick = () => {
    // Handle navigation to the item's URL (e.g., using React Navigation)
    // Replace 'YOUR_NAVIGATION_ACTION' with your actual navigation logic
    // latestItem.link is the URL you want to navigate to
    // Example: YOUR_NAVIGATION_ACTION(latestItem.link);
  };

  return (
    <TouchableOpacity onPress={handleItemClick}>
      <View>
        <Image source={{ uri: latestItem.featured_image_url }} style={{ width: 100, height: 100 }} />
        <Text>{latestItem.title.rendered}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LatestItemWidget;
