import icons from '@/constants/icons';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface FileItem {
  uri: string;
  type: 'image' | 'document';
  name?: string;
}

interface ImagePickerComponentProps {
  value: FileItem[];
  onChange: (value: FileItem[]) => void;
  fileType: 'image' | 'document'; // New prop to specify the type
}

const ImagePickerComponent: React.FC<ImagePickerComponentProps> = ({
  value,
  onChange,
  fileType,
}) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const newImageUri = result.assets[0].uri;
      onChange([...value, { uri: newImageUri, type: 'image' }]);
    }
  };

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ],
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const document = result.assets[0];
      onChange([
        ...value,
        { uri: document.uri, type: 'document', name: document.name },
      ]);
    } else {
      console.log(
        'Document selection was canceled or no document was selected.'
      );
    }
  };

  const handlePick = () => {
    if (fileType === 'image') {
      pickImage();
    } else if (fileType === 'document') {
      pickDocument();
    } else {
      Alert.alert('Invalid file type specified.');
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    onChange(newFiles);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fileList}>
        {value.map((file, index) => (
          <View key={index} style={styles.fileContainer}>
            {file.type === 'image' ? (
              <Image source={{ uri: file.uri }} style={styles.fileImage} />
            ) : (
              <View style={[styles.fileImage, styles.documentContainer]}>
                <Image source={icons.homeIcon} style={styles.documentIcon} />
                <Text style={styles.documentName}>{file.name}</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeFile(index)}
            >
              <Text style={styles.removeButtonText}>×</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity onPress={handlePick} style={styles.plusContainer}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fileList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fileContainer: {
    width: 80,
    height: 80,
    margin: 5,
    position: 'relative',
  },
  fileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  documentContainer: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentIcon: {
    width: 40,
    height: 40,
    tintColor: '#555',
  },
  documentName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  removeButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'red',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  plusContainer: {
    width: 80,
    height: 80,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: 36,
    color: '#ccc',
  },
});

export default ImagePickerComponent;
