import React, { CSSProperties, FC, useMemo, useState } from "react";

import { useTouch } from "../hooks";
import modalClasses from "../styles.module.css";

interface ModalProps {
    index: number,
    show: boolean,
    close: boolean,
    onClose: () => void
}

const MIN_END_TOUCH = window.innerWidth * 0.7;

const MAX_TOUCH_LENGTH = 80;

export const Modal: FC<ModalProps> = (props) => {
    const { children, index, close, show, onClose } = props;
    const [handleClosing, setHandleClosing] = useState(false);
    const [animated, setAnimated] = useState(false);

    const {
        stateStartX,
        stateTranslateX,

        setStateStartX,
        setStateTranslateX,

        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    } = useTouch();

    const classes = show ? `${modalClasses['modal']} ${modalClasses['modal-show']}` : modalClasses['modal'];

    const modalStyle: CSSProperties = useMemo(() => {
        if (handleClosing || close) {
            return {
                zIndex: 1000 + index,
                transition: 'all .2s',
                transform: `translateX(${window.innerWidth}px)`
            }
        }

        return {
            zIndex: 1000 + index,
            transition: animated ? 'all .2s' : 'none',
            // stateTranslateX - stateStartX > 0 чтобы не тянуть в обратную сторону
            transform: stateStartX < MIN_END_TOUCH && stateTranslateX - stateStartX > 0 ? `translateX(${stateTranslateX}px)` : 'none'
        }
    }, [handleClosing, close, stateStartX, stateTranslateX, index])

    const onTouchEnd = () => {
        const touchMoveLength = stateTranslateX - stateStartX;

        if (stateStartX < MIN_END_TOUCH && touchMoveLength > MAX_TOUCH_LENGTH) {
            setHandleClosing(true);
            onClose();
        } else {
            setAnimated(true);

            const translateTimeout = setTimeout(() => {
                setStateStartX(0);
                setStateTranslateX(0);
                clearTimeout(translateTimeout);
            }, 10);

            const animatedTimeout = setTimeout(() => {
                setAnimated(false);
                clearTimeout(animatedTimeout);
            }, 200)
        }
    };

    return (
        <div
            onTouchStart={handleTouchStart()}
            onTouchMove={handleTouchMove()}
            onTouchEnd={handleTouchEnd(onTouchEnd)}
            className={classes}
            style={modalStyle}
        >
            {children}
        </div>
    )
}