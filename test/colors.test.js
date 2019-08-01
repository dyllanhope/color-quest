describe('color quest test', () => {
    it('Testing the list builds correctly', () => {
        let instance = ColourQuestManager();

        instance.add('Red','5');
        instance.add('Red','5');
        instance.add('Red','6');
        instance.add('Red','6');


        assert.deepEqual(instance.list(), [{colour: 'Red', number: '5'},{colour: 'Red', number: '6'}]);
    });
});