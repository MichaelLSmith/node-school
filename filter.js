// [ { message: 'Velit veniam ut ad consectetur amet exercitation anim cupidatat ex.' },
//   { message: 'Mollit tempor excepteur esse laborum reprehenderit enim ex sint.' },
// ]


function getShortMessages(messages) {
  return messages.filter(function(item){
    return item.message.length < 50 })
      .map(function(item) {
        return item.message;
    });
}

module.exports = getShortMessages;
