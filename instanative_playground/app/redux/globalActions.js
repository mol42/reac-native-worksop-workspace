export const UPDATE_VALUE_ACTION = "UPDATE_VALUE_ACTION";

/**
 * {
 *   type : "ACTION_TYPE",
 *   payload : {
 *      username,
 *      password
 *   }
 * }
 */

export const updateValue = () => {
    return {
        type : UPDATE_VALUE_ACTION
    }
}