import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme.js"




export const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.gray,
        padding: 50
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
        width: 120,
        height: 120
    },
    
    
};