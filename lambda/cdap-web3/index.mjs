import { dealWithOrderFinish } from './asset.mjs'

export const handler = async (event) => {
  // SNS 事件
  const snsMsgStr = event.Records?.[0]?.Sns?.Message
  if (snsMsgStr) {
    await snsEvent(snsMsgStr)
    return
  }

  console.error('Unknown event')
}

async function snsEvent(snsMsgStr) {
  const snsMsg = JSON.parse(snsMsgStr)
  switch (snsMsg.type) {
    case 'CAVE:CDAP:ORDER:FINISH': {
      await dealWithOrderFinish(snsMsg)
      break
    }
    default: {
      console.error('Unknown SNS message type')
    }
  }
}
