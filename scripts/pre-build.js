import { readdirSync, readFileSync, writeFileSync } from 'fs';

const rootArticleDir = './src/routes/article';

const articleRoutes = readdirSync(rootArticleDir).filter(fileOrDir => !fileOrDir.startsWith('+'));

const articles = articleRoutes.reduce((acc, articleRoute) => {
  const svxFile = readdirSync(`${rootArticleDir}/${articleRoute}`).filter(file => file.endsWith('.svx'))?.[0];

  const svxFileData = readFileSync(`${rootArticleDir}/${articleRoute}/${svxFile}`).toString();

  const inds = svxFileData.split('\n').reduce((acc2, value, index) => {
    if (value === '---') {
      acc2.push(index);
    }

    return acc2;
  }, []);

  const stringValues = svxFileData.split('\n').filter((v, i) => inds[0] < i && i < inds[1]).map(v => v.trim());

  const metaData = stringValues.reduce((acc2, stringValue) => {
    const [name, value] = stringValue.split(': ');

    if (name === 'topics') {
      Object.assign(acc2, {
        topics: value.split(',')
      });
    } else {
      Object.assign(acc2, {
        [name]: value
      })
    }

    return acc2;
  }, {});

  acc.push({
    ...metaData,
    pathname: articleRoute,
  });

  return acc;
}, []);

const data = {
  articles,
}

writeFileSync('./static/data.json', JSON.stringify(data))