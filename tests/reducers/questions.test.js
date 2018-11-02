import { deEntisize } from '../../src/reducers/questions';

describe('questions', () => {
  describe('deEntisizer should remove html entities from string', () => {
    const expectedOutput = "Who wrote James Bond novels & the childrens’ story ‘Chitty Chitty Bang Bang’?";
    const output = deEntisize("Who wrote James Bond novels &amp; the childrens&#039; story &quot;Chitty Chitty Bang Bang&quot;?");
    expect(output).toEqual(expectedOutput)
  })
})



