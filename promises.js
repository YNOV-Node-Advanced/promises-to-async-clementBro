/*function superCompress(input) {
  return readFromCache(input)
    .then(
      result => cleanCacheMetadata(result),
      error => {
        if (error.code != 'NoCache') {
           return Promise.reject(error);
        }
        
        return readFromFile(input)
        .then(result => {
          return storeInCache(input, result)
            .then(() => result);
        });
      }
    )
    .then(content => compress(content));
}

-------------------------------------------------------------------------*/

async function readFromCache(input)=>{
    return new Promise((resolve) => {
        readFromCache((input)=> {
            resolve();
        });
    });
}


async function cleanCacheMetadata(something)=>{
    return new Promise((resolve) => {
        cleanCacheMetadata((something)=> {
            resolve();
        });
    });
}

async function readFromFile(input)=>{
    return new Promise((resolve) => {
        readFromFile((input)=> {
            resolve();
        });
    });
}

async function storeInCache(input, result)=>{
    return new Promise((resolve) => {
        storeInCache((input, result)=> {
            resolve();
        });
    });
}


async function superCompress(input){
    let content;
    try{
        const result = await readFromCache(input);
        content = await cleanCacheMetadata(result);
    }
    catch (error)
    {
        if (error.code != 'NoCache') {
            throw error;
        }

        const result = await readFromFile(input);
        content = await storeInCache(input, result);
    }

    await compress(content);

}