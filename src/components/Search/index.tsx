import React from 'react';
import { searchStyle } from './style';
import { View, TouchableOpacity, TextInput, Text, TextInputProps, Image, TouchableOpacityProps } from 'react-native';

interface SearchProps {
  backgroundColor: string;
  searchOnpressText: any;
  searchIcon: any;
}
const Search: React.FC<TextInputProps & TouchableOpacityProps & SearchProps> = (props, searchPropsStyle) => {
  return (
    <View style={searchStyle.search_wrap}>
      <View style={[searchStyle.search_left_wrap, { backgroundColor: searchPropsStyle.backgroundColor }]}>
        <TextInput style={searchStyle.search_textinput} {...props} />
        <View style={searchStyle.search_content_wrap}>
          <Image style={searchStyle.search_icon} source={props.searchIcon} />
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.8} {...props}>
        <Text style={searchPropsStyle.searchOnpressText}>搜索</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
