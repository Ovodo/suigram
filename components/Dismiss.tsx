import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const DismissKeyboard = ({ children }: { children: React.ReactNode }) => {
  // const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={
        () => Keyboard.dismiss()
        // & dispatch(setVisible(false))
      }
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
