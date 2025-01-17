import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class Filmes extends Component {
    render() {
        const { nome, foto } = this.props.data;
        return (

            <View>
                <View style={styles.card}>

                    <Text style={styles.titulo}>{nome}</Text>
                    <Image
                        source={{ uri: foto }}
                        style={styles.capa}
                    />
                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
                            <Text style={styles.botaoTexto}>Saber mais</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        backgroundColor: "#FFF",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
    },
    titulo: {
        padding: 15,
        fontSize: 18,
    },
    capa: {
        height: 250,
        zIndex: 2,
    },
    areaBotao: {
        alignItems: "flex-end",
        marginTop: -40,
        zIndex: 9,
    },
    botao: {
        width: 100,
        backgroundColor: "#09a6ff",
        opacity: 1,
        padding: 8,
        borderRadius: 15,
        marginRight: 3,
    },
    botaoTexto: {
        textAlign: "center",
        color: "#FFF",
    },
});

export default Filmes;