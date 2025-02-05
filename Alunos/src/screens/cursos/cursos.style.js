import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme.js"




export const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.gray,
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    titulo: {
        color: COLORS.white,
        fontSize: FONT_SIZE.lg,
        fontFamily: FONT_FAMILY.bold
    },
    subtitulo: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
        fontFamily: FONT_FAMILY.regular,
        textAlign: "center"
    },
    logo: {
        width: 60,
        height: 60
    },
    list: {
        width: "100%"
    }
    
};