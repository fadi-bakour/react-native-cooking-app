import Toast from 'react-native-toast-message';

export default function ToastService(TType, TMessage, isSuccess = false) {

    if (isSuccess) {
        Toast.show({
            type: TType,
            position: 'top',
            text1: 'Succuss',
            text2: TMessage,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
        });
        return;
    }
    Toast.show({
        type: TType,
        position: 'top',
        text1: 'Error',
        text2: TMessage,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
    });
}