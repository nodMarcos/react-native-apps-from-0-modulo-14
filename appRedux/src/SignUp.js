import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { editEmail, editPassword } from './actions/AuthActions';

export class SignUp extends Component {

  static navigationOptions = {
    title: 'Cadastro',
  }

  constructor(props){
    super(props);
    this.state = {}

    this.signup = this.signup.bind(this);
  }

  signup(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nomeInput}>Email:</Text>
        <TextInput value={this.props.email}  underlineColorAndroid="transparent"  style={styles.input}
         onChangeText={ (emailDigitado) => this.props.editEmail(emailDigitado) }/>

        <Text style={styles.nomeInput}>Senha:</Text>
        <TextInput value={this.props.password} underlineColorAndroid="transparent" 
        secureTextEntry={true} style={styles.input}
        onChangeText={ (senhaDigitada) => this.props.editPassword(senhaDigitada) }/>

        <Button title="Cadastrar" onPress={this.cadastrar}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nomeInput:{
    color: '#000000',
    fontSize: 24,
    marginBottom: 5
  },
  input:{
    height: 40,
    backgroundColor: '#CCCCCC',
    padding: 5,
    width: 250,
    marginBottom: 10
  }
});

const mapStateToProps = (state) =>{
  return{
    email:state.auth.email,
    senha:state.auth.senha
  };
};

const SignUpConnect = connect(mapStateToProps, { editEmail, editPassword })(SignUp);

export default SignUpConnect;