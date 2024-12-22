import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View, Keyboard } from 'react-native';
import CustomSearchBar from './CustomSearchBar';

const AutoCompleteInput = ({
  query, // The current search query
  suggestions, // List of suggestions passed from parent
  onSearchChange, // Function to handle search query change
  onSuggestionSelect, // Function to handle suggestion selection
  onCancel, // Function to handle cancel action
  cancelText, // Text for cancel button
  placeholder = 'Search', // Placeholder text for the search bar
  allowClear // Allow to clear text, default to false
}) => {
  const onItemSelect = (item) => {
    Keyboard.dismiss(); // Close the keyboard on selection
    onSuggestionSelect(item); // Notify parent to handle the selected item
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => onItemSelect(item)}>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Render the search bar */}
      <CustomSearchBar
        value={query}
        placeholder={placeholder}
        cancelText={cancelText}
        onSearchChange={onSearchChange} // Delegate handling query change to parent
        onCancel={onCancel} // Delegate cancel action to parent
        showClearButton={allowClear}
        style={styles.searchBar}
      />
      
      {/* Render the suggestions list */}
      {suggestions && suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.place_id}
            renderItem={renderItem}
            keyboardShouldPersistTaps="handled" // Ensure tap on suggestions doesn't dismiss the keyboard
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  searchBar: {
    backgroundColor: 'transparent',
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 60, // Adjust based on SearchBar height
    left: 0,
    right: 0,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    zIndex: 1000,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    maxHeight: 200, // Limit height for scrolling
    borderRadius: 5,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default AutoCompleteInput;
