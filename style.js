import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    color: "black",
    flex: 1,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
  },
  openButton: {
    padding: 10,
    width: 300,
    backgroundColor: "lightblue",
    alignSelf: "center",
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  openText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalStyle: {
    height: 330,
    backgroundColor: "white",
    width: 350,

    alignSelf: "center",

    borderRadius: 15,
  },
  centeredView: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  helloText: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: 25,
    backgroundColor: "lightblue",
    padding: 10,
    width: 100,
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  input: {
    padding: 8,
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    width: 300,
  },
  list: {
    margin: 10,
    marginLeft: 15,
  },
  label: {
    margin: 10,
    fontSize: 13,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
  },
  View: {
    textAlign: "right",
    marginTop: -24,
    marginRight: 40,
    // backgroundColor: "pink",
  },
  pressView: {
    width: 200,
    marginLeft: 200,
    alignItems: "center",
  },
});
export default style;
