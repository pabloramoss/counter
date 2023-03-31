import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, Button } from 'react-native';

interface Props {
  counterEditorOpen: boolean;
  setCounterEditorOpen: (value: boolean) => void;
}

const CounterEditorModal: React.FC<Props> = ({counterEditorOpen, setCounterEditorOpen}) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);

  const handleModalOpen = () => {
    setCounterEditorOpen(true);
  };

  const handleModalClose = () => {
    setCounterEditorOpen(false);
  };

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleValueChange = (text: string) => {
    setValue(Number(text));
  };

  const handleCancel = () => {
    handleModalClose();
  };

  const handleApply = () => {
    // Do something with title and value
    handleModalClose();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleModalOpen}>
        <Text>Abrir modal</Text>
      </TouchableOpacity>
      <Modal
        visible={counterEditorOpen}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View>
          <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Edit this counter</Text>
          <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
            <Text style={{ fontSize: 16 }}>Title</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={handleTitleChange}
              value={title}
            />
          </View>
          <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
            <Text style={{ fontSize: 16 }}>Value</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={handleValueChange}
              value={String(value)}
              keyboardType="numeric"
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
            <Button onPress={handleCancel} title="Cancel" />
            <Button onPress={handleApply} title="Apply" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CounterEditorModal;
