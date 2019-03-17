import { HandProvider } from './providers/HandProvider';
import { HandTool } from './tools/HandTool';


export default {
    __depends__: [
    ],
    __tools__: [
        [ 'hand', HandTool ],
    ],
    __init__: [
        'hand',
    ],
    hand: [ 'type', HandProvider ],
};
