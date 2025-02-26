import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme.js"




export const styles = {
    btn: {
        width: "100%", 
        margin: 15,
        borderRadius: 4,
        padding: 4,
        
    },
    btnBlue: {
        backgroundColor: COLORS.blue
    },
    btnRed: {
        backgroundColor: COLORS.red
    },
    btnText: {
        color: COLORS.white,
        textAlign: "center",
        fontSize: FONT_SIZE.md,
        fontFamily: FONT_FAMILY.regular
    }
};