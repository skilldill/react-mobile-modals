import React, { CSSProperties, FC, useMemo, useState } from "react";

import { useTouch } from "../hooks";
import modalClasses from "../styles.module.css";
import { ModalDirectionTypes } from "./Modals.context";

interface ModalProps {
    index: number,
    show: boolean,
    close: boolean,
    direction?: ModalDirectionTypes,
    onClose: () => void
}

const MIN_END_TOUCH = 40;

const MAX_TOUCH_LENGTH = 80;

export const Modal: FC<ModalProps> = (props) => {
    const { children, index, close, show, onClose, direction } = props;
    const [handleClosing, setHandleClosing] = useState(false);
    const [animated, setAnimated] = useState(false);

    const {
        stateStartX,
        stateTranslateX,
        setStateStartX,
        setStateTranslateX,

        stateStartY,
        stateTranslateY,
        setStateStartY,
        setStateTranslateY,

        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    } = useTouch();

    const openDirectionClass = !!direction ? modalClasses[`modal-show-${direction}`] : modalClasses['modal-show-horizontal'];
    const classes = show ? `${modalClasses['modal']} ${openDirectionClass}` : modalClasses['modal'];

    const modalStyle: CSSProperties = useMemo(() => {
        if (handleClosing || close) {
            return {
                zIndex: 1000 + index,
                transition: 'all .2s',
                transform: direction === 'vertical' ? `translateY(${window.innerHeight}px)` : `translateX(${window.innerWidth}px)`
            }
        }
        
        // stateTranslateX - stateStartX > 0 чтобы не тянуть в обратную сторону
        const transformStyle = direction === 'vertical' ? 
            { transform: stateStartY < 100 && stateTranslateY - stateStartY > 0 ? `translateY(${stateTranslateY}px)` : 'none' } : 
            { transform: stateStartX < MIN_END_TOUCH && stateTranslateX - stateStartX > 0 ? `translateX(${stateTranslateX}px)` : 'none' };

        return {
            zIndex: 1000 + index,
            transition: animated ? 'all .2s' : 'none',
            ...transformStyle
        }
    }, [direction, handleClosing, close, stateStartX, stateTranslateX, index])

    const handleTouchEndVertical = () => {
        const touchMoveLength = stateTranslateY - stateStartY;

        if (stateStartY < MIN_END_TOUCH && touchMoveLength > MAX_TOUCH_LENGTH) {
            setHandleClosing(true);
            onClose();
        } else {
            setAnimated(true);

            const translateTimeout = setTimeout(() => {
                setStateStartY(0);
                setStateTranslateY(0);
                clearTimeout(translateTimeout);
            }, 10);

            const animatedTimeout = setTimeout(() => {
                setAnimated(false);
                clearTimeout(animatedTimeout);
            }, 200)
        }
    }

    const handleTouchEndHorizontal = () => {
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
    }

    const onTouchEnd = direction === 'vertical' ? handleTouchEndVertical : handleTouchEndHorizontal;

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