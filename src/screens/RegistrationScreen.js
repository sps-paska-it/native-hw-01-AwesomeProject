import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native/types';
import { useDispatch } from 'react-redux';

const intialRegisterData = {
    login: '',
    email: '',
    password: '',
}

export default function RegisterForm() {
    const [registerData, setRegisterData] = useState(intialRegisterData);

    const submitForm = e => {
        console.log('login:', login);
        console.log('email:', email);
        console.log('password:', password);
    };

  return (
    <TouchableWithoutFeedback  onPress={KeyboardHide}>
    <View>
      <TextInput placeholder='Логін' onChangeText={(e) => setRegisterData(e)} />
      <TextInput placeholder='Адрес електроної пошти' onChangeText={setEmail}/>
      <TextInput placeholder='Пароль' onChangeText={setPassword} />
      <Button type="submit" onPress={submitForm}>Зареєструватися</Button>
    </View>
  </TouchableWithoutFeedback>
  );
}
