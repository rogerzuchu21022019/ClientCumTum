// @ts-nocheck
import ImagePicker from 'react-native-image-crop-picker';

export const onCamera = async (setAvatar, setIsPicked) => {
  await ImagePicker.openCamera({
    cropping: 'cropping',
    width: 500,
    height: 500,
    includeExif: true,
    mediaType: 'photo',
    includeBase65: true,
  }).then((image) => {
    setAvatar(image.path);
    setIsPicked(true);
  });
};

export const onGallery = async (setAvatar, setIsPicked) => {
  await ImagePicker.openPicker({
    cropping: 'cropping',
    width: 500,
    height: 500,
    includeExif: true,
    mediaType: 'photo',
    includeBase64: true,
  }).then((image) => {
    setAvatar(image.path);

    setIsPicked(true);
    // console.log(`testAvatar: ${JSON.stringify(image)}`); //=> image is a object
    console.log('🚀 ~ file: Camera.js:34 ~ .then ~ image.path', image);
  });
};

/*
Handle trong screen

  const pickImage = async () => {
   Alert.alert('Choose an option', '', [
     {text: 'Take a photo', onPress: () => onCamera(setAvatar)},
     {text: 'Go to Gallery', onPress: () => onGallery(setAvatar)},
     {text: 'Cancel', onPress: onCancel},
   ]);
  };
  const onCancel = () => {};
*/
