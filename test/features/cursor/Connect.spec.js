import CursorModule from '../../../src/features/cursor';
import { Tester } from '../../Tester';


describe('modules/cursor - Cursor', () => {
    let diagram;
    let cursor;
    let canvas;

    beforeEach(() => {
        diagram = new Tester({ modules: [ CursorModule, ] });
        cursor = diagram.get('cursor');
        canvas = diagram.get('canvas');
    });

    it('should be defined', () => expect(cursor).toBeDefined());

    describe('Provider', () => {

        it('should set the cursor', () => {
            cursor.set('pointer');
            expect(document.body.style.cursor).toBe('pointer');
        });

        it('should unset the cursor', () => {
            cursor.set('pointer');
            cursor.unset();
            expect(document.body.style.cursor).toBe('default');
        });

    });

    describe('Behavior', () => {
        let eventBus;

        beforeEach(() => eventBus = diagram.get('eventBus'));

        it('should set the cursor', () => {
            eventBus.fire('cursor.set', { cursor: 'pointer' });
            expect(document.body.style.cursor).toBe('pointer');
        });

        it('should unset the cursor', () => {
            cursor.set('pointer');
            eventBus.fire('cursor.unset');
            expect(document.body.style.cursor).toBe('default');
        });

    });

});
