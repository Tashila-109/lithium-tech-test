import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

// Define types for the values and functions returned by the hook
type Value = string;
type ChangeHandler = (value: Value) => void;
type ValueSetter = (value: Value) => void;
type DebounceTextChangeResult = [Value, ChangeHandler, ValueSetter];

// Define the hook function
export const useDebouncedTextChange = (
  callback: (text: string) => void, // A function to be called when the text changes
  delay: number = 0 // The delay (in milliseconds) before the callback is called
): DebounceTextChangeResult => {
  const [text, setText] = useState(''); // The current text value
  const debouncedCallback = useCallback(
    debounce(callback, delay), // A debounced version of the callback function
    [callback, delay] // The dependencies of the useCallback hook
  );

  const onChange = (text: string) => {
    setText(text); // Update the current text value
    debouncedCallback(text); // Call the debounced callback function with the new text value
  };

  return [text, onChange, setText]; // Return the current text value, the onChange function, and the setText function
};
