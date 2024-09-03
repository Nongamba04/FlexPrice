export const fadeIn =(direction,delay) => {
    return {
        hidden :{
            opacity:0,
            y : direction === 'up' ? 29 : direction === 'down' ? -29 : 0,
            x : direction === 'left' ? 20 : direction === 'right' ? -20 : 0,

        },
        show : {
            y: 0,
            x: 0,
            opacity : 1,
            transition : {
                type: 'tween',
                duration: 1.75,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75],
            }
        }
    }
}