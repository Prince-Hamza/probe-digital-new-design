

export const onMobile = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile
}


export function isMobile() {
    if ('maxTouchPoints' in navigator) return navigator.maxTouchPoints > 0;

    const mQ = matchMedia?.('(pointer:coarse)');
    if (mQ?.media === '(pointer:coarse)') return !!mQ.matches;

    if ('orientation' in window) return true;

    return /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(navigator.userAgent) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent);
}
