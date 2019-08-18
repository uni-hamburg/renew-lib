import { Tool } from '../../../core/toolbox/Tool';


export class EditTool extends Tool {

    constructor (eventBus, toolbox, edit, directEditing) {
        super();
        this.eventBus = eventBus;
        this.toolbox = toolbox;
        this.edit = edit;
        this.directEditing = directEditing;

        this.label = { };
    }

    onDisable (event) {
    }

    onEnable (event) {
        this.label = event.label;
        this.eventBus.fire('edit.activate', { element: this.label });
    }

    onMouseDown (event) {
        if (this.edit.isActive()
            && event.hover
            && event.hover.id !== this.label.id) {
            this.eventBus.fire('edit.complete', { element: this.label });
        }
    }

    onMouseMove (event) {
    }

    onMouseUp (event) {
        this.edit.focus();
    }

}
