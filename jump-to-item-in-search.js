function sortMessages(documents) {
  return documents.sort(function(a, b) {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
}

function jumpToMessage(messageId, documents) {
  let elementPos = documents.map(function(x) {
    return x._id;
  }).indexOf(messageId); // get index of message
  return documents.slice(elementPos - 49, elementPos + 50);
}
