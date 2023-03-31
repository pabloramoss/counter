import React from "react"
import { TextInput, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { styles } from "./CounterEditor.styles"
import CounterEditorModal from "./CounterEditorModal"

const CounterEditor: React.FC = () => {
  const [counterName, setCounterName] = React.useState('counter name')
  const [counterEditorOpen, setCounterEditorOpen] = React.useState(false)

  const handleTextChange = (text: string) => {
    setCounterName(text)
  }

  return (
    <>
      <TextInput 
        style={styles.textInput}
        onChangeText={handleTextChange}
        value={counterName}
      />
      <TouchableOpacity onPress={() => setCounterEditorOpen(true)}>
        <AntDesign name="edit" size={24} color="white" />
      </TouchableOpacity>
      <CounterEditorModal 
        counterEditorOpen={counterEditorOpen}
        setCounterEditorOpen={setCounterEditorOpen}
      />
    </>
  )
}

export default CounterEditor