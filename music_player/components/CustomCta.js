import { ActivityIndicator, Text } from "react-native";

const CustomCta = (ctaLabel, isLoading) => {
  return isLoading ? (
    <ActivityIndicator size={"small"} color={"#fff"} />
  ) : (
    <Text style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>
      {ctaLabel}
    </Text>
  );
};

export default CustomCta;
