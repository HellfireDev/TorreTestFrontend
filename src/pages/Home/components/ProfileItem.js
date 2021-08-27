import { types } from "../../../types/types";

export const ProfileItem = ({ name, type, setCanvasState }) => {

    const handleClick = () => {
        if (type === types.strengths) {
            setCanvasState(state => {
                return {
                    ...state,
                    c1: name
                }
            });
        } else if (type === types.interests) {
            setCanvasState(state => {
                return {
                    ...state,
                    c2: name
                }
            });
        } else if (type === types.experiences) {
            setCanvasState(state => {
                return {
                    ...state,
                    c3: name
                }
            });
        }
    }

    return (
        name
            ?
            (
                <>
                    <input
                        type='radio'
                        name={type}
                        value={name}
                        id={name}
                        onClick={handleClick}
                    />
                    <label htmlFor={name}>{name}</label>
                </>
            )
            :
            (
                <></>
            )

    );
}