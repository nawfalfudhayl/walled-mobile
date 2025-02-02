import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Button({ bgColor = "#19918f", text }) {
    return (
        <TouchableOpacity style={{...styles.button, backgroundColor: bgColor}}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",

    }
});

export default Button;