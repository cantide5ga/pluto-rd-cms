import * as popsicle from 'popsicle';
import { Entry } from 'pluto-rd';
import * as config from 'config';
const fuzzy = require('fuzzy-filter');

const endpoint = `${config.get<string>('Client.pluto-rd.endpoint')}`
const postEntryRsrc = `${endpoint}/v1/entry`;
const getKeywordsRsrc = `${endpoint}/v1/keyword`;

export async function submitEntry(entry: Entry) {
    return await popsicle.request({
        method: 'POST',
        url: postEntryRsrc,
        body: entry,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }    
    })
    .use(popsicle.plugins.parse('json'));
}
  
let tags: string[];  //cached
export async function suggestTags(input: string): Promise<string[]> {
    if(!tags) {
        tags = await popsicle.get(getKeywordsRsrc).body();
    }
    
    return await fuzzy(input, tags);
}

