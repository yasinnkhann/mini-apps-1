const csvParser = (text, cb) => {
  const parsedJSON = JSON.parse(text.slice(0, -1));
  console.log('PARSED: ', parsedJSON);

  const keys = [];
  const values = [];

  const helperFunc = info => {
    for (let key in info) {
      if (!keys.includes(key) && key !== 'children') {
        keys.push(key);
      }
    }

    for (let key in info) {
      if (!Array.isArray(info[key])) {
        values.push(info[key]);
      }
    }

    if (info.children.length > 0) {
      for (let i = 0; i < info.children.length; i++) {
        helperFunc(info.children[i]);
      }
    } else {
      return;
    }
  };
  helperFunc(parsedJSON);

  const concatRes = keys.concat(values);

  for (let i = concatRes.length - 1; i >= 0; i -= 6) {
    concatRes[i] = concatRes[i] + '\n'
  }

  let joinRes = concatRes.join(',');

  const joinResArr = joinRes.split('\n,');
  const finalAns = joinResArr.join('\n');

  cb(null, finalAns);
};

module.exports = csvParser;