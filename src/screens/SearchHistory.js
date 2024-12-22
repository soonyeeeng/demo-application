import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addSearch} from '../redux/actions/searchActions';
import {Input, Button, List, SwipeAction} from '@ant-design/react-native';

const Item = List.Item;

const SearchHistory = () => {
  const dispatch = useDispatch();

  const searchHistory = useSelector(state => state.search?.searchHistory || []); // Default to empty array if undefined

  const [query, setQuery] = useState(''); // Ensure query is always a string

  const handleSearchChange = value => {
    setQuery(value.target.value || ''); // Ensure value is a string or fallback to empty string
  };

  const handleSearchSubmit = () => {
    if (typeof query === 'string' && query.trim()) {
      dispatch(addSearch(query.trim())); // Dispatch sanitized query
      setQuery(''); // Clear the input field
    }
  };

  const right = [
    {
      text: 'Delete',
      onPress: () => console.log('delete'),
      backgroundColor: 'red',
      color: 'white',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          value={query}
          onChange={handleSearchChange}
          placeholder="Ask me anything..."
          clear
          style={styles.input}
        />
        <Button
          type="primary"
          style={styles.button}
          onPress={handleSearchSubmit}>
          Search
        </Button>
      </View>

      <Text style={styles.historyTitle}>Search History</Text>
      {searchHistory.length === 0 && (
        <Text style={{textAlign: 'center', marginTop: 16}}>
          No search history yet.
        </Text>
      )}
      <List>
        {searchHistory.length > 0 &&
          searchHistory.map((ele, idx) => (
            <Item key={idx + ele} data-seed={idx}>
              {ele}
            </Item>
          ))}
      </List>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
  button: {
    borderRadius: 4,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  list: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

export default SearchHistory;
