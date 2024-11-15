import { useState } from "react";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { login, logout, signUp } from "../services/authServices";
import { User } from "firebase/auth";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const userLogin = {
    email,
    password,
  };

  const handleSignUp = async () => {
    const newUser = await signUp(userLogin);
    setUser(newUser);
    console.log(newUser);
  };

  const handleLogin = async () => {
    const loggedInUser = await login(userLogin);
    setUser(loggedInUser);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui teu e-mail"
          placeholderTextColor="#DDDDDD"
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui tua senha"
          placeholderTextColor="#DDDDDD"
          onChangeText={setPassword}
        />
      </View>

      {user ? (
        <Pressable style={styles.button} onPress={handleLogout}>
          <Text style={styles.label}>sair</Text>
        </Pressable>
      ) : (
        <>
          <Pressable style={styles.button} onPress={handleSignUp}>
            <Text style={styles.label}>criar</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.label}>logar</Text>
          </Pressable>
        </>
      )}

      {user && <Text style={styles.label}>Bem-vindo, {user.email}</Text>}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },

  inputGroup: {
    width: "100%",
  },
  label: {
    color: "white",
    fontSize: 20,
  },

  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    color: "white",
  },
  button: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
