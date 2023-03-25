import React from "react"
import { View, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { styles } from "./Navbar.styles"

interface Props {
  toggleButtonPosition: () => void;
}

const Navbar: React.FC<Props> = ({ toggleButtonPosition }) => {

  return (
    <View style={styles.navbar}>
      <TouchableOpacity>
        <AntDesign name="menu-fold" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleButtonPosition}>
        <AntDesign name="swap" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar