import React from 'react';
import { TextInputProps, TouchableOpacityProps } from 'react-native';
interface SearchProps {
    backgroundColor: string;
    searchOnpressText: any;
}
declare const Search: React.FC<TextInputProps & TouchableOpacityProps & SearchProps>;
export default Search;
