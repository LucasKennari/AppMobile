import React, { Text, TouchableOpacity, StyleSheet} from "react-native"
import styles from "./style"
type ButtonProps = {
    title: string;
    onPress: () => void
}

export default function Button({ onPress, title }: ButtonProps) {

    return (<TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.textColor}>
            {title}
        </Text>
    </TouchableOpacity>
    )
} 

