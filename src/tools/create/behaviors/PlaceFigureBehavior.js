import { Behavior } from '../../../core/eventBus/Behavior';


export class PlaceFigureBehavior extends Behavior {
    constructor (eventBus, toolbox, commandStack, create) {
        super();
        this.eventBus = eventBus;
        this.toolbox = toolbox;
        this.commandStack = commandStack;
        this.create = create;

        this.context = null;
        this.shape = null;
    }

    before (context) {
        this.context = {
            shape: this.create.factory(),
            position: {
                x: context.x,
                y: context.y,
            },
            parent: context.hover,
            event: context.originalEvent,
        };
    }

    during (context) {
        this.shape = this.commandStack.execute('shape.create', this.context);
    }

    after (context) {
        this.create.clearPreview();
        if (!context.originalEvent.shiftKey) {
            this.toolbox.activatePrevious();
        }
    }
}
