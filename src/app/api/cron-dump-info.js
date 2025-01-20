
export default async  function handler(req, res) {
    let result = await getChainInfoListService()
    dumpInfo(result)
    res.status(200).end(result);
  }

