import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    borderRadius: 100,
    width: 140,
    height: 140,
  },
  logoWrapper: {
    alignItems: "center",
    top: "8%",
    flex: 1,
  },
  buttonText: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f0a500",
    color: "#fff",
    padding: 13,
    width: "44%",
    borderRadius: 30,
  },
  buttonWrapper: {
    marginTop: "50%",
    alignItems: "center",
    width: "100%",
    bottom: "10%",
  },
});
