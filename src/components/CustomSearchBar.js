import React from 'react';
import {View, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import {Icon, Input} from '@ant-design/react-native';

const CustomSearchBar = ({
  style,
  inputStyle,
  value,
  onSearchChange,
  placeholder = 'Search',
  placeholderTextColor = '#888',
  onCancel,
  showClearButton = false, // Added showCancelButton prop
}) => {
  const onClear = () => {
    Keyboard.dismiss(); // Close the keyboard on clear
    onCancel();
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.searchContainer, inputStyle]}>
        <Icon name="search" size="small" style={styles.searchIcon} />
        <Input
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onSearchChange}
          style={styles.input}
        />
        {showClearButton && (
          <TouchableOpacity
            onPress={onClear}
            style={styles.cancelButton}
            keyboardShouldPersistTaps="handled">
            <Icon name="close" size="small" style={styles.searchIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 5,
    color: '#888',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  cancelButton: {
    marginLeft: 10,
  },
});

export default CustomSearchBar;
