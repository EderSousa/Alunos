import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme.js"




export const styles = {
    curso: {
        width: "100%",
        backgroundColor: COLORS.medium_gray,
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderRadius: 6,
        marginTop: 10
    },
    titulo: {
        color: COLORS.white,
        fontSize: FONT_SIZE.sm,
        fontFamily: FONT_FAMILY.regular,
        marginLeft: 10
    },
    icone: {
        width: 30,
        height: 30
    }
    
};