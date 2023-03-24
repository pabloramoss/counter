import React from "react"
import { View, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { styles } from "./Navbar.styles"

const Navbar: React.FC = () => {

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.menuButton}>
        <AntDesign name="menu-fold" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar