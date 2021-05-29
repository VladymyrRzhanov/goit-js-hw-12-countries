import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const callError = () => {
    const myError = error({
        title: 'Too many matches found. Please enter a more specific query!',
        sticker: false,
    });
}
export default callError