import { View } from "react-native";
import Home from "./screens/Home";
import { Container } from "./styles/StyledApp";

export default function App() {
  return (
    <Container>
      <View style={{ paddingHorizontal: 15 }}>
        <Home />
      </View>
    </Container>
  );
}
