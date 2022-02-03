const {MongoClient} = require('mongodb');

let uri = process.env.MONGO_URI
appDB = "req_bin_app"

async function addReqDoc(newReqDoc, binName) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        // modifiable code start
        let result = await client.db(appDB).collection(binName).insertOne(newReqDoc);
        console.log(result);
        // end modifiable code
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

async function listAllBins() {
    const client = new MongoClient(uri);
    let result
    try {
        await client.connect();
        // modifiable code start
        result = await client.db(appDB).listCollections().toArray();
        // end modifiable code
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
        result = result.map(record => record.name)
        return result
    }
}

async function getAllReqDocs_FromOneBin(binName) {
    const client = new MongoClient(uri);
    let result
    try {
        await client.connect();
        // modifiable code start
        result = await client.db(appDB).collection(binName).find().toArray();
        //console.log(result)
        // end modifiable code
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
        return result
    }
}

async function findSingleReqDoc_FromOneBin(bin, searchParams) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        // modifiable code start
        let result = await client.db(appDB).collection(bin).findOne(searchParams);
        console.log(result);
        // end modifiable code
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

async function deleteAllReqDocs_FromOneBin(bin) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        // modifiable code start
        let result = await client.db(appDB).collection(bin).deleteMany();
        console.log(result);
        // end modifiable code
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

module.exports = {
    addReqDoc,
    listAllBins,
    getAllReqDocs_FromOneBin,
    findSingleReqDoc_FromOneBin,
    deleteAllReqDocs_FromOneBin
}