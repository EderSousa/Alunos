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
    list: {
        width: "100%"
    },
    form: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
        backgroundColor: COLORS.dark_gray,
        borderRadius: 4
    },
    add: {
        width: 20,
        height: 20,
        margin: 14
    }

}