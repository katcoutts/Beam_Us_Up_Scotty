var DiaryEntry = require('../diary_entry');
var assert = require('assert');

describe('DiaryEntry', function() {
  var diaryEntry;

  beforeEach(function() {
    diaryEntry = new DiaryEntry({
      title: 'A busy day in space',
      text: 'Today I did a lot of space things and ate some space food.',
      date: '01.09.16'
    });
  });

  it('should have title', function () {
    assert.equal(diaryEntry.title, 'A busy day in space');
  });

  it('should have text', function(){
    assert.equal(diaryEntry.text, 'Today I did a lot of space things and ate some space food.')
  })

  it('should have a date', function(){
    assert.equal(diaryEntry.date, '01.09.16')
  })
});
