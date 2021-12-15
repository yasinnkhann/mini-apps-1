const csvParser = (text, cb) => {
  console.log('TEXT: ', text);
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

  console.log(keys);
  console.log(values);
  const concatRes = keys.concat(values);

  for (let i = concatRes.length - 1; i >= 0; i -= 6) {
    console.log(concatRes[i]);
    concatRes[i] = concatRes[i] + '\n'
  }
  console.log(concatRes);
  let joinRes = concatRes.join(',');
  console.log(joinRes);

  // for (let i = 0; i < joinRes.length; i++) {
  //   if (joinRes[i] === ' ') {
  //     joinRes[i] = joinRes[i] + ',';
  //   }
  // }

  cb(null, joinRes);
};

module.exports = csvParser;